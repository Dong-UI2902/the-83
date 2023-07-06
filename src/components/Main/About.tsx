import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const ImageStyle = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0 auto",
}));

function About() {
  return (
    <div className="section">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} className="img-about">
          <ImageStyle
            src="/assets/img/home/dich-vu-thiet-ke-website-my-pham.png"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            About us
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            width="fit-content"
            sx={{
              backgroundImage:
                "linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%)",
              fontWeight: 600,
            }}
            className="text-trans-color"
          >
            The83
            <Divider />
          </Typography>
          <Box maxWidth={650}>
            The83.vn là website đại diện chính thức cho Công ty TNHH Thương Mại
            The83 Social Media. Trong nhiều năm hoạt động ở lĩnh vực Digital
            Marketing, The83 không ngừng phát triển để trở thành một agency
            chuyên về chiến lược Digital Marketing với đội ngũ nhân viên có
            chuyên môn cao và kinh nghiệm thực chiến trên nhiều lĩnh vực. Chúng
            tôi có thể cung cấp nhiều giải pháp hơn cho doanh nghiệp vừa và nhỏ
            tại Thành phố Hồ Chí Minh với sứ mệnh thúc đẩy doanh số kinh doanh
            cho quý khách hàng trên thị trường Online.
          </Box>
          <Button
            variant="outlined"
            sx={{ fontWeight: "600", marginTop: "10px" }}
          >
            Tìm hiểu thêm
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
