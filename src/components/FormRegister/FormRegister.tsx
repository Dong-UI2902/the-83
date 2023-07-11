import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Button,
  styled,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";
import React from "react";

const itemData = [
  {
    img: "/assets/img/team.jpg",
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
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
              <TextInput label="Tên doanh nghiệp  (nếu có)" />
              <TextInput label="Website (nếu có)" />
              <FormControl
                variant="standard"
                sx={{ m: "10px 0", width: "100%" }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  variant="standard"
                >
                  Chọn dịch vụ cần hỗ trợ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  {ListServices.map((item, index) => (
                    <MenuItem key={index} value={10}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <center>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2, p: "7px 70px" }}
                >
                  Gửi
                </Button>
              </center>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const ListServices = [
  "Facebook Ads",
  "Tiktok Ads",
  "Google Ads",
  "Khoá học Social Media Advertising",
  "Thiết kế website, landing page",
  "Thiết kế hình ảnh, video",
  "Tư vấn chiến lược Marketing Online",
  "Xây dựng bộ nhận diện thương hiệu",
  "Tìm nguồn hàng phát triển hệ thống kinh doanh",
  "khác...",
];

export default FormRegister;
