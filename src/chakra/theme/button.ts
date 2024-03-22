import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";

//-----------------------------Variants-----------------------------

const primary = defineStyle({
  backgroundColor: colors.primay[500],
  color: colors.lite[500],
  border: `1px solid ${colors.dark[500]}`,
  _hover: {
    backgroundColor: colors.primay[600],
    _disabled: {
      backgroundColor: colors.primay[400],
      color: colors.dark[400],
      opacity: 1,
    },
  },
  _disabled: {
    backgroundColor: colors.primay[400],
    color: colors.dark[400],
    opacity: 1,
  },
  _dark: {
    backgroundColor: "red",
    _hover: {
      backgroundColor: "orange",
      _disabled: {
        backgroundColor: colors.primay[400],
        color: colors.dark[400],
        opacity: 1,
      },
    },
    _disabled: {
      backgroundColor: colors.primay[400],
      color: colors.dark[400],
      opacity: 1,
    },
  },
});

const secondary = defineStyle({
  backgroundColor: colors.secondary[500],
  color: colors.lite[500],
  border: `1px solid ${colors.dark[500]}`,
  _hover: {
    backgroundColor: colors.secondary[600],
    _disabled: {
      backgroundColor: colors.secondary[400],
      color: colors.dark[400],
      opacity: 1,
    },
  },
  _disabled: {
    backgroundColor: colors.secondary[400],
    color: colors.dark[400],
    opacity: 1,
  },
});

//-----------------------------Sizes-----------------------------
const sm = defineStyle({
  padding: "4px 6px",
  fontSize: "12px",
});

const md = defineStyle({
  padding: "8px 12px",
  fontSize: "14px",
});

const block = defineStyle({
  width: "100%",
});

const blockSm = defineStyle({
  width: "100%",
  padding: "4px 6px",
  fontSize: "12px",
});

const blockMd = defineStyle({
  width: "100%",
  padding: "8px 12px",
  fontSize: "14px",
});

//-----------------------------Config-----------------------------
export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
  sizes: {
    sm,
    md,
    block,
    blockSm,
    blockMd,
  },
});
