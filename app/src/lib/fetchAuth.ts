'use server';
import { logout } from '@/services/authService';
import { getCookie } from 'cookies-next';

export const fetchAuth = async (
    input: string | URL | Request,
    init?: RequestInit | undefined,
): Promise<Response> => {
    const token = getCookie('token');

    const response = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    });

    if (response.status == 401) {
        await logout();
    }

    return response;
};
