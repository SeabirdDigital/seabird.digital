/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sb-blue': '#3A405A'
			},
			fontFamily: {
				pt: "'PT Serif', serif",
				ultra: "'Ultra', serif"
			},
			container: {
				center: true,
				padding: '2rem'
			}
		}
	},
	plugins: []
};
