self.addEventListener('install', (event) => {
	console.log('Service Worker: Install event', event);
});

self.addEventListener('activate', (event) => {
	// console.log('Service Worker: Activate event', event);
});

self.addEventListener('fetch', (event) => {
	// console.log('Service Worker: Fetch event', event.request);
	event.respondWith(fetch(event.request));
});
