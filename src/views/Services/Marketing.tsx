import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FormRegister from "../../components/FormRegister/FormRegister";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TagHeader from "../../components/TagHeader/TagHeader";

const Info = {
  title: "Tư Vấn Chiến Lược Marketing Online - 6 Năm Kinh Nghiệm",
  desc: "The83 - Dịch vụ tư vấn chiến lược Marketing Online tổng thể cùng đội ngũ giàu kinh nghiệm tư vấn trực tiếp cho doanh nghiệp!",
  url: "https://www.the83.vn/dich-vu-marketing-online",
};

function Marketing() {
  return (
    <div>
      <TagHeader {...Info} />
      <Box
        sx={{
          height: {
            sx: "80vh",
            md: "65vh",
          },
          backgroundImage: "url('/assets/img/services/bg-fb-page.webp')",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
            <Grid item md={5}>
              <h1>Tư Vấn Chiến Lược Marketing Online.</h1>
              <p>
                Mỗi doanh nghiệp sẽ cần cho một chiến lược marketing Online dành
                riêng và phù hợp. Bởi vì các doanh nghiệp sẽ thường có sự khác
                nhau về: Mô hình công ty – Loại hình sản phẩm / dịch vụ - Nhu
                cầu khách hàng – Định hướng phát triển – Và nhiều yếu tố khác.
              </p>
            </Grid>
            <Grid item md={5}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/marketing-online/bg-header.png"
              />
            </Grid>
          </Grid>
        </Layout>
      </Box>
      <Layout
        props={{
          paddingTop: "70px",
          position: "relative",
          maxWidth: "1024px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            maxWidth: "1204px",
            margin: "0 auto",
          }}
        >
          <Box>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <img
                  loading="lazy"
                  style={{ borderRadius: "20px" }}
                  width="100%"
                  src="/assets/img/marketing-online/1.png"
                />
              </Grid>
              <Grid item md={6}>
                <h1>Tư vấn chiến lược Marketing Online là gì?</h1>
                <p>
                  Tư vấn chiến lược Marketing Online hiểu một cách đơn giản nhất
                  là những hướng dẫn, lời khuyên giúp kế hoạch truyền thông của
                  doanh nghiệp đi đúng lộ trình được vạch ra trên mạng lưới
                  internet. Tư vấn chiến lược marketing online cũng không dừng
                  lại là lời khuyên. Khi đó bạn và đơn vị tư vấn sẽ trực tiếp
                  thảo luận và làm việc trong thời gian dài. Vẽ ra một bản chiến
                  lược chi tiết nhất cho từng vấn đề mà bạn sẽ gặp.
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className="section">
            <Grid container alignItems="center">
              <Grid item md={6}>
                <h1>
                  Bạn có một công ty nhỏ, startup?
                  <br /> Hãy chọn The83
                </h1>
                <p>
                  Chúng tôi sẽ định hướng mục tiêu và xây dựng chiến lược tiếp
                  thị đa kênh (Google, Facebook, Email, Zalo, Banner Ads,
                  Booking PR,...) phù hợp với từng doanh nghiệp. Xây dựng phễu
                  tiếp thị tự động phân loại khách hàng và gửi đến khách hàng
                  các thông điệp phù hợp.
                </p>
              </Grid>
              <Grid item md={6}>
                <img
                  loading="lazy"
                  width="100%"
                  src="/assets/img/marketing-online/2.jpg"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="section">
          <Grid container alignItems="end" spacing={4}>
            <Grid item md={6}>
              <img
                loading="lazy"
                style={{ borderRadius: "20px" }}
                width="100%"
                src="/assets/img/marketing-online/3.png"
              />
            </Grid>
            <Grid item md={6}>
              <h1>Quy trình triển khai</h1>
              <p>
                <strong>Nghiên cứu & Phân tích SWOT:</strong> sản phẩm, phân
                tích xu hướng ngành các đối thủ, khách hàng mục tiêu (giới tính,
                độ tuổi, công việc, thu nhập, mối quan hệ, họ thường đọc gì,
                xuất hiện ở đâu…).
              </p>
              <p>
                <strong>Xác định mục tiêu cho doanh nghiệp vd:</strong> số lượng
                click vào số điện thoại, số người để lại thông tin trên form, số
                người mở khung chát, thời gian người dùng trên trang…
              </p>
              <p>
                <strong>Lập kế hoạch:</strong> Sau khi có đủ dữ liệu sẽ tiến
                hành lập chiến lược & kế hoạch chi tiết. Đánh giá và chọn các
                kênh phù hợp cho chiến dịch, xây dựng phễu tiếp thị tự động.
              </p>
              <p>
                <strong>Triển khai & Đo lường:</strong> Triển khai các công việc
                theo kế hoạch, thu thập các dữ liệu trong quá trình triển khai
                như: số lượng người dùng vào website, số lượng đọc hết nội dung
                nào đó trên website, số người để lại thông tin, số người mở
                khung chát, số người click vào số điện thoại…
              </p>
              <p>
                <strong>Điều chỉnh & Báo cáo:</strong> Dựa vào các số liệu thu
                thấp The83 sẽ tiến hành điều chỉnh kế hoạch phù hợp và gửi báo
                cáo chiến dịch định kỳ 1 lần/tháng.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <h1 className="title">Đến với The83</h1>
          <center>
            <h1>
              Hãy để chúng tôi tư vấn chiến lược Marketing Online cho bạn!
            </h1>
          </center>
          <Grid container spacing={4}>
            {List.map((item, index) => (
              <Grid item md={6} key={index}>
                <Card
                  variant="outlined"
                  sx={{ height: "100%", p: 7, textAlign: "center" }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                      {item.name}
                    </Typography>
                    {/* <p>{item.desc}</p> */}
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

const List = [
  {
    name: "Giúp doanh nghiệp xác định được chân dung khách hàng trọng yếu để đưa ra phương hướng tiếp cận.",
    icon: <AutoGraphIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Hoạch định chiến lược cạnh tranh trên các kênh truyền thông. Cách này giúp cho khách hàng có thể nhận diện doanh nghiệp bạn tốt hơn so với đối thủ.",
    icon: <DashboardIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Bạn sẽ tiết kiệm được nhiều chi phí và tập trung nguồn lực vào đúng thị trường mục tiêu.",
    icon: <CurrencyExchangeIcon sx={{ fontSize: "5rem" }} />,
  },
  {
    name: "Biết và kiểm soát được mỗi giai đoạn tăng trưởng bạn cần phải làm gì.",
    icon: <TrendingUpIcon sx={{ fontSize: "5rem" }} />,
  },
];

export default Marketing;
