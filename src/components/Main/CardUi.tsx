import { Avatar, Card, CardContent, Typography, styled } from "@mui/material";
import React, { FC } from "react";

const IconWrapper = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#FFE5F8",
  "*": {
    color: "rgb(255, 78, 205)",
  },
}));

const CardUi: FC<{ title: string; icon: any; desc: any }> = ({
  title,
  icon,
  desc,
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        backdropFilter: "saturate(180%) blur(14px)!important",
        background: " rgba(255, 255, 255, 0.05)",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            gap: 1,
            fontWeight: "500",
          }}
        >
          <IconWrapper alt="ui-1">{icon}</IconWrapper>
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUi;
