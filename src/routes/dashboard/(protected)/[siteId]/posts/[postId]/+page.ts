import { supabase } from '$lib/supabase';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async (e) => {
	const { siteId, postId } = e.params;

	if (!siteId) throw new Error('Site ID is required');

	const posts: Post[] =
		(await supabase.from('posts').select().eq('site_id', siteId).eq('id', postId)).data ?? [];

	if (posts.length === 0) {
		throw error(404, 'Post not found');
	}

	return { post: posts[0] };
};
