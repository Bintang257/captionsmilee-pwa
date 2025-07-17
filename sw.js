self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('caption-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/?m=1',
        '/favicon.ico'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
