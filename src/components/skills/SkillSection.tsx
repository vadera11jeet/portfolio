import React from "react";
import Chip from "../utils/Chip";

const SkillSection = ({ skills, title }: { skills: string[], title:string }) => {
  return (
    <div className="border w-auto max-w-xs max-h-lg p-5 m-3 border-gray-500 rounded-3xl">
      <div className="mb-3">
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="my-2 flex flex-row flex-wrap">
        {skills.map((skill, index) => (
          <Chip key={`${index}`} title={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
