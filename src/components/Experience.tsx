import i18next from "../i18n/i18n";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../context/languageContext";

export const Experience = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const experiences = [
    {
      key: "experience1",
      period: "2022 - 2024",
      company: "Tech Solutions Ltd",
      logo: "/images/company1-logo.png"
    },
    {
      key: "experience2", 
      period: "2020 - 2022",
      company: "Digital Innovations",
      logo: "/images/company2-logo.png"
    },
    {
      key: "experience3",
      period: "2018 - 2020", 
      company: "StartUp Ventures",
      logo: "/images/company3-logo.png"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center pt-28 md:pt-36 px-4 md:mx-16 lg:mx-32 space-y-12 md:space-y-24">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          {i18next.t("experience_title")}
        </h2>
        <p className="max-w-[600px] mx-auto text-base md:text-lg lg:text-xl">
          {i18next.t("experience_description")}
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border transition-all hover:scale-105 hover:shadow-lg ${
              theme === "dark"
                ? "bg-gray-950 border-gray-800 hover:bg-gray-900"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}>
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg hidden">
                  {exp.company.charAt(0)}
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-2">
              <h3 className="text-xl md:text-2xl font-bold">
                {i18next.t(`experiences.${exp.key}.position`)}
              </h3>
              <p className={`text-lg font-semibold ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}>
                {exp.company}
              </p>
              <p className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                {exp.period}
              </p>
              <p className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                {i18next.t(`experiences.${exp.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
