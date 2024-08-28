import React from "react";
import { SiTauri } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import { VscGithubAlt } from "react-icons/vsc";
import { useTheme } from "@/context/themeContext";
import { RiTailwindCssLine } from "react-icons/ri";
import { DiJavascript1, DiPhp } from "react-icons/di";
import { TbBrandGit, TbBrandMysql } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaLaravel,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

export const Skills = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={32} /> },
    { name: "CSS3", icon: <FaCss3 size={32} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "React", icon: <FaReact size={32} /> },
    { name: "PHP", icon: <DiPhp size={32} /> },
    { name: "Laravel", icon: <FaLaravel size={32} /> },
    { name: "MySQL", icon: <TbBrandMysql size={32} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssLine size={32} /> },
    { name: "Figma", icon: <FaFigma size={32} /> },
    { name: "Git", icon: <TbBrandGit size={32} /> },
    { name: "GitHub", icon: <VscGithubAlt size={32} /> },
    { name: "Docker", icon: <LiaDocker size={32} /> },
    { name: "Tauri", icon: <SiTauri size={32} /> },
  ];

  return (
    <section
      id="Skills"
      className={`w-full py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2
            className={`text-3xl font-bold tracking-tighter md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {t("skills_title")}
          </h2>
          <p
            className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
          >
            {t("skills_description")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col cursor-pointer items-center justify-center space-y-2 rounded-md p-4 shadow-sm transition-colors ${theme === "dark" ? "bg-gray-950 hover:bg-gray-800" : "bg-white hover:bg-gray-100"}`}
            >
              {React.cloneElement(skill.icon, {
                className: `${theme === "dark" ? "text-white" : "text-gray-900"}`,
              })}
              <span
                className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
