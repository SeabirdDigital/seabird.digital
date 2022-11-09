<script lang="ts">
	import Phone from '$lib/assets/phone.jpg';
	import Form from '$lib/sections/contact/Form.svelte';
	import { onMount } from 'svelte';

	let width = 0,
		height: number | undefined;

	onMount(() => {
		document.body.style.overflow = 'hidden';

		document
			.getElementById('hero')
			?.getElementsByClassName('image')[0]
			.addEventListener('animationend', function () {
				document.body.style.overflow = '';
			});
	});
</script>

<div id="hero">
	<div bind:clientWidth={width} style="{`height: ${height ? height + 'px' : '100vh'}`};">
		<div
			class="image {height ? 'animate' : ''}"
			bind:clientHeight={height}
			style="background-image: url('{Phone}'); --width: {width}px; --height: {width / 3 > 250
				? `calc(${width}px / 3)`
				: '250px'};"
		>
			<h1>Kontakt</h1>
		</div>
	</div>
</div>

<div id="contact">
	<div>
		<Form />
	</div>
</div>

<style lang="postcss">
	#hero {
		padding: 0;

		background-color: var(--sb-dark);

		& > div {
			@apply /**/
				container;

			@keyframes load {
				25% {
					width: 100vw;
					height: 100vh;
				}
				100% {
					height: var(--height);
					width: var(--width);
					border-radius: 0 0 50px 50px;
				}
			}
			& > .image {
				position: absolute;
				top: 0;
				left: 50vw;
				translate: -50% 0;

				width: 100vw;
				height: 100vh;

				background-size: cover;
				background-position: center center;

				&.animate {
					animation: load 3000ms forwards;
				}

				h1 {
					position: absolute;
					bottom: 3rem;
					left: 2rem;
				}
			}
		}
	}

	#contact {
		background-color: var(--sb-dark);

		& > div {
			@apply /**/
				container
				py-32;

			display: flex;
			flex-direction: column;
		}
	}
</style>
