'use server';
import { signIn, signOut } from '@/auth';
import { LoginForm } from '@/types/Login';

export async function login(formData: LoginForm) {
    await signIn('credentials', formData);
}

export async function logout() {
    await signOut();
}
