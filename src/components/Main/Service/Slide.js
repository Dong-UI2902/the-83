import React, { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Avatar from "@mui/material/Avatar";

function Service() {
  let sliderIndex = 1;
  let timeout;
  
  let layers = [];
  let covers = [];

  useEffect(() => {
    layers = [...document.querySelectorAll(".layer")];
    covers = [...document.querySelectorAll(".photo-frame")];
  }, []);


  function changeCoverAnimState(state = 0) {
    const st = state === 1 ? "running" : "paused";
    covers.forEach((cover) => {
      // cover.style['animation-play-state'] = st;
      cover.querySelector(".cover").style.width = `${state * 100}%`;
    });
  }

  function switchLayer(step = 1) {
    const nextSlide =
      (sliderIndex + step) % 3 === 0 ? 3 : (sliderIndex + step) % 3;

    changeCoverAnimState(1);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      changeCoverAnimState(0);
    }, 500);
    for (const i of layers) {
      i.classList.remove("layer-displayed");
      i.classList.remove("layer-displayed-exit");
      if (i.dataset.scene == nextSlide) {
        i.classList.add("layer-displayed");
      }
      if (i.dataset.scene == sliderIndex) {
        i.classList.add("layer-displayed-exit");
      }
    }
    sliderIndex = nextSlide;
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
            </div>
          </div>
          <button onClick={() => switchLayer(2)}>
            <Avatar>
              <ArrowBackIosIcon />
            </Avatar>
          </button>
          <button onClick={() => switchLayer()}>
            <Avatar>
              <ArrowForwardIosIcon />
            </Avatar>
          </button>
        </div>
        <div className="hero-right">
          <div className="layer layer-displayed" data-scene="1"></div>
          <div className="layer" data-scene="2"></div>
          <div className="layer" data-scene="3"></div>
          <div className="photo-frame">
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
          </div>
          <div className="photo-name">
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
          </div>
          <div className="photo-frame">
            <div
              className="layer layer-displayed"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486335223442-a034129506f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=564f090b8a99c189845f2ef71d4f620a&auto=format&fit=crop&w=1350&q=80')",
              }}
              data-scene="1"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f51ed1121800f23da98176659ba7506&auto=format&fit=crop&w=1352&q=80')",
              }}
              data-scene="2"
            ></div>
            <div
              className="layer"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1478700485868-972b69dc3fc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=918195bdc5a37a2f412cf49234183427&auto=format&fit=crop&w=1350&q=80')",
              }}
              data-scene="3"
            ></div>
            <div className="cover"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Service;
