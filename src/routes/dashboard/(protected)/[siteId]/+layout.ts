import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, parent }) => {
	const { session, supabase } = await parent();

	const sites = await supabase.from('sites').select('*').eq('id', params.siteId);

	if (sites.error) throw sites.error;
	if (sites.data.length === 0) {
		throw error(404, 'Site not found');
	}

	const user = session?.user;

	if (!user) {
		throw error(401, 'Unauthorized');
	}

	const userSiteRelations = await supabase.from('userSites').select();

	if (userSiteRelations.error) throw userSiteRelations.error;
	if (userSiteRelations.data.length === 0) {
		throw error(401, 'Unauthorized');
	}

	return { site: sites.data[0] };
};
