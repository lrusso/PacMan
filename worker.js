const filesToCache = [
	"PacMan.htm",
	"PacMan.json",
	"PacMan.png",
	"PacManFavIcon_16x16.png",
	"PacManFavIcon_192x192.png",
	"PacManFavIcon_512x512.png",
	"PacManGame.htm",
	"PacManGame.js",
	"PacManShare.png"
];

const staticCacheName = "pacman-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});