import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";

const ListCard: FC<{ list: any[] }> = ({ list }) => {
  return (
    <Box className="section" maxWidth={1204} ml={"auto"} mr={"auto"}>
      <center>
        <h1>Đạt được các kết quả quan trọng với doanh nghiệp bạn.</h1>
      </center>
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
    </Box>
  );
};

export default ListCard;
