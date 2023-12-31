import React from "react";
import Layout from "../../../components/Layout/Layout";
import { Box, Grid } from "@mui/material";
import FormRegister from "../../../components/FormRegister/FormRegister";
import ListCard from "./ListCard";
import TagHeader from "../../../components/TagHeader/TagHeader";

const Info = {
  title: "Dịch Vụ Quảng Cáo Facebook Ads tại Việt Nam - The83",
  desc: "Chúng tôi cung cấp dịch vụ quảng cáo Facebook Ads tại Việt Nam. Tập trung tối ưu hoá hiệu quả quảng cáo Facebook Ads và tiết kiệm chi phí.",
  url: "https://www.the83.vn/dich-vu-ads/facebook",
};

function Facebook() {
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
              <h1>Hãy tìm khách hàng bằng quảng cáo trên Facebook.</h1>
              <p>
                Tiếp cận khách hàng mới lẫn khách hàng hiện có khi họ kết nối
                với mọi người cũng như tìm kiếm cộng đồng trên Facebook,
                Instagram, Messenger và WhatsApp.
              </p>
            </Grid>
            <Grid item md={5}>
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/fb-desc.webp"
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
              <img
                loading="lazy"
                width="100%"
                src="/assets/img/services/fb-1.webp"
              />
            </Grid>
            <Grid item md={4}>
              <h1>Quảng cáo trên Facebook và Instagram</h1>
              <p>
                Hàng tỷ người sử dụng các ứng dụng của Meta để kết nối với mọi
                người và khám phá những chủ đề mà họ quan tâm. Quảng cáo trên
                Meta có thể hiển thị khi khách hàng khám phá Bảng feed Facebook,
                xem Instagram Reels hoặc mở hộp thư Messenger.
                <br />
                Chúng tôi sử dụng kỹ thuật phân tích dữ liệu để xác định nhân
                khẩu học, hành vi, sở thích và các điểm dữ liệu liên quan để từ
                đó tìm ra chính xác khách hàng tiềm năng của thương hiệu, phân
                phối đúng kênh mục tiêu để tối ưu hoá về hiệu quả quảng cáo.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section" maxWidth={1204} ml={"auto"} mr={"auto"}>
          <center>
            <h1>Đạt được các kết quả quan trọng với doanh nghiệp bạn.</h1>
          </center>
          <ListCard list={ItemList} />
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

const ItemList = [
  {
    name: "Tăng doanh số online",
    desc: "Thúc đẩy lượt mua trên trang web, Facebook hoặc Instagram của bạn.",
    icon: <img width={50} src="/assets/img/services/fb/1.webp" />,
  },
  {
    name: "Tìm kiếm khách hàng tiềm năng",
    desc: "Kết nối với những khách hàng tiềm năng cho doanh nghiệp của bạn",
    icon: <img width={50} src="/assets/img/services/fb/2.webp" />,
  },
  {
    name: "Thúc đẩy lượt tương tác",
    desc: "Hiển thị quảng cáo cho những người có khả năng sẽ quan tâm đến doanh nghiệp bạn và tăng số tin nhắn, lượt xem video hoặc lượt tương tác với bài viết.",
    icon: <img width={50} src="/assets/img/services/fb/3.webp" />,
  },
  {
    name: "Tăng lưu lượng truy cập",
    desc: " Thu hút thêm nhiều khách truy cập trang web hoặc cửa hàng thực của bạn bằng quảng cáo lưu lượng truy cập.",
    icon: <img width={50} src="/assets/img/services/fb/4.webp" />,
  },
  {
    name: "Xây dựng mức độ nhận biết",
    desc: " Hãy để khách hàng tiềm năng nhớ đến bạn đầu tiên bằng quảng cáo mức độ nhận biết trên Facebook và Instagram. ",
    icon: <img width={50} src="/assets/img/services/fb/5.webp" />,
  },
  {
    name: "Tăng lượt cài đặt ứng dụng",
    desc: " Tăng số người dùng ứng dụng của bạn bằng mục tiêu quảng cáo ứng dụng cho quảng cáo trên Facebook",
    icon: <img width={50} src="/assets/img/services/fb/6.webp" />,
  },
];

export default Facebook;
