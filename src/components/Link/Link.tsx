import React, { FC } from "react";
import {
  LinkProps,
  Link as MuiLink,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const theme = createTheme({
  components: {
    // Name of the component
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          minWidth: "64px",
          padding: "6px 10px",
          //   textTransform: "uppercase",
          fontWeight: "500",
          fontSize: "1rem",
          lineHeight: "1.75",
          textDecoration: "none",
          "&:hover": {
            "text-decoration": "none",
          },
        },
      },
    },
  },
});

const Link: FC<LinkProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
    </ThemeProvider>
  );
};

export default Link;
