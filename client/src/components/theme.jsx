/* eslint-disable react/prop-types */
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeStore } from "../store/themeStore";

const ThemeProvide = ({ children }) => {
  const activeTheme = useThemeStore((state) => state.themeMode);

  const theme = createTheme({
    palette: {
      mode: activeTheme || "dark",
      primary: {
        main: "#E0C21E",
      },
      secondary: {
        main: "#0C0F16",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProvide;
