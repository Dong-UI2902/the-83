import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardUi from "./CardUi";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PeopleIcon from "@mui/icons-material/People";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const List = [
  {
    title: "+1000 Dự Án Website đa lĩnh vực",
    desc: "Đội ngũ nhiều năm kinh nghiệm với hơn 1000 khách hàng sử dụng dịch vụ thiết kế web.",
    icon: <ViewComfyIcon />,
  },
  {
    title: "Cung Cấp Giải Pháp Hiệu Quả",
    desc: "The83 cung cấp giải pháp Digital Marketing hiệu quả nhất cho khách hàng.",
    icon: <EditNoteIcon />,
  },
  {
    title: "Target Chuẩn Xác",
    desc: "Nhắm chính xác tệp khách hàng, tập trung tối ưu chuyển đổi, tăng trải nghiệm người dùng.",
    icon: <PeopleIcon />,
  },
  {
    title: "Tăng Trải Nghiệm Người Dùng",
    desc: "Bám sát hành trình, tăng trải nghiệm người dùng với sản phẩm dịch vụ và trở thành khách hàng thân thiết lâu dài.",
    icon: <ThumbUpIcon />,
  },
  {
    title: "Chi Phí Tối Ưu, Hợp Lý",
    desc: "Đến với The83, bạn không cần phải lo về chi phí, chúng tôi có nhiều sự lựa chọn phù hợp với doanh nghiệp của bạn.",
    icon: <CurrencyExchangeIcon />,
  },
  {
    title: "Hỗ Trợ Khách Hàng 24/7",
    desc: "Bạn có thể trao đổi với The83 mọi lúc mọi nơi. Chúng tôi luôn đảm bảo hỗ trợ khách hàng 24/7.",
    icon: <CurrencyExchangeIcon />,
  },
];

function ChooseUs() {
  return (
    <div className="section">
      <Grid container alignItems="center">
        <Grid xs={12} md={5}>
          <h1 className="title" style={{ textAlign: "start" }}>
            <span style={{ fontSize: "2rem" }}>Tại sao nên chọn</span>
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%)",
              }}
              className="text-transt-color"
            >
              The83 Social Media
            </span>
          </h1>
          <Box maxWidth={"90%"} margin="0 auto">
            <p className="session-desc">
              Là chuyên gia tư vấn chiến lược xây dựng thương hiệu trên Internet
            </p>
            <p>
              Nhiều năm kinh nghiệm phân tích hành vi người dùng và tư vấn chiến
              lược Digital Marketing, mang đến cho khách hàng tất cả các giải
              pháp marketing tốt nhất, hiệu quả nhất nhằm phát triển thương hiệu
              thúc đẩy doanh thu cho doanh nghiệp của khách hàng. Với chúng tôi,
              thành công không chỉ là đạt được kết quả như cam kết mà là được
              đồng hành cùng khách hàng trong suốt cuộc hành trình. Hãy lựa chọn
              và bứt phá cùng The83 Social Media.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {List.map((item, index) => (
              <Grid
                item
                xs={11}
                sm={6}
                md={4}
                key={index}
                justifyContent="center"
                margin="0 auto"
              >
                <CardUi icon={item.icon} title={item.title} desc={item.desc} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChooseUs;
