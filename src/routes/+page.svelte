<script>
	import Pointer from '$lib/assets/pointer.svg';
	import TakeOff from '$lib/assets/takeoff.jpg';
	import Header from '$lib/components/layout/Header.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { scrollRef, scrollTo } from 'svelte-scrolling';

	let width = 0;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: '#upper',
				pin: true, // pin the trigger element while active
				start: 0, // when the top of the trigger hits the top of the viewport
				end: '+=100', // end after scrolling 500px beyond the start
				scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				snap: 'labels'
			}
		});

		// add animations and labels to the timeline
		tl.addLabel('start')
			.to('#pointer', { opacity: 0, duration: 0.1 })
			.to('#pointer', { height: 0, duration: 0.5 }, 0.1)
			.to('#hero-text', { width: '100%', right: '0vw', duration: 0.975 }, 0)
			.to('header', { width: '100%', right: '0%', duration: 0.975 }, 0)
			.to('#hero-image', { left: '100vw', duration: 0.9 }, 0)
			.fromTo('#hero', { height: '100vh' }, { height: '75vh' }, 0)
			.fromTo('#upper-container', { marginBottom: '0vh' }, { marginBottom: '-25vh' }, 0)
			.addLabel('end');

		let tl3 = gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				start: 0, // when the top of the trigger hits the top of the viewport
				end: '+=2500', // end after scrolling 500px beyond the start
				scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			}
		});

		// add animations and labels to the timeline
		tl3.addLabel('start').to('#banner>div', { marginLeft: '-100vw' }).addLabel('end');

		gsap
			.timeline({
				// yes, we can add it to an entire timeline!
				scrollTrigger: {
					start: 600,
					end: '+=100',
					scrub: 1
				}
			})
			.addLabel('start')
			.fromTo('header', { opacity: 0 }, { opacity: 1 }, 0)
			.addLabel('end');

		gsap
			.timeline({
				// yes, we can add it to an entire timeline!
				scrollTrigger: {
					start: 500,
					end: '+=200',
					toggleActions: 'restart none none none'
				}
			})
			.addLabel('start')
			.fromTo('header', { top: '-64px' }, { top: '40px' }, 0)
			.addLabel('end');
	});
</script>

<svelte:window on:resize={() => ScrollTrigger.refresh()} bind:innerWidth={width} />

<header class="z-50 fixed top-10 right-1/2 w-1/2">
	<Header class="w-full h-16" simplified={false} />
</header>

<div id="upper-container" class="overflow-hidden">
	<div id="upper" class="">
		<div id="hero" class="relative h-screen w-full">
			<div
				id="hero-text"
				class="absolute right-1/2 w-1/2 h-full flex flex-col justify-between items-center text-center py-10"
			>
				<Header />

				<div class="flex flex-col gap-3">
					<h1 class="font-ultra text-sb-blue text-4xl">Helping your <br /> brand take-off!</h1>
					<p class="w-[24rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos sit. Quibusdam beatae
						quam ratione voluptatem omnis.
					</p>
				</div>
				<button use:scrollTo={{ ref: 'about', duration: 2500 }}>
					<img src={Pointer} id="pointer" class="h-16" alt="" />
				</button>
			</div>
			<div id="hero-image" class="absolute left-[50vw] top-6 bottom-6 right-8">
				<div
					class="h-full flex justify-center items-center rounded-3xl bg-[length:50vw] bg-center"
					style="background-image: url({TakeOff});"
				/>
			</div>
		</div>
	</div>
</div>
<div id="banner" class="w-full bg-sb-blue text-white/80 py-4 text-3xl font-ultra overflow-hidden">
	<div class="flex gap-4 whitespace-nowrap">
		{#each Array(Math.ceil(width / 632) * 2) as i}
			<span>En lite annorlunda digitalbyrå</span><span style="color: #F1A208;">✦</span>
		{/each}
	</div>
</div>
<div id="about" class="" use:scrollRef={'about'}>
	<h2>About</h2>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis consequatur, est quos
		et sequi! Eos fugit beatae ratione error dolores id nostrum, culpa fuga? In aut quaerat iste
		quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis consequatur, est
		quos et sequi! Eos fugit beatae ratione error dolores id nostrum, culpa fuga? In aut quaerat
		iste quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis
		consequatur, est quos et sequi! Eos fugit beatae ratione error dolores id nostrum, culpa fuga?
		In aut quaerat iste quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
		blanditiis consequatur, est quos et sequi! Eos fugit beatae ratione error dolores id nostrum,
		culpa fuga? In aut quaerat iste quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
		Eius blanditiis consequatur, est quos et sequi! Eos fugit beatae ratione error dolores id
		nostrum, culpa fuga? In aut quaerat iste quae.
	</p>
</div>

d

<style lang="postcss">
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
</style>
