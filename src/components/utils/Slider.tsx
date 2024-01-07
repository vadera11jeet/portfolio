"use client";
import React from "react";
import Project from "../project/Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const CustomSlider = () => {
  return (
    <div className=" max-w-[80vw] self-center">
      <Slider
        dots={true}
        infinite={true}
        // slidesPerRow={3}
        responsive={[
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              // centerMode: true,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              // centerMode: true,
            },
          },
        ]}
        // centerMode={true}
        swipe={true}
        touchMove={true}
        slidesToShow={3}
        swipeToSlide={true}
      >
        {projectNumber.map((val) => (
          <Project
            projectTitle={`todo app ${val}`}
            key={val}
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            image="/temp.jpg"
            githubLink="/"
            liveLink="/"
          />
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
