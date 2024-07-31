export async function DELETE({ request, cookies }) {
    let user = await get_current_user(locals, cookies);

    if (!user) {
        throw redirect(303, "/");
    }
    if (!(user.role === "admin" || user.role === "moderator")) {
        throw redirect(303, "/admin");
    }

    const body = await request.json();

    await pb.collection('transactions').delete(body.target);

    return new Response();
};
