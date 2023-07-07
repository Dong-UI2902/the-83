import React from "react";
import Layout from "../../../components/Layout/Layout";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FormRegister from "../../../components/FormRegister/FormRegister";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListCard from "./ListCard";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CampaignIcon from "@mui/icons-material/Campaign";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PeopleIcon from "@mui/icons-material/People";

const ItemList = [
  {
    name: "Tiết kiệm thời gian, chi phí",
    desc: "Chủ shop hoặc doanh nghiệp được tư vấn trước khi chạy quảng cáo tiktok. Hạn chế gặp các vấn đề trong quá trình quảng cáo.",
    icon: <AlarmOnIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Video, hình ảnh đa dạng và độc đáo",
    desc: "Đầy đủ các hiệu ứng mới mẻ và hấp dẫn để có thể thu hút người dùng",
    icon: <AutoFixHighIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Thúc đẩy nhận diện thương hiệu",
    desc: "Tăng độ nhận diện thương hiệu nhờ hiển thị vị trí đầu tiên trên ứng dụng và ít cạnh tranh hơn các nền tảng khác.",
    icon: <CampaignIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Đột phá doanh thu với CPC cực thấp",
    desc: "Tăng tỉ lệ chuyển đổi tối đa khi liên kết với Landing Page, Tiktok Shop với CPC (Cost per click) cực thấp, mang lại lợi nhuận cho doanh nghiệp",
    icon: <CurrencyExchangeIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Đo lường - Tối ưu dữ liệu",
    desc: "Theo dõi, kiểm soát hiệu quả chiến dịch và đưa ra chiến lược phù hợp.",
    icon: <ManageHistoryIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tiếp cận tối đa khách hàng tiềm năng",
    desc: "Phân tích đối tượng khách hàng cụ thể để tiếp cận khách hàng phù hợp tuỳ theo mục đích quảng cáo",
    icon: <PeopleIcon sx={{ fontSize: "2.5rem" }} />,
  },
];

function Tiktok() {
  return (
    <div>
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "url('/assets/img/services/tiktok/bg-header.jpg')",
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
            alignItems="center"
            p={10}
          >
            <Grid item md={5} sx={{ color: "var(--light-color)" }}>
              <h1>
                Tạo đột phá cho doanh nghiệp của bạn với TikTok ngay hôm nay
              </h1>
              <p style={{ color: "var(--light-color)" }}>
                Nhờ số lượng đông đảo khách hàng tiềm năng, TikTok thật sự là
                nền tảng tuyệt vời đáng để trải nghiệm
              </p>
            </Grid>
            <Grid item md={6}>
              <img width="100%" src="/assets/img/services/tiktok-shop.png" />
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
                width="100%"
                src="/assets/img/services/tiktok/bg-header.awebp"
              />
            </Grid>
            <Grid item md={4}>
              <h1>Quảng cáo trên TikTok</h1>
              <p>
                Việc sở hữu tính năng chia sẻ video ngắn, kho nhạc bản quyền
                cùng vô vàn những hiệu ứng độc đáo cho người dùng thỏa sức sáng
                tạo. Điều này giúp cho các video về sản phẩm, quảng cáo trên
                TikTok luôn được truyền đạt nhanh nhất. Dù doanh nghiệp của bạn
                lớn hay nhỏ, dù bạn đang sản xuất hay bán gì, THE 83 tin rằng
                thương hiệu của bạn đều sẽ quảng cáo hiệu quả trên TikTok
                <br />
                Chúng tôi sử dụng kỹ thuật phân tích dữ liệu để xác định nhân
                khẩu học, hành vi, sở thích và các điểm dữ liệu liên quan để từ
                đó tìm ra chính xác khách hàng tiềm năng của thương hiệu, phân
                phối đúng kênh mục tiêu để tối ưu hoá về hiệu quả quảng cáo trên
                tiktok.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="section"
          maxWidth={1204}
          ml={"auto"}
          mr={"auto"}
          alignItems="center"
        >
          <Grid container spacing={4}>
            <Grid item md={6}>
              <h1>Thúc đẩy kinh doanh với các giải pháp của THE 83.</h1>
              <div>
                <List>
                  {Item.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#0ead60" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        // secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
            <Grid item md={6}>
              <img width="100%" src="/assets/img/services/tiktok/1.webp" />
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

const Item = [
  "Kiểm soát chi phí linh hoạt",
  "Giám sát theo thời gian thực",
  "Nhắm mục tiêu thông minh",
  "Hỗ trợ khách hàng tận tình",
];

export default Tiktok;
