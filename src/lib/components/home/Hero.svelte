<script lang="ts">
	import Pointer from '$lib/assets/pointer.svg';
	import TakeOff from '$lib/assets/takeoff.jpg';
	import { scrollTo } from 'svelte-smooth-scroll';
	import Header from '../layout/Header.svelte';

	export let isMask = false;

	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id={isMask ? 'hero-mask' : 'hero'}
	class="hero h-[75vh] w-full {isMask ? 'z-10 bg-sb-blue absolute' : 'relative'}"
>
	{#if !isMask}
		{#each Array(500) as _}
			<span
				class="lets font-bold whitespace-nowrap absolute opacity-0 text-sb-blue"
				style="top: {Math.random() * innerHeight}px;
					   left: {Math.random() * innerWidth}px;
					   font-size: {Math.random() * 2 + 1}rem;">Let's talk!</span
			>
		{/each}
	{/if}
	<div
		class="text absolute right-1/2 w-1/2 h-full flex flex-col justify-between items-center text-center py-10"
	>
		<Header simplified={!isMask} noButton={true} />

		<div class="flex flex-col items-center">
			<h1 class="heading {isMask ? 'text-white' : ''}">
				Helping you <br />
				{isMask ? 'stand out' : 'take-off!'}
			</h1>
			<p class="paragraph max-w-md mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos sit. Quibusdam beatae
				quam ratione voluptatem omnis.
			</p>
			<button
				class="text-white h-fit py-3 px-4 rounded-full {isMask ? 'bg-sb-yellow' : 'bg-sb-blue'}"
			>
				Let's Talk!
			</button>
		</div>
		<button on:click={() => scrollTo('headline')}>
			<img src={Pointer} id="pointer" class="h-16" alt="" />
		</button>
	</div>
	<div class="image absolute left-[50vw] top-6 bottom-6 right-8">
		<div
			class="h-full flex bg-[length:50vw] justify-center items-center rounded-[6rem] border-8 border-sb-blue bg-center"
			style="background-image: url({TakeOff});"
		/>
	</div>
</div>

<style>
	@keyframes pointer {
		from {
			margin-top: 0rem;
			margin-bottom: 0rem;
		}
		to {
			margin-top: -1rem;
			margin-bottom: 1rem;
		}
	}

	#pointer {
		animation: pointer infinite both alternate 1000ms ease;
	}

	#hero-mask {
		mask-image: url(/mask.svg);
		mask-position: 50% 50%;
		mask-repeat: no-repeat;
		mask-size: 0;
	}
</style>
