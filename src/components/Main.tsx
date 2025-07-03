import { About } from "./About";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../context/languageContext";
import { Footer } from "./Footer";
import { Experience } from "./Experience";

export const Main = () => {
  useLanguage();
	const { theme } = useTheme();
	

	return (
		<main
			className={`flex flex-col min-h-screen space-y px-5 transition-colors pb-12 duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
		>
			<Header />
			<About />
			<Skills />
			{ /* <Experience /> */ }
			<Projects />
			<Footer />
		</main>
	);
};
