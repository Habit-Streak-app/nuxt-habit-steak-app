import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  css: ["~/tailwind.css"],
  compatibilityDate: "2025-03-11",
});