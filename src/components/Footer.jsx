import { Resend } from "resend";
import { useTheme } from "@/context/themeContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const resend = new Resend();
  const resendkey = process.env.RESEND_KEY;
  const myEmail = process.env.My_EMAIL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await resend.emails.send({
        from: resendkey,
        to: myEmail,
        subject: `Message from ${formData.name}`,
        text: formData.message,
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <section
      id="Contact"
      className={`w-full py-12 md:py-24 lg:py-32 ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}
    >
      <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2
            className={`text-3xl font-bold tracking-tighter md:text-4xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {t("footer.contact_title")}
          </h2>
          <p
            className={`max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
          >
            {t("footer.contact_description")}
          </p>
        </div>
        <form className="space-y-4" onSubmit={sendEmail}>
          <div className="space-y-2">
            <label
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              htmlFor="name"
            >
              {t("footer.name_label")}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder={t("footer.name_placeholder")}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              htmlFor="email"
            >
              {t("footer.email_label")}
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder={t("footer.email_placeholder")}
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              htmlFor="message"
            >
              {t("footer.message_label")}
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder={t("footer.message_placeholder")}
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none h-10 px-4 py-2 w-full ${theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-neutral-900"}`}
            type="submit"
          >
            {t("footer.send_message_button")}
          </button>
        </form>
      </div>
    </section>
  );
};
