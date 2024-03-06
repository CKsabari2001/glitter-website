import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const global = createTheme({
  typography: {
    fontFamily: "'Noto Sans', sans-serif",
    fontSize: 14,

    h1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.7,
    },
    body1: {
      fontFamily: "'Noto Sans', sans-serif",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
      fontSize: 22,
    },
  },
});

export default global;
