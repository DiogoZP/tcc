import NextAuth from 'next-auth';
import { setCookie } from 'cookies-next';
import CredentialsProvider from 'next-auth/providers/credentials';
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/login',
        error: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {},
                senha: {},
            },
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const response = await fetch(`${process.env.API_URL}/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify({
                            email: credentials.email,
                            senha: credentials.senha,
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    });

                    if (!response.ok) return null;

                    const authData = await response.json();

                    if (!authData.token || !authData.user) return null;

                    await setCookie('token', authData.token);

                    return {
                        id: authData.user.id,
                        email: authData.user.email,
                        name: authData.user.nome,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
});
