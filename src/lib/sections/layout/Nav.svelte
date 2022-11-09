<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let menuOpen = false,
		scrollY = 0,
		mouseX = 0,
		mouseOver = false,
		innerHeight = 0,
		links: HTMLElement,
		main: HTMLElement,
		footer: HTMLElement;

	const InvertMenuOpen = () => {
		document.body.dataset.menuOpen = document.body.dataset.menuOpen === 'true' ? 'false' : 'true';
		menuOpen = !menuOpen;
	};

	const MenuItemClicked = (toSlug: string) => {
		InvertMenuOpen();

		goto(toSlug);
	};

	onMount(() => {
		const button = document.getElementById('menu-button'),
			menuText = document.getElementById('menu-text-path');
		if (button == null || menuText == null) {
			throw new Error('Button or menu button text missing');
		}

		main = document.getElementsByTagName('main')[0];
		footer = document.getElementsByTagName('footer')[0];

		button.onclick = () => {
			InvertMenuOpen();
			menuText.innerHTML = menuText.innerHTML === 'Meny' ? 'Stäng' : 'Meny';
		};

		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<button
	id="menu-button"
	data-hidden={scrollY + innerHeight - (main?.clientHeight - (footer?.clientHeight + 64)) > 0 &&
	innerHeight + (footer?.clientHeight - 64) < main?.clientHeight - (footer?.clientHeight + 64)
		? 'true'
		: 'false'}
	type="button"
>
	<div class="background" />
	<div class="text">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="51.439"
			height="18.838"
			viewBox="0 0 13.61 4.984"
		>
			<g transform="translate(-30.558 -68.822)">
				<path
					id="a"
					d="M31.258 73.354a14.817 14.817 0 0 1 19.824 6.787 14.817 14.817 0 0 1-6.787 19.824 14.817 14.817 0 0 1-19.824-6.787 14.817 14.817 0 0 1 6.787-19.824Z"
					style="fill: none; stroke-width: 0.109699"
				/>
				<text xml:space="preserve" style="font-size: 4.7625px; fill: #000; stroke-width: 0.264583">
					<textPath id="menu-text-path" xlink:href="#a" style="font-size: 4.7625px; fill:white;"
						>Meny</textPath
					>
				</text>
			</g>
		</svg>
	</div>
</button>

<nav>
	<div on:mousemove={(e) => (mouseX = e.clientX)}>
		<div
			id="links"
			bind:this={links}
			on:mouseenter={() => (mouseOver = true)}
			on:mouseleave={() => (mouseOver = false)}
			style="translate: {mouseOver
				? mouseX * -1 * ((links?.clientWidth - main?.clientWidth) / main?.clientWidth)
				: -32}px 0; transition"
		>
			<button class="link" on:click={() => MenuItemClicked('/')}>
				<span class="label">Home</span>
				<img
					class="image"
					src="https://images.unsplash.com/photo-1667374026094-56bb3b0f6f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
					alt=""
				/>
			</button>
			<button class="link" on:click={() => MenuItemClicked('/kontakt')}>
				<span class="label">Kontakt</span>
				<img
					class="image"
					src="https://plus.unsplash.com/premium_photo-1663839412165-1b23d904e50a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
					alt=""
				/>
			</button>
		</div>
	</div>
</nav>

<style global lang="postcss">
	body {
		nav {
			@apply /**/
				z-40;

			height: 30rem;
			width: 100%;

			position: fixed;
			left: 0;
			bottom: -30rem;

			display: flex;
			align-items: center;

			background-color: black;
			color: white;

			overflow: hidden;

			transition: bottom 1000ms;

			& > div {
				margin-bottom: 7rem;
				width: 100%;
			}

			#links {
				width: fit-content;
				padding: 0 4rem;

				display: flex;
				gap: 1.5rem;

				transform: translateY(-100%) scale(0.9);
				transition: transform 1000ms, translate 100ms;

				& > .link {
					width: fit-content;
					background-color: transparent;
					padding: 0;
					border: 0;

					display: inline-flex;
					flex-direction: column;

					transition: transform 200ms;

					&:hover {
						transform: scale(1.01);
						cursor: pointer;
					}

					& > .label {
						@apply /**/
							font-sb-darker	
							text-white
							text-4xl
							uppercase
				
							m-0;
					}
					& > .image {
						@apply /**/
							h-52
							w-96
							rounded-md
							mt-2
							object-cover;
					}
				}
			}
		}

		#menu-button {
			@apply /**/
				h-16
				w-16
				border-0
	
				fixed
				bottom-12
				left-[50vw]
	
				z-50;

			margin: 0;
			padding: 0;
			background-color: transparent;

			translate: -50% 0;
			transition: scale 200ms, translate 750ms;

			.background {
				@apply /**/
					shadow-lg
					z-20;

				height: 100%;
				width: 100%;
				position: relative;
				background-color: var(--sb-purple);
				border-radius: 100%;
			}

			.text {
				@apply /**/
					z-10;

				height: 150%;
				width: 150%;

				display: flex;
				justify-content: center;

				position: absolute;
				top: 50%;
				left: 50%;
				translate: -50% -50%;

				font-family: var(--sb-darker);
				rotate: -90deg;
				scale: 0.5;
				transition: rotate 250ms, scale 200ms;
			}

			&[data-hidden='true'] {
				translate: -50% 10rem;
			}
			&:hover {
				scale: 1.25;
			}
			&:active {
				scale: 1.1;
			}
		}

		&[data-menu-open='true'] {
			nav {
				bottom: 0;

				#links {
					transform: translateY(0%) scale(1);
				}
			}
			#menu-button {
				.text {
					scale: 1;
					rotate: 6deg;
				}

				.background {
					@apply /**/
					   bg-sb-blue;
				}
			}
		}
		&:not([data-menu-open='true']) {
			#menu-button {
				&:hover {
					.text {
						scale: 1;
						rotate: 8deg;
					}
				}
			}
		}
	}
</style>
