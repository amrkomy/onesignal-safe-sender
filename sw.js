// أساسي: caching + offline fallback
const CACHE = "oss-v1";
const FILES = ["/", "/index.html", "/app.js"];

self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)))
);
self.addEventListener("fetch", (e) =>
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  )
);
