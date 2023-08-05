import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "20px",
            fontFamily: "inherit, Borel",
            fontSize: "10px",
          },
        },
      },
    },
  });