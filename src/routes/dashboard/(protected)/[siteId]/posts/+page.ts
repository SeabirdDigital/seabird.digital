import { supabase } from '$lib/supabase';
import type { Load } from '@sveltejs/kit';

export const load: Load = async (e) => {
	const { siteId } = e.params;

	if (!siteId) throw new Error('Site ID is required');

	const posts: Post[] = (await supabase.from('posts').select().eq('site_id', siteId)).data ?? [];

	return { posts };
};
