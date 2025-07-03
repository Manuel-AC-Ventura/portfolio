import i18next from "../i18n/i18n";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export const About = () => {
  const { theme } = useTheme();

  return (
    <section className="pt-28 md:pt-48 px-4 md:mx-16 lg:mx-32 space-y-12 md:space-y-24">
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
    </section>
  )
}