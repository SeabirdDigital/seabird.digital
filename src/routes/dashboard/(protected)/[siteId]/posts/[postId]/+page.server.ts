import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals, params }) => {
		const data = await request.formData();

		const oldId = params.postId;

		const id = data.get('id')?.toString();
		const title = data.get('title')?.toString();
		const content = data.get('content')?.toString();

		if (!id || !title || !content) {
			throw error(400, 'Missing parameters');
		}

		const updateResponse = await locals.supabase
			.from('posts')
			.update({ id, title, content })
			.eq('id', oldId);

		console.log({ id, title, content });
		console.log(updateResponse);
		if (updateResponse.error) throw error(updateResponse.status, updateResponse.error.message);

		if (oldId != id) throw redirect(303, `${id}`);
	}
};
