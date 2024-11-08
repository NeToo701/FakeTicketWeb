self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('fake-ticket-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/page2.html',
          '/images/menu.png',
          '/images/Ticket_logo_192x192.png',
          '/images/Ticket_logo_512x512.png',
          '/styles.css',
          '/app.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  