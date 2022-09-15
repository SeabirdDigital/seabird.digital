import type { APIContext } from "astro";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY || "");

export async function post({ request }: APIContext) {
    const body = await request.formData()

    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
          to: "filip.martensson@seabird.digital", // Your email where you'll receive emails
          from: "noreply@seabird.digital", // your website email address here
          replyTo: body.get("email")?.toString() || undefined,
          subject: `${body.get("firstN")} ${body.get("lastN")} to Seabird Digital - New entry from contact form`,
          html: `Förnamn: ${body.get("firstN")}<br>Efternamn: ${body.get("lastN")}<br>Email: ${body.get("email")}<br>Hemsida?: ${body.get("website")}<br>Meddelande:<br>${body.get("message")}`,
        });
    } catch (error: any) {
    console.log(process.env.SENDGRID_API_KEY);
    return new Response(JSON.stringify({ error: error.message }), { status: error.statusCode || 500 });
    }
  
    return Response.redirect("localhost:3000", 307);;
  }