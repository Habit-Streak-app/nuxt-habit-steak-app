<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import './tailwind.css'
onMounted(() => {
	navigator.serviceWorker
		.register('/service-worker.js')
		.then((registration) => {
			// console.log('Service Worker registered with scope:', registration.scope);
		})
		.catch((error) => {
			console.error('Service Worker registration failed:', error);
		});
	useHead({
		title: 'Habit-Streak.app',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'theme-color', content: '#1F6FED' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'description',
				content:
					'Habit-Streak.app - By Jonathan Martz | Aus der Idee von Kevin Chromik wird eine Web App oder auch PWA gemacht.',
			},
		],
		link: [{ rel: 'manifest', href: '/manifest.webmanifest' }],
	});
});
</script>