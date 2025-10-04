import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import App from "./App.tsx";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#FFE45E",
        contrastText: "#333",
      },
      secondary: {
        main: "#55A630",
        contrastText: "#fff",
      },
      background: {
        default: "#FAFAFA",
      },
    },
    typography: {
      h1: {
        fontWeight: "700",
        fontSize: "1.7rem",
      },
      h5: {
        fontWeight: "500",
        fontSize: "1.4rem",
      },
      subtitle1: {
        fontWeight: "500",
        fontSize: "1.1rem",
      },
    },
  })
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
