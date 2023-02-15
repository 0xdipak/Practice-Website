import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";

const Courses = () => {

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };


  return (
    <div className="w-full bg-[#e9f8f3b2] py-32">
      <div className="max-w-[600px] md:max-w-[1480px] m-auto px-5 md:px-0">
        <h1 className="text-3xl py-3 font-bold">
          Most Popular <span className="text-[#20b486]">Courses</span>
        </h1>
        <p className="text-[#6d737a]">Various versions have evolved over the years, sometimes by accident.</p>
        <Slider {...settings}>
          {courses.map((course) => (
            <Card course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
