<div class="wrapper flex items-center">
	<slot />
</div>

<style>
	.wrapper > :global(* + *) {
		display: flex;
		align-items: center;
	}
	.wrapper > :global(* + *::before) {
		content: '';

		@apply mx-6 block h-6 w-px rotate-12 bg-neutral-400;
	}
</style>
