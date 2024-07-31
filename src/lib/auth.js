export async function get_current_user(locals, cookies) {
    try {
        const authData = JSON.parse(cookies.get("session"));
        const user = await locals.pb.collection('accounts').getFirstListItem(`username='${authData.login}' && password='${authData.hashed_password}'`, {});

        return user;
    } catch (err) {
        console.log("Error: ", err);
        return null;
    }
}
