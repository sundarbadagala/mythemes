import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/react";
import { colors } from "./colors";

export const globalStyles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      color: mode(colors.dark[200], colors.lite[800])(props),
      bg: mode(colors.lite[500], colors.dark[500])(props),
    },
    h1: {
      fontSize: "60px",
      padding: "0px 0px !important",
    },
    p: {
      fontSize: "12px",
      lineHeight: "1.5",
    },
  }),
};
