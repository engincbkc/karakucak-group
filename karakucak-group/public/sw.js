// This is the service worker script for Karakucak Group website
// It provides offline functionality and performance improvements

const CACHE_NAME = 'karakucak-cache-v1';

// Assets to pre-cache for immediate availability
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/images/logo/logo.png',
  '/images/bg/hero-bg.jpg',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) || 
      event.request.method !== 'GET') {
    return;
  }
  
  // Images strategy - cache first, network fallback with cache update
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchAndCache = fetch(event.request).then((networkResponse) => {
          // Cache the new version in the background
          if (networkResponse.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse.clone();
        }).catch(() => {
          // If network fails and we have no cache, return a fallback
          return new Response(
            'Network error occurred',
            { status: 408, headers: { 'Content-Type': 'text/plain' } }
          );
        });
        
        // Return cached version first if available, otherwise fetch
        return cachedResponse || fetchAndCache;
      })
    );
    return;
  }
  
  // For HTML pages - network first with cache fallback
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the latest version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('/offline.html');
          });
        })
    );
    return;
  }
  
  // For all other assets - stale while revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update the cache in the background
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            // No need to handle this as we fall back to cached version
          });
          
        // Return the cached version immediately if available
        return cachedResponse || fetchPromise;
      });
    })
  );
});
