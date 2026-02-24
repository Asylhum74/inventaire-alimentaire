// service-worker.js

// Nom du service worker (utile pour forcer une mise à jour)
const SW_VERSION = "v1";

// Installation
self.addEventListener("install", event => {
  console.log("[Service Worker] Installé", SW_VERSION);
  self.skipWaiting(); // active le service worker immédiatement
});

// Activation
self.addEventListener("activate", event => {
  console.log("[Service Worker] Activé", SW_VERSION);
  self.clients.claim(); // prend le contrôle des pages immédiatement
});

// Interception des requêtes
// Ici on ne sert jamais depuis le cache : toujours fetch normal
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
