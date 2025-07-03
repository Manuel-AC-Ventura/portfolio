import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

const browserLang = navigator.language || navigator.languages[0] || "en";
const isPortuguese = browserLang.toLowerCase().startsWith("pt");
const lng = isPortuguese ? "pt" : "en";

i18next
	.use(initReactI18next)
	.init({
		lng,
		fallbackLng: "en",
		resources: {
			en: { translation: en },
			pt: { translation: pt },
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18next;
