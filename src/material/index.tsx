import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Main from "./components";

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default Index;
