import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function Service() {
  return (
    <div className="section service">
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
        }}
      >
        <h1 className="title">
          các{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%)",
            }}
            className="text-transt-color"
          >
            dịch vụ
          </span>{" "}
          tại{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(rgb(255, 78, 205) 25%, rgb(242, 19, 97) 100%)",
            }}
            className="text-transt-color"
          >
            The83
          </span>
        </h1>
        <Box sx={{ marginTop: "60px" }}>
          <Slide />
        </Box>
        <Box maxWidth="1200px" margin="50px auto 0 auto">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <img width="100%" src="/assets/img/services/thiet-ke-web.jpg" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                fontWeight={600}
              >
                Thiết kế website chuyên nghiệp
              </Typography>
              <p style={{ paddingLeft: "30px" }}>
                Dịch vụ thiết kế website không chỉ đẹp mắt mà còn mang về nhiều
                lượt truy cập, nhiều đơn hàng. Đội ngũ thiết kế web luôn chăm
                chút từ nội dung, chức năng đến cả cách thức vận hành.
              </p>
              <ul>
                <li>
                  <CheckBoxIcon />
                  Chi phí hiệu quả
                </li>
                <li>
                  <CheckBoxIcon />
                  Quản lý đơn giản
                </li>
                <li>
                  <CheckBoxIcon />
                  Tương thích mọi thiết bị
                </li>
                <li>
                  <CheckBoxIcon />
                  Tối ưu hoá trang web
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Service;
