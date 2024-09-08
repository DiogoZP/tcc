import { Paper, TextInput, PasswordInput, Button, Title } from '@mantine/core';
import classes from './login.module.scss';

function Login() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Bem-vindo de volta!
                </Title>

                <TextInput label="E-mail:" placeholder="teste@gmail.com" size="md" />
                <PasswordInput label="Senha:" placeholder="Sua senha" mt="md" size="md" />
                <Button mt="xl" size="md">
                    Login
                </Button>
            </Paper>
        </div>
    );
}

export default Login;
