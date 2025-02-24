import { About } from "@/components/About";
import { RiGithubLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/themeContext";
import { FiLinkedin, FiTwitter, FiDownload } from "react-icons/fi";

export const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const socials = [
    { name: "LinkedIn", icon: <FiLinkedin size={28} /> },
    { name: "GitHub", icon: <RiGithubLine size={28} /> },
    { name: "Twitter", icon: <FiTwitter size={28} /> },
  ]

  return (
    <section
      id="Home"
      className={`w-full py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1
            className={`text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {t("home_title")}
          </h1>
          <h2
            className={`text-2xl font-semibold ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
          >
            {t("home_subtitle")}
          </h2>
          <p
            className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
          >
            {t("home_description")}
          </p>
          <div className="flex gap-4">
            <button
              className={`flex items-center space-x-2 justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none h-11 rounded-md px-8 ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-neutral-900"}`}
            >
              <FiDownload size={20} />
              <span>{t("download_resume")}</span>
            </button>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  href="#"
                  key={index}
                  className={`text-lg transition-al ${theme === "dark" ? "text-white hover:text-gray-400 " : "text-gray-900 hover:text-gray-600"}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <img
          alt="Manuel Ventura"
          className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
          height={400}
          src={theme === "light" ? "/dark.png" : "/light.png"}
          width={400}
        />

        <About />
      </div>
    </section>
  );
};
