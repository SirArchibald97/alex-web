// @ts-nocheck
import { BOT_TOKEN, API_KEY } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params, cookies }) {
    // If not logged in, redirect to login page
    const access_token = cookies.get("access_token");
    if (!access_token) throw redirect(301, "/api/auth");

    const user_data = cookies.get("user");
    if (!user_data) throw redirect(301, "/api/auth");

    const guild_member_res = await fetch(`https://discord.com/api/users/@me/guilds`, { headers: { Authorization: `Bearer ${access_token}` } });
    const permissions = (await guild_member_res.json()).find(guild => guild.id === params.server_id).permissions;

    const guild_res = await fetch(`https://discord.com/api/guilds/${params.server_id}`, { headers: { Authorization: `Bot ${BOT_TOKEN}` } });
    const guild = await guild_res.json();

    // If not in guild, throw 404
    if (!permissions) throw error(404, "Guild not found.");
    // If not admin, throw 403
    if ((permissions & 0x8) !== 0x8) throw error(403, "You do not have permission to view this page.");

    const channels_res = await fetch(`https://discord.com/api/guilds/${params.server_id}/channels`, { headers: { Authorization: `Bot ${BOT_TOKEN}` } });
    const channels = await channels_res.json();

    const alex_guilds_res = await fetch(`https://api.sirarchibald.dev/alex/guilds/${params.server_id}`, { headers: { auth: API_KEY, "Content-Type": "application/json" } });
    const alex_guild = await alex_guilds_res.json();
    if (alex_guild.code === 404) throw error(404, "Guild not found.");

    return {
        user: JSON.parse(user_data),
        guild: guild,
        channels: channels.filter(c => c.type === 0 || c.type === 5),
        settings: alex_guild.guild.settings,
    };
}

export const actions = {
    savebeechanges: async ({ params, request }) => {
        const data = await request.formData();
        const body = { toggled: data.get("toggled"), channel: data.get("channel").toString(), role: data.get("role").toString() };

        const update_res = await fetch("https://api.sirarchibald.dev/alex/guilds/" + params.server_id + "/bee", {
            method: "POST",
            headers: { "auth": API_KEY, "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const update = await update_res.json();

        return update ? update : { success: false };
    },

    saveupdateschanges: async ({ params, request }) => {
        const data = await request.formData();
        const body = { toggled: data.get("toggled"), channel: data.get("channel").toString(), role: data.get("role").toString() };

        const update_res = await fetch("https://api.sirarchibald.dev/alex/guilds/" + params.server_id + "/updates", {
            method: "POST",
            headers: { "auth": API_KEY, "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const update = await update_res.json();

        return update ? update : { success: false };
    },
}