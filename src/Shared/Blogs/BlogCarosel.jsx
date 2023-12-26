
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./SwiperBullect.css";
import { FreeMode, Pagination } from "swiper/modules";

const BlogCarosel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/tQZgD2y/dentists-preparing-little-boy-for-examining-teeth-at-dentist-office.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/YTzRcnz/low-angle-view-of-dentists-examining-teeth-of-little-boy-at-dentist-office-e1617040347874.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/h2ZGDFh/professional-dentist-at-his-clinic-e1617040368221.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/xgPKwjR/annual-check-up-e1617040308199.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/HTX7HKQ/dental-check-up-e1617040270402.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/QkMsr4M/dentists-are-working-with-patient-e1617040255996.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-md">
          <img
            src="https://i.ibb.co/tQZgD2y/dentists-preparing-little-boy-for-examining-teeth-at-dentist-office.jpg"
            alt=""
            className="rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BlogCarosel;
