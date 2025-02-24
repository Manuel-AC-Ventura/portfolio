import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/themeContext";

export const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section
      id="Projectos"
      className={`w-full py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}
    >
      <div className="container space-y-12 px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {t("projects_title")}
          </h2>
          <p
            className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
          >
            {t("projects_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <a
              key={index}
              target="_blank"
              href={project.url}
              className={`group relative overflow-hidden rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-md ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
            >
              <img
                alt={`Project ${index + 1}`}
                className="aspect-video w-full object-cover object-center"
                height={300}
                src={project.cover}
                width={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/90" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm line-clamp-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
