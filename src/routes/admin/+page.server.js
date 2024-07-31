export async function load({locals}) {
    const accounts = await locals.pb.collection('accounts').getFullList({
        sort: '-created',
    });
    
    return {
        accounts
    }
}
