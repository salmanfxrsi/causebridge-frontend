import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import Slide1 from "../assets/Slide1.jpg";
import Slide2 from "../assets/Slide2.jpg";
import Slide3 from "../assets/Slide3.jpg";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={Slide1}
            text="Welcome To Cause Bride, A Platform Of Volunteerism"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={Slide2} text="We Are Here To Help You To Help Others" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={Slide3}
            text="We Are Really Grateful For Your Support"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
