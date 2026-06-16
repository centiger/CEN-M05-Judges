const CACHE = 'cen-judges-matrix-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './assets/judges-bg.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './hubs/index.html',
  './hubs/style.css',
  './hubs/js/app.js',
  './hubs/assets/opening-map.png',
  './hubs/assets/deborah-map.png',
  './hubs/assets/gideon-map.png',
  './hubs/assets/samson-map.png',
  './hubs/assets/no-king-map.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

/* 20260616-next-era-links */
