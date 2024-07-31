import { redirect } from "@sveltejs/kit";
import { get_current_user } from "../../lib/auth.js"

export async function load({ locals, cookies }) {
    console.log(get_current_user);
    let user = await get_current_user(locals, cookies);

    if (!user) {
        throw redirect(303, "/");
    }
    if (!(user.role === "admin" || user.role === "moderator")) {
        throw redirect(303, "/");
    }

    return {
        user
    }
}
