<script lang="ts">
	let contactText: HTMLSpanElement;
</script>

<header>
	<div>
		<div id="logo">
			<div />
			<span>seabird</span>
		</div>
		<div>
			<button>
				<span
					style={`height: ${contactText?.clientHeight || 25}px; width: ${
						contactText?.clientWidth || 75
					}px;`}
				>
					<span bind:this={contactText}>Kontakt</span>
					<span>Kontakt</span>
				</span>
			</button>
		</div>
	</div>
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;

		z-index: 100;
	}

	header > div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 2rem 5rem;
	}

	#logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	#logo > div {
		height: 2.5rem;
		width: 2.5rem;
		position: relative;

		background-color: white;
	}
	#logo > div::before {
		content: '';
		position: absolute;
		inset: 8px;
		border-radius: 100%;

		background: linear-gradient(to bottom, var(--sb-pink), var(--sb-purple), var(--sb-orange));
		rotate: 45deg;
	}
	#logo > span {
		margin-top: -9px;
		font-family: var(--sb-darker);
		color: white;
		font-size: 3rem;
		font-weight: bold;
		line-height: 3rem;
	}

	button {
		position: relative;
		background-color: var(--sb-purple);
		color: white;
		border: 0;

		font-family: var(--sb-darker);
		font-weight: 600;
		font-size: 1.25rem;
		text-transform: uppercase;

		border-radius: 5rem;
		padding: 0.75rem 1.25rem;

		display: flex;
		overflow: hidden;

		transition: transform 200ms;
	}
	button:hover {
		transform: scale(1.05);
	}
	button:active {
		transform: scale(1.025);
	}

	button > span {
		overflow: hidden;
		position: relative;
		margin-top: -3px;

		height: auto;
		width: auto;
	}
	button:hover > span > span:first-child,
	button:hover > span > span:last-child {
		transform: translateY(-100%);
		transition: transform 200ms;
	}
	button > span > span:first-child {
		position: absolute;
		top: 0;
		left: 0;
	}
	button > span > span:last-child {
		position: absolute;
		top: 100%;
		left: 0;
	}
</style>
