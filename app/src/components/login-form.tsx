'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm, loginSchema } from '@/types/Login';
import { useForm } from 'react-hook-form';
import { login } from '@/services/authService';

export function Login() {
    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            senha: '',
        },
    });
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(login, (e) => {
                    console.log(e);
                })}
            >
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Entre o seu email abaixo para acessar sua conta
                    </p>
                </div>
                <div className="grid gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel>Email:</FormLabel>
                                <FormControl>
                                    <Input {...field} required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel>Senha:</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </form>
        </Form>
    );
}
