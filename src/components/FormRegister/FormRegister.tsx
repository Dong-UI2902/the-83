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
  FormControl,
  Alert,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_nj93xea",
        "template_wi73gfo",
        form.current,
        "X1MHSDgn2rVLBAVHP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
          setOpenError(true);
        }
      )
      .finally(() => {
        e.target.reset();
        setLoading(false);
      });
  };

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenError(false);
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
            <form ref={form} onSubmit={sendEmail}>
              <TextInput
                label="Họ và tên"
                name="user_name"
                type="text"
                required
              />
              <TextInput
                label="Điện thoại"
                name="user_phone_number"
                type="text"
                required
              />
              <TextInput
                label="Email"
                name="user_email"
                type="email"
                required
              />
              <TextInput
                label="Tên doanh nghiệp  (nếu có)"
                name="user_business"
              />
              <TextInput label="Website (nếu có)" name="user_site" />
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
                  label="Age"
                  name="user_service"
                  required
                >
                  {ListServices.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <center>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2, p: "7px 70px" }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Đang gửi..." : "Gửi"}
                </Button>
              </center>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Đăng ký tư vấn thành công!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Đã xảy ra lỗi, vui lòng thử lại sau!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export const ListServices = [
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
