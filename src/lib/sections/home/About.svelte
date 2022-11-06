<script lang="ts">
	import Hands from '$lib/assets/hands.jpg';

	import Hero from '$lib/sections/home/Hero.svelte';
	import OnResize from '$lib/stores/OnResize';
	import { onMount } from 'svelte';

	let y = 0,
		about: HTMLDivElement,
		image: HTMLDivElement,
		height = 0;

	onMount(() => {
		OnResize.add(() => {
			if (image)
				image.style.backgroundPosition = `top calc(${image?.getBoundingClientRect().left}px + ${
					(height * (4 / 5)) / 2
				}px)`;
		});
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div id="about" bind:this={about}>
	<div>
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
				veniam itaque quam, excepturi recusandae laudantium atque quod exercitationem molestiae
				optio vero tenetur saepe repudiandae dolore cupiditate magni?
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	#about {
		@apply /**/
			bg-sb-dark;
	}
	#about > div {
		@apply /**/
			container
			py-48

			flex
			flex-col lg:flex-row
			gap-12;
	}
	#about > div > div {
		@apply /**/
			lg:w-1/2;
	}

	.image {
		display: flex;
		justify-content: center;
	}
	.image > div {
		@apply /**/
			w-full lg:w-[32rem]
			aspect-square sm:aspect-[2/1] lg:aspect-[3/4];

		position: relative;

		background-attachment: fixed;
		background-size: calc(100vh * (4 / 5)) 100vh;
	}

	h2 {
		@apply /**/
			mb-6;
	}
</style>
