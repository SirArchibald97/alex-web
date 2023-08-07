import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export async function load({ url, cookies }) {
    const token_request_url = `https://discord.com/api/oauth2/token`;
    // @ts-ignore
    const code = url.searchParams.get("code").toString();
    console.log(code);

    const response = await fetch(token_request_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: `https://api.sirar/api/callback`,
            scope: 'identify guilds',
        }),
    });
    const json = await response.json();
    const access_token = json.access_token;

    const user = await fetch(`https://discord.com/api/users/@me`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    const user_data = await user.json();

    cookies.set("access_token", access_token, { path: "/", maxAge: new Date(json.expires_in * 1000 + Date.now()).getTime() });
    cookies.set("user", JSON.stringify(user_data), { path: "/", maxAge: new Date(json.expires_in * 1000 + Date.now()).getTime() });
    throw redirect(300, "/dashboard");
}