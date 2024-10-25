import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
      success: string;
      warning: string;
      info: string;
      alert: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
      success: string;
      warning: string;
      info: string;
      alert: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
