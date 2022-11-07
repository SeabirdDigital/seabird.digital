<script lang="ts">
	import Footer from '$lib/sections/layout/Footer.svelte';
	import Header from '$lib/sections/layout/Header.svelte';
	import Nav from '$lib/sections/layout/Nav.svelte';
	import OnResize from '$lib/stores/OnResize';
	import { onMount } from 'svelte';

	onMount(() => {
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};

		window.onresize = () => {
			for (const f of OnResize.functions()) f();
		};
	});
</script>

<Nav />

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:root {
		--sb-blue: #00bbf9;
		--sb-purple: #9b5de5;
		--sb-pink: #ff1cb2;
		--sb-orange: #feb240;
		--sb-yellow: #fee440;
		--sb-dark: #191919;

		--sb-paytone: 'Paytone One', sans-serif;
		--sb-mulish: 'Mulish', sans-serif;
		--sb-specify: 'Specify ExExp', sans-serif;
		--sb-darker: 'Darker Grotesque', sans-serif;
	}

	body::-webkit-scrollbar {
		@apply hidden;
	}
	body {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-x: hidden;
		scroll-behavior: smooth;
		overscroll-behavior: none;
		margin: 0;
		background-color: black;
		color: white;
	}
	body[data-menu='true'] {
		overflow: hidden;
	}

	main {
		transition: 1000ms;
		position: relative;
	}
	body[data-menu='true'] main {
		translate: 0 -75vh;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply /**/
			font-sb-darker
			font-normal
			leading-none;
	}

	h1 {
		@apply /**/
			text-5xl sm:text-6xl md:text-7xl
			font-bold;
	}

	h2 {
		@apply /**/
			text-4xl sm:text-5xl;
	}

	p {
		@apply /**/
			text-white
			font-sb-mulish
			text-2xl
			font-extralight;
	}

	button:focus {
		background-color: transparent;
	}
</style>
