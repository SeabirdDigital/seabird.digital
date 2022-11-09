<script lang="ts">
	import Hands from '$lib/assets/hands.jpg';
	import Us from '$lib/assets/us.jpg';

	import Hero from '$lib/sections/home/Hero.svelte';
	import OnResize from '$lib/stores/OnResize';
	import { onMount } from 'svelte';

	let y = 0,
		image1: HTMLDivElement,
		image2: HTMLDivElement,
		height = 0;

	onMount(() => {
		OnResize.add(() => {
			if (image1 && image2)
				image1.style.backgroundPosition = `top calc(${image1?.getBoundingClientRect().left}px + ${
					(height * (4 / 5)) / 2
				}px)`;
			image2.style.backgroundPosition = `top calc(${image2?.getBoundingClientRect().left}px + ${
				(height * (4 / 5)) / 2
			}px)`;
		});
	});
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div id="about">
	<div class="first">
		<div class="image">
			<div
				bind:this={image1}
				style={`background-image: url("${Hands}"); background-position: top 0 left ${
					image1?.getBoundingClientRect().left + (image1?.clientWidth - height * (4 / 5)) / 2
				}px;`}
			/>
		</div>
		<div>
			<h2>Hemsidor som hjälper dig att sälja mer.</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, porro cum officia
				veniam itaque quam, excepturi recusandae laudantium atque quod exercitationem molestiae
				optio vero tenetur saepe repudiandae dolore cupiditate magni?
			</p>
		</div>
	</div>
	<div class="second">
		<div>
			<h2>En lite annorlunda digitalbyrå</h2>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, porro cum officia
				veniam itaque quam, excepturi recusandae laudantium atque quod exercitationem molestiae
				optio vero tenetur saepe repudiandae dolore cupiditate magni?
			</p>
		</div>
		<div class="image">
			<div
				bind:this={image2}
				style={`background-image: url("https://images.unsplash.com/photo-1664574654700-75f1c1fad74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"); background-position: top 0 left ${
					image2?.getBoundingClientRect().left + (image2?.clientWidth - height * (4 / 5)) / 2
				}px;`}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	#about {
		@apply /**/
			py-48

			flex
			flex-col
			gap-60

			bg-sb-dark;

		& > div {
			@apply /**/
				container
	
				flex
				flex-col lg:flex-row
				gap-12;

			h2 {
				@apply /**/
					mb-6;
			}

			& > div {
				@apply /**/
					lg:w-1/2;
			}

			.image {
				display: flex;
				justify-content: center;

				& > div {
					@apply /**/
						w-full lg:w-[32rem]
						aspect-square sm:aspect-[2/1] lg:aspect-[3/4];

					position: relative;

					background-attachment: fixed;
				}
			}

			&.first {
				.image {
					& > div {
						background-size: calc(100vh * (4 / 5)) 100vh;
					}
				}
			}
			&.second {
				@apply /**/
					flex-col-reverse lg:flex-row;

				.image {
					& > div {
						background-size: calc(120vh * (2 / 3)) 120vh;
					}
				}
			}
		}
	}
</style>
