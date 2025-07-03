import i18next from "../i18n/i18n";
import { useTheme } from "../hooks/useTheme";

export const Footer = () => {
  const { theme } = useTheme();
  const inputClass = `flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${theme === "dark" ? "bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" : "bg-neutral-100 border-neutral-300 text-black placeholder:text-neutral-500"}`;
  const textareaClass = `flex h-24 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${theme === "dark" ? "bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" : "bg-neutral-100 border-neutral-300 text-black placeholder:text-neutral-500"}`;

  return (
    <footer className="`w-full py-12 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:justify-between md:px-32">
        <div className="space-y-4 text-center lg:text-left w-full lg:w-auto mb-8 lg:mb-0 lg:max-w-[45%]">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {i18next.t("footer.contact_title")}
          </h2>
          <p className="max-w-[600px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {i18next.t("footer.contact_description")}
          </p>
        </div>

        <form className="space-y-4 w-full md:w-[45%]">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
              {i18next.t("footer.name_label")}
            </label>
            <input
              className={inputClass}
              id="name"
              placeholder={i18next.t("footer.name_placeholder")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
              {i18next.t("footer.email_label")}
            </label>
            <input
              className={inputClass}
              id="email"
              placeholder={i18next.t("footer.email_placeholder")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
              {i18next.t("footer.message_label")}
            </label>
            <textarea
              className={textareaClass}
              id="message"
              placeholder={i18next.t("footer.message_placeholder")}
            />
          </div>
          <button
            type="submit"
            className={`w-full cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${theme === "dark" ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"}`}
          >
            {i18next.t("footer.send_message_button")}
          </button>
        </form>
      </div>
    </footer>
  )
}