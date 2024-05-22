import { TbWorld } from "react-icons/tb";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/themeContext";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <header className={`w-full py-4 px-4 md:px-6 flex items-center justify-between ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="flex items-center space-x-4">
        <a className="flex items-center gap-2 text-lg font-semibold sm:text-base" href="#">
          <h1 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl font-black`}>{`{ MV }`}</h1>
          <span className="sr-only">John Doe</span>
        </a>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link}`}
              className={`text-lg transition-all ${theme === 'dark' ? 'text-white hover:text-gray-400' : 'text-gray-900 hover:text-gray-600'}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <TbWorld size={32} className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
        <Switch onClick={handleThemeChange} />
      </div>
    </header>
  );
};