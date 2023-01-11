<script>
	import LogoFull from '$lib/assets/logoFull.svg';
	import Logo from '$lib/assets/logo.svg';

	export let simplified = true;
	let className = '';
	export { className as class };
</script>

<div class="w-full flex justify-center items-center {className}">
	{#if simplified}
		<img src={Logo} id="logo" class="h-16" alt="Seabird logo" />
	{:else}
		<img src={LogoFull} id="logoFull" class="absolute h-16" alt="Seabird logo" />
	{/if}
</div>
