import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.layer.css";
import "@mantine/dropzone/styles.layer.css";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<MantineProvider>
			<ModalsProvider>
				<Notifications />
				<App />
			</ModalsProvider>
		</MantineProvider>
	</QueryClientProvider>
);