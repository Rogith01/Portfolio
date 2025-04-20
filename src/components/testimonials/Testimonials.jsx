import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/ets.jpeg";


// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Eagle-HiTech Softclou Private Limited",
    review:
      "He has successfully completed his full-stack internship with us, demonstrating strong technical skills and a proactive approach to problem-solving. We are confident that his contributions will propel him towards achieving great success in his future endeavors.",
  },
  {
    avatar: AVTR1,
    name: "",
    review:
      "",
  },
  {
    avatar: AVTR1,
    name: "",
    review:
      "",
  },
  {
    avatar: AVTR1,
    name: "",
    review:
      "",
  },
  {
    avatar: AVTR1,
    name: "",
    review:
      "",
  },
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Top People</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
