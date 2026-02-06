/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [{
			portfolio: {
				"primary": "#14b8a6",
				"secondary": "#8b5cf6",
				"accent": "#06b6d4",
				"neutral": "#1e293b",
				"base-100": "#0f172a",
				"base-200": "#1e293b",
				"base-300": "#334155",
				"base-content": "#e2e8f0",
				"info": "#38bdf8",
				"success": "#4ade80",
				"warning": "#fbbf24",
				"error": "#f87171",
			}
		}],
		logs: false,
	  }
}
