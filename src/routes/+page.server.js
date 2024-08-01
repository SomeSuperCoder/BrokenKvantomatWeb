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
    login: async ({ locals, request, cookies }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        
        let record;
        try  {
            const login = data.login;
            const hashed_password = await hashValue(data.password);

            record = await locals.pb.collection('accounts').getFirstListItem(`username='${login}' && password='${hashed_password}'`, {});

            cookies.set('session', JSON.stringify({login, hashed_password}), {
                path: '/',
                httpOnly: true, // This makes the cookie HttpOnly
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 365 * 60 // 60 years
            });
        } catch (err) {
            console.log("Error: ", err);

            return {
                error: true,
                error_text: "Неверные данные для входа",
                login: data.login
            }
        }
        
        if (record.role === "admin" || record.role === "moder") {
            throw redirect(303, "/admin");
        } else {
            throw redirect(303, "/profile");
        }
    },
    logout: async ({ cookies }) => {
        console.log("LOGOUT!");
        cookies.delete("session", { path: "/" });
    }
}
