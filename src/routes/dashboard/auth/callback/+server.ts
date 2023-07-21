import { redirect, type Action } from '@sveltejs/kit';

export const GET: Action = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');

	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}

	throw redirect(303, '/dashboard');
};
