import React from "react";
import { Box, Container, Divider, Grid, Link, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrintIcon from "@mui/icons-material/Print";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const FooterStyles = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  marginTop: "50px",
  // backdropFilter: "saturate(180%) blur(14px)!important",
  // "*": {
  //   color: "#fff!important",
  // },
}));

const HeaderStyle = styled("div")(({ theme }) => ({
  fontWeight: "600",
  fontSize: "20px",
}));

const UlStyle = styled("ul")(({ theme }) => ({
  padding: 0,
  gridRowGap: "0.5rem",
  display: "grid",
  rowGap: " 0.5rem",
  listStyle: "none",
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  transition: "all .3s",
  color: "inherit",
  "&:hover": {
    paddingLeft: "10px",
  },
  display: "flex",
  alignItems: "center",
}));

const LiStyle = styled("li")(({ theme }) => ({
  "*": {
    fontSize: 15,
    marginRight: 5,
  },
}));

const SocialStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
  cursor: "pointer",
  "*": {
    transition: ".3s",
    "&:hover": {
      transform: "translateY(-0.25rem)",
    },
  },
  marginTop: "10px",
}));

function Footer() {
  return (
    <FooterStyles sx={{ position: "relative" }}>
      <Box
        sx={{
          paddingTop: "50px",
          paddingBottom: "20px",
          backdropFilter: "saturate(180%) blur(14px)!important",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <img
                style={{ display: "block", margin: "0 auto" }}
                width={170}
                src="/assets/img/blue-logo-desc.png"
              />
              <p>
                Chúng tôi mang đến các Giải pháp Marketing Toàn diện, Ứng dụng
                Chuyên sâu trong công nghệ của thời đại kỹ thuật số 4,0.
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img width={170} src="/assets/img/bo-cong-thuong.png" />
                <img width={80} src="/assets/img/dmca_protected_.png" />
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <HeaderStyle>The83 Social Media</HeaderStyle>
              <UlStyle>
                <li>
                  <LinkStyle href="/gioi-thieu" underline="hover">
                    {">"} Giới thiệu
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu" underline="hover">
                    {">"} Facebook Ads
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu" underline="hover">
                    {">"} Ads Services
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu" underline="hover">
                    {">"} Liên hệ
                  </LinkStyle>
                </li>
                <li>
                  <SocialStyle>
                    <FacebookIcon />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-tiktok"
                      viewBox="0 0 18 16"
                      style={{
                        border: "2px solid black",
                        borderRadius: "5px",
                        padding: "2px",
                      }}
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
                    </svg>
                    <InstagramIcon />
                  </SocialStyle>
                </li>
              </UlStyle>
            </Grid>
            <Grid item xs={12} md={3}>
              <HeaderStyle>Thông tin liên hệ</HeaderStyle>
              <Box>
                <UlStyle>
                  <LiStyle>
                    <BusinessIcon />
                    Công ty TNHH Thương Mại The83 Social Media
                  </LiStyle>
                  <LiStyle>
                    <PrintIcon />
                    0317902014
                  </LiStyle>
                  <LiStyle>
                    <LocationOnIcon />
                    F47 KDC Park Riverside, Phường Phú Hữu, Quận 9, Thành phố Hồ
                    Chí Minh
                  </LiStyle>
                  <LiStyle>
                    <PublicIcon />
                    https://the83.vn
                  </LiStyle>
                  <LiStyle>
                    <MailOutlineIcon />
                    admin@the83.vn
                  </LiStyle>
                </UlStyle>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5400730334595!2d106.83740207576872!3d10.846466057896459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521af4730391f%3A0xfa0bd6efed6cc3f9!2sS10.06%20Origami%2C%20Vinhomes%20Grandpark!5e0!3m2!1svi!2s!4v1688371182787!5m2!1svi!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
        <center style={{ marginTop: "30px" }}>
          <Divider style={{ marginBottom: "20px" }}></Divider>
          Copyright © {new Date().getFullYear()} Công ty TNHH Thương Mại The83
          Social Media
        </center>
      </Box>
    </FooterStyles>
  );
}

export default Footer;
