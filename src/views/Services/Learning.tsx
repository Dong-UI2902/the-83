import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FormRegister from "../../components/FormRegister/FormRegister";
import TagHeader from "../../components/TagHeader/TagHeader";

const Info = {
  title: "Khoá học Social Media Advertising cho người mới bắt đầu",
  desc: "The83 - Để bắt nhịp với thị hiếu người tiêu dùng, học về social media là một điều cần thiết với các nhà quảng cáo trẻ tuổi. The83 có đầy đủ những khoá học quảng cáo trên các kênh social media mà bạn cần.",
  url: "https://www.the83.vn/dich-vu-khoa-hoc-ads",
};

function Learning() {
  return (
    <div>
      <TagHeader {...Info} />
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "url('/assets/img/learning/bg-header.jpg')",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "50px",
          position: "relative",
        }}
      >
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
            <h1 className="title">Khóa học Social Media Advertising</h1>
            <center>
              <p style={{ color: "var(--light-color)", maxWidth: "1024px" }}>
                Công nghệ 4.0 ngày càng phát triển, các nền tảng social media
                trở thành một trong những cách tiếp cận khách hàng phổ biến
                nhất, nhằm cung cấp thông tin, ra mắt sản phẩm, hay các chương
                trình khuyến mãi.
              </p>
            </center>
          </Box>
        </Box>
      </Box>
      <Layout
        props={{
          paddingTop: "70px",
          position: "relative",
        }}
      >
        <Box maxWidth="1204px" m="0 auto">
          <Grid container spacing={5} alignItems="center">
            <Grid item md={7}>
              <h1>Khóa học Social Media Advertising</h1>
              <p>
                Để bắt nhịp với thị hiếu người tiêu dùng, học về social media là
                một điều cần thiết với các nhà quảng cáo trẻ tuổi. The83 có đầy
                đủ những khoá học quảng cáo trên các kênh social media mà bạn
                cần.
              </p>
              <Grid container spacing={4} sx={{ textAlign: "start" }}>
                <Grid item md={6} display="flex" alignItems="center" gap={2}>
                  <TaskAltIcon />
                  <div>
                    Giáo trình tiêu chuẩn cùng kiến thức cập nhật thường xuyên
                  </div>
                </Grid>
                <Grid item md={6} display="flex" alignItems="center" gap={2}>
                  <TaskAltIcon />
                  Giảng viên giàu kinh nghiệm, giải đáp thắc mắc xuyên suốt khóa
                  học
                </Grid>
                <Grid item md={6} display="flex" alignItems="center" gap={2}>
                  <TaskAltIcon />
                  Hỗ trợ tư vấn trong khóa học về các khó khăn gặp phải của học
                  viên
                </Grid>
                <Grid item md={6} display="flex" alignItems="center" gap={2}>
                  <TaskAltIcon />
                  Tạo nên những chiến dịch giúp tăng trưởng doanh thu vượt bậc
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <img
                loading="lazy"
                style={{ borderRadius: "10px" }}
                width="100%"
                src="/assets/img/learning/1.png"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <h1 className="title">Các khoá học tại The83</h1>
          <center style={{ maxWidth: "1024px", margin: "0 auto" }}>
            <p>
              Chương trình được phát triển với nội dung từ căn bản đến nâng cao
              và lấy thực hành làm trọng tâm với các khóa học Social Media
              Marketing tại The83
            </p>
          </center>
          <Grid container spacing={4} justifyContent="center">
            {ItemList.map((item, index) => (
              <Grid item md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{ height: "100%", p: 4, textAlign: "center" }}
                >
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

const ItemList = [
  {
    name: "Quảng cáo Facebook cơ bản",
    desc: "Chạy quảng cáo Facebook với tài khoản cá nhân & tài khoản Business đúng đối tượng. Cài đặt tất cả các loại chiến dịch của Facebook, tối ưu Fanpage và tối ưu chiến dịch cho người mới bắt đầu.",
    icon: <img width={50} src="/assets/img/learning/fb-ads.png" />,
  },
  {
    name: "Quảng cáo Facebook nâng cao",
    desc: "Học viên sẽ được thực hành tất cả các loại đối tượng trên Facebook để áp dụng vào từng ngành nghề, hơn nữa bạn thực hành tại lớp tạo content để chạy quảng cáo hiệu quả, nắm rõ từng loại chỉ số quảng cáo Facebook.",
    icon: <img width={50} src="/assets/img/learning/fb-ads2.png" />,
  },
  {
    name: "Quảng cáo TikTok cơ bản",
    desc: "Chạy quảng cáo Tiktok với tài khoản cá nhân & tài khoản Business đúng đối tượng. Cài đặt tất cả các loại chiến dịch của Tiktok, tối ưu kênh và tối ưu chiến dịch cho người mới bắt đầu.",
    icon: <img width={50} src="/assets/img/learning/tiktok-ads.png" />,
  },
  {
    name: "Quảng cáo Google",
    desc: "Nghiên cứu từ khóa & thị trường, chạy chiến dịch từ khóa tìm kiếm Google. Các bước chuẩn bị và cài đặt chiến dịch quảng cáo Google Adwords (Google tìm kiếm), những kỹ thuật tới ưu cơ bản & nâng cao tránh lãng phí ngân sách.",
    icon: <img width={50} src="/assets/img/learning/gg-ads.png" />,
  },
  {
    name: "Quảng cáo YouTube",
    desc: "Liên kết tài khoản Google Ads và kênh Youtube tạo đối tượng quảng cáo mở rộng. Các loại hình quảng cáo Youtube phổ biến nhất, kỹ thuật chọn lựa loại quảng cáo với giá thầu phù hợp, để tăng cường chuyển đổi vào website.",
    icon: <img width={50} src="/assets/img/learning/yt-ads.png" />,
  },
];

export default Learning;
