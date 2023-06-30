import React from "react";
import Particle from "../Particle/Particle";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Header() {
  return (
    <div>
      <Box sx={{ zIndex: 0, position: "relative" }}>
        <Particle />
      </Box>
      <Box sx={{ zIndex: 0, position: "relative" }}>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
      </Box>
    </div>
  );
}

export default Header;
