<script>
	import About from '$lib/sections/home/About.svelte';
	import Headline from '$lib/sections/home/Headline.svelte';
	import Hero from '$lib/sections/home/Hero.svelte';
</script>

<Hero />
<Headline />
<About />

<div id="full" />

<style>
	#full {
		height: 100vh;

		background-color: rgb(25, 25, 25);
	}
</style>
