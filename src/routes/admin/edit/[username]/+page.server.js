/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
    let edit_account;
    try {
        edit_account = await locals.pb.collection('accounts').getFirstListItem(`username="${params.username}"`);
    } catch (err) {
        console.log("Error: ", err);
        return {
            error: true
        }
    }

    return {
        error: false,
        edit_account
    };
};
