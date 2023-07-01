import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

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
      <Container maxWidth="lg">
        <Box>
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
          <Box sx={{ zIndex: 15, position: "relative" }}>
            <Grid container spacing={2} marginTop={"50px"}>
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image="/assets/img/services/fb.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      QUẢNG CÁO FACEBOOK
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Để có được sự ủng hộ cho thương hiệu của bạn từ cộng đồng
                      mạng và được nhắc tới thường xuyên. Để thu hút sự chú ý
                      trên mạng xã hội là một nhiệm vụ khó khăn, tuy nhiên các
                      chuyên gia của chúng tôi luôn biết cách tối đa hóa lượng
                      tương tác và hiển thị với các nội dung sáng tạo đột phá.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image="/assets/img/services/fb.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      QUẢNG CÁO FACEBOOK
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Để có được sự ủng hộ cho thương hiệu của bạn từ cộng đồng
                      mạng và được nhắc tới thường xuyên. Để thu hút sự chú ý
                      trên mạng xã hội là một nhiệm vụ khó khăn, tuy nhiên các
                      chuyên gia của chúng tôi luôn biết cách tối đa hóa lượng
                      tương tác và hiển thị với các nội dung sáng tạo đột phá.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image="/assets/img/services/fb.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      QUẢNG CÁO FACEBOOK
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Để có được sự ủng hộ cho thương hiệu của bạn từ cộng đồng
                      mạng và được nhắc tới thường xuyên. Để thu hút sự chú ý
                      trên mạng xã hội là một nhiệm vụ khó khăn, tuy nhiên các
                      chuyên gia của chúng tôi luôn biết cách tối đa hóa lượng
                      tương tác và hiển thị với các nội dung sáng tạo đột phá.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image="/assets/img/services/fb.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      QUẢNG CÁO FACEBOOK
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Để có được sự ủng hộ cho thương hiệu của bạn từ cộng đồng
                      mạng và được nhắc tới thường xuyên. Để thu hút sự chú ý
                      trên mạng xã hội là một nhiệm vụ khó khăn, tuy nhiên các
                      chuyên gia của chúng tôi luôn biết cách tối đa hóa lượng
                      tương tác và hiển thị với các nội dung sáng tạo đột phá.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Service;
