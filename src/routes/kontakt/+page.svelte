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
		<div>
			<Form />
		</div>
		<div class="info">
			<div>
				<div>
					<h3>Säg hej!</h3>
					<span
						>Vill du få ett prisförslag eller vill du bara säga hej? Vi är här för dig och kommer
						svara så snabbt vi kan. Har du en snabb fråga och är otållig? Skicka oss ett SMS så
						svarar vi lite snabbare.</span
					>
				</div>
				<div>
					<h3>Support</h3>
					<a href="mailto:support@seabird.digital">support@seabird.digital</a>
					<a href="tel:0704048064">070-304 80 64</a>
				</div>
			</div>
		</div>
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
					animation: load 3500ms forwards;
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
				container;

			padding: 8rem 0;

			display: flex;

			& > div {
				@apply /**/
				lg:w-1/2;

				&.info {
					display: flex;
					flex-direction: column;
					align-items: center;

					& > div {
						max-width: 24rem;

						display: flex;
						flex-direction: column;
						gap: 3rem;

						h3 {
							font-size: 1.5rem;
							opacity: 0.3;

							padding-bottom: 0.75rem;
						}

						span,
						a {
							font-size: 1rem;
							opacity: 0.5;

							display: block;

							transition: opacity 200ms;

							&:is(a):hover {
								opacity: 0.7;
							}
						}
					}
				}
			}
		}
	}
</style>
