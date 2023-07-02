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

const BgImgStyle = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0 auto",
}));

function home() {
  return (
    <Layout props={{ paddingTop: "70px", position: "relative" }}>
      <BgHeader />
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CardUi
              icon={<EmojiObjectsIcon />}
              title="Giải pháp toàn diện"
              desc={
                "Chúng tôi tư vấn giải pháp Marketing toàn diện, đa kênh. Đảm bảo thực hiện mục tiêu doanh nghiệp nhanh nhất với chi phí thấp nhất."
              }
            />
          </Grid>
          <Grid item xs={3}>
            <CardUi
              icon={<SettingsIcon />}
              title="Công cụ hỗ trợ mạnh mẽ"
              desc={
                "The83 sở hữu những công cụ hỗ trợ Marketing mạnh nhất trên thị trường hiện nay."
              }
            />
          </Grid>
          <Grid item xs={3}>
            <CardUi
              icon={<CurrencyExchangeIcon />}
              title="Tối ưu hoá chi phí – lợi nhuận"
              desc={
                "Đến với The83, bạn không cần phải lo về chi phí, chúng tôi có nhiều sự lựa chọn phù hợp với doanh nghiệp của bạn."
              }
            />
          </Grid>
          <Grid item xs={3}>
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
            top: "-25%",
            right: "-25%",
            zIndex: "0",
          }}
        >
          <BgImgStyle
            src="/assets/img/background/theming-gradient.svg"
            alt=""
          />
        </Box>
        <Service />
      </Box>
    </Layout>
  );
}

export default home;
