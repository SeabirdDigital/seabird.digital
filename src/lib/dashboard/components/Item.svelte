<script lang="ts">
	type HeaderProps = {
		image?: {
			uri: string;
			alt?: string;
		};
		title?: string;
		subtitle?: string;

		data?: { [name: string]: string };
	};

	export let header: HeaderProps | undefined = undefined;

	const hasHeader =
		header ||
		$$slots.header ||
		$$slots.image ||
		$$slots.title ||
		$$slots.subtitle ||
		$$slots.actions;
</script>

<div
	class="rounded-md border-sb-blue/50 bg-sb-blue/10 shadow-md shadow-sb-blue/10 {$$slots.default
		? 'border'
		: ''}"
>
	{#if hasHeader}
		<slot name="header">
			<div class="flex justify-between border-b p-4">
				<div class="flex">
					<div class="flex w-72 items-center gap-4">
						{#if header?.image || $$slots.image}
							<slot name="image">
								<img
									class="aspect-square h-12"
									src={header?.image?.uri ?? 'https://placehold.co/48'}
									alt={header?.image?.uri}
								/>
							</slot>
						{/if}

						<div class="flex flex-col gap-0.5">
							{#if header?.title || $$slots.title}
								<slot name="title">
									<h3>{header?.title}</h3>
								</slot>
							{/if}

							{#if header?.subtitle || $$slots.subtitle}
								<slot name="subtitle">
									<p class="text-sb-gray/50">{header?.subtitle}</p>
								</slot>
							{/if}
						</div>
					</div>

					{#if header?.data}
						<div class="grid grid-rows-2 gap-0.5">
							{#each Object.entries(header.data) as [key, value]}
								<p>
									<span class="text-sb-gray/50">{key}</span>
									<span>{value}</span>
								</p>
							{/each}
						</div>
					{/if}
				</div>

				<div>
					{#if $$slots.actions}
						<slot name="actions" />
					{/if}
				</div>
			</div>
		</slot>
	{/if}

	<div>
		<slot />
	</div>
</div>
