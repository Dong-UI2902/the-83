import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Box, styled } from "@mui/material";

const SlideLinkStyle = styled(Link)(({ theme }) => ({
  padding: "10px 15px",
  background: "#1565C0",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  color: "var(--light-color)",
  textDecoration: "none",
  fontWeight: 600,
  borderRadius: "5px",
  display: "block",
  maxWidth: "150px",
  textAlign: "center",
  margin: "0 auto",
}));

function Service() {
  let timeout;
  
  let layers = [];
  let covers = [];

  const [sliderIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    layers = [...document.querySelectorAll(".layer")];
    covers = [...document.querySelectorAll(".photo-frame")];
  }, [sliderIndex]);


  function changeCoverAnimState(state = 0) {
    const st = state === 1 ? "running" : "paused";
    covers.forEach((cover) => {
      // cover.style['animation-play-state'] = st;
      cover.querySelector(".cover").style.width = `${state * 100}%`;
    });
  }

  const goToNewSlide = (newSlide) => {
    if (newSlide === 0) {
      newSlide = 4;
    } else if (newSlide === 5) {
      newSlide = 1;
    }
    for (const i of layers) {
      i.classList.remove("layer-displayed");
      i.classList.remove("layer-displayed-exit");
      if (i.dataset.scene == newSlide) {
        i.classList.add("layer-displayed");
      }
      if (i.dataset.scene == sliderIndex) {
        i.classList.add("layer-displayed-exit");
      }
    }
    setSlideIndex(newSlide);
  };

  function switchNext() {
    console.log("next");
    const nextSlide = sliderIndex + 1;
    changeCoverAnimState(1);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      changeCoverAnimState(0);
    }, 500);
    goToNewSlide(nextSlide);
  }

  function switchBack() {
    const nextSlide = sliderIndex - 1;
    changeCoverAnimState(1);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      changeCoverAnimState(0);
    }, 500);
    goToNewSlide(nextSlide);
  }

  return (
    <div>
      <main>
        <div className="hero-left">
          <h1>Quảng cáo</h1>
          <div className="layers">
            <div className="layer layer-displayed" data-scene="1">
              <span>Tiktok Ads</span>
              <div
                className="layer__image"
                style={{
                  backgroundImage:
                  "url('/assets/img/services/icon-tiktok.png')",
                }}
              ></div>
              <Box sx={{ marginTop: "10px" }}>
                <SlideLinkStyle target="_blank" to={"/dich-vu-ads/tiktok"}>Xem thêm</SlideLinkStyle>
              </Box>
            </div>
            <div className="layer" data-scene="2">
              <span>Google Ads</span>
              <div
                className="layer__image"
                style={{
                  backgroundImage:
                    "url('/assets/img/services/icon-gg.png')",
                }}
              ></div>
              <Box sx={{ marginTop: "10px" }}>
                <SlideLinkStyle target="_blank" to={"/dich-vu-ads/google"}>Xem thêm</SlideLinkStyle>
              </Box>
            </div>
            <div className="layer" data-scene="3">
              <span>Facebook Ads</span>
              <div
                className="layer__image"
                style={{
                  backgroundImage:
                  "url('/assets/img/services/icon-fb.png')",
                }}
              ></div>
              <Box sx={{ marginTop: "10px" }}>
                <SlideLinkStyle target="_blank" to={"/dich-vu-ads/facebook"}>Xem thêm</SlideLinkStyle>
              </Box>
            </div>
            <div className="layer" data-scene="4">
              <span>YouTube Ads</span>
              <div
                className="layer__image"
                style={{
                  backgroundImage:
                  "url('/assets/img/services/icon-youtube.webp')",
                }}
              ></div>
              <Box sx={{ marginTop: "10px" }}>
                <SlideLinkStyle target="_blank" to={"/dich-vu-ads/youtube"}>Xem thêm</SlideLinkStyle>
              </Box>
            </div>
          </div>
          <button onClick={() => switchNext()}>
            <Avatar>
              <ArrowBackIosIcon />
            </Avatar>
          </button>
          <button onClick={() => switchBack()}>
            <Avatar>
              <ArrowForwardIosIcon />
            </Avatar>
          </button>
        </div>
        <div className="hero-right">
          <div className="layer layer-displayed" data-scene="1"></div>
          <div className="layer" data-scene="2"></div>
          <div className="layer" data-scene="3"></div>
          <div className="layer" data-scene="4"></div>
          {/* <div className="photo-frame">
            <div
              className="layer layer-displayed"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1495468286609-71018e87abc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=987c55a292efaa0adb9acfc26c06e22a&auto=format&fit=crop&w=670&q=80')",
              }}
              data-scene="1"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  " url('https://images.unsplash.com/photo-1536099876051-79f4cbffeed1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=451b9215ee8acc20d5d7ea354aab570e&auto=format&fit=crop&w=1350&q=80') ",
              }}
              data-scene="2"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512821062947-6eda5253c3e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=305dedf0e09581de0ee68ab2c9523955&auto=format&fit=crop&w=1351&q=80')",
              }}
              data-scene="3"
            ></div>
            <div className="cover"></div>
          </div> */}
          {/* <div className="photo-name">
            <div className="photo-name__wrapper">
              <div className="layer layer-displayed" data-scene="1">
                <span className="photo-name__title">BRION FOX</span>
                <span>RIDING THE CANNON</span>
              </div>
              <div className="layer" data-scene="2">
                <span className="photo-name__title">AUSTIN SMITH</span>
                <span>RIDING THE POW</span>
              </div>
              <div className="layer" data-scene="3 ">
                <span className="photo-name__title">SALLY BLUE</span>
                <span>RIDING THE SPLASH</span>
              </div>
            </div>
          </div> */}
          <div className="photo-frame">
            <div
              className="layer layer-displayed"
              style={{
                backgroundImage:
                "url('assets/img/services/tiktok-shop.png')",
              }}
              data-scene="1"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                "url('assets/img/services/gg-desc.png')",
              }}
              data-scene="2"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  "url('assets/img/services/fb-desc.webp')",
              }}
              data-scene="3"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  "url('assets/img/services/youtube/2.svg')",
              }}
              data-scene="4"
            ></div>
            <div className="cover"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
