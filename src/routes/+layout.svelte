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
			menuText = document.getElementById('menu-text-path'),
			home = document.getElementById('home'),
			sub = document.getElementById('sub');
		if (button == null || menuText == null || home == null || sub == null) {
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
	<button on:click={() => MenuItemClicked('/')} id="home">home</button>
	<button on:click={() => MenuItemClicked('/sub')} id="sub">subpage</button>
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

	body main {
		transition: 1000ms;
	}
	body[data-menu='true'] main {
		translate: 0 -75vh;
	}

	body nav {
		height: 75vh;
		width: 100%;

		position: fixed;
		bottom: -75vh;
		left: 0;

		background-color: black;
		color: white;

		transition: bottom 1000ms;
	}
	body[data-menu='true'] nav {
		bottom: 0;
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
