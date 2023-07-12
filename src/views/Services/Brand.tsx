import React from "react";
import Layout from "../../components/Layout/Layout";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormRegister from "../../components/FormRegister/FormRegister";
import TagHeader from "../../components/TagHeader/TagHeader";

const Info = {
  title: "Thiết Kế Bộ Nhận Diện Thương Hiệu uy tín chất lượng 2023 - The83",
  desc: "The83 - Thiết Kế Bộ Nhận Diện Thương Hiệu chuyên nghiệp sáng tạo với nhiều năm kinh nghiệm và hàng nghìn bộ nhận diện",
  url: "https://www.the83.vn/dich-vu-nhan-dien-thuong-hieu",
};

function Brand() {
  return (
    <div>
      <TagHeader {...Info} />
      <Box
        sx={{
          height: "65vh",
          backgroundImage: "url('/assets/img/brand/bg-header.jpg')",
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
            <h1 className="title">Xây Dựng Bộ Nhận Diện Thương Hiệu</h1>
            <center>
              <p style={{ color: "var(--light-color)", maxWidth: "1024px" }}>
                Bộ nhận diện thương hiệu được coi là là yếu tố giúp doanh nghiệp
                trở nên độc đáo và khác biệt với các đối thủ cạnh tranh trên thị
                trường.
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
        <Box sx={{ maxWidth: "1024px", margin: "0 auto" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item md={6}>
              <img
                loading="lazy"
                style={{ borderRadius: "20px" }}
                width="100%"
                src="/assets/img/brand/1.jpg"
              />
            </Grid>
            <Grid item md={6}>
              <h1>Bộ nhận diện thương hiệu là gì?</h1>
              <p style={{ fontSize: "1.3rem" }}>
                Bộ nhận diện thương hiệu (Brand Identity) là tập hợp tất cả các
                yếu tố liên quan đến hình ảnh, âm thanh hay từ ngữ được sử dụng
                để có thể tạo liên tưởng về thương hiệu mà doanh nghiệp và gìn
                giữ trong tâm trí của khách hàng mục tiêu.
              </p>
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <center>
            <h1>Vai trò của bộ nhận diện thương hiệu</h1>
            <p style={{ fontSize: "1.3rem" }}>
              Bộ nhận diện thương hiệu có vai trò vô cùng quan trọng đối với
              việc xây dựng và phát triển thương hiệu của một doanh nghiệp.
            </p>
          </center>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={4}>
              <List>
                {ItemList.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      // secondary={secondary ? "Secondary text" : null}
                      sx={{ "*": { fontSize: "1.3rem" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={6}>
              <img loading="lazy" width="100%" src="/assets/img/brand/2.png" />
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <Grid container spacing={4} justifyContent="center">
            <Grid item md={6}>
              <img
                loading="lazy"
                style={{ borderRadius: "20px" }}
                width="100%"
                src="/assets/img/brand/3.jpg"
              />
            </Grid>
            <Grid item md={5}>
              <h1>
                Bạn là một Startup?
                <br /> Cần xây dựng thương hiệu?
              </h1>
              <p style={{ fontSize: "1.3rem" }}>
                Khi sử dụng bộ nhận diện thương hiệu, Startup có thể tạo ra sự
                khác biệt cho thương hiệu của mình so với các thương hiệu khác
                trên thị trường, giúp quá trình hoạt động doanh nghiệp của mình
                đi theo định hướng và một timeline nhất định. Dù bạn đang kinh
                doanh bất cứ ngành hàng nào, The83 tự tin có thể xây dựng thương
                hiệu cho bạn một cách hiệu quả nhất.
              </p>
            </Grid>
          </Grid>
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

const ItemList = [
  "Xác định uy tín, giá trị của thương hiệu",
  "Giúp doanh nghiệp dễ dàng trong việc truyền tải thông điệp đến khách hàng.",
  "Tạo sự khác biệt với các thương hiệu khác",
  "Thể hiện sự chuyên nghiệp, tầm nhìn cũng như vị thế của thương hiệu",
];

export default Brand;
