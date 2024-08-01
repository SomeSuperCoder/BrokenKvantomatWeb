import { get_current_user } from '../../../lib/auth.js';

export async function GET({ url, cookies, locals }) {
    let user = await get_current_user(locals, cookies);

    if (!user) {
        throw redirect(303, "/");
    }
    if (!(user.role === "admin" || user.role === "moder")) {
        throw redirect(303, "/admin");
    }

    let response;

    try {
        await locals.pb.collection('transactions').getFirstListItem(`username="${url.searchParams.username}"`)
        response = true;
    } catch (err) {
        console.log("Error: ", err);
        response = false;
    }

    return new Response(JSON.stringify(response));
};
