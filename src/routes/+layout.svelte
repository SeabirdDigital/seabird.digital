<script lang="ts">
	import transitionOn from '$lib/stores/transitionOn';
	import '@fontsource/slabo-27px';
	import '@fontsource/ultra';
	import '../app.css';
</script>

<div
	id="transition"
	class="fixed w-screen h-screen bg-sb-blue z-[60] duration-700 {$transitionOn
		? 'on'
		: 'off pointer-events-none'}"
/>

<main class="">
	<slot />
</main>

<div class="bg-sb-blue">
	<div class="container flex justify-center text-center text-white py-6">
		Copyright 2019 - {new Date().getFullYear()} &copy; Seabird Digital UF. All rights reserved.
	</div>
</div>

<style>
	#transition {
		mask-image: url(/mask.svg), linear-gradient(#fff 0 0);
		mask-position: 50% 50%;
		mask-size: 150%, auto;
		mask-repeat: no-repeat;
		mask-composite: exclude;
	}
	#transition.on {
		mask-size: 0, auto;
	}
</style>
