import React from "react";
import experienceList from "@/experience.json";
import TimeLine from "./TimeLine";

const Experience = () => {
  return (
    <section className="min-h-screen container text-center flex flex-col gap-6 p-4 m-5">
      <div className="mt-9 pt-16 mb-5">
        <h1 className="text-4xl font-bold underline underline-offset-auto ring-offset-neutral-50">
          experience
        </h1>
      </div>

      <div className="w-full self-center mx-auto grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 text-justify ">
        <div className="w-[80%] self-center mx-auto border border-gray-500 p-5 rounded-lg ">
          <div className="my-3">
            <h3 className="text-2xl text-center font-semibold">
              {" "}
              Work Experience
            </h3>
          </div>
          <div>
            {experienceList.map((exp) => (
              <TimeLine
                key={exp.id}
                companyName={exp.company}
                time={exp.time}
                description={exp.description}
              />
            ))}
          </div>
        </div>
        <div className="w-[80%] self-center mx-auto border border-gray-500 p-5 rounded-lg">
          <div className="my-3">
            <h3 className="text-2xl text-center font-semibold">
              {" "}
              Education
            </h3>
          </div>
          <div>
            {experienceList.map((exp) => (
              <TimeLine
                key={exp.id}
                companyName={exp.company}
                time={exp.time}
                description={exp.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
