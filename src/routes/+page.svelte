<script lang="ts">
	import Rellax from 'rellax';

	import Hands from '$lib/assets/hands.jpg';

	import Hero from '$lib/sections/home/Hero.svelte';
	import OnResize from '$lib/stores/OnResize';
	import { onMount } from 'svelte';

	let y = 0,
		about: HTMLDivElement,
		image: HTMLDivElement,
		height = 0;

	onMount(() => {
		new Rellax('.rellax');

		OnResize.add(() => {
			if (image)
				image.style.backgroundPosition = `top calc(${image?.getBoundingClientRect().left}px + ${
					(height * (4 / 5)) / 2
				}px)`;
		});
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<Hero />

<div id="quote">
	<h2>
		För många sidor är fortfarande kvar i 90-talet. Vi skapar moderna hemsidor utan att skada din
		plånbok.
	</h2>
</div>

<div id="about" bind:this={about}>
	<div class="image">
		<div
			bind:this={image}
			style={`background-image: url("${Hands}"); background-position: top 0 left ${
				image?.getBoundingClientRect().left + (image?.clientWidth - height * (4 / 5)) / 2
			}px;`}
		/>
	</div>
	<div>
		<h2>Vi skapar hemsidor som hjälper våra kunder att sälja mer.</h2>

		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, porro cum officia
			veniam itaque quam, excepturi recusandae laudantium atque quod exercitationem molestiae optio
			vero tenetur saepe repudiandae dolore cupiditate magni?
		</p>
	</div>
</div>

<div id="full" />

<style>
	#full {
		height: 100vh;

		background-color: rgb(25, 25, 25);
	}

	#quote {
		padding-top: 3rem;
		padding-bottom: 3rem;
		padding-left: 3rem;

		width: 100%;

		background-color: rgb(25, 25, 25);
	}

	h2 {
		width: 42rem;
		color: white;

		font-family: var(--sb-darker);
		font-size: 3rem;
		line-height: 2.75rem;
		font-weight: normal;
	}

	#about {
		display: flex;
		padding-top: 12rem;
		padding-bottom: 12rem;
		padding-right: 3rem;
		padding-left: 3rem;

		background-color: rgb(25, 25, 25);
	}
	#about > div {
		width: 50%;
	}
	#about > .image {
		display: flex;
		justify-content: center;
	}
	#about > .image > div {
		width: 32rem;
		aspect-ratio: 4 / 5;

		position: relative;
		overflow: hidden;

		background-attachment: fixed;
		background-size: calc(100vh * (4 / 5)) 100vh;
	}

	p {
		width: 32rem;
		color: white;
		font-family: var(--sb-mulish);
		font-size: 1.5rem;
		font-weight: 200;
	}
</style>
