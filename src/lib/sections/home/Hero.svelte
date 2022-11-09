<script lang="ts">
	import OnResize from '$lib/stores/OnResize';
	import anime from 'animejs';
	import Rellax from 'rellax';
	import { onMount } from 'svelte';

	let height = 0,
		width = 0,
		scrollY = 0;

	let grid: HTMLElement,
		cols: number = Math.floor(width / 100),
		rows: number = Math.floor(height / 100);

	let doneAnimating = false;

	const createTile = () => {
		const tile = document.createElement('div');
		tile.classList.add('tile');

		return tile;
	};

	const createTiles = (quantity: number) => {
		Array.from(Array(quantity)).map(() => {
			grid.appendChild(createTile());
		});
	};

	const createGrid = () => {
		grid.innerHTML = '';

		cols = Math.floor(grid.clientWidth / 100);
		rows = Math.floor(grid.clientHeight / 100);
		console.log(grid.clientHeight);

		grid.style.setProperty('--cols', cols.toString());
		grid.style.setProperty('--rows', rows.toString());

		createTiles(cols * rows);
	};

	onMount(() => {
		document.body.style.overflow = 'hidden';

		createGrid();

		OnResize.add(createGrid);

		console.log(scrollY);
		if (scrollY < 100)
			anime({
				targets: '#hero .content span',
				translateY: -125,
				delay: anime.stagger(100),
				opacity: 1,
				duration: 1000,
				easing: 'easeInOutSine',

				complete: () => {
					doneAnimating = true;
					new Rellax('.rellax');
					document.body.style.overflow = '';
				}
			});
		else {
			doneAnimating = true;
			document.body.style.overflow = '';
		}

		new Rellax('.rellax');
	});
</script>

<svelte:window bind:scrollY />

<div id="hero">
	<div class="overlay" />
	<div class="background">
		<div class="grid" bind:this={grid} />
	</div>
	<div class="content">
		<h1 class="rellax" data-rellax-speed="-7">
			<span
				style={doneAnimating
					? `transform: translateY(-${scrollY * 0.5 + 125}px); opacity: ${
							(125 - scrollY * 0.5) / 125
					  };`
					: ''}>Lite annorlunda</span
			>
			<span
				style={doneAnimating
					? `transform: translateY(-${
							scrollY * 0.5 > 0 ? scrollY * 0.25 + 125 : 125
					  }px); opacity: ${(125 - scrollY * 0.5) / 125};`
					: ''}>digitalbyrå</span
			>
		</h1>
	</div>
</div>

<style lang="postcss">
	#hero {
		@keyframes background-pan {
			from {
				background-position: center 0%;
			}
			to {
				background-position: center 200%;
			}
		}

		& > .background {
			@apply /**/
				-z-10;

			height: 100vh;
			width: 100%;
			position: relative;

			position: fixed;
			top: 0;
			left: 0;

			display: flex;
			justify-content: center;
			align-items: center;

			overflow: hidden;
			animation: background-pan 7s linear infinite;
			background: linear-gradient(
				to bottom,
				var(--sb-purple),
				var(--sb-blue),
				var(--sb-pink),
				var(--sb-purple)
			);
			background-size: 100% 200%;
		}

		.content {
			@apply /**/
				z-30;

			width: 100%;
			margin-bottom: 5rem;

			position: absolute;
			top: 50vh;
			left: 50vw;

			transform: translate(-50%, -50%);
			text-align: center;

			pointer-events: none;

			h1 {
				display: flex;
				flex-direction: column;

				& > span {
					translate: 0 100px;
					opacity: 0;
				}
			}
		}

		.grid {
			@apply /**/
				z-10;

			height: 100%;
			width: 100%;

			position: absolute;
			top: 0;
			left: 0;

			display: grid;
			grid-template-columns: repeat(var(--cols), 1fr);
			grid-template-rows: repeat(var(--rows), 1fr);

			transition-duration: 200ms;

			:global(.tile) {
				position: relative;

				&::before {
					content: '';

					background-color: rgb(25, 25, 25);
					position: absolute;
					inset: 0.5px;
				}
			}
		}

		.overlay {
			@apply /**/
				z-20;

			height: 100vh;
			width: 100%;

			background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(25, 25, 25)),
				radial-gradient(at center top, rgba(0, 0, 0, 0), rgb(25, 25, 25));

			transition: opacity 500ms;
			pointer-events: none;
		}
	}
</style>
