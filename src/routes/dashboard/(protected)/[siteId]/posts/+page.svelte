<script lang="ts">
	import { goto } from '$app/navigation';
	import { timeSince } from '$lib/utils.js';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';

	export let data;

	$: ({ posts, site } = data);
</script>

<ul id="posts" class="container flex flex-col gap-2 py-6">
	{#each posts as post}
		<li
			class="grid w-full grid-cols-[30%,calc(65%-32px),5%] items-center gap-4 rounded-md border border-sb-blue/50 bg-sb-blue/10 p-4 shadow-md shadow-sb-blue/10"
		>
			<div class="flex items-center gap-4 text-left">
				<button on:click={() => goto(`posts/${post.id}`)}>
					<img
						class="aspect-square h-12"
						src={post.cover_image ?? 'https://placehold.co/48'}
						alt=""
					/>
				</button>

				<div class="flex flex-col gap-1 text-sm">
					<button on:click={() => goto(`posts/${post.id}`)} class="font-bold">{post.title}</button>
					<a
						href={site.url ? 'https://' + site.url + '/posts/' + post.id : null}
						class="text-neutral-700"
					>
						/{post.id}
					</a>
				</div>
			</div>

			<div class="flex flex-col gap-1 text-left text-sm text-neutral-700">
				<span class="block w-full overflow-x-hidden text-ellipsis whitespace-nowrap">
					{post.content}
				</span>
				<span>
					{timeSince(new Date(post.created_at))}
				</span>
			</div>

			<div class="flex justify-end text-right">
				<!-- <Menu class="relative">
					<MenuButton>...</MenuButton>
					<MenuItems class="absolute bottom-0 right-0 translate-y-full">
						<MenuItem let:active>
							<a href="/account-settings" class:active>Account settings</a>
						</MenuItem>
						<MenuItem let:active>
							<a href="/documentation" class:active>Documentation</a>
						</MenuItem>
					</MenuItems>
				</Menu> -->
			</div>
		</li>
	{/each}
</ul>
