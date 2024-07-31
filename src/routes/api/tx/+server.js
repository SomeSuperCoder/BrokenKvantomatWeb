export async function POST({ request, cookies }) {
    let user = await get_current_user(locals, cookies);

    if (!user) {
        throw redirect(303, "/");
    }
    if (!(user.role === "admin" || user.role === "moderator")) {
        throw redirect(303, "/admin");
    }

    const body = await request.json();
    
    const data = {
        "by": body.by,
        "target": body.target,
        "reason": body.reason,
        "amount": body.amount
    };
    
    await pb.collection('transactions').create(data);

    return new Response();
};
