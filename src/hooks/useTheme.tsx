import { ThemeContext, ThemeProps } from "../components/Theme";
import { use } from "react"

export const useTheme = (): ThemeProps => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;

}