import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import { error, redirect, type Action } from '@sveltejs/kit';

export const POST: Action = async ({ request, locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session?.user) throw redirect(303, '/dashboard/auth/login');

	const data = await request.formData();

	const redirectUrl = data.get('url') as string;
	const name = data.get('name') as string;

	const profile = await supabase.from('profiles').select().eq('id', session.user.id);

	let res: PostgrestSingleResponse<unknown>;
	if (profile.data?.[0])
		res = await supabase.from('profiles').update({ name }).eq('id', session.user.id);
	else res = await supabase.from('profiles').insert({ name, id: session.user.id });

	if (res.error) throw error(res.status, res.error.message);

	throw redirect(303, redirectUrl);
};
