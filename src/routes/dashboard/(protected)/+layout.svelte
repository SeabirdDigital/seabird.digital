<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/dashboard/components/Breadcrumbs.svelte';
	import Item from '$lib/dashboard/components/Item.svelte';
	import TabNav from '$lib/dashboard/components/TabNav.svelte';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		if (!data.profile)
			(document.getElementById('profileModal') as HTMLDialogElement | undefined)?.showModal();

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<dialog class="rounded-md bg-white" id="profileModal">
	<Item
		header={{
			title: 'Complete your profile'
		}}
	>
		<form action="/dashboard/api/profile?/update" method="POST">
			<input type="hidden" name="url" value={$page.url.pathname} />

			<label for="name">Name</label>
			<input type="text" name="name" id="name" />

			<input type="submit" value="Submit" />
		</form>
	</Item>
</dialog>

<div class="border-b border-sb-blue/75 bg-sb-blue/10">
	<div class="container">
		<div class="py-4">
			<Breadcrumbs>
				<span>Seabird Digital</span>
				<span>{data.profile?.name ?? 'Finish setup'}</span>
			</Breadcrumbs>
		</div>

		<TabNav />
	</div>
</div>

<slot />
