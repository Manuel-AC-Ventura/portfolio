import { useTheme } from "@/context/themeContext";

export const About = () => {
  const { theme } = useTheme();

  return(
    <div id="About" className="space-y-4">
      <h2 className={`text-3xl font-bold tracking-tighter md:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
      <p className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        I am a full-stack developer with over 5 years of experience in the industry. I have a strong background in
        JavaScript, React, Node.js, and various other technologies. I am passionate about creating user-friendly
        and scalable web applications that solve real-world problems.
      </p>
    </div>
  )
}