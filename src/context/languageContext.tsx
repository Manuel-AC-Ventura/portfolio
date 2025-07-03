import React, { createContext, useContext, useState, useEffect } from "react";
import i18next from "../i18n/i18n";

interface LanguageContextProps {
	language: string;
	setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
	language: i18next.language,
	setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguageState] = useState(i18next.language);

	const setLanguage = (lang: string) => {
		i18next.changeLanguage(lang);
		setLanguageState(lang);
	};

	useEffect(() => {
		const handleLanguageChanged = (lng: string) => setLanguageState(lng);
		i18next.on("languageChanged", handleLanguageChanged);
		return () => {
			i18next.off("languageChanged", handleLanguageChanged);
		};
	}, []);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
