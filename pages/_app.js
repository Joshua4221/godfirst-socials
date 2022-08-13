import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { useState } from "react";
import { GlobalStyles } from "../lib/GlobalStyle/global.style";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(false);

  const current = state ? theme.ColorDarkMode : theme.ColorLightMode;

  const HandleThemeProvider = () => {
    setState(!state);
  };

  return (
    <ThemeProvider theme={current}>
      <GlobalStyles />
      <Component {...pageProps} onclick={HandleThemeProvider} />
    </ThemeProvider>
  );
}

export default MyApp;
