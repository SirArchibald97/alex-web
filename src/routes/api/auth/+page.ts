import { redirect } from "@sveltejs/kit";
import { PUBLIC_DISCORD_OAUTH_LINK } from "$env/static/public";

export function load() {
    throw redirect(300, PUBLIC_DISCORD_OAUTH_LINK);
}