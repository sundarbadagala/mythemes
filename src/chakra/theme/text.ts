import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const header = defineStyle({
  color: colors.dark[500],
  fontSize: "40px",
  fontWeight: "bold",
  lineHeight: 1.3,
  _dark: {
    color: colors.lite[800],
  },
});

export const textTheme = defineStyleConfig({
  variants: {
    header,
  },
});
