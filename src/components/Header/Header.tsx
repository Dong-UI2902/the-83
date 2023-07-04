import React from "react";
import Particle from "../Particle/Particle";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const LogoHeader = styled("label")(({ theme }) => ({
  fontSize: "8rem",
  backgroundImage:
    "linear-gradient(rgb(255, 28, 247) 25%, rgb(178, 73, 248) 100%)",
  fontWeight: 700,
}));

const ImageLogoHeader = styled("img")(({ theme }) => ({
  maxWidth: "110px",
  display: "block",
  margin: "0 auto",
  background: "#fff",
  padding: 10,
  borderRadius: 10,
  boxShadow:
    "0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)",
}));

ImageLogoHeader.defaultProps = {
  src: "/assets/img/pink-logo.png",
};

function Header() {
  return (
    <Box
      sx={{ zIndex: 0, position: "relative", height: "80vh" }}
      className="header"
    >
      <Particle />
      <Grid
        container
        spacing={2}
        alignItems="center"
        zIndex={1}
        position={"relative"}
        height={"100%"}
      >
        <Grid item xs={12} md={7}>
          <Typography variant="h3" gutterBottom>
            <LogoHeader className="text-transt-color">The83</LogoHeader> Social
            Media
          </Typography>
          <Typography variant="h4" gutterBottom>
            Giải Pháp Kinh Doanh Thời Đại Số
          </Typography>
        </Grid>
        <Grid className="logos-header" item xs={12} md={5} position="relative">
          <ImageLogoHeader className="main-img" />
          {/* <img className="img-header" src="/assets/img/home/ipad.png" />
          
           */}
          <img
            className="img-header tiktok"
            src="/assets/img/home/logotiktok.png"
          />
          <img className="img-header web" src="/assets/img/home/web2.png" />
          <img className="img-header meta" src="/assets/img/home/meta.png" />
          <img className="img-header avatar" src="/assets/img/home/ava.png" />
          <img
            className="img-header search"
            src="/assets/img/home/search.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
