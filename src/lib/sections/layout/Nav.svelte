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
	nav {
		@apply /**/
			h-[30rem]
			w-full

			fixed
			left-0

			flex
			items-center

			bg-black
			text-white
			
			overflow-hidden
			z-40;

		bottom: -30rem;
		transition: bottom 1000ms;
	}

	nav > div {
		@apply /**/
			mb-28;

		width: 100%;
	}

	body[data-menu-open='true'] nav {
		bottom: 0;
	}

	nav #links {
		@apply /**/
			flex
			gap-6
			w-fit
			px-16;

		transform: translateY(-100%) scale(0.9);
		transition: transform 1000ms, translate 100ms;
	}
	body[data-menu-open='true'] nav #links {
		transform: translateY(0%) scale(1);
	}
	nav #links > .link {
		@apply /**/
			bg-transparent
			border-0
			w-96
			p-0

			inline-flex
			flex-col;

		transition: transform 200ms;
	}
	nav #links > .link:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
	nav #links > .link > .label {
		@apply /**/
			font-sb-darker	
			text-white
			text-4xl
			uppercase

			m-0;
	}
	nav #links > .link > .image {
		@apply /**/
			h-52
			w-96
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

		translate: -50% 0;
		transition: scale 200ms, translate 750ms;
	}
	#menu-button[data-hidden='true'] {
		translate: -50% 10rem;
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

			z-10;

		translate: -50% -50%;

		rotate: -90deg;
		scale: 0.5;
		transition: rotate 250ms, scale 200ms;
	}

	body:not([data-menu-open='true']) #menu-button:hover .text {
		scale: 1;
		rotate: 8deg;
	}

	body[data-menu-open='true'] #menu-button .text {
		scale: 1;
		rotate: 6deg;
	}
	body[data-menu-open-open='true'] #menu-button .background {
		@apply /**/
			bg-sb-blue;
	}
</style>
