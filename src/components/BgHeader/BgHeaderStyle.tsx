import { Box } from "@mui/material";
import React, { FC } from "react";

const BgHeaderStyle: FC<{ url: string; children?: any }> = ({
  url,
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
      }}
    >
      {children}
    </Box>
  );
};

export default BgHeaderStyle;
