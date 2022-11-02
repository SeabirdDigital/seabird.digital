<script>
	import Hero from '../lib/sections/home/Hero.svelte';
</script>

<Hero />

<div id="about">
	<h2>
		För många sidor är fortfarande kvar i 90-talet. Vi skapar moderna hemsidor utan att skada din
		plånbok.
	</h2>
</div>

<style>
	#about {
		padding-top: 3rem;
		padding-bottom: 3rem;
		padding-left: 3rem;

		width: 100%;

		background-color: rgb(15, 15, 15);
	}

	h2 {
		width: 42rem;
		color: white;

		font-family: var(--sb-darker);
		font-size: 3rem;
		line-height: 2.75rem;
		font-weight: normal;
	}
</style>
