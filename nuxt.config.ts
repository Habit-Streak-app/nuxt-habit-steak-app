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
	css: ['~/tailwind.css'],
	compatibilityDate: '2025-03-11',
});
