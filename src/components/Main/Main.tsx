import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SettingsIcon from "@mui/icons-material/Settings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import CardUi from "./CardUi";

function Main() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CardUi
              icon={<EmojiObjectsIcon />}
              title="Giải pháp toàn diện"
              desc={
                "Chúng tôi tư vấn giải pháp Marketing toàn diện, đa kênh. Đảm bảo thực hiện mục tiêu doanh nghiệp nhanh nhất với chi phí thấp nhất."
              }
            />
          </Grid>
          <Grid item xs={3}>
            <CardUi
              icon={<SettingsIcon />}
              title="Công cụ hỗ trợ mạnh mẽ"
              desc={
                "The83 sở hữu những công cụ hỗ trợ Marketing mạnh nhất trên thị trường hiện nay."
              }
            />
          </Grid>
          <Grid item xs={3}>
            <CardUi
              icon={<CurrencyExchangeIcon />}
              title="Tối ưu hoá chi phí – lợi nhuận"
              desc={
                "Đến với The83, bạn không cần phải lo về chi phí, chúng tôi có nhiều sự lựa chọn phù hợp với doanh nghiệp của bạn."
              }
            />
          </Grid>
          <Grid item xs={3}>
            <CardUi
              icon={<CoPresentIcon />}
              title="Đội ngũ chuyên môn cao"
              desc={
                "The83 sở hữu đội ngũ nhân viên có trình độ chuyên môn cao, luôn nhiệt tình trong công việc."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Main;
