<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { SelectedTabNavItem } from '$lib/dashboard/stores/layout/TabNav';
	import { onMount } from 'svelte';

	const RouteItems: TabNavItem[][] = [
		[
			{
				label: 'Overview',
				href: `/dashboard/${$page.params.siteId}`
			},
			{
				label: 'Posts',
				href: `/dashboard/${$page.params.siteId}/posts`
			}
		]
	];

	let routeItemIndex = RouteItems.findIndex((items) =>
		items.some((item) => item.href === $page.url.pathname)
	);
	$: routeItemIndex = RouteItems.findIndex((items) =>
		items.some((item) => item.href === $page.url.pathname)
	);

	let items = RouteItems[routeItemIndex] as TabNavItem[] | undefined;
	$: items = RouteItems[routeItemIndex] as TabNavItem[] | undefined;

	export let hovering = 0;

	let selectedIndex = items?.findIndex((item) => item.href === $page.url.pathname) ?? -1;

	let hoveringEl: HTMLElement;
	let selectedEl: HTMLElement;

	let itemEls: HTMLLIElement[] = [];

	$: if (selectedEl) {
		selectedEl.style.width = `${itemEls[selectedIndex].clientWidth - 24}px`;
		selectedEl.style.left = `${itemEls[selectedIndex].offsetLeft + 12}px`;
	}
</script>

{#if items}
	<nav>
		<ul id="tabnav" class="relative flex py-1.5">
			<div id="hovering" bind:this={hoveringEl} />
			<div id="selected" bind:this={selectedEl} />

			{#each items as item, i}
				<li bind:this={itemEls[i]}>
					<button
						class="py-1 px-3 text-sm"
						on:mouseenter={(e) => {
							hovering = i;

							hoveringEl.style.width = `${e.currentTarget.clientWidth}px`;
							hoveringEl.style.height = `${e.currentTarget.clientHeight}px`;
							hoveringEl.style.left = `${e.currentTarget.offsetLeft}px`;
							hoveringEl.style.top = `${e.currentTarget.offsetTop}px`;
						}}
						on:click={() => {
							selectedIndex = i;
							goto(item.href);
						}}
					>
						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	#hovering {
		@apply absolute bg-sb-blue/20 rounded-sm transition-[width,left] pointer-events-none opacity-0;
	}
	nav:hover #hovering {
		@apply opacity-100;
	}

	#selected {
		@apply absolute bg-sb-blue h-0.5 bottom-0 duration-200;
	}
</style>
