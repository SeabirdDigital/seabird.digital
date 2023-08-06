<script lang="ts">
	import transitionOn from '$lib/stores/transitionOn';
	import '@fontsource/slabo-27px';
	import '@fontsource/ultra';
	import '../app.css';
</script>

<div
	id="transition"
	class="fixed w-screen h-screen bg-sb-blue z-[60] duration-700 {$transitionOn ? 'on' : 'off'}"
/>

<div class="">
	<slot />
</div>

<style>
	#transition {
		mask-image: url(/mask.svg);
		mask-position: 50% 50%;
		mask-size: 0;
		mask-repeat: no-repeat;
	}
	#transition.on {
		mask-size: 120%;
	}
</style>
