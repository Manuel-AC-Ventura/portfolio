import { TbWorld } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/themeContext";
import { Switch, Thumb } from "@radix-ui/react-switch";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const links = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleThemeChange = () => {
    toggleTheme();
  };

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <header
      className={`w-full py-4 px-4 md:px-6 flex items-center justify-between ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="flex items-center space-x-4">
        <a
          className="flex items-center gap-2 text-lg font-semibold sm:text-base"
          href="#"
        >
          <h1
            className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-2xl font-black`}
          >
            {`{ MV }`}
          </h1>
          <span className="sr-only">John Doe</span>
        </a>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link}`}
              className={`text-lg transition-all ${theme === "dark" ? "text-white hover:text-gray-400" : "text-gray-900 hover:text-gray-600"}`}
            >
              {t(link)}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLanguageChange}
          className={`text-lg transition-all ${theme === "dark" ? "text-white hover:text-gray-400" : "text-gray-900 hover:text-gray-600"}`}
        >
          <TbWorld size={32} />
        </button>
        <Switch
          checked={isDarkMode}
          onCheckedChange={handleThemeChange}
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800"
        >
          <Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-slate-950" />
        </Switch>
      </div>
    </header>
  );
};
