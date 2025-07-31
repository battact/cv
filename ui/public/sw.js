// No-cache service worker - passes all requests through to network
self.addEventListener('install', (event) => {
    // Skip waiting to activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Clear all existing caches
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
            })
            .then(() => {
                // Take control of all clients immediately
                return self.clients.claim();
            }),
    );
});

self.addEventListener('fetch', (event) => {
    // Always fetch from network, no caching
    event.respondWith(fetch(event.request));
});
