import { redirect } from '@sveltejs/kit';
import { createHash } from 'crypto';

const hashValue = val =>
    new Promise(resolve =>
      setTimeout(
        () => resolve(createHash('sha256').update(val).digest('hex')),
        0
      )
);

export const actions = {
    default: async ({locals, request}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        
        let record;
        try  {
            const login = data.login;
            const hashed_password = await hashValue(data.password);
            console.log(hashed_password);
            record = await locals.pb.collection('accounts').getFirstListItem(`username='${login}' && password='${hashed_password}'`, {});
        } catch (err) {
            console.log("Error: ", err);

            return {
                error: true,
                error_text: "Неверные данные для входа",
                login: data.login
            }
        }
        
        if (record.role === "admin" || record.role === "moderator") {
            throw redirect(303, "/admin");
        } else {
            throw redirect(303, "/profile");
        }
    }
}
