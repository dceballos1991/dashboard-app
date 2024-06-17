"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const borderColor = "rgba(0, 0, 0, 0.12)";

export const borderStyles = `1px solid ${borderColor}`;

export const boxShadow =
  "rgb(255, 255, 255, 0.75) 0px 2px 0px inset, rgba(232, 234, 238, 0.5) 0px -1.5px 0px inset, rgba(223, 226, 231, 0.5) 0px 1px 2px 0px";

export const outlinedButtonStyles = {
  border: borderStyles,
  color: "#475569",
  backgroundColor: "#f8fafc",
  borderRadius: "8px",
  textTransform: "none",
  boxShadow,
};

export const containedButtonStyles = {
  border: borderStyles,
  backgroundColor: "#FA5B3D",
  borderRadius: "8px",
  textTransform: "none",
  boxShadow,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#FA5B3D",
    },
    secondary: {
      main: "#94a3b8",
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiSelect: {
      variants: [
        {
          props: { size: "small" },
          style: {
            borderRadius: "8px",
            "& .MuiSelect-select": {
              fontSize: "0.75rem",
              boxShadow,
              display: "flex",
              alignItems: "center",
            },
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { size: "small" },
          style: {
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              fontSize: "0.75rem",
              boxShadow,
              "&:focus-within": {
                borderColor: borderColor,
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: outlinedButtonStyles,
        },
        {
          props: { variant: "contained" },
          style: containedButtonStyles,
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: "secondary" },
          style: outlinedButtonStyles,
        },
      ],
    },
  },
});

export default theme;
