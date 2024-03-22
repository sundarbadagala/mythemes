import { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {ThemeContext} from './theme/theme.context'
import { theme as Theme} from "./theme/index";
import Main from "./components/main";

function main() {
  const {theme} = useContext(ThemeContext)

  console.log(theme)
  return (
    <StyledThemeProvider theme={Theme}>
      <Main />
    </StyledThemeProvider>
  );
}

export default main;
