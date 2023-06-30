import { Container } from "@mui/material";
import React, { FC } from "react";

const Layout: FC<{ props?: any; children: any }> = ({ props, children }) => {
  return (
    <div>
      <Container sx={props} maxWidth="xl">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
