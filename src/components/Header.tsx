import { useState } from "react";
import i18next from "../i18n/i18n";
import { TbWorld, TbMenu2, TbX } from "react-icons/tb";
import { useTheme } from "../hooks/useTheme";
import { LuGithub, LuSun, LuMoon } from "react-icons/lu";
import { useLanguage } from "../context/languageContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "projects_title", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 font-sans backdrop-blur-md shadow-md ${theme === "dark" ? "bg-black/60" : "bg-white/80"}`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide select-none">Manuel Ventura</h1>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <TbX size={28} /> : <TbMenu2 size={28} />}
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className="uppercase font-semibold tracking-wider px-3 py-1 rounded transition-colors duration-200"
            >
              {i18next.t(section.name)}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center bg-transparent px-2 py-1 cursor-pointer rounded transition-colors duration-200"
          >
            <TbWorld className="text-2xl" />
            <span className="ml-1 font-semibold text-sm">
              {language === "pt" ? "PT" : "EN"}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center bg-transparent p-2 cursor-pointer rounded transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <LuSun className="text-2xl" />
            ) : (
              <LuMoon className="text-2xl" />
            )}
          </button>
          <a
            href="https://github.com/manuel-ac-ventura"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent p-2 cursor-pointer rounded transition-colors duration-200"
          >
            <LuGithub className="inline-block text-2xl" />
          </a>
        </nav>
      </div>
      {/* Mobile menu */}
      <nav
        className={`md:hidden w-full transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"} overflow-hidden backdrop-blur-md ${theme === "dark" ? "bg-black/60" : "bg-white/80"}`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {sections.map((section) => (
            <li key={section.name} className="w-full">
              <a
                href={section.href}
                className="block w-full text-center uppercase font-semibold tracking-wider px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {i18next.t(section.name)}
              </a>
            </li>
          ))}
          <li className="flex items-center justify-center space-x-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center bg-transparent px-2 py-1 cursor-pointer rounded transition-colors duration-200"
            >
              <TbWorld className="text-2xl" />
              <span className="ml-1 font-semibold text-sm">
                {language === "pt" ? "PT" : "EN"}
              </span>
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center bg-transparent p-2 cursor-pointer rounded transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <LuSun className="text-2xl" />
              ) : (
                <LuMoon className="text-2xl" />
              )}
            </button>
            <a
              href="https://github.com/manuel-ac-ventura"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent p-2 cursor-pointer rounded transition-colors duration-200"
            >
              <LuGithub className="inline-block text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
