import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import BgHeader from "../components/Header/BgHeader";
import { Box, Grid, styled } from "@mui/material";
import CardUi from "../components/Main/CardUi";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import About from "../components/Main/About";
import Service from "../components/Main/Service/Service";
import ChooseUs from "../components/Main/ChooseUs";
import Confused from "../components/Main/Confused";
import ListServices from "../components/Service/ListServices";
import StepperService from "../components/Service/StepperService";
import FormRegister from "../components/FormRegister/FormRegister";

const BgImgStyle = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0 auto",
}));

const itemData = [
  {
    img: "/assets/img/about/5.jpg",
    title: "Dịch vụ tư vấn chiến lược Marketing Online tổng thể",
    href: "/dich-vu-marketing-online",
  },
  {
    img: "/assets/img/about/11.jpg",
    title: "Thiết kế hình ảnh, video ",
    href: "/dich-vu-editor",
  },
  {
    img: "/assets/img/about/3.jpg",
    title: "Đào tạo các khóa học Ads",
    href: "/dich-vu-khoa-hoc-ads",
  },
  {
    img: "/assets/img/about/13.jpg",
    title: "Hổ trợ tìm nguồn hàng phát triển hệ thống kinh doanh.",
    href: "/dich-vu-tim-nguon-hang",
  },
];

function home() {
  return (
    <div>
      <Layout props={{ paddingTop: "70px", position: "relative" }}>
        <BgHeader />
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={11} md={3}>
              <CardUi
                icon={<EmojiObjectsIcon />}
                title="Giải pháp toàn diện"
                desc={
                  "Chúng tôi tư vấn giải pháp Marketing toàn diện, đa kênh. Đảm bảo thực hiện mục tiêu doanh nghiệp nhanh nhất với chi phí thấp nhất."
                }
              />
            </Grid>
            <Grid item xs={11} md={3}>
              <CardUi
                icon={<SettingsIcon />}
                title="Công cụ hỗ trợ mạnh mẽ"
                desc={
                  "The83 sở hữu những công cụ hỗ trợ Marketing mạnh nhất trên thị trường hiện nay."
                }
              />
            </Grid>
            <Grid item xs={11} md={3}>
              <CardUi
                icon={<CurrencyExchangeIcon />}
                title="Tối ưu hoá chi phí – lợi nhuận"
                desc={
                  "Đến với The83, bạn không cần phải lo về chi phí, chúng tôi có nhiều sự lựa chọn phù hợp với doanh nghiệp của bạn."
                }
              />
            </Grid>
            <Grid item xs={11} md={3}>
              <CardUi
                icon={<CoPresentIcon />}
                title="Đội ngũ chuyên môn cao"
                desc={
                  "The83 sở hữu đội ngũ nhân viên có trình độ chuyên môn cao, luôn nhiệt tình trong công việc."
                }
              />
            </Grid>
          </Grid>
        </Box>
        <About />
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "-15%", md: "-25%" },
              right: { xs: "0", md: "-25%" },
              zIndex: "0",
            }}
          >
            <BgImgStyle
              src="/assets/img/background/theming-gradient.svg"
              alt=""
              loading="lazy"
            />
          </Box>
          <Service />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-20%",
              left: "-20%",
              zIndex: "0",
            }}
          >
            <BgImgStyle
              src="/assets/img/background/customization-gradient.svg"
              alt=""
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "35%",
              right: "-35%",
              zIndex: "0",
            }}
          >
            <BgImgStyle src="/assets/img/confused/map-new.png" alt="" />
          </Box>
          <Confused />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "-20%",
              right: "-20%",
              zIndex: "0",
            }}
          >
            <BgImgStyle
              src="/assets/img/background/dark-mode-gradient.svg"
              alt=""
            />
          </Box>
          <ChooseUs />
        </Box>
        <StepperService />
        <Box className="section" sx={{ display: { md: "block", xs: "none" } }}>
          <h1 className="title" style={{ textAlign: "start" }}>
            <span style={{ fontSize: "2rem" }}>Các dịch vụ khác</span>
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%)",
              }}
              className="text-trans-color"
            >
              The83 Social Media
            </span>
          </h1>
          <ListServices itemData={itemData} />
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

export default home;
