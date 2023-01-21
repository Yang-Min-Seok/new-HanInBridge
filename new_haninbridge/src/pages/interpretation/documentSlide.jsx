// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./documentSlideStyle.css";

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
        <SwiperSlide className="documentImg1"></SwiperSlide>
        <SwiperSlide className="documentImg2"></SwiperSlide>
      </Swiper>
    </>
  );
}