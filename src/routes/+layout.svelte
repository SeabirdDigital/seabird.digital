<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/sections/layout/Header.svelte';
	import { onMount } from 'svelte';

	let menuOpen = false;

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

		button.onclick = () => {
			InvertMenuOpen();
			menuText.innerHTML = menuText.innerHTML === 'Meny' ? 'Stäng' : 'Meny';
		};

		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
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

<main>
	<Header />
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

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
		@apply hidden;
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
		position: relative;
	}
	body[data-menu='true'] main {
		translate: 0 -75vh;
	}

	nav {
		@apply /**/
			h-[30rem]
			w-full

			fixed
			bottom-[-30rem]
			left-0

			flex
			items-center

			bg-black
			text-white
			
			z-40;

		transition: bottom 1000ms;
		overflow: hidden;
	}
	body[data-menu='true'] nav {
		bottom: 0;
	}

	nav > #links {
		@apply /**/
			flex
			gap-4
			mb-28
			p-0;

		transform: translateY(-100%) scale(0.9);
		transition: transform 1000ms;
	}
	body[data-menu='true'] nav > #links {
		transform: translateY(0%) scale(1);
	}
	nav > #links > .link {
		@apply /**/
			bg-transparent
			border-0
			p-0

			inline-flex
			flex-col;

		transition: transform 200ms;
	}
	nav > #links > .link:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
	nav > #links > .link > .label {
		@apply /**/
			font-sb-darker	
			text-white
			text-4xl
			uppercase

			m-0;
	}
	nav > #links > .link > .image {
		@apply /**/
			h-52
			aspect-[1.8/1]
			rounded-md
			mt-2
			object-cover;
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

		translate: -50%;
		transition: scale 200ms;
	}

	#menu-button:hover {
		scale: 1.25;
	}

	#menu-button:active {
		scale: 1.1;
	}

	#menu-button .background {
		@apply /**/
			h-full
			w-full
			relative
			bg-sb-purple
			rounded-full
			shadow-lg

			z-20;
	}

	#menu-button {
		margin: 0;
		padding: 0;
		background-color: transparent;
	}

	#menu-button .text {
		@apply /**/
			h-[150%]
			w-[150%]

			flex
			justify-center

			absolute
			top-1/2
			left-1/2

			font-sb-darker

			scale-50
			-rotate-90

			z-10;

		translate: -50% -50%;
		transition: rotate 250ms, scale 200ms;
	}

	body:not([data-menu='true']) #menu-button:hover .text {
		scale: 1;
		rotate: 8deg;
	}

	body[data-menu='true'] #menu-button .text {
		scale: 1;
		rotate: 6deg;
	}
	body[data-menu-open='true'] #menu-button .background {
		@apply /**/
			bg-sb-blue;
	}
</style>
