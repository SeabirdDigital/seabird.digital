<script>
	import Phone from '$lib/assets/phone.jpg';
	import Form from '$lib/sections/contact/Form.svelte';
</script>

<div id="hero">
	<div class="image" style="background-image: url('{Phone}');">
		<h1>Kontakt</h1>
	</div>
</div>

<div id="contact">
	<div>
		<Form />
	</div>
</div>

<style lang="postcss">
	#hero {
		background-color: var(--sb-dark);
	}

	#hero .image {
		@apply /**/
            container;

		position: relative;
		width: 100%;
		aspect-ratio: 16/9;

		background-size: cover;

		border-radius: 0 0 50px 50px;
	}

	h1 {
		position: absolute;
		bottom: 4rem;
		left: 3rem;
	}

	#contact {
		background-color: var(--sb-dark);
	}
	#contact > div {
		@apply /**/
            container
			py-32;

		display: flex;
		flex-direction: column;
	}

	button {
		width: fit;
	}
</style>
