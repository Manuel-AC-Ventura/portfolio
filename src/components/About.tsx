import i18next from "../i18n/i18n";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export const About = () => {
  const { theme } = useTheme();

  return (
    <section className="pt-28 md:pt-48 px-4 md:mx-16 lg:mx-32">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1 space-y-12 md:space-y-24 order-2 md:order-1">
          <article className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">{i18next.t("home_title")}</h2>
            <h4 className="text-lg md:text-2xl font-semibold">{i18next.t("home_subtitle")}</h4>
            <p className="max-w-full md:max-w-[600px] text-base md:text-lg lg:text-xl xl:text-2xl">{i18next.t("home_description")}</p>

            <button
              type="button"
              className={`flex items-center space-x-2 cursor-pointer justify-center whitespace-nowrap text-xs md:text-sm font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 h-10 md:h-11 rounded-md px-6 md:px-8 w-full sm:w-auto
                ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
              `}
            >
              <FiDownload size={20} />
              <span>{i18next.t("download_resume")}</span>
            </button>
          </article>

          <article>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">{i18next.t("about_title")}</h2>
            <p className="max-w-full md:max-w-[700px] text-base md:text-lg lg:text-xl xl:text-2xl">{i18next.t("about_description")}</p>
          </article>
        </div>
        
        <div className="flex-shrink-0 order-1 md:order-2 flex justify-center items-start md:items-center md:pt-16 lg:pt-24 xl:pt-32">
          <img 
            src="/avatar.png" 
            alt="Manuel Ventura" 
            className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}