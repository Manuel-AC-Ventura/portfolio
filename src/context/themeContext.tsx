import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext<
	| {
			theme: "light" | "dark";
			toggleTheme: () => void;
	  }
	| undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

	const [theme, setTheme] = useState<"light" | "dark">(savedTheme || "dark");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
