export const colors = {
  primay: {
    400: "#9790fc",
    500: "#5448fa",
    600: "#0c008c",
  },
  secondary: {
    400: "#fc90bb",
    500: "#fc5397",
    600: "#ed0260",
  },
  tertiary: {
    400: "#fab778",
    500: "#fa9537",
    600: "#bd5d04",
  },
  dark: {
    200: "#696868",
    300: "#3d3d3d",
    400: "#292829",
    500: "#000000",
  },
  lite: {
    500: "#ffffff",
    600: "#ebe8e9",
    700: "#dbd9da",
    800: "#c9c7c8",
  },
};

export const colorsScheme = {
  bgPrimary: {
    default: colors.lite[600],
    _dark: colors.dark[400],
  },
  bgSecondary: {
    default: colors.lite[500],
    _dark: colors.dark[500],
  },
  text: {
    default: colors.dark[500],
    _dark: colors.lite[500],
  },
  primary: {
    default: colors.primay[500],
    _dark: colors.secondary[500],
  },
};
