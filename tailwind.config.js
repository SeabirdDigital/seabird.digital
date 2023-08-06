/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'sb-yellow': '#F1A208',
				'sb-light-blue': '#D8D9DE',
				'sb-blue': '#3A405A'
			},
			fontFamily: {
				slabo: "'Slabo 27px', sans-serif",
				ultra: "'Ultra', serif"
			},
			container: {
				center: true,
				padding: '2rem'
			},
			fontSize: {
				heading: [
					'2.5rem',
					{
						lineHeight: '1.2'
					}
				],
				base: [
					'1.25rem',
					{
						lineHeight: '1.5rem'
					}
				]
			}
		}
	},
	plugins: []
};
