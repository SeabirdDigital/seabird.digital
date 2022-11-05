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

<style lang="postcss">
	#about {
		@apply /**/
			flex
			py-48
			px-12
			bg-sb-dark;
	}
	#about > div {
		@apply /**/
			w-1/2;
	}

	.image {
		@apply /**/
			flex
			justify-center;
	}
	.image > div {
		@apply /**/
			w-[32rem]
			
			relative
			overflow-hidden
			
			bg-fixed;

		aspect-ratio: 4/5;
		background-size: calc(100vh * (4 / 5)) 100vh;
	}

	h2 {
		@apply /**/
			mb-6;
	}
</style>
