import { useTheme } from "@/context/themeContext";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div id="Sobre" className="space-y-4">
      <h2
        className={`text-3xl font-bold tracking-tighter md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        {t("about_title")}
      </h2>
      <p
        className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
      >
        {t("about_description")}
      </p>
    </div>
  );
};
