export async function DELETE({ request, cookies }) {
    let user = await get_current_user(locals, cookies);

    if (!user) {
        throw redirect(303, "/");
    }
    if (!(user.role === "admin" || user.role === "moderator")) {
        throw redirect(303, "/admin");
    }

    const body = await request.json();

    const tx_id = body.tx_id;

    return new Response();
};
