// Service worker de Dalil: guarda la app para usarla sin conexión.
// Cambia CACHE al publicar una versión nueva para que los móviles la descarguen.
const CACHE = "dalil-v1";
const FILES = [
  "./",
  "index.html",
  "practicar.html",
  "privacidad.html",
  "assets/app.css",
  "assets/app.js",
  "assets/icon.svg",
  "data/preguntas-ejemplo.js",
  "manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Primero la red (para recibir cambios) y, sin conexión, la copia guardada.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
