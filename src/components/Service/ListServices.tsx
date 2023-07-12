import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Card,
  Grid,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import Carousel from "react-material-ui-carousel";
import Link from "../Link/Link";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const ListServices: FC<{ itemData: any[] }> = ({ itemData }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const sliderItems: number = itemData.length > 2 ? 2 : itemData.length;
  const items: Array<any> = [];

  for (let i = 0; i < itemData.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Card raised className="Banner" key={i.toString()}>
          <Grid container spacing={0} className="BannerGrid">
            {itemData.slice(i, i + sliderItems).map((item, index) => {
              return (
                <Grid item xs={6} key={i}>
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <Link
                      href={item.href}
                      underline="none"
                      sx={{
                        color: "var(--light-color)",
                        p: 0,
                      }}
                    >
                      <ImageListItemBar
                        title={item.title}
                        sx={{
                          "*": { whiteSpace: "unset!important" },
                          height: "100%",
                          textAlign: "center",
                        }}
                      />
                    </Link>
                  </ImageListItem>
                </Grid>
              );
            })}
          </Grid>
        </Card>
      );
    }
  }

  return (
    <div>
      <Box sx={{ display: { md: "block", xs: "none" }, marginTop: "50px" }}>
        <ImageList cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Link
                href={item.href}
                underline="none"
                sx={{
                  color: "var(--light-color)",
                  p: 0,
                }}
              >
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    "*": { whiteSpace: "unset!important" },
                    height: "100%",
                    textAlign: "center",
                  }}
                />
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" }, marginTop: "20px" }}>
        <Carousel
          animation="slide"
          autoPlay={true}
          cycleNavigation
          interval={3000}
        >
          {items}
        </Carousel>
      </Box>
    </div>
  );
};

export default ListServices;
