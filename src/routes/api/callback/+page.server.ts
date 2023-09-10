import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url, cookies }) {
    const token_request_url = `https://discord.com/api/oauth2/token`;
    const code = url.searchParams.get("code");

    const response = await fetch(token_request_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code || "",
            redirect_uri: url.hostname === "localhost" ? "https://localhost:5173/api/callback" : "https://alex.sirarchibald.dev/api/callback",
            scope: 'identify guilds',
        }),
    });
    const json = await response.json();
    const access_token = json.access_token;

    const user = await fetch(`https://discord.com/api/users/@me`, { headers: { Authorization: `Bearer ${access_token}` } });
    const user_data = await user.json();

    cookies.set("access_token", access_token, { path: "/" });
    cookies.set("user", JSON.stringify(user_data), { path: "/" });
    console.log("Set cookies, redirecting to dashboard...");

    throw redirect(300, "/dashboard");
}