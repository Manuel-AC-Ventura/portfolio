import i18next from "i18next"
import { useEffect, useState } from "react"

type Project = {
  key: string
  cover: string
  url: string
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : data.projects);
      })
      .catch((err) => console.error(err));
  }, [])

  return(
    <section className="flex flex-col items-center justify-center pt-28 md:pt-36 px-4 md:mx-16 lg:mx-32 space-y-12 md:space-y-12">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
        {i18next.t("projects_title")}
      </h2>
      <p className="text-lg md:text-xl">{i18next.t("projects_description")}</p>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
            <a
              key={index}
              target="_blank"
              href={project.url}
              className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-md"
              rel="noopener noreferrer"
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
                <h3 className="text-lg font-semibold">{i18next.t(`projects.${project.key}.name`)}</h3>
                <p className="text-sm line-clamp-2">{i18next.t(`projects.${project.key}.description`)}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  )
}