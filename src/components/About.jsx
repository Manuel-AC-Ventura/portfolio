import { useTheme } from "@/context/themeContext";

export const About = () => {
  const { theme } = useTheme();

  return(
    <div id="Sobre" className="space-y-4">
      <h2 className={`text-3xl font-bold tracking-tighter md:text-4xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
      <p className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        Sou um desenvolvedor full-stack com mais de 5 anos de experiência na indústria. Tenho sólida experiência em PHP, Laravel JavaScript, React, Node.js e várias outras tecnologias. Sou apaixonado por criar aplicações web escaláveis e fáceis de usar que resolvam problemas do mundo real.
      </p>
    </div>
  )
}