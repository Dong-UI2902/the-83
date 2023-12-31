import React from "react";
import Layout from "../../../components/Layout/Layout";
import BgHeaderStyle from "../../../components/BgHeader/BgHeaderStyle";
import { Box, Grid, styled } from "@mui/material";

import FormRegister from "../../../components/FormRegister/FormRegister";
import { Link } from "react-router-dom";
import StepperService from "../../../components/Service/StepperService";
import TagHeader from "../../../components/TagHeader/TagHeader";

const Title = styled("h2")(({ theme }) => ({
  fontSize: "1.5rem",
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  padding: "10px 15px",
  background: "#1565C0",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  color: "var(--light-color)",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: "5px",
}));

const Info = {
  title: "Dịch vụ quảng cáo Online trực tuyến (Online Advertising) - The83",
  desc: "The83 - Dịch vụ quảng cáo Online trực tuyến (Online Advertising) hiệu quả. Gia tăng doanh thu, giảm chi phí tối đa cho doanh nghiệp!",
  url: "https://www.the83.vn/dich-vu-ads",
};

function AdsServices() {
  return (
    <div>
      <TagHeader {...Info} />
      <BgHeaderStyle url="/assets/img/services/bg-header.png">
        <Box
          sx={{
            backgroundColor: "#00000080",
            height: "100%",
            paddingTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              color: "var(--light-color)",
            }}
          >
            <h1 className="title">Dịch vụ quảng cáo Online trực tuyến</h1>
            <center>
              <p style={{ color: "var(--light-color)", maxWidth: "1024px" }}>
                Thúc đẩy tối đa doanh số cho doanh nghiệp.
              </p>
            </center>
          </Box>
        </Box>
      </BgHeaderStyle>

      <Layout props={{ paddingTop: "70px", position: "relative" }}>
        <Box sx={{ maxWidth: "1204px", m: "0 auto" }}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <img width="100%" src="/assets/img/services/bg-1.png" />
            </Grid>
            <Grid item xs={12} md={7}>
              <Title className="title">Quảng cáo trực tuyến là gì?</Title>
              <p>
                Quảng cáo trực tuyến hay còn được gọi là quảng cáo online
                (Online Advertising) là cách thức truyền tải thông tin tiếp thị,
                giới thiệu về sản phẩm, thương hiệu đến người tiêu dùng thông
                qua mạng Internet. Người dùng tiếp cận được với dịch vụ quảng
                cáo online thông qua việc truy cập vào mạng bằng các thiết bị
                điện tử như: máy tính, laptop, điện thoại thông mình,… Dịch vụ
                quảng cáo online trực tuyến được biết đến là một phần không thể
                tách rời của hoạt động bán hàng. Hình thức này mang lại cho công
                ty/ doanh nghiệp nhiều lợi ích to lớn. Quảng cáo trực tuyến đang
                trở thành xu hướng truyền thông dẫn đầu không chỉ ở Việt Nam mà
                còn trên toàn thế giới. Không chỉ chọc lọc, tiếp cận chính xác
                khách hàng mục tiêu, hiệu quả của quảng cáo online còn có thể
                được đo lường chi tiết.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <h1 className="title" style={{ marginBottom: "50px" }}>
            Các dịch vụ quảng cáo trực tuyến tại The83
          </h1>
          <Grid
            container
            spacing={10}
            alignItems="center"
            marginBottom="50px"
            justifyContent="center"
          >
            <Grid item xs={12} md={5}>
              <Title>Quảng cáo Facebook</Title>
              <p>
                Facebook Ads là dịch vụ quảng cáo trực tuyến trên mạng xã hội do
                Facebook cung cấp để doanh nghiệp, tổ chức truyền thông, quảng
                bá sản phẩm dịch vụ,.... Đây là một trong các hình thức quảng
                cáo online thịnh hành nhờ nhiều ưu điểm như: Phạm vi quảng bá
                rộng, đúng đối tượng khách hàng mục tiêu. Lan truyền thông điệp
                nhanh bằng nhiều hình thức, chi phí tiết kiệm. Khả năng tương
                tác dễ dàng.
              </p>
              <LinkStyle to={"/dich-vu-ads/facebook"}>Xem thêm</LinkStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/bg-fb.png"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            alignItems="center"
            marginBottom="50px"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/bg-gg.png"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Title>Quảng cáo Google</Title>
              <p>
                Google Adwords (hay Google Ads) là dịch vụ thương mại của
                Google, cho phép doanh nghiệp quảng cáo online trực tuyến bằng
                hình ảnh, văn bản trên kết quả tìm kiếm. Google Ads được nhiều
                doanh nghiệp ưa chuộng nhờ những lợi ích nổi bật như sau: phạm
                vi tiếp cận rộng và đúng đối tượng tiềm năng, bán hàng & gia
                tăng doanh thu hiệu quả, phù hợp với mọi ngân sách.
              </p>
              <LinkStyle to={"/dich-vu-ads/google"}>Xem thêm</LinkStyle>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            alignItems="center"
            marginBottom="50px"
            justifyContent="center"
          >
            <Grid item xs={12} md={5}>
              <Title>Quảng cáo Youtube</Title>
              <p>
                Kết nối thần tốc với hàng triệu khách hàng tiềm năng trên
                Youtube với chi phí hợp lý. Youtube Ads sẽ giúp doanh nghiệp đơn
                giản hóa mục tiêu thể hiện nội dung, truyền tải thông điệp và
                quảng bá sản phẩm với chi phí rất hợp lý.
              </p>
              <LinkStyle to={"/dich-vu-ads/youtube"}>Xem thêm</LinkStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/bg-yt.webp"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            alignItems="center"
            marginBottom="50px"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/bg-tiktok.webp"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Title>Quảng cáo Tiktok</Title>
              <p>
                Quảng cáo TikTok (TikTok Ads) là một hình thức quảng cáo Online
                được triển khai để tăng độ nhận diện thương hiệu và giới thiệu
                sản phẩm cho doanh nghiệp. Việc chạy Tiktok Ads sẽ hướng khách
                hàng quan tâm đến sản phẩm của bạn từ TikTok đến trang web mong
                muốn, ví dụ như Shopee, Lazada, Tiki, Facebook, Instagram… Từ đó
                giúp doanh nghiệp tăng doanh số, xây dựng thương hiệu hiệu quả.
              </p>
              <LinkStyle to={"/dich-vu-ads/tiktok"}>Xem thêm</LinkStyle>
            </Grid>
          </Grid>
        </Box>
        <Box className="section" sx={{ display: { md: "block", xs: "none" } }}>
          <StepperService />
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}
export default AdsServices;
