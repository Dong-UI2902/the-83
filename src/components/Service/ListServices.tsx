import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Card,
  Grid,
  Link,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import Carousel from "react-material-ui-carousel";

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
                  <ImageListItem>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={
                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            color: "var(--light-color)",
                            display: "-webkit-box",
                            WebkitLineClamp: "2!important",
                          }}
                        >
                          {item.title}
                        </Link>
                      }
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
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
      <ImageList cols={isMobile ? 2 : 4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <LightTooltip title={item.title} placement="top">
                  <Link
                    href="#"
                    underline="none"
                    sx={{ color: "var(--light-color)" }}
                  >
                    {item.title}
                  </Link>
                </LightTooltip>
              }
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
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
