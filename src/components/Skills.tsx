import i18next from "../i18n/i18n";
import { SiTauri } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTailwindCssLine } from "react-icons/ri";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { TbBrandMysql, TbBrandGit } from "react-icons/tb";
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaLaravel, FaFigma } from "react-icons/fa";
import React from "react";
import { useTheme } from "../hooks/useTheme";

export const Skills = () => {
  const { theme } = useTheme();
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={32} />, category: "frontend" },
    { name: "CSS3", icon: <FaCss3 size={32} />, category: "frontend" },
    { name: "JavaScript", icon: <DiJavascript1 size={32} />, category: "frontend" },
    { name: "Node.js", icon: <FaNodeJs size={32} />, category: "backend" },
    { name: "React", icon: <FaReact size={32} />, category: "frontend" },
    { name: "PHP", icon: <DiPhp size={32} />, category: "backend" },
    { name: "Laravel", icon: <FaLaravel size={32} />, category: "backend" },
    { name: "MySQL", icon: <TbBrandMysql size={32} />, category: "database" },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine size={32} />, category: "frontend" },
    { name: "Figma", icon: <FaFigma size={32} />, category: "design" },
    { name: "Git", icon: <TbBrandGit size={32} />, category: "tools" },
    { name: "GitHub", icon: <VscGithubAlt size={32} />, category: "tools" },
    { name: "Docker", icon: <LiaDocker size={32} />, category: "tools" },
    { name: "Tauri", icon: <SiTauri size={32} />, category: "tools" },
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center pt-28 md:pt-36 px-4 md:mx-16 lg:mx-32 space-y-12 md:space-y-12">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
        {i18next.t("skills_title")}
      </h2>
      <p className="max-w-[600px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {i18next.t("skills_description")}
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center cursor-pointer space-y-2 rounded-xl p-4 md:p-6 shadow-sm transition-all hover:scale-105 hover:shadow-lg border border-transparent hover:border-primary-500
              ${theme === "dark"
                ? "bg-gray-950 hover:bg-gray-900"
                : "bg-white hover:bg-gray-100"}
            `}
            style={{ minWidth: 120, maxWidth: 160 }}
            title={`${skill.name} - ${skill.category}`}
          >
            {React.cloneElement(skill.icon, {
              className: `mb-1 ${theme === "dark" ? "text-primary-400" : "text-primary-600"} drop-shadow` ,
              size: 40
            })}
            <span
              className={`text-base font-semibold tracking-wide ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};