import Main from "./main";
import { ThemeProvider } from "./theme/theme.context";

function Index() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default Index;
