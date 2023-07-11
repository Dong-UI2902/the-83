import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Grid } from "@mui/material";
import BgHeaderStyle from "../../components/BgHeader/BgHeaderStyle";
import ListCard from "./quang-cao/ListCard";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import DifferenceIcon from "@mui/icons-material/Difference";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FormRegister from "../../components/FormRegister/FormRegister";
function Editor() {
  return (
    <div>
      <BgHeaderStyle
        props={{ height: "44vh", backgroundSize: "contain" }}
        url={"/assets/img/editor/bg-header.webp"}
      />
      <Layout props={{ position: "relative" }}>
        <Box className="section">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={5}>
              <h1 className="title">Dịch vụ chỉnh sửa ảnh chuyên nghiệp</h1>
              <p>
                Thiết kế hình ảnh quảng cáo đẹp, hình ảnh slide đẹp, các hình
                ảnh quảng cáo, chương trình sự kiện đẹp,... góp phần rất quan
                trọng, làm cho bài quảng cáo của bạn trở lên đẹp hơn, chuyên
                nghiệp hơn, gây ấn tượng với khách hàng hơn.
              </p>
            </Grid>
            <Grid item md={5}>
              <img loading="lazy" width="100%" src="/assets/img/editor/1.jpg" />
            </Grid>
          </Grid>
        </Box>
        <Box className="section" maxWidth={1204} ml={"auto"} mr={"auto"}>
          <center>
            <h1>Tầm quan trọng của một video, hình ảnh đẹp</h1>
          </center>
          <ListCard list={ItemList} />
        </Box>
        <FormRegister />
      </Layout>
    </div>
  );
}

const ItemList = [
  {
    name: "Tăng khả năng nhận biết về thương hiệu, sản phẩm và dịch vụ",
    desc: "",
    icon: <CategoryIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Thu hút chú ý của khách hàng",
    desc: "",
    icon: <PeopleIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: " Gây ấn tượng, tạo sự chuyên nghiệp trong mắt khách hàng của doanh nghiệp",
    desc: "",
    icon: <AutoAwesomeIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Hỗ trợ cho hoạt động marketing, quảng cáo và bán hàng của doanh nghiệp",
    desc: "",
    icon: <LeaderboardIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Tạo sự khác biệt so với đối thủ cạnh tranh",
    desc: "",
    icon: <DifferenceIcon sx={{ fontSize: "2.5rem" }} />,
  },
  {
    name: "Dễ đi sâu trong tâm trí khách hàng",
    desc: "",
    icon: <ConnectWithoutContactIcon sx={{ fontSize: "2.5rem" }} />,
  },
];

export default Editor;
