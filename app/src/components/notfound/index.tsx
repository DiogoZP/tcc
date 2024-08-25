import Illustration from "./illustration";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./notfound.module.scss";

function NotFound() {
	return (
		<Container className={classes.root}>
			<div className={classes.inner}>
				<Illustration className={classes.image} />
				<div className={classes.content}>
					<Title className={classes.title}>
						Página não encontrada!
					</Title>
					<Text
						c="dimmed"
						size="lg"
						ta="center"
						className={classes.description}
					>
						A página que você está tentando abrir não existe. Você
						pode ter digitado o endereço incorretamente ou a página
						foi movida para outra URL.
					</Text>
					<Group justify="center">
						<Link to="/">
							<Button size="md">Voltar ao início</Button>
						</Link>
					</Group>
				</div>
			</div>
		</Container>
	);
}

export default NotFound;
