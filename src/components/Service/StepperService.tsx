import { Box, Stepper, Step, StepLabel, styled } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const steps = [
  "Tiếp nhận yêu cần của khách hàng",
  "Nghiên cứu sản phẩm/dịch vụ, thị trường và đối tượng mục tiêu",
  "Đề xuất kế hoạch quảng cáo trực tuyến phù hợp",
  "Báo giá, thương thảo và ký hợp đồng trực tuyến",
  "Triển khai dịch vụ quảng cáo Online",
  "Theo dõi, tối ưu, đo lường và báo cáo",
];

function StepperService() {
  return (
    <div>
      <Box className="section" sx={{ display: { xs: "none", md: "block" } }}>
        <h1 className="title">Quy trình triển khai</h1>
        <Stepper
          alternativeLabel
          connector={<ColorlibConnector />}
          sx={{ marginTop: "50px" }}
        >
          {steps.map((label) => (
            <Step key={label} active={false}>
              <StepLabel>
                <h3>{label}</h3>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default StepperService;
