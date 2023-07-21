<script>
	export let data;

	const post = data.post;
</script>

<div class="container py-6">
	<form method="POST">
		<div>
			<label for="title">Title</label>
			<input type="text" name="title" id="title" bind:value={post.title} />
		</div>

		<div>
			<label for="id">Slug</label>
			<input name="id" id="id" bind:value={post.id} />
		</div>

		<div>
			<label for="content">Content</label>
			<textarea name="content" id="content" cols="30" rows="10" bind:value={post.content} />
		</div>

		<button type="submit">Save</button>
	</form>
</div>

<style>
	label {
		display: block;
	}
</style>
