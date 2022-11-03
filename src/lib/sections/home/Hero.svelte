<script lang="ts">
	import anime from 'animejs';
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
		createGrid();
		window.onresize = () => createGrid();

		console.log(scrollY);
		if (scrollY < 100)
			anime({
				targets: '#content span',
				translateY: -125,
				delay: anime.stagger(100),
				opacity: 1,
				duration: 1000,
				easing: 'easeInOutSine',

				complete: () => (doneAnimating = true)
			});
		else doneAnimating = true;
	});
</script>

<svelte:window bind:scrollY />

<div id="overlay" />
<div id="hero">
	<div id="grid" bind:this={grid} />
</div>
<div id="content">
	<h1>
		<span
			style={doneAnimating
				? `transform: translateY(-${scrollY * 0.5 + 125}px); opacity: ${
						(125 - scrollY * 0.5) / 125
				  };`
				: ''}>Lite annorlunda</span
		>
		<span
			style={doneAnimating
				? `transform: translateY(-${scrollY * 0.5 > 0 ? scrollY * 0.25 + 125 : 125}px); opacity: ${
						(125 - scrollY * 0.5) / 125
				  };`
				: ''}>digitalbyrå</span
		>
	</h1>
</div>

<style>
	@keyframes background-pan {
		from {
			background-position: center 0%;
		}
		to {
			background-position: center 200%;
		}
	}

	#hero {
		height: 100vh;
		width: 100%;
		position: relative;

		position: fixed;
		top: 0;
		left: 0;
		z-index: -3;

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

	#content {
		color: white;
		position: fixed;
		top: 50vh;
		left: 50vw;
		transform: translate(-50%, -50%);
		text-align: center;
		margin-bottom: 5rem;

		z-index: 5;
		pointer-events: none;
	}

	#content h1 {
		font-family: var(--sb-darker);
		font-weight: 700;
		font-size: 5rem;
		line-height: 3.75rem;

		display: flex;
		flex-direction: column;
	}

	#content h1 span {
		translate: 0 100px;
		opacity: 0;
	}

	#grid {
		height: 100%;
		width: 100%;

		position: absolute;
		top: 0;
		left: 0;

		display: grid;
		grid-template-columns: repeat(var(--cols), 1fr);
		grid-template-rows: repeat(var(--rows), 1fr);

		transition-duration: 200ms;

		z-index: 1;
	}

	#overlay {
		height: 100vh;
		width: 100%;

		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(25, 25, 25)),
			radial-gradient(at center top, rgba(0, 0, 0, 0), rgb(25, 25, 25));

		transition: opacity 500ms;
		pointer-events: none;

		z-index: 2;
	}

	#grid :global(.tile) {
		position: relative;
	}

	#grid :global(.tile)::before {
		content: '';

		background-color: rgb(25, 25, 25);
		position: absolute;
		inset: 0.5px;
	}

	#grid :global(.tile):hover::before {
		background-color: rgb(25, 25, 25);
	}
</style>
