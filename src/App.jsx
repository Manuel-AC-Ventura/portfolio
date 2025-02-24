import { Home } from "@/components/Home";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { ThemeProvider } from "@/context/themeContext";
import { TranslationProvider } from "./context/translationContext";

export const App = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ThemeProvider>
        <TranslationProvider>
          <Header />
          <Home />
          <Skills />
          <Projects />
          <Footer />
        </TranslationProvider>
      </ThemeProvider>
    </div>
  );
};
