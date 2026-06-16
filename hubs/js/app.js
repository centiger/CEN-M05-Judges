const HUBS = [
  {
    id:'opening', icon:'📜', title:'사사시대 개막 허브', subtitle:'여호수아 사후, 신앙 계승이 흔들리다',
    theme:'여호수아와 그 세대가 사라진 뒤 이스라엘은 여호와를 알지 못하는 세대로 이어지고, 미완성 정복과 가나안 문화 속에서 사사시대의 위기가 시작된다.',
    map:'assets/opening-map.png',
    mapText:'여호수아 사후 이스라엘은 각 지파별로 기업에 정착했지만, 가나안 족속을 완전히 몰아내지 못했다. 이 미완성 정착은 우상숭배와 혼합신앙의 통로가 되었고 사사시대의 반복적 위기를 낳았다.',
    verse:'“그 후에 일어난 다른 세대는 여호와를 알지 못하며 여호와께서 이스라엘을 위하여 행하신 일도 알지 못하였더라.”<br><strong>사사기 2:10</strong>',
    events:['여호수아 사망','장로 세대 소멸','각 지파의 부분 정착','가나안 잔존민족과 혼합','바알과 아스다롯 숭배 시작'],
    meaning:['정복 이후에도 신앙 계승은 자동으로 이루어지지 않음','미완성 순종은 다음 세대의 영적 위기로 이어짐','사사시대 전체를 여는 배경 사건'],
    connections:['세겜 언약 → 여호수아 사망 → 사사시대 개막','신명기 언약의 축복과 저주','우상숭배의 흐름: 가나안 문화 → 바알 숭배 → 왕국 시대의 타락'],
    integrated:['정복시대의 완성 이후에도 언약 순종이 필요함','땅의 소유보다 신앙 계승이 더 중요함','사사시대 순환 구조의 출발점'],
    refs:['사사기 1장','사사기 2장','여호수아 24장','신명기 6장'],
    message:'사사시대 개막은 단순한 시대 전환이 아니라 신앙 계승 실패의 시작이다. 하나님이 주신 땅에 들어갔지만, 하나님을 기억하지 못한 세대는 곧 우상숭배와 혼란으로 기울어졌다.',
    prev:null,next:'deborah'
  },
  {
    id:'deborah', icon:'⚔️', title:'드보라의 승리 허브', subtitle:'하나님이 드보라와 바락을 통해 구원하시다',
    theme:'가나안 왕 야빈의 압제 속에서 하나님은 드보라와 바락을 세우시고, 기손강 전투를 통해 이스라엘을 구원하신다.',
    map:'assets/deborah-map.png',
    mapText:'드보라는 에브라임 산지에서 이스라엘을 재판했고, 바락은 다볼산에 군사를 모았다. 야빈의 군대장관 시스라는 철병거를 앞세웠지만, 하나님은 기손강 전투에서 이스라엘에게 승리를 주셨다.',
    verse:'“여호와 앞에서 앞서 행하라. 여호와께서 시스라를 네 손에 넘겨 주셨느니라.”<br><strong>사사기 4:14</strong>',
    events:['야빈과 시스라의 압제','드보라가 바락을 부름','다볼산 전투 준비','기손강 전투 승리','야엘이 시스라를 죽임','이스라엘에 평안이 임함'],
    meaning:['하나님은 약한 시대에도 말씀의 지도자를 세우심','승리는 철병거가 아니라 하나님의 싸우심에 달려 있음','드보라의 노래는 구원의 기억을 공동체 신앙으로 남김'],
    connections:['여성 지도자의 흐름: 드보라 → 야엘 → 하나님의 도구로 쓰임','하나님의 전쟁: 홍해 → 여리고 → 기손강','찬양의 흐름: 모세의 노래 → 드보라의 노래'],
    integrated:['사사시대 순환: 압제 → 부르짖음 → 구원 → 평안','정복시대의 전쟁 신앙이 사사시대에도 이어짐','하나님은 남녀와 신분을 넘어 구원의 도구를 세우심'],
    refs:['사사기 4장','사사기 5장','출애굽기 15장'],
    message:'드보라의 승리는 사사시대가 어둡기만 한 시대가 아님을 보여준다. 하나님은 혼란 속에서도 말씀을 전하는 지도자와 순종하는 사람들을 통해 자기 백성을 구원하셨다.',
    prev:'opening',next:'gideon'
  },
  {
    id:'gideon', icon:'📯', title:'기드온의 300용사 허브', subtitle:'적은 수로 미디안을 무너뜨리다',
    theme:'미디안의 압제 속에서 하나님은 두려워하던 기드온을 부르시고, 300명만 남겨 이스라엘의 승리가 하나님께 있음을 드러내신다.',
    map:'assets/gideon-map.png',
    mapText:'기드온은 오브라에서 부름을 받고 바알 제단을 무너뜨렸다. 이후 이스르엘 평야와 미디안 진영을 배경으로 300명의 용사가 나팔과 항아리와 횃불을 들고 하나님의 승리를 경험했다.',
    verse:'“너를 따르는 백성이 너무 많은즉 내가 그들의 손에 미디안 사람을 넘겨 주지 아니하리니.”<br><strong>사사기 7:2</strong>',
    events:['미디안의 압제','기드온의 부르심','바알 제단 파괴','양털 표징','300용사 선발','나팔·항아리·횃불로 승리'],
    meaning:['하나님은 약한 사람을 불러 강하게 쓰심','수가 적어질수록 승리의 주체가 하나님임이 분명해짐','기드온의 승리 이후 에봇 사건은 영적 경계를 보여줌'],
    connections:['남은 자의 흐름: 적은 수 → 하나님의 능력','횃불과 나팔: 여리고 나팔 → 기드온 나팔 → 마지막 나팔','우상 파괴: 바알 제단 → 참 예배 회복'],
    integrated:['사사시대 구원은 인간 영웅담이 아니라 하나님의 주권 사건임','믿음의 승리 뒤에도 우상화 위험이 남아 있음','왕권 욕망의 씨앗이 기드온 이후 드러남'],
    refs:['사사기 6장','사사기 7장','사사기 8장','히브리서 11장'],
    message:'기드온의 300용사는 “많아야 이긴다”는 인간 계산을 깨뜨린다. 하나님은 의도적으로 수를 줄이셔서 이스라엘의 구원이 오직 여호와께 있음을 보이셨다.',
    prev:'deborah',next:'samson'
  },
  {
    id:'samson', icon:'🦁', title:'삼손의 최후 허브', subtitle:'강한 영웅, 그러나 불완전한 구원자',
    theme:'나실인으로 구별된 삼손은 블레셋에 맞서 싸우지만 욕망과 약점으로 무너진다. 그러나 하나님은 그의 마지막 순간까지 사용하셔서 블레셋을 치신다.',
    map:'assets/samson-map.png',
    mapText:'삼손의 이야기는 소라와 딤나, 가사와 소렉 골짜기를 중심으로 전개된다. 그는 블레셋과 싸웠지만 들릴라 사건으로 눈을 잃고, 마지막에는 다곤 신전에서 블레셋과 함께 무너졌다.',
    verse:'“주 여호와여 구하옵나니 나를 생각하옵소서.”<br><strong>사사기 16:28</strong>',
    events:['삼손의 출생 예고','나실인으로 구별됨','블레셋과의 충돌','들릴라의 배신','삼손의 실명과 포로 생활','다곤 신전 붕괴'],
    meaning:['하나님이 주신 은사는 거룩 없이 온전히 쓰일 수 없음','삼손은 강했지만 자기 욕망에는 약했음','불완전한 사사는 완전한 구원자를 기다리게 함'],
    connections:['나실인의 흐름: 구별됨 → 실패 → 하나님의 긍휼','블레셋의 흐름: 사사시대 → 사울·다윗 시대의 주요 대적','강한 자의 역설: 힘의 승리보다 순종의 승리'],
    integrated:['사사들의 한계가 가장 극적으로 드러남','하나님은 실패한 사람의 마지막 기도도 사용하심','통일왕국의 필요성을 강하게 예고함'],
    refs:['사사기 13장','사사기 14장','사사기 15장','사사기 16장','민수기 6장'],
    message:'삼손은 매력적인 영웅이지만 이상적인 지도자는 아니다. 그의 이야기는 힘만으로는 하나님의 백성을 살릴 수 없으며, 참된 순종과 거룩이 필요하다는 사실을 보여준다.',
    prev:'gideon',next:'no-king'
  },
  {
    id:'no-king', icon:'👑', title:'왕이 없던 시대 허브', subtitle:'각기 자기 소견에 옳은 대로 행하다',
    theme:'사사기 결론부는 우상숭배, 지파 이기주의, 도덕적 붕괴를 통해 왕이 없던 시대의 혼란을 보여주며 다음 시대의 왕권을 준비하게 한다.',
    map:'assets/no-king-map.png',
    mapText:'미가의 우상 사건은 에브라임 산지에서 시작되어 단 지파의 북쪽 이주와 연결된다. 레위인 첩 사건은 기브아와 미스바, 베냐민 전쟁으로 이어지며 이스라엘 공동체의 붕괴를 드러낸다.',
    verse:'“그 때에 이스라엘에 왕이 없으므로 사람이 각기 자기의 소견에 옳은 대로 행하였더라.”<br><strong>사사기 21:25</strong>',
    events:['미가의 우상','단 지파의 이주','레위인 첩 사건','기브아의 범죄','베냐민 전쟁','왕이 없던 시대의 결론'],
    meaning:['예배 질서가 무너지면 공동체 질서도 무너짐','왕의 부재는 단순한 정치 공백이 아니라 영적 기준의 붕괴를 뜻함','사무엘과 통일왕국으로 넘어가는 신학적 다리'],
    connections:['왕권의 흐름: 사사기 혼란 → 사무엘 → 사울 → 다윗','예배의 흐름: 미가의 사설 제사장 → 참 성전의 필요','공동체 붕괴와 회복: 지파 갈등 → 왕국 통합'],
    integrated:['미가의 우상 → 단 지파 이주 → 레위인 첩 사건 → 베냐민 전쟁','왕이 없던 시대 → 사무엘 등장 → 사울 → 다윗','참 왕에 대한 갈망이 통일왕국으로 이어진다'],
    refs:['사사기 17장','사사기 18장','사사기 19장','사사기 20장','사사기 21장','사무엘상 8장'],
    message:'사사기의 마지막은 충격적이다. 미가의 우상, 단 지파 이주, 레위인 첩 사건, 베냐민 전쟁은 공동체 붕괴를 보여준다. 이 혼란은 사무엘의 등장과 사울·다윗 왕국으로 이어지며 참된 왕의 필요성을 드러낸다.',
    prev:'samson',next:null,nextEra:{label:'통일왕국 Matrix', url:'https://centiger.github.io/CEN-M06-United/', desc:'왕이 없던 시대의 혼란은 사무엘의 등장과 사울·다윗 왕국으로 이어집니다.'}
  }
];
const byId = Object.fromEntries(HUBS.map(h=>[h.id,h]));
const params = new URLSearchParams(location.search);
let current = params.get('hub') || 'opening';
if(!byId[current]) current='opening';
function fillList(id, items){
  const el=document.getElementById(id); el.innerHTML='';
  (items||['다음 단계에서 세부 내용을 연결합니다.']).forEach(t=>{const li=document.createElement('li');li.textContent=t;el.appendChild(li);});
}
function render(id){
  const h=byId[id]||byId.opening; current=h.id;
  document.title = h.title + ' | 사사시대';
  document.getElementById('hubIcon').textContent=h.icon||'▣';
  document.getElementById('title').textContent=h.title;
  document.getElementById('subtitle').textContent=h.subtitle||'';
  document.getElementById('theme').textContent=h.theme||'';
  const map=document.getElementById('map');
  map.src=h.map||'assets/opening-map.png';
  document.getElementById('mapText').textContent=h.mapText||'지도와 설명은 다음 단계에서 보완합니다.';
  document.getElementById('verse').innerHTML=h.verse||'대표성구는 다음 단계에서 입력합니다.';
  fillList('events',h.events); fillList('meaning',h.meaning); fillList('connections',h.connections); fillList('integrated',h.integrated); fillList('refs',h.refs);
  document.getElementById('message').textContent=h.message||'이 허브는 다음 단계에서 제작합니다.';
  const prev=document.getElementById('prevBtn'), next=document.getElementById('nextBtn'), matrix=document.getElementById('matrixBtn');
  prev.textContent=h.prev?'이전':'Matrix'; prev.onclick=()=> h.prev ? go(h.prev) : location.href='../index.html';
  if(matrix){ matrix.textContent='Matrix'; matrix.onclick=()=>{ location.href='../index.html'; }; }
  next.classList.remove('next-era');
  if(h.next){ const target=byId[h.next]; next.textContent=target ? target.title : '다음'; next.onclick=()=>go(h.next); }
  else if(h.nextEra){
    next.textContent=h.nextEra.label||'다음 시대'; next.classList.add('next-era');
    next.onclick=()=>{ if(h.nextEra.url && h.nextEra.url !== '#') location.href=h.nextEra.url; };
  }else{ next.textContent='Matrix'; next.onclick=()=>{ location.href='../index.html'; }; }
  const eraCard=document.getElementById('nextEraCard');
  if(eraCard){
    if(h.nextEra){
      eraCard.style.display='flex';
      document.getElementById('nextEraTitle').textContent='사사시대 완료 → 다음 시대';
      document.getElementById('nextEraDesc').textContent=h.nextEra.desc||'';
      const eraBtn=document.getElementById('nextEraBtn');
      eraBtn.textContent=h.nextEra.label||'다음 시대';
      eraBtn.onclick=()=>{ if(h.nextEra.url && h.nextEra.url !== '#') location.href=h.nextEra.url; };
    }else eraCard.style.display='none';
  }
  history.replaceState(null,'',`?hub=${h.id}`);
}
function go(id){ render(id); window.scrollTo({top:0,behavior:'smooth'}); closeList(); }
function openList(){
  const box=document.getElementById('hubList'); box.innerHTML='';
  HUBS.forEach(h=>{const b=document.createElement('button');b.className='hubItem';b.innerHTML=`<span class="hubItemIcon">${h.icon}</span><span class="hubItemText">${h.title}<small>${h.subtitle||''}</small></span>`;b.onclick=()=>go(h.id);box.appendChild(b);});
  document.getElementById('listModal').classList.add('show');
}
function closeList(){document.getElementById('listModal').classList.remove('show');}
window.openList=openList; window.closeList=closeList;
render(current);
