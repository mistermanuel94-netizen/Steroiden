/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0B0F14', // Luxury Black
				secondary: '#18222E', // Graphite Surface
				accent: '#E1062C', // Performance Red
				surface: '#F5F7FA', // Frost Surface
				luxGold: '#C8A96A', // Champagne Gold
				highlight: '#C6FF00', // Electric Lime
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // For authority
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
