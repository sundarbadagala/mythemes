import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { containerTheme } from "./container";
import { textTheme } from "./text";
import { colorsScheme } from "./colors";
import { breakpoints } from "./breakpoints";
import { globalStyles } from "./globalStyles";

export const theme = extendTheme({
  semanticTokens: {
    colors: colorsScheme,
  },
  breakpoints,
  fonts: {
    body: "Noto Sans,sans-serif",
  },
  components: {
    Button: buttonTheme,
    Text: textTheme,
    Container: containerTheme,
  },
  styles: globalStyles,
});
