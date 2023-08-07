import { redirect } from "@sveltejs/kit";

export function load() {
    throw redirect(300, "https://discord.com/api/oauth2/authorize?client_id=1003967201298104360&redirect_uri=https%3A%2F%2Flocalhost%3A5173%2Fapi%2Fcallback&response_type=code&scope=identify%20guilds");
}