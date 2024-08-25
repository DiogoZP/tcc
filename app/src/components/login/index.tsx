import {
	Paper,
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Title,
} from "@mantine/core";
import classes from "./login.module.scss";

function Login() {
	return (
		<div className={classes.wrapper}>
			<Paper className={classes.form} radius={0} p={30}>
				<Title
					order={2}
					className={classes.title}
					ta="center"
					mt="md"
					mb={50}
				>
					Welcome back to Mantine!
				</Title>

				<TextInput
					label="Email address"
					placeholder="hello@gmail.com"
					size="md"
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					mt="md"
					size="md"
				/>
				<Checkbox label="Keep me logged in" mt="xl" size="md" />
				<Button fullWidth mt="xl" size="md">
					Login
				</Button>
			</Paper>
		</div>
	);
}

export default Login;
