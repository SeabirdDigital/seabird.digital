/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sb-blue': '#00bbf9',
				'sb-purple': '#9b5de5',
				'sb-pink': '#ff1cb2',
				'sb-orange': '#feb240',
				'sb-yellow': '#fee440'
			},
			fontFamily: {
				'sb-paytone': ['Paytone One', 'sans-serif'],
				'sb-mulish': ['Mulish', 'sans-serif'],
				'sb-specify': ['Specify ExExp', 'sans-serif'],
				'sb-darker': ['Darker Grotesque', 'sans-serif']
			},

			data: {
				'menu-open': 'menu-open="true"'
			},

			container: {
				center: true,
				padding: '2rem'
			}
		}
	},
	plugins: []
};
