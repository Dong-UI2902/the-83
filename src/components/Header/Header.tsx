import React from "react";
import Particle from "../Particle/Particle";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import BgHeader from "./BgHeader";

const LogoHeader = styled("label")(({ theme }) => ({
  fontSize: "8rem",
  backgroundImage:
    "linear-gradient(rgb(255, 28, 247) 25%, rgb(178, 73, 248) 100%)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
}));

const ImageLogoHeader = styled("img")(({ theme }) => ({
  maxWidth: "250px",
  display: "block",
  margin: "0 auto",
}));

ImageLogoHeader.defaultProps = {
  src: "/assets/img/black-logo.png",
};

function Header() {
  return (
    <Box sx={{ zIndex: 0, position: "relative", height: "90vh" }}>
      <Particle />
      <Grid
        container
        spacing={2}
        alignItems="center"
        zIndex={1}
        position={"relative"}
        height={"100%"}
      >
        <Grid item xs={8}>
          <Typography variant="h3" gutterBottom>
            <LogoHeader>The83</LogoHeader> Social Media
          </Typography>
          <Typography variant="h4" gutterBottom>
            Giải Pháp Kinh Doanh Thời Đại Số
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <ImageLogoHeader />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
