import React from "react";
import "./Highlight.css";
import { highlightItems } from "./HiglightItems";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

function Highlight() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <div className="hpage-main">
        <div className="container_1">
          <img
            src={highlightItems[activeSlide].url}
            alt=""
            className="image_m"
          />

          <div className="descrpt">{highlightItems[activeSlide].des}</div>
        </div>
        <div className="slider_container">
          <Swiper
            slidesPerView={3}
            spaceBetween={100}
            freeMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            {highlightItems.map((items, index) => {
              return (
                <>
                  <SwiperSlide>
                    <img
                      className={items.cName}
                      src={items.url}
                      onClick={() => {
                        setActiveSlide(index);
                      }}
                      alt=""
                    ></img>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
