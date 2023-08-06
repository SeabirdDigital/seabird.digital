<script>
	import Logo from '$lib/assets/logo.svg';
	import LogoFull from '$lib/assets/logoFull.svg';

	export let simplified = true;
	export let noButton = true;
	let className = '';
	export { className as class };
</script>

<div class="w-full flex justify-center items-center px-8 {className}">
	<div class="w-full h-full grid grid-cols-3">
		<div />
		<div class="flex justify-center">
			{#if simplified}
				<img src={Logo} id="logo" class="h-16" alt="Seabird logo" />
			{:else}
				<img src={LogoFull} id="logoFull" class="h-16 -ml-[0.1%]" alt="Seabird logo" />
			{/if}
		</div>
		<div class="flex justify-end">
			{#if !noButton}
				<button class="bg-sb-blue text-white h-fit py-3 px-4 rounded-full"> Let's Talk! </button>
			{/if}
		</div>
	</div>
</div>
