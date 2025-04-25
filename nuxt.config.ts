import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineNuxtConfig({
	vite: {
		plugins: [tailwindcss(), VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
		}),],
	},

	vue: {
		config: {
			productionTip: false,
			devtools: true,
		},
	},

	i18n: {
		locales: [
			{ code: 'en', file: 'en.json' },
			{ code: 'de', file: 'de.json' },
			{ code: 'fr', file: 'fr.json' }
		],
		lazy: true,
		langDir: 'lang/',
		defaultLocale: 'de'
	},
	compatibilityDate: '2025-03-11',
	plausible: {
		domain: 'habit-streak.app',
		apiHost: 'https://tracking.jmse.cloud',
		ignoredHostnames: ['localhost'],
	},	modules: ['@nuxtjs/i18n', '@nuxtjs/plausible'],
});