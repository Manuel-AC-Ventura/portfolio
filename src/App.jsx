import { Home } from "@/components/Home";
import { Header } from "@/components/Header";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/themeContext";

export const App = () => {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <ThemeProvider>
          <Header />
          <Home />
          <Skills />
          <Projects />
          <Footer />
        </ThemeProvider>
      </div>
    );
};