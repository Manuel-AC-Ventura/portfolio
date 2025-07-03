import "./i18n/i18n";
import "./index.css";
import { App } from "./App.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
	<App />
);
