
const CACHE_NAME = "notre-bulle-v1";

const FICHIERS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(FICHIERS);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (noms) {
            return Promise.all(
                noms
                    .filter(function (nom) {
                        return nom !== CACHE_NAME;
                    })
                    .map(function (nom) {
                        return caches.delete(nom);
                    })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function (reponseEnCache) {
            return reponseEnCache || fetch(event.request);
        })
    );
});
