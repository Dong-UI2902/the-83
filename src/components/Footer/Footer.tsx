import React from "react";
import { Box, Container, Divider, Grid, Link, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

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
                loading="lazy"
                style={{ display: "block", margin: "0 auto" }}
                width={170}
                src="/assets/img/pink-logo.png"
              />
              <p>
                Chúng tôi mang đến các Giải pháp Marketing Toàn diện, Ứng dụng
                Chuyên sâu trong công nghệ của thời đại kỹ thuật số 4,0.
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  width={170}
                  src="/assets/img/bo-cong-thuong.png"
                  loading="lazy"
                />
                <img
                  width={80}
                  src="/assets/img/dmca_protected_.png"
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <HeaderStyle>The83 Social Media</HeaderStyle>
              <UlStyle>
                <li>
                  <LinkStyle href="/gioi-thieu" underline="hover">
                    {">"} Giới thiệu
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-ads" underline="hover">
                    {">"} Dịch vụ quảng cáo Online
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-webdesign" underline="hover">
                    {">"} Thiết kế website
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-editor" underline="hover">
                    {">"} Thiết kế hình ảnh, video
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-khoa-hoc-ads" underline="hover">
                    {">"} Đào tạo khoá học Ads
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-marketing-online" underline="hover">
                    {">"} Tư Vấn Chiến Lược Marketing Online.
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle
                    href="/dich-vu-nhan-dien-thuong-hieu"
                    underline="hover"
                  >
                    {">"} Xây dựng bộ nhận diện thương hiệu
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/dich-vu-tim-nguon-hang" underline="hover">
                    {">"} Tìm nguồn hàng
                  </LinkStyle>
                </li>
                <li>
                  <LinkStyle href="/lien-he" underline="hover">
                    {">"} Liên hệ
                  </LinkStyle>
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
                    <LocationOnIcon />
                    Trụ sở chính: F47 KDC Park Riverside, Phường Phú Hữu, Quận
                    9, Thành phố Hồ Chí Minh
                  </LiStyle>
                  <LiStyle>
                    <LocationOnIcon />
                    Văn phòng: S10.05 Vinhome Grand Park, P.Phước Long, TP.Thủ
                    Đức, TP.Hồ Chí Minh
                  </LiStyle>
                  <LiStyle>
                    <MailOutlineIcon />
                    Sale@The83.vn The83sm@gmail.com
                  </LiStyle>
                  <LiStyle>
                    <PhoneIcon />
                    Hotline: 0924 620 620
                  </LiStyle>
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
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.055339106592!2d106.7983193757685!3d10.807073658626203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f6d34cb91f%3A0x5068df3768af1beb!2zQ8O0bmcgdHkgVE5ISCBUaMawxqFuZyBN4bqhaSBUaGU4MyBTb2NpYWwgTWVkaWE!5e0!3m2!1svi!2s!4v1688533516376!5m2!1svi!2s"
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
          Copyright © {new Date().getFullYear()} THE83 SOCIAL MEDIA TRADING CO.,
          LTD
        </center>
      </Box>
    </FooterStyles>
  );
}

export default Footer;
