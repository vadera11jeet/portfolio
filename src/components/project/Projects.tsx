import React from "react";
import Slider from "../utils/Slider";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen container text-center flex flex-col gap-6 p-4 m-5"
    >
      <div className="mt-9 m-5 pt-16">
        <h1 className="text-5xl mb-2 font-bold underline underline-offset-auto ring-offset-neutral-50">
          Projects
        </h1>
      </div>
      <Slider />
    </section>
  );
};

export default Projects;
