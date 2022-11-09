import sendgrid from '@sendgrid/mail';
import type { RequestEvent } from '@sveltejs/kit';

sendgrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY || '');
const isDeployed = import.meta.env.VERCEL_URL != undefined;

export const POST = async (event: RequestEvent): Promise<Response> => {
	const body = await event.request.formData();
	console.log(body.entries);
	console.log(import.meta.env.VITE_SENDGRID_API_KEY);

	try {
		await sendgrid.send({
			to: 'filip.martensson@seabird.digital', // Your email where you'll receive emails
			from: 'noreply@seabird.digital', // your website email address here
			replyTo: body.get('email')?.toString() || undefined,
			subject: `${body.get('name')} to Seabird Digital - New entry from contact form`,
			html: `First name: ${body.get('name')}<br>Email: ${body.get('email')}<br>Website?: ${body.get(
				'website'
			)}<br>Message:<br>${body.get('message')}`
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error, message: error.message }), {
			status: error.statusCode || 500
		});
	}

	return Response.redirect(
		(isDeployed ? 'https://' + import.meta.env.VERCEL_URL : 'http://localhost:3000') + '/tack',
		307
	);
};
