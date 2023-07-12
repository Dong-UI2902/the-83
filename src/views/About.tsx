import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Grid, styled } from "@mui/material";
import CardUi from "../components/Main/CardUi";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import BgHeaderStyle from "../components/BgHeader/BgHeaderStyle";
import ListServices from "../components/Service/ListServices";
import TagHeader from "../components/TagHeader/TagHeader";

const itemData = [
  {
    img: "/assets/img/about/1.jpg",
    title: "Dịch vụ quảng cáo Facebook",
    href: "/dich-vu-ads/facebook",
  },
  {
    img: "/assets/img/about/9.jpg",
    title: "Dịch vụ quảng cáo Tiktok",
    href: "/dich-vu-ads/tiktok",
  },
  {
    img: "/assets/img/about/2.jpg",
    title: "Dịch vụ quảng cáo Youtube",
    href: "/dich-vu-ads/youtube",
  },
  {
    img: "/assets/img/about/8.jpg",
    title: "Dịch vụ quảng cáo Google",
    href: "/dich-vu-ads/google",
  },
  {
    img: "/assets/img/about/5.jpg",
    title: "Dịch vụ tư vấn chiến lược Marketing Online tổng thể",
    href: "/dich-vu-marketing-online",
  },
  {
    img: "/assets/img/about/6.jpg",
    title: "Thiết kế Landing page ",
    href: "/dich-vu-webdesign",
  },
  {
    img: "/assets/img/about/7.jpg",
    title: "Thiết kế Website chuyên nghiệp",
    href: "/dich-vu-webdesign",
  },
  {
    img: "/assets/img/about/4.jpg",
    title: "Chăm sóc Website",
    href: "/dich-vu-webdesign",
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
    img: "/assets/img/about/12.jpg",
    title: "Xây dựng bộ nhận diện thương hiệu",
    href: "/dich-vu-nhan-dien-thuong-hieu",
  },
  {
    img: "/assets/img/about/13.jpg",
    title: "Hổ trợ tìm nguồn hàng phát triển hệ thống kinh doanh.",
    href: "/dich-vu-tim-nguon-hang",
  },
];

const Info = {
  title:
    "The83 - Chúng tôi là những chuyên gia Social Media Marketing giàu kinh nghiệm",
  desc: "The83 đã và đang có hơn 6 năm kinh nghiệm kinh doanh online, nên thấu hiểu được sự khó khăn trong biên độ thay đổi liên tục của thị trường hiện nay.",
  url: "https://www.the83.vn/gioi-thieu",
};

function About() {
  return (
    <div>
      <TagHeader {...Info} />
      <BgHeaderStyle url={"/assets/img/about/bg-header.png"} />
      <Layout
        props={{
          padding: { md: "50px!important" },
          position: "relative",
          marginTop: "-150px",
          background: "var(--light-color)",
          borderRadius: "20px",
          boxShadow:
            "0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2)",
          p: {
            fontSize: "20px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1204px", margin: "0 auto" }}>
          <Grid
            container
            spacing={2}
            position="relative"
            justifyContent="center"
          >
            <Grid item xs={12} md={7}>
              <h1
                className="title"
                style={{
                  textAlign: "start",
                }}
              >
                Về{" "}
                <span
                  className="text-trans-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(0, 183, 250) 25%, rgb(1, 207, 234) 100%)",
                  }}
                >
                  The83
                </span>
              </h1>
              <Box>
                Với hơn 6 năm kinh doanh nhiều mặt hàng trên các nền tảng Social
                Media, chúng tôi là người thấu hiểu rõ nhất sự khó khăn khi mới
                bắt đầu kinh doanh online, hoặc đang kinh doanh bị chậm lại do
                không nắm bắt được xu hướng cùng với đà phát triển chóng mặt
                hiện tại.
                <br />
                Vì thế THE83 được thành lập để nâng cấp các dịch vụ liên quan
                với mong muốn đem đến kiến thức và kinh nghiệm thực tế hổ trợ
                khách hàng một cách tối ưu và thiết thực nhất.
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  backgroundColor: "#1976D2",
                  padding: "50px",
                  borderRadius: { md: "50%", xs: "0" },
                  width: { md: "550px", xs: "100%" },
                  height: { md: "550px", xs: "auto" },
                  position: { md: "absolute", xs: "relative" },
                  marginTop: { md: "-120px", xs: "0" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "*": {
                    color: "var(--light-color)!important",
                  },
                }}
              >
                <p
                  style={{
                    width: "400px",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  THE83 Social Media là công ty chuyên nghiệp, cung cấp các dịch
                  vụ và giải pháp Marketing Online hiệu quả cho các cá nhân,
                  doanh nghiệp vừa và nhỏ.
                </p>
              </Box>
            </Grid>
          </Grid>
          <Box className="section">
            <h1
              className="title text-trans-color"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%)",
              }}
            >
              đồng hành
            </h1>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ margin: "30px 0" }}
            >
              <Grid item xs={12} md={5}>
                <img
                  style={{
                    maxHeight: "300px",
                    display: "block",
                    margin: "0 auto",
                  }}
                  loading="lazy"
                  src="/assets/img/about/social2.png"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <p>
                  Những chuyên gia giàu kinh nghiệm và đội ngũ nhân viên trẻ
                  nhiệt huyết hết mình với công việc sẽ đồng hành với khách hàng
                  như một người bạn, luôn sẵn sàng lắng nghe và chia sẻ điều tốt
                  nhất trong công việc vì một mục tiêu chung là sự hiệu quả, tối
                  ưu chi phí, cải thiện doanh thu trên thị trường kinh doanh
                  online đang cạnh tranh khắc nghiệt hiện nay.
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className="section">
            <h1
              className="title text-trans-color"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%)",
              }}
            >
              Thế Mạnh
            </h1>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ margin: "30px 0" }}
            >
              <Grid item xs={12} md={6}>
                <p>
                  Thế mạnh của chúng tôi là xây dựng chiến dịch chạy quảng cáo
                  đa kênh như: Facebook, Tiktok, Youtube, Google… Với đa dạng
                  ngành nghề đặc biệt như những mặt hàng &quot;Hot Trend&quot;
                  trên thị trường, luôn đón đầu xu thế và nắm bắt cơ hội ở thời
                  điểm tốt nhất.
                  <br />
                  Hứa hẹn sẽ mang đến nhiều trải nghiệm tuyệt vời và doanh thu
                  đột phá cho khách hàng đang tìm kiếm sự phát triển trực tuyến.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <img
                  loading="lazy"
                  width={"100%"}
                  src="/assets/img/about/social1.png"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="section" sx={{ flexGrow: 1 }}>
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
        <ListServices itemData={itemData} />
      </Layout>
    </div>
  );
}

export default About;
