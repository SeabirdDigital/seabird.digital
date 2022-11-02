<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let menuOpen = false;

	const InvertMenuOpen = () => {
		document.body.dataset.menu = document.body.dataset.menu === 'true' ? 'false' : 'true';
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

		button.onclick = () => {
			InvertMenuOpen();
			menuText.innerHTML = menuText.innerHTML === 'Meny' ? 'Stäng' : 'Meny';
		};
	});
</script>

<button id="menu-button" type="button">
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

<main>
	<slot />
</main>
<nav>
	<div id="links">
		<button class="link" on:click={() => MenuItemClicked('/')}>
			<span class="label">Home</span>
			<img
				class="image"
				src="https://images.unsplash.com/photo-1667374026094-56bb3b0f6f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				alt=""
			/>
		</button>
		<button class="link" on:click={() => MenuItemClicked('/sub')}>
			<span class="label">Subpage</span>
			<img
				class="image"
				src="https://plus.unsplash.com/premium_photo-1663839412165-1b23d904e50a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
				alt=""
			/>
		</button>
	</div>
</nav>

<style global>
	:root {
		--sb-blue: #00bbf9;
		--sb-purple: #9b5de5;
		--sb-pink: #ff1cb2;
		--sb-orange: #feb240;
		--sb-yellow: #fee440;

		--sb-paytone: 'Paytone One', sans-serif;
		--sb-mulish: 'Mulish', sans-serif;
		--sb-specify: 'Specify ExExp', sans-serif;
		--sb-darker: 'Darker Grotesque', sans-serif;
	}

	body::-webkit-scrollbar {
		display: none;
	}
	body {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow-x: hidden;
		margin: 0;
		background-color: black;
	}
	body[data-menu='true'] {
		overflow: hidden;
	}

	main {
		transition: 1000ms;
	}
	body[data-menu='true'] main {
		translate: 0 -75vh;
	}

	nav {
		height: 75vh;
		width: 100%;

		position: fixed;
		bottom: -75vh;
		left: 0;

		display: flex;
		align-items: center;

		background-color: black;
		color: white;

		transition: bottom 1000ms;
		overflow: hidden;
	}
	body[data-menu='true'] nav {
		bottom: 0;
	}

	nav > #links {
		display: flex;
		gap: clamp(1rem, 2vw, 2rem);
		margin-bottom: 5.5rem;
		padding: 0rem clamp(1rem, 2vw, 2rem);

		transform: translateY(-100%) scale(0.9);
		transition: transform 1000ms;
	}
	body[data-menu='true'] nav > #links {
		transform: translateY(0%) scale(1);
	}
	nav > #links > .link {
		background-color: transparent;
		border: 0;
		display: inline-flex;
		flex-direction: column;
		padding: 0;
		transition: 200ms;
	}
	nav > #links > .link:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
	nav > #links > .link > .label {
		color: white;
		font-size: 2rem;
		margin: 0;
		text-transform: uppercase;
		font-family: var(--sb-darker);
	}
	nav > #links > .link > .image {
		width: max(20vw, 400px);
		aspect-ratio: 1.8 / 1;
		border-radius: 0.25rem;
		margin-top: 0.5rem;
		object-fit: cover;
	}

	#menu-button {
		height: 4rem;
		width: 4rem;
		position: fixed;
		bottom: 3rem;
		left: 50vw;
		translate: -50%;
		border: 0;

		transition: 200ms;

		z-index: 10;
	}

	#menu-button:hover {
		scale: 1.25;
	}

	#menu-button:active {
		scale: 1.1;
	}

	#menu-button .background {
		height: 100%;
		width: 100%;
		position: relative;
		background-color: var(--sb-purple);
		border-radius: 2rem;
		transition: background 200ms;

		box-shadow: 0 0 4rem rgba(0 0 0 / 35%);

		z-index: 2;
	}

	#menu-button {
		margin: 0;
		padding: 0;
		background-color: transparent;
	}

	#menu-button .text {
		height: 150%;
		width: 150%;

		display: flex;
		justify-content: center;

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;

		font-family: var(--sb-darker);

		scale: 0.5;
		rotate: -90deg;
		transition: rotate 250ms, scale 200ms;

		z-index: 1;
	}

	body:not([data-menu='true']) #menu-button:hover .text {
		scale: 1;
		rotate: 8deg;
	}

	body[data-menu='true'] #menu-button .text {
		scale: 1;
		rotate: 6deg;
	}
	body[data-menu='true'] #menu-button .background {
		background: var(--sb-blue);
	}
</style>
