(() => {
  const viewport = document.getElementById('viewport');
  const canvas = document.getElementById('canvas');
  const dialog = document.getElementById('infoDialog');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogText = document.getElementById('dialogText');
  const closeDialog = document.getElementById('closeDialog');
  const hubListModal = document.getElementById('hubListModal');
  const hubListClose = document.getElementById('hubListClose');

  const base = { w: 932, h: 1688 };
  const state = { scale: 1, minScale: 0.35, maxScale: 3.2, x: 0, y: 0 };
  const pointers = new Map();
  let pinchStart = null;
  let fitScale = 1;

  const explore = {
    '사사시대 개막': {
      link: '정복은 끝났지만 신앙 계승은 흔들립니다. 여호수아 사후 세대는 여호와를 알지 못했고, 미정복 가나안 문화가 이스라엘을 흔듭니다.',
      integrated: '세겜 언약 → 여호수아 사망 → 신앙 계승 실패 → 사사시대의 반복 순환으로 이어집니다.'
    },
    '드보라의 승리': {
      link: '가나안 왕 야빈의 압제 속에서 드보라와 바락이 세워지고, 하나님은 기손강 전투를 통해 이스라엘을 구원하십니다.',
      integrated: '여성 사사·선지자 드보라는 사사시대에도 하나님이 말씀과 순종을 통해 구원을 이루심을 보여줍니다.'
    },
    '기드온의 300용사': {
      link: '미디안 압제 속에서 하나님은 약한 기드온을 부르시고, 300명만 남겨 승리의 주체가 하나님이심을 드러내십니다.',
      integrated: '나팔·항아리·횃불은 인간의 힘보다 하나님의 전략과 믿음의 순종이 우선임을 보여줍니다.'
    },
    '삼손의 최후': {
      link: '나실인으로 구별된 삼손은 블레셋과 싸우지만 욕망과 약점에 무너집니다. 그러나 마지막 순간에도 하나님은 구원의 일을 이루십니다.',
      integrated: '삼손은 강한 개인 영웅의 한계를 보여주며, 참된 왕과 완전한 구원자를 기다리게 합니다.'
    },
    '왕이 없던 시대': {
      link: '미가의 우상, 단 지파 이동, 레위인 첩 사건은 예배·공동체·도덕 질서가 무너진 시대상을 보여줍니다.',
      integrated: '“왕이 없으므로”라는 결론은 사무엘과 통일왕국, 더 나아가 참 왕이신 그리스도를 향해 흐릅니다.'
    }
  };

  function clampPan() {
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const sw = base.w * state.scale;
    const sh = base.h * state.scale;
    const xMargin = 80;
    if (sw <= vw) state.x = (vw - sw) / 2;
    else state.x = Math.min(xMargin, Math.max(vw - sw - xMargin, state.x));
    if (sh <= vh) state.y = 0;
    else state.y = Math.min(0, Math.max(vh - sh + 12, state.y));
  }
  function apply() { clampPan(); canvas.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`; }
  function fitView() {
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    state.minScale = Math.min(vw / base.w, vh / base.h) * 0.88;
    fitScale = Math.max(vw / base.w, state.minScale);
    state.scale = fitScale;
    state.x = (vw - base.w * state.scale) / 2;
    state.y = 0;
    apply();
  }
  function midpoint(a,b){ return {x:(a.clientX+b.clientX)/2,y:(a.clientY+b.clientY)/2}; }
  function distance(a,b){ return Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY); }
  function beginPinch(){
    const [a,b]=[...pointers.values()]; const rect=viewport.getBoundingClientRect(); const mid=midpoint(a,b);
    const px=mid.x-rect.left, py=mid.y-rect.top;
    pinchStart={dist:distance(a,b),scale:state.scale,contentX:(px-state.x)/state.scale,contentY:(py-state.y)/state.scale};
  }
  viewport.addEventListener('pointerdown', e=>{
    if(e.target.closest('button, a')) return;
    e.preventDefault(); viewport.setPointerCapture(e.pointerId); pointers.set(e.pointerId,e); viewport.classList.add('dragging');
    if(pointers.size===2) beginPinch();
  });
  viewport.addEventListener('pointermove', e=>{
    if(!pointers.has(e.pointerId)) return; e.preventDefault(); const prev=pointers.get(e.pointerId); pointers.set(e.pointerId,e);
    if(pointers.size===1 && !pinchStart){ state.x += e.clientX-prev.clientX; state.y += e.clientY-prev.clientY; apply(); return; }
    if(pointers.size===2 && pinchStart){
      const [a,b]=[...pointers.values()]; const rect=viewport.getBoundingClientRect(); const mid=midpoint(a,b); const px=mid.x-rect.left, py=mid.y-rect.top; const ratio=distance(a,b)/pinchStart.dist;
      state.scale=Math.min(state.maxScale,Math.max(state.minScale,pinchStart.scale*ratio));
      state.x=px-pinchStart.contentX*state.scale; state.y=py-pinchStart.contentY*state.scale; apply();
    }
  });
  function endPointer(e){ pointers.delete(e.pointerId); if(pointers.size===2) beginPinch(); else pinchStart=null; if(pointers.size===0) viewport.classList.remove('dragging'); }
  viewport.addEventListener('pointerup', endPointer); viewport.addEventListener('pointercancel', endPointer);

  document.querySelectorAll('.button-set button').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const group=btn.closest('.button-set');
      const eventName=group.dataset.event;
      const kind=btn.dataset.kind;
      const hubMap={
        '사사시대 개막':'opening',
        '드보라의 승리':'deborah',
        '기드온의 300용사':'gideon',
        '삼손의 최후':'samson',
        '왕이 없던 시대':'no-king'
      };
      const hub=hubMap[eventName];
      const hash = kind==='link' ? '#connections' : '#integration';
      if(hub){
        location.href='hubs/index.html?hub='+hub+hash;
        return;
      }
    });
  });

  document.querySelectorAll('.footer button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key=btn.dataset.footer;
      if(key==='hub'){ hubListModal?.classList.add('show'); hubListModal?.setAttribute('aria-hidden','false'); return; }
      if(key==='all'){ fitView(); return; }
      if(key==='prev'){ dialogTitle.textContent='정복시대 Matrix'; dialogText.textContent='정복시대 Matrix 주소가 확정되면 이 버튼에 연결하면 됩니다.'; dialog.showModal(); return; }
      if(key==='next'){ dialogTitle.textContent='통일왕국 Matrix'; dialogText.textContent='통일왕국 Matrix 주소가 확정되면 이 버튼에 연결하면 됩니다.'; dialog.showModal(); return; }
      dialogTitle.textContent='홈'; dialogText.textContent='CEN Bible 메인 주소가 확정되면 이 버튼에 연결하면 됩니다.'; dialog.showModal();
    });
  });
  closeDialog.addEventListener('click', ()=>dialog.close());

  hubListClose?.addEventListener('click', ()=>{
    hubListModal.classList.remove('show');
    hubListModal.setAttribute('aria-hidden','true');
  });
  hubListModal?.addEventListener('click', (e)=>{
    if(e.target === hubListModal){
      hubListModal.classList.remove('show');
      hubListModal.setAttribute('aria-hidden','true');
    }
  });

  window.addEventListener('resize', fitView); window.addEventListener('load', fitView);
  if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{})); }
})();
