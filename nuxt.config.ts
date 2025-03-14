import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
	vite: {
		plugins: [tailwindcss()],
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
