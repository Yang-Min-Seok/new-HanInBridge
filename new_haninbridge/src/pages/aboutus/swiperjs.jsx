// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slideStyle.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function SlideShow() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="img1"></SwiperSlide>
        <SwiperSlide className="img2"></SwiperSlide>
        <SwiperSlide className="img3"></SwiperSlide>
      </Swiper>
    </>
  );
}