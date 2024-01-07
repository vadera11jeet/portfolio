import React from "react";
import SkillSection from "./SkillSection";
import skillsList from "@/skillsList.json";

const Skills = () => {
  return (
    <section id="skills"className="min-h-screen text-center flex flex-col gap-5 justify-center p-4">
      <div>
        <h1 className="text-5xl font-bold underline underline-offset-8 ring-offset-neutral-50">
          Skills
        </h1>
      </div>
      <div className="self-center my-3 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-4 gap-y-2 ">
        {Object.entries(skillsList).map((skill, index) => (
          <SkillSection key={`${index}`} title={skill[0]} skills={skill[1]} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
