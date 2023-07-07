import { Grid, Card, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";

const ListCard: FC<{ list: any[] }> = ({ list }) => {
  return (
    <Grid container spacing={4}>
      {list.map((item, index) => (
        <Grid item md={4} key={index}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent>
              {item.icon}
              <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                {item.name}
              </Typography>
              <p>{item.desc}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListCard;
