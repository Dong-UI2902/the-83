import React from "react";
import BgHeaderStyle from "../components/BgHeader/BgHeaderStyle";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  styled,
  TextField,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

const TextInput = styled(TextField)(({ theme }) => ({
  margin: "10px 0",
}));
TextInput.defaultProps = {
  fullWidth: true,
  variant: "standard",
  id: "fullWidth",
};

function Contact() {
  return (
    <div>
      <BgHeaderStyle url={"/assets/img/about/bg-header.png"} />
      <Layout
        props={{
          padding: { md: "50px!important" },
          position: "relative",
          marginTop: "-150px",
          background: "var(--light-color)",
          borderRadius: "20px",
          boxShadow:
            "0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2)",
          p: {
            fontSize: "20px",
          },
        }}
      >
        <Box sx={{ maxWidth: "1204px", margin: "0 auto" }}>
          <Grid
            container
            spacing={4}
            position="relative"
            justifyContent="center"
          >
            <Grid item xs={12} md={7}>
              <h1
                style={{
                  textAlign: "start",
                }}
              >
                CÔNG TY TNHH THƯƠNG MẠI
                <br />
                <span
                  className="text-trans-color"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(0, 183, 250) 25%, rgb(1, 207, 234) 100%)",
                  }}
                >
                  THE 83 SOCIAL MEDIA
                </span>
              </h1>
              <Box>
                <List>
                  {Item.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        // secondary={secondary ? "Secondary text" : null}
                        sx={{ "*": { fontSize: "1.3rem" } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <img loading="lazy" width="100%" src="/assets/img/pink-logo.png" />
            </Grid>
          </Grid>
        </Box>
        <Box className="section">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0554905657355!2d106.79832657576851!3d10.807062058626434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527f6d34cb91f%3A0x5068df3768af1beb!2zQ8O0bmcgdHkgVE5ISCBUaMawxqFuZyBN4bqhaSBUSEU4MyBTb2NpYWwgTWVkaWE!5e0!3m2!1svi!2s!4v1688718454913!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
      </Layout>
    </div>
  );
}

const Item = [
  {
    name: "Trụ sở chính: KDC Park Riverside, 101 Bưng Ông Thoàn, P.Phú Hữu, TP.Thủ Đức, TP.HCM",
    icon: <BusinessIcon sx={{ fontSize: "2rem" }} />,
  },
  {
    name: "Văn phòng: S10.05 Vinhome Grand Park, P.Phước Long, TP.Thủ Đức, TP.Hồ Chí Minh",
    icon: <MapsHomeWorkIcon sx={{ fontSize: "2rem" }} />,
  },
  { name: "Hotline: 0924 620 620", icon: <PhoneIcon /> },
  {
    name: "Sale@The83.vn   The83sm@gmail.com",
    icon: <MailOutlineIcon sx={{ fontSize: "2rem" }} />,
  },
];

export default Contact;
