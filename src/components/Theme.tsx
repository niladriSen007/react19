import { createContext, ReactNode, useContext, use, useState } from "react";
import Card from "./Card";

type Theme = "light" | "dark";

export interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


export const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  )
}

