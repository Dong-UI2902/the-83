import { Box, Grid } from "@mui/material";
import React from "react";
import Layout from "../../../components/Layout/Layout";
import FormRegister from "../../../components/FormRegister/FormRegister";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ListCard from "./ListCard";

const ItemList = [
  {
    name: "Thúc đẩy lượt truy cập trang web",
    desc: "Tăng doanh số bán hàng trực tuyến, lượt đặt chỗ hoặc lượt đăng ký vào danh sách gửi thư bằng cách sử dụng quảng cáo trực tuyến hướng mọi người đến trang web của bạn.",
    icon: <AdsClickIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tăng số lượng cuộc gọi điện thoại",
    desc: "Tăng số lượng cuộc gọi điện thoại từ khách hàng bằng cách sử dụng quảng cáo có hiển thị số điện thoại của bạn và nút nhấp để gọi.",
    icon: <PhoneInTalkIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tăng số lượt ghé qua cửa hàng",
    desc: "Thu hút nhiều khách hàng ghé đến cửa hàng hơn bằng cách sử dụng quảng cáo chỉ đường đến doanh nghiệp của bạn trên bản đồ.",
    icon: <StoreMallDirectoryIcon sx={{ fontSize: "2.5rem" }} />,
  },
];

function Google() {
  return (
    <div>
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "url('/assets/img/services/bg-fb-page.webp')",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "50px",
          position: "relative",
        }}
      >
        <Layout>
          <Grid container spacing={4} justifyContent="center" p={10}>
            <Grid item md={5}>
              <h1>Phát triển doanh nghiệp của bạn với Google Ads</h1>
              <p>
                Mỗi ngày, khách hàng đều tìm kiếm những doanh nghiệp giống như
                của bạn trên Google Tìm Kiếm. Tiếp cận với họ qua Google Ads, và
                chỉ trà phí cho mỗi lượt nhấp chuột vào rang web của bạn hoặc
                khi khách hàng gọi điện đến doanh nghiệp của bạn.
              </p>
            </Grid>
            <Grid item md={5}>
              <img width="100%" src="/assets/img/services/gg/bg-header.webp" />
            </Grid>
          </Grid>
        </Layout>
      </Box>
      <Layout props={{ paddingTop: "70px", position: "relative" }}>
        <Box>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={4}>
              <img width="100%" src="/assets/img/services/gg/search.webp" />
            </Grid>
            <Grid item md={4}>
              <h1>Quảng cáo trên Google</h1>
              <p>
                Dịch vụ quảng cáo Google Ads của THE 83 giúp bạn có được nhiều
                khách hàng mới nhanh chóng. Google Ads là quá trình quảng cáo
                thương hiệu của bạn thông qua công cụ tìm kiếm. Khi mọi người
                tìm kiếm một sản phẩm hoặc dịch vụ mà bạn đang cung cấp trên
                Google, chúng tôi giúp doanh nghiệp của bạn xuất hiện ở vị trí
                đầu trang.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <center>
            <h1>Dịch vụ Google Ads</h1>
          </center>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3}>
              <img width="100%" src="/assets/img/services/gg/1.png" />
              <center>Quảng cáo trên YouTube</center>
            </Grid>
            <Grid item md={3}>
              <img width="100%" src="/assets/img/services/gg/2.png" />
              <center>Quảng cáo Tìm kiếm</center>
            </Grid>
            <Grid item md={3}>
              <img width="100%" src="/assets/img/services/gg/3.png" />
              <center>Quảng cáo Hiển thị</center>
            </Grid>
          </Grid>
        </Box>
        <ListCard list={ItemList} />
        <FormRegister />
      </Layout>
    </div>
  );
}

export default Google;
