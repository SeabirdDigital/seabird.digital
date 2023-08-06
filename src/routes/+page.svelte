<script>
	import Logo from '$lib/assets/logo.svg';
	import Pointer from '$lib/assets/pointer.svg';
	import StandOut from '$lib/assets/stand-out.webp';
	import TakeOff from '$lib/assets/takeoff.jpg';
	import Hero from '$lib/components/home/Hero.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import transitionOn from '$lib/stores/transitionOn';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { scrollTo, smoothScroll } from 'svelte-smooth-scroll';

	let width = 0;

	onMount(() => {
		window.onscroll = () => console.log(scrollY);

		const heroHeight = (window.innerHeight / 4) * 3;

		gsap.registerPlugin(ScrollTrigger);

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#page',
					pin: true,
					start: 0,
					end: `+=${1000}`,
					scrub: true
				}
			})
			.addLabel('start')
			.addLabel('end');

		const talkTimeline = gsap.timeline({
			scrollTrigger: {
				start: 300,
				end: `+=500`,
				scrub: true
			}
		});
		talkTimeline.addLabel('start');

		const lets = document.getElementsByClassName('lets');
		for (let i = 0; i < lets.length; i++) {
			const l = lets[i];
			talkTimeline.to(l, { opacity: 1 }, i / lets.length);
		}

		talkTimeline.addLabel('end');

		gsap
			.timeline({
				scrollTrigger: {
					start: 0,
					end: `+=${1000 + 200}`,
					scrub: true
				}
			})
			.addLabel('start')
			.to('#pointer', { opacity: 0, duration: 0.1 })
			.to('#pointer', { height: 0, duration: 0.5 }, 0.1)
			.fromTo('#hero-mask', { maskSize: 0 }, { maskSize: '120%' }, 0.5)
			.to('.hero .text', { width: '100%', right: '0vw', duration: 0.975 }, 0)
			.to('.hero .paragraph', { opacity: 0 }, 0)
			.to('.hero .paragraph', { marginBottom: 0, height: 0 }, 0.2)
			.to('.hero .heading', { fontSize: '4rem' }, 0.1)
			.to('header', { width: '100%', right: '0%', duration: 0.975 }, 0)
			.to('.hero .image', { left: '100vw', duration: 0.9 }, 0)
			.fromTo('.hero', { height: '100vh' }, { height: '75vh' }, 0)
			.fromTo('header', { display: 'none' }, { display: 'block' })
			.addLabel('end');

		gsap
			.timeline({
				scrollTrigger: {
					start: 0,
					end: '+=2000',
					scrub: true
				}
			})
			.addLabel('start')
			.to('#banner>div', { marginLeft: '-100vw' })
			.addLabel('end');

		gsap
			.timeline({
				scrollTrigger: {
					start: 1000 + heroHeight + 200,
					end: '+=200',
					scrub: true
				}
			})
			.addLabel('start')
			.fromTo('header', { opacity: 0 }, { opacity: 1 }, 0)
			.addLabel('end');

		transitionOn.set(false);
	});
</script>

<svelte:window on:resize={() => ScrollTrigger.refresh()} bind:innerWidth={width} />

<header class="z-50 fixed top-10 right-1/2 w-1/2 opacity-0">
	<Header class="h-16" simplified={false} noButton={false} />
</header>

<div id="page">
	<div id="upper-container" class="overflow-hidden">
		<div id="upper" class="">
			<Hero isMask />
			<Hero />
		</div>
	</div>
	<div
		id="banner"
		class="w-full bg-sb-blue text-white py-4 text-heading font-ultra overflow-hidden"
	>
		<div class="flex gap-4 whitespace-nowrap">
			{#each Array(Math.ceil(width / 632) * 2) as i}
				<span>En lite annorlunda digitalbyrå</span><span class="text-sb-yellow">✦</span>
			{/each}
		</div>
	</div>

	<div class="container py-24" use:smoothScroll={'headline'}>
		<span class="text-heading font-light text-sb-blue">
			För många sidor är fortfarande kvar<br />
			i 90-talet. Vi skapar moderna hemsidor<br />
			utan att skada din plånbok.
		</span>
	</div>

	<div class="relative container grid grid-cols-2 gap-12 py-12">
		<div class="bg-cover bg-center rounded-3xl" style="background-image: url({TakeOff});" />
		<div class="py-16">
			<h2>Hemsidor som hjälper<br />dig sälja mer</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque totam corrupti omnis
				necessitatibus facilis ducimus quos dolorum modi impedit. Aperiam mollitia, vel vero aliquid
				enim reprehenderit beatae illum repudiandae sapiente?
			</p>
		</div>
	</div>

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
</div>
