import { Paper, Button, Title } from '@mantine/core';
import { Form, useForm } from 'react-hook-form';
import { TextInput, PasswordInput } from 'react-hook-form-mantine';
import { LoginForm, loginSchema } from '@/types/Login';
import classes from './login.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const { control } = useForm<LoginForm>({
        defaultValues: {
            email: '',
            senha: '',
        },
        resolver: zodResolver(loginSchema),
    });

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Bem-vindo de volta!
                </Title>

                <Form control={control} onSubmit={() => navigate('/admin')}>
                    <TextInput
                        name="email"
                        control={control}
                        label="E-mail:"
                        placeholder="teste@gmail.com"
                        size="md"
                    />
                    <PasswordInput
                        name="senha"
                        control={control}
                        label="Senha:"
                        placeholder="Sua senha"
                        mt="md"
                        size="md"
                    />
                    <Button mt="xl" size="md" type="submit">
                        Login
                    </Button>
                </Form>
            </Paper>
        </div>
    );
}
