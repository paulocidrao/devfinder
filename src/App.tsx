import { ThemeProvider } from "styled-components";
import themeDefault from "./styles/theme/themeDefault";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
