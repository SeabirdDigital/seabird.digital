<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let contactText: HTMLSpanElement,
		scrollY = 0,
		innerHeight = 0,
		height = 0;

	onMount(() => {
		height = document.getElementsByTagName('main')[0].clientHeight;
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header
	data-small-logo={scrollY - innerHeight / 3 > 0 ? 'true' : 'false'}
	data-hidden={scrollY + innerHeight - (height - innerHeight / 4) > 0 &&
	scrollY + innerHeight < height - innerHeight / 4
		? 'true'
		: 'false'}
>
	<div>
		<button class="logo" on:click={() => goto('/')}>
			<div />
			<div>
				<span>seabird</span>
			</div>
		</button>
		<div class="right">
			<div>
				<button on:click={() => goto('/kontakt')}>
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
	</div>
</header>

<style global lang="postcss">
	header {
		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;

		transition: translate 800ms;
		transition-delay: 200ms;

		z-index: 100;
	}
	header[data-hidden='true'] {
		translate: 0 -100%;
	}

	header > div {
		@apply /**/
			container	
			py-8
			px-4;

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
	header[data-small-logo='true'] .logo {
		pointer-events: none;
	}
	.logo > div:first-child {
		height: 2.5rem;
		width: 2.5rem;
		position: relative;

		background-color: white;
	}
	header[data-small-logo='true'] .logo > div:first-child {
		pointer-events: all;
	}

	@keyframes background-pan {
		0% {
			rotate: 45deg;
		}
		100% {
			rotate: 405deg;
		}
	}

	.logo > div:first-child::before {
		content: '';
		position: absolute;
		inset: 8px;
		border-radius: 100%;

		background: linear-gradient(to bottom, var(--sb-blue), var(--sb-purple), var(--sb-orange));
		rotate: 45deg;
	}
	.logo:hover > div:first-child::before {
		animation: background-pan 750ms cubic-bezier(0.8, -0.5, 0.2, 1.4);
	}

	.logo > div:last-child {
		overflow: hidden;
	}
	.logo > div:last-child > span {
		@apply /**/
		hidden sm:block;

		margin-top: -9px;
		font-family: var(--sb-darker);
		color: white;
		font-size: 3rem;
		font-weight: bold;
		line-height: 3rem;

		transition: translate 300ms;

		z-index: -5;
	}
	header[data-small-logo='true'] .logo > div:last-child > span {
		translate: -150% 0;
	}

	.right > div {
		height: 3.5rem;
		display: flex;
		align-items: center;
	}

	.right div > button {
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
	.right div:hover > button {
		padding: 0.5rem 1.75rem;

		margin: -0.5rem -0.5rem;
	}
	.right div > button:active {
		padding: 0.75rem 1.25rem;
		margin-right: 0;
	}

	.right div > button > span {
		overflow: hidden;
		position: relative;
		margin-top: -3px;

		height: auto;
		width: auto;
	}
	.right div:hover > button > span > span:first-child,
	.right div:hover > button > span > span:last-child {
		transform: translateY(-100%);
		transition: transform 300ms;
	}
	.right div > button > span > span:first-child,
	.right div > button:active > span > span:first-child {
		position: absolute;
		top: 0;
		left: 0;
	}
	.right div > button > span > span:last-child,
	.right div > button:active > span > span:last-child {
		position: absolute;
		top: 100%;
		left: 0;
	}
</style>
