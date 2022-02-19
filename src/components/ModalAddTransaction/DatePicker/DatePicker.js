import { createTheme } from "@mui/material/styles";

const color = '#4A56E2';
export const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color
          }
        }
      }
    }
  });