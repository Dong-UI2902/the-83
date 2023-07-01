import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const BgImgStyle = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0 auto",
}));

const Desc = styled("p")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  backgroundColor: "#000",
  opacity: 0.6,
  color: "#fff",
  fontSize: "21px",
  fontWeight: 200,
  margin: 0,
  width: "100%",
  textAlign: "center",
  padding: "15px",
}));

const SpecialCard = styled("div")(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#771818",
  cursor: "pointer",
  padding: "40px",
  transition: ".3s",
  width: "33%",
  height: "400px",
  "&:hover": {
    backgroundColor: "#571111",
  },
}));

const SpecialCardButton = styled(Button)(({ theme }) => ({
  border: "3px solid #fff",
  marginTop: "30px",
  color: "#fff",
  fontSize: "25px",
  textTransform: "capitalize",
  transition: ".2s",
  backgroundColor: "#771818",
  "&:hover": {
    backgroundColor: "#f1f1f1",
    color: "#771818",
  },
}));

function Item(props: any) {
  return (
    <Box
      sx={{
        width: "33%",
        height: "400px",
        position: "relative",
        backgroundColor: "#fff",
        transition: ".3s",
      }}
      className="service-box"
    >
      <img style={{ width: "100%" }} src="/assets/img/services/fb.png" />
      <Desc>{props.name}</Desc>
    </Box>
  );
}

const items = [
  {
    name: "Quảng cáo Facebook",
    href: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Quảng cáo Tiktok",
    href: "Hello World!",
  },
  // {
  //   name: "Quảng cáo Google",
  //   href: "Hello World!",
  // },
];

function Service() {
  return (
    <div className="session">
      <Box
        sx={{
          position: "absolute",
          top: "-25%",
          right: "-25%",
          zIndex: "0",
        }}
      >
        <BgImgStyle src="/assets/img/background/theming-gradient.svg" alt="" />
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ zIndex: 15, position: "relative" }}>
          <h1 className="title">
            các{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%)",
              }}
              className="text-transt-color"
            >
              dịch vụ
            </span>{" "}
            tại{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%)",
              }}
              className="text-transt-color"
            >
              The83
            </span>
          </h1>
          <Box sx={{ height: "400px", marginTop: "50px" }}>
            <Carousel navButtonsAlwaysVisible={true}>
              <Box sx={{ display: "flex", position: "relative" }}>
                <SpecialCard className="service-box">
                  <Typography variant="h4" gutterBottom>
                    Facebook
                  </Typography>
                  <p>
                    Nhắm đúng tối tượng khách hàng mục tiêu và tiềm năng nhằm
                    tăng lượng tiếp cận tương tác nhanh chóng, bứt phá doanh thu
                    bán hàng
                  </p>
                  <SpecialCardButton variant="contained" color="inherit">
                    Xem thêm
                  </SpecialCardButton>
                </SpecialCard>
                {items.map((item, index) => (
                  <Item key={index} name={item.name} href={item.href} />
                ))}
              </Box>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Box
                  sx={{
                    width: "33%",
                    height: "400px",
                    position: "relative",
                    backgroundColor: "#fff",
                    transition: ".3s",
                  }}
                  className="service-box"
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/img/services/fb.png"
                  />
                  <Desc>Quảng cáo facebook</Desc>
                </Box>
                <SpecialCard className="service-box">
                  <Typography variant="h4" gutterBottom>
                    Tiktok
                  </Typography>
                  <p>
                    Nhắm đúng tối tượng khách hàng mục tiêu và tiềm năng nhằm
                    tăng lượng tiếp cận tương tác nhanh chóng, bứt phá doanh thu
                    bán hàng
                  </p>
                  <SpecialCardButton variant="contained" color="inherit">
                    Xem thêm
                  </SpecialCardButton>
                </SpecialCard>
                <Box
                  sx={{
                    width: "33%",
                    height: "400px",
                    position: "relative",
                    backgroundColor: "#fff",
                    transition: ".3s",
                  }}
                  className="service-box"
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/img/services/fb.png"
                  />
                  <Desc>Quảng cáo facebook</Desc>
                </Box>
              </Box>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Box
                  sx={{
                    width: "33%",
                    height: "400px",
                    position: "relative",
                    backgroundColor: "#fff",
                    transition: ".3s",
                  }}
                  className="service-box"
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/img/services/fb.png"
                  />
                  <Desc>Quảng cáo facebook</Desc>
                </Box>
                <Box
                  sx={{
                    width: "33%",
                    height: "400px",
                    position: "relative",
                    backgroundColor: "#fff",
                    transition: ".3s",
                  }}
                  className="service-box"
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/img/services/fb.png"
                  />
                  <Desc>Quảng cáo facebook</Desc>
                </Box>
                <SpecialCard className="service-box">
                  <Typography variant="h4" gutterBottom>
                    Google
                  </Typography>
                  <p>
                    Nhắm đúng tối tượng khách hàng mục tiêu và tiềm năng nhằm
                    tăng lượng tiếp cận tương tác nhanh chóng, bứt phá doanh thu
                    bán hàng
                  </p>
                  <SpecialCardButton variant="contained" color="inherit">
                    Xem thêm
                  </SpecialCardButton>
                </SpecialCard>
              </Box>
            </Carousel>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Service;
