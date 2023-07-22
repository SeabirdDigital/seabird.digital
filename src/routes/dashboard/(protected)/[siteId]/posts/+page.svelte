<script lang="ts">
	import { goto } from '$app/navigation';
	import Item from '$lib/dashboard/components/Item.svelte';
	import { timeSince } from '$lib/utils.js';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';

	export let data;

	$: ({ posts, site } = data);
</script>

<ul id="posts" class="container flex flex-col gap-2 py-6">
	{#each posts as post}
		<li>
			<Item>
				<button slot="image" on:click={() => goto(`posts/${post.id}`)}>
					<img
						class="aspect-square h-12"
						src={post.cover_image ?? 'https://placehold.co/48'}
						alt=""
					/>
				</button>

				<button slot="title" on:click={() => goto(`posts/${post.id}`)} class="font-bold">
					{post.title}
				</button>
				<a
					slot="subtitle"
					href={site.url ? 'https://' + site.url + '/posts/' + post.id : null}
					class="text-neutral-700"
				>
					/{post.id}
				</a>
			</Item>
		</li>
	{/each}
</ul>
