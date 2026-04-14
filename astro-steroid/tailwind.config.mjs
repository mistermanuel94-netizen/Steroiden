/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1A1A1A', // Matte Black
				secondary: '#2B2B2B', // Charcoal
				accent: '#1A2E5A', // Deep Blue
				surface: '#F5F0EB', // Warm Beige
				luxGold: '#C9A96E', // Gold
				highlight: '#C9A96E', // Gold (replaces lime)
				beige: '#F5F0EB', // Beige background
				'beige-dark': '#E8DDD3', // Beige darker
				'light-grey': '#D4D4D4', // Light Grey
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
