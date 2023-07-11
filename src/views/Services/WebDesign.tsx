import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Grid } from "@mui/material";
import ListCard from "./quang-cao/ListCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SpeedIcon from "@mui/icons-material/Speed";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FormRegister from "../../components/FormRegister/FormRegister";

function WebDesign() {
  return (
    <div>
      <Box
        sx={{
          height: "60vh",
          backgroundImage: "url('/assets/img/web-design/bg-header.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Layout props={{ position: "relative" }}>
        <Box sx={{ maxWidth: "1204px", m: "0 auto", textAlign: "center" }}>
          <h1 className="title">Thiết kế website chuyên nghiệp</h1>
          <p>
            Dịch vụ thiết kế website không chỉ đẹp mắt mà còn mang về nhiều lượt
            truy cập, nhiều đơn hàng. Đội ngũ thiết kế web luôn chăm chút từ nội
            dung, chức năng đến cả cách thức vận hành.
          </p>
          <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
            <img loading="lazy" width="100%" src="/assets/img/web-design/1.png" />
          </Box>
          <Box className="section">
            <Grid container spacing={4}>
              <Grid item md={6}>
                <img loading="lazy" width="100%" src="/assets/img/web-design/2.jpg" />
              </Grid>
              <Grid item md={6}>
                <h1>Tăng trưởng doanh thu – phát triển doanh nghiệp</h1>
                <p style={{ textAlign: "start" }}>
                  Giải pháp Website giúp doanh nghiệp của bạn tăng trưởng và
                  tiết kiệm được một khoản chi phí cực lớn cho các hoạt động
                  tiếp thị và truyền thông thương hiệu cho doanh nghiệp. Nhất là
                  đối với những doanh nghiệp mới thành lập.
                </p>
                <Grid container spacing={4} sx={{ textAlign: "start" }}>
                  <Grid item md={6} display="flex" alignItems="center" gap={2}>
                    <TaskAltIcon />
                    <div>Tiếp cập khách hàng tiềm năng</div>
                  </Grid>
                  <Grid item md={6} display="flex" alignItems="center" gap={2}>
                    <TaskAltIcon />
                    Phát triển brand, tăng nhận diện thương hiệu
                  </Grid>
                  <Grid item md={6} display="flex" alignItems="center" gap={2}>
                    <TaskAltIcon />
                    Dễ dàng quản lý kho hàng, sản phẩm
                  </Grid>
                  <Grid item md={6} display="flex" alignItems="center" gap={2}>
                    <TaskAltIcon />
                    Tạo nên những chiến dịch giúp tăng trưởng doanh thu vượt bậc
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className="section" maxWidth={1204} ml={"auto"} mr={"auto"}>
            <h1 className="title">Thiết Kế Website Dành Riêng Cho Bạn</h1>
            <p>
              Một website chuyên nghiệp sẽ giúp doanh nghiệp có một lợi thế cạnh
              tranh rất lớn. Dù bạn đang kinh doanh bất cứ ngành hàng nào, THE
              83 đều hỗ trợ bạn xây dựng website kinh doanh, quản lý tập trung
              và marketing online một cách hiệu quả nhất.
            </p>
            <ListCard list={ItemList} />
          </Box>
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

const ItemList = [
  {
    name: "Bố cục hiện đại",
    desc: "Tính thẩm mỹ trang web của bạn là điều cần thiết để thu hút sự chú ý. Chúng tôi đảm bảo rằng trang web của bạn có được lợi thế về hình ảnh so với các đối thủ cạnh tranh.",
    icon: <DashboardIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Trải nghiệm tuyệt vời",
    desc: "Trải nghiệm người dùng cũng quan trọng như tính thẩm mỹ của trang web. Chúng tôi có thể giúp bạn tạo một trang web dễ điều hướng để người dùng có thể tìm thấy những gì họ đang tìm kiếm một cách nhanh chóng.",
    icon: <SentimentSatisfiedIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tốc Độ Nhanh",
    desc: "Trang web mất nhiều thời gian tải sẽ gây ảnh hưởng tới trải nghiệm người dùng. Chúng tôi có thể tối ưu hóa tốc độ tải trang web của bạn trên tất cả các thiết bị.",
    icon: <SpeedIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Chi phí hiệu quả",
    desc: "Cho dù nhu cầu thiết kế web như thế nào thì động cơ quyết định vẫn là tiết kiệm nhiều chi phí. Nhiều đãi đi kèm giúp hạn chế mức chi phí bỏ ra của doanh nghiệp nhưng vẫn thu về hiệu quả cao nhất.",
    icon: <CurrencyExchangeIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tối ưu hoá SEO",
    desc: "Bố cục, cấu trúc trang tối ưu, mang lại hiệu quả trong việc SEO trên mọi thiết bị, giúp website có thứ hạng cao trên các công cụ tìm kiếm.",
    icon: <ManageSearchIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tương thích mọi thiết bị",
    desc: "Thiết kế web với công nghệ responsive giúp website có thể tự động thích ứng trên mọi thiết bị, phát huy hết sức mạnh của nó.",
    icon: <DevicesOtherIcon sx={{ fontSize: "2.5rem" }} />,
  },
];

export default WebDesign;
