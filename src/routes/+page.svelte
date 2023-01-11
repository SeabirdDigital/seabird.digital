<script>
	import TakeOff from '$lib/assets/takeoff.jpg';
	import Pointer from '$lib/assets/pointer.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { scrollTo, scrollRef } from 'svelte-scrolling';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: '#upper',
				pin: true, // pin the trigger element while active
				start: 'top top', // when the top of the trigger hits the top of the viewport
				end: '+=500', // end after scrolling 500px beyond the start
				scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			}
		});

		// add animations and labels to the timeline
		tl.addLabel('start')
			.to('#pointer', { opacity: 0, duration: 0.1 })
			.to('#pointer', { height: 0, duration: 0.5 }, 0.1)
			.to('#hero-text', { width: '100%', right: 0, duration: 0.975 }, 0)
			.from('header>div', { width: '50vw', left: '0', duration: 0.975 }, 0)
			.to('#hero-image', { left: '100vw', duration: 0.9 }, 0)
			.fromTo('#hero>div', { height: '100vh' }, { height: '75vh' }, 0)
			.addLabel('end');

		let tl2 = gsap.timeline({
			// yes, we can add it to an entire timeline!
			scrollTrigger: {
				trigger: '#about',
				start: 'top top',
				end: '+=100',
				scrub: 1
			}
		});

		tl2.addLabel('start').fromTo('header>div', { opacity: 0 }, { opacity: 1 }).addLabel('end');
	});
</script>

<header class="">
	<Header class="z-50 fixed top-10 h-16 opacity-0" simplified={false} />
</header>

<div class="overflow-hidden">
	<div id="upper">
		<div id="hero" class="relative h-screen w-full bg-sb-blue/20">
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

		<div id="about" class="container h-screen" use:scrollRef={'about'}>
			<h2>About</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis consequatur, est
				quos et sequi! Eos fugit beatae ratione error dolores id nostrum, culpa fuga? In aut quaerat
				iste quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis
				consequatur, est quos et sequi! Eos fugit beatae ratione error dolores id nostrum, culpa
				fuga? In aut quaerat iste quae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Eius blanditiis consequatur, est quos et sequi! Eos fugit beatae ratione error dolores id
				nostrum, culpa fuga? In aut quaerat iste quae. Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Eius blanditiis consequatur, est quos et sequi! Eos fugit beatae ratione
				error dolores id nostrum, culpa fuga? In aut quaerat iste quae. Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Eius blanditiis consequatur, est quos et sequi! Eos fugit
				beatae ratione error dolores id nostrum, culpa fuga? In aut quaerat iste quae.
			</p>
		</div>
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
</style>
