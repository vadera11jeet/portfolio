"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroTitle = () => {
  return (
    <div className="max-h-50
    ">
      <h1 className="text-3xl md:text-6xl w-full font-extrabold py-2 mb-3">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
          {"Hello, I'm"}
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "Jeet Vadera",
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            "Software Engineer",
            1500,
            "Web developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={20}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
};

export default HeroTitle;
