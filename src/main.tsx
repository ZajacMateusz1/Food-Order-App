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
      background: {
        default: "#FAFAFA",
      },
    },
    typography: {
      h1: {
        fontWeight: "700",
        fontSize: "1.7rem",
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
