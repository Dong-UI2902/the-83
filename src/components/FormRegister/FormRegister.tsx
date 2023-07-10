import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Button,
  styled,
  TextField,
} from "@mui/material";
import React from "react";

const itemData = [
  {
    img: "/assets/img/about/1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 4,
  },
  {
    img: "/assets/img/about/2.jpg",
    title: "Burger",
    cols: 2,
  },
  {
    img: "/assets/img/about/3.jpg",
    title: "Camera",
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const TextInput = styled(TextField)(({ theme }) => ({
  margin: "10px 0",
}));
TextInput.defaultProps = {
  fullWidth: true,
  variant: "standard",
  id: "fullWidth",
};

function FormRegister() {
  return (
    <div>
      <Box className="section">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <ImageList
              sx={{ maxWidth: 700, height: "auto", width: "100%" }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item, index) => (
                <ImageListItem
                  key={index}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: "10px" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item md={5}>
            <h1 style={{ margin: 0 }}>Tư vấn & Báo giá dịch vụ!</h1>
            <form>
              <TextInput label="Họ và tên" />
              <TextInput label="Điện thoại" />
              <TextInput label="Email" />
              <TextInput label="Tên doanh nghiệp" />
              <TextInput label="Website (nếu có)" />
              <center>
                <Button variant="contained" sx={{ marginTop: 2 }}>
                  Contained
                </Button>
              </center>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FormRegister;
