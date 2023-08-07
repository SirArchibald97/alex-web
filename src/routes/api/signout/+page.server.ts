import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    cookies.delete("access_token", { path: "/" });
    cookies.delete("user", { path: "/" });
    throw redirect(301, "/");
}