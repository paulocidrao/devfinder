import { ThemeProvider } from "styled-components";
import themeDefault from "./styles/theme/themeDefault";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Toaster richColors />
      <Home />
    </ThemeProvider>
  );
};
