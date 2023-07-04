import { Box, styled } from "@mui/material";
import React from "react";

const ImgStyle = styled("img")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  margin: "0 auto",
  top: 225,
}));

function Confused() {
  return (
    <section className="section">
      <center>
        <h1 className="title">
          Những <span style={{ color: "#F31260" }}>rủi ro</span>
        </h1>
        <h3 style={{ margin: 0 }}>Khi tự triển khai marketing</h3>
      </center>
      <Box className="confused">
        <ImgStyle src="/assets/img/confused/bg-confused.png" />
        <div>
          <h3>Không Có Kế Hoạch</h3>
        </div>
        <div>
          <h3>Không Hiệu Quả</h3>
        </div>
        <div>
          <h3>Không Có Báo Cáo</h3>
        </div>
        <div>
          <h3>Không Có Chiến Lược</h3>
        </div>
        <div>
          <h3>Không Có Target</h3>
        </div>
        <div>
          <h3>Không Tạo Giá Trị Thương Hiệu</h3>
        </div>
      </Box>
    </section>
  );
}

export default Confused;
