import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const company = data.get("company")?.toString();
  const message = data.get("message")?.toString();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Champs manquants" }), { status: 400 });
  }

  console.log("Nouveau message :", { name, email, company, message });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
