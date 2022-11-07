<script lang="ts">
	import { goto } from '$app/navigation';

	let contactText: HTMLSpanElement;
</script>

<header>
	<div>
		<button class="logo" on:click={() => goto('/')}>
			<div />
			<span>seabird</span>
		</button>
		<div class="right">
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

<style global lang="postcss">
	header {
		position: absolute;
		top: 0;
		left: 0;

		width: 100vw;

		z-index: 100;
	}

	header > div {
		@apply /**/
			container	
			py-8;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		cursor: pointer;
	}
	.logo > div {
		height: 2.5rem;
		width: 2.5rem;
		position: relative;

		background-color: white;
	}

	@keyframes background-pan {
		0% {
			rotate: 45deg;
		}
		100% {
			rotate: 405deg;
		}
	}

	.logo > div::before {
		content: '';
		position: absolute;
		inset: 8px;
		border-radius: 100%;

		background: linear-gradient(to bottom, var(--sb-blue), var(--sb-purple), var(--sb-orange));
		rotate: 45deg;
	}
	.logo:hover > div::before {
		animation: background-pan 750ms cubic-bezier(0.8, -0.5, 0.2, 1.4);
	}
	.logo > span {
		@apply /**/
			hidden sm:block;

		margin-top: -9px;
		font-family: var(--sb-darker);
		color: white;
		font-size: 3rem;
		font-weight: bold;
		line-height: 3rem;
	}

	.right {
		height: 3.5rem;
		display: flex;
		align-items: center;
	}

	.right button {
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

		transition: all 200ms cubic-bezier(0.68, -0.1, 0.265, 1.55);
	}
	.right button:hover {
		padding: 0.5rem 1.75rem;
		margin-right: -0.5rem;
	}
	.right button:active {
		transform: scale(1.025);
	}

	.right button > span {
		overflow: hidden;
		position: relative;
		margin-top: -3px;

		height: auto;
		width: auto;
	}
	.right button:hover > span > span:first-child,
	.right button:hover > span > span:last-child {
		transform: translateY(-100%);
		transition: transform 200ms;
	}
	.right button > span > span:first-child {
		position: absolute;
		top: 0;
		left: 0;
	}
	.right button > span > span:last-child {
		position: absolute;
		top: 100%;
		left: 0;
	}
</style>
