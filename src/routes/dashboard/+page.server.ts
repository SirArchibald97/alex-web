import { BOT_TOKEN } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
    const access_token = cookies.get("access_token");
    if (!access_token) throw redirect(301, "/api/auth");
    if (access_token === undefined) throw redirect(301, "/api/auth");

    const user_data = cookies.get("user");
    if (!user_data) throw redirect(301, "/api/auth");

    const user_guilds = await fetch(`https://discord.com/api/users/@me/guilds`, { headers: { Authorization: `Bearer ${access_token}` } });
    const guild_data = await user_guilds.json();
    const admin_guilds = guild_data.filter((guild: { permissions: number; }) => (guild.permissions & 0x8) === 0x8);

    const bot_guilds = await fetch(`https://discord.com/api/users/@me/guilds`, { headers: { Authorization: `Bot ${BOT_TOKEN}` } });
    const bot_guild_data = await bot_guilds.json();

    const guilds_with_bot = admin_guilds.filter((g: { id: any; }) => bot_guild_data.find((b: { id: any; }) => b.id === g.id));
    const guilds_without_bot = admin_guilds.filter((g: { id: any; }) => !bot_guild_data.find((b: { id: any; }) => b.id === g.id));

    return { user: JSON.parse(user_data), all_guilds: admin_guilds, guilds_with_bot, guilds_without_bot };
}