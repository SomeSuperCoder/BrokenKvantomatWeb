/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
    let edit_account;
    let txes;
    try {
        edit_account = await locals.pb.collection('accounts').getFirstListItem(`username="${params.username}"`);
        edit_account.password = "Don't try hacking this app ;)"
        txes = await locals.pb.collection('transactions').getFullList({
            filter: `target="${edit_account.id}"`,
            sort: '-created',
            expand: 'by,target'
        });
    } catch (err) {
        console.log("Error: ", err);
        return {
            error: true
        }
    }

    return {
        error: false,
        edit_account,
        txes
    };
};
