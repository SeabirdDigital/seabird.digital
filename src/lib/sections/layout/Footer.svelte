<script lang="ts">
	import { goto } from '$app/navigation';

	let footer: HTMLElement,
		scrollY = 0,
		innerHeight = 0;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<footer
	bind:this={footer}
	data-full={scrollY + innerHeight - (footer?.offsetTop + footer?.clientHeight / 2) > 0
		? 'true'
		: 'false'}
>
	<div>
		<div>
			<button class="logo" on:click={() => goto('/')}>
				<div />
			</button>
		</div>

		<span>Copyright &copy; 2022 Seabird Digital UD</span>
	</div>
</footer>

<style lang="postcss">
	footer {
		overflow: hidden;
	}

	footer > div {
		@apply /**/
            container
            px-12
            pt-12
            pb-4
            
            flex
            flex-col
            gap-6;

		background-color: var(--sb-orange);
		border-radius: 50px 50px 0 0;

		scale: 0.9;
		translate: 0 4rem;

		transition: all 200ms;
	}

	footer[data-full='true'] > div {
		scale: 1;
		translate: 0 0;
	}

	.logo {
		scale: 1.25;
	}
	.logo > div {
		background-color: black;
	}

	footer > div > span {
		width: 100%;
		display: flex;
		justify-content: center;
		text-align: center;

		font-family: var(--mulish);
	}
</style>
