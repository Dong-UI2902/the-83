import { Box } from "@mui/material";
import React, { FC } from "react";

const BgHeaderStyle: FC<{ url: string; props?: any; children?: any }> = ({
  url,
  props,
  children,
}) => {
  return (
    <Box
      sx={{
        height: "80vh",
        backgroundImage: `url("${url}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...props,
      }}
    >
      {children}
    </Box>
  );
};

export default BgHeaderStyle;
