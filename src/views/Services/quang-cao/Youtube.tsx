import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../../../components/Layout/Layout";
import FormRegister from "../../../components/FormRegister/FormRegister";
import ListCard from "./ListCard";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PeopleIcon from "@mui/icons-material/People";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TagHeader from "../../../components/TagHeader/TagHeader";

const ListItem = [
  {
    name: "Khuyến khích mọi người thực hiện hành động",
    desc: "Với Quảng cáo video, bạn có thể xác định hành động mà bạn muốn đối tượng thực hiện như truy cập trang web, nhận thức thương hiệu,...",
    icon: <AdsClickIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tiếp cận khách hàng của bạn",
    desc: "Quảng cáo video tiếp cận những người đang xem video trên YouTube và quan tâm đến những gì bạn chào bán.",
    icon: <PeopleIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tương tác thật",
    desc: "Bạn chỉ trả tiền khi có ai đó xem quảng cáo ít nhất 30 giây, xem toàn bộ quảng cáo hoặc tương tác với quảng cáo của bạn.",
    icon: <AddReactionIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Báo cáo minh bạch",
    desc: "Bạn có thể xem các số liệu thống kê về hiệu quả hoạt động để đánh giá mức chi tiêu, mức độ tương tác và các chỉ số quan trọng khác của quảng cáo.",
    icon: <AssessmentIcon sx={{ fontSize: "2.5rem" }} />,
  },
];

const Info = {
  title: "Dịch Vụ Quảng Cáo Youtube Ads Việt Nam - The83",
  desc: "Tiếp cận khách hàng tiềm năng bằng Quảng cáo YouTube và khuyến khích họ thực hiện mua hàng khi đang xem hoặc tìm kiếm video trên YouTube.",
  url: "https://www.the83.vn/dich-vu-ads/youtube",
};

function Youtube() {
  return (
    <div>
      <TagHeader {...Info} />
      <Box
        sx={{
          height: {
            sx: "80vh",
            md: "65vh",
          },
          background: "#FA6D64",
          paddingTop: "50px",
          position: "relative",
        }}
      >
        <Layout>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            p={{ sx: 0, md: 10 }}
          >
            <Grid item md={5} sx={{ color: "var(--light-color)" }}>
              <h1>Phát triển doanh nghiệp của bạn bằng YouTube Ads</h1>
              <p style={{ color: "var(--light-color)" }}>
                Tiếp cận khách hàng tiềm năng qua nội dung họ xem. Bắt đầu ngay
                và nhanh chóng nhận thấy kết quả.
              </p>
            </Grid>
            <Grid item md={5}>
              <img
                loading="lazy"
                style={{ background: "#fff", borderRadius: "10px" }}
                width="100%"
                src="/assets/img/services/youtube/bg-header.svg "
              />
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
              <img width="100%" src="/assets/img/services/youtube/image.png" />
            </Grid>
            <Grid item md={4}>
              <h1>Quảng cáo trên YouTube</h1>
              <p>
                Mỗi ngày, hơn 5 tỷ video được xem trên YouTube. Điều này mang
                đến cơ hội lớn cho doanh nghiệp để quảng cáo tới lượng khán giả
                khổng lồ này thông qua Quảng cáo trên YouTube. Bằng quảng cáo
                trên YouTube, bạn đã khám phá ra cách tiết kiệm chi phí để kết
                nối với những người quan tâm đến sản phẩm hoặc dịch vụ của bạn.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={4}>
              <h1>TrueView Video Ads</h1>
              <p>
                Quảng cáo TrueView thường dài hơn 30 giây và có thể bỏ qua sau 5
                giây. Quảng cáo TrueView là lựa chọn tuyệt vời để thúc đẩy mức
                độ tương tác và thu hút người xem thực hiện hành động. Quảng cáo
                TrueView trên YouTube sử dụng chiến lược đặt giá thầu CPV (Giá
                mỗi lần xem). Bạn chỉ trả tiền cho những người xem thực sự nếu
                họ chọn xem quảng cáo video của bạn trong ít nhất 30 giây.
              </p>
            </Grid>
            <Grid item md={4}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/youtube/2.svg"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/youtube/1.svg"
              />
            </Grid>
            <Grid item md={4}>
              <h1>Bumper Video Ads</h1>
              <p>
                Bumper Video Ads là các quảng cáo dài 6 giây và không thể bỏ
                qua. Bumper Video Ads rất phù hợp để xây dựng thương hiệu và
                giới thiệu USP của doanh nghiệp bạn. Bumper Video Ads sử dụng
                chiến lược đặt giá thầu CPM (giá mỗi 1000 hiển thị). Bạn trả
                tiền mỗi khi quảng cáo được hiển thị 1000 lần (CPM).
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section" ml={"auto"} mr={"auto"}>
          <center>
            <h1>Lợi ích của quảng cáo trên YouTube.</h1>
          </center>
          <Grid container spacing={2}>
            {ListItem.map((item, index) => (
              <Grid item md={3} key={index}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    {item.icon}
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                      {item.name}
                    </Typography>
                    <p>{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

export default Youtube;
