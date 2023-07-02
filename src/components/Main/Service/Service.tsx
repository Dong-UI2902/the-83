import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const BgImgStyle = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  margin: "0 auto",
}));

function Service() {
  return (
    <div className="session">
      <Box
        sx={{
          position: "absolute",
          top: "-25%",
          right: "-25%",
          zIndex: "0",
        }}
      >
        <BgImgStyle src="/assets/img/background/theming-gradient.svg" alt="" />
      </Box>
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
      </Box>
    </div>
  );
}

export default Service;
