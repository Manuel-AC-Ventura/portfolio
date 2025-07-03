import { Main } from "./components/Main";
import { ThemeProvider } from "./context/themeContext";
import { LanguageProvider } from "./context/languageContext";

export const App = () => {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<Main />
			</ThemeProvider>
		</LanguageProvider>
	);
};
