import Image from "next/image";
import React from "react";
import { ProjectProps } from "@/types/Project";
import Link from "next/link";

const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col border w-auto max-w-xs max-h-full m-5 border-gray-500 rounded-3xl">
      <div className="w-full h-[30vh] ">
        <Image
          src={props.image}
          alt={props.projectTitle}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full box-content object-cover border-t rounded-t-xl"
        />
      </div>
      <div className="text-2xl font-bold mt-2">{props.projectTitle}</div>
      <div className="text-lg text-justify p-1 h-28 overflow-hidden  line-clamp-4">
        {props.projectDescription}
      </div>
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        <hr className="bg-[#efefef]" />
        {props.githubLink && (
          <button
            className="cursor-pointer inline-flex items-center rounded-full my-3 px-9 py-2 md:py-1 text-xl font-mono  text-white hover:text-black border-2 border-[#efefef]
          hover:bg-[#efefef] hover: transition ease-in-out delay-150  focus:bg-transparent"
          >
            <Link href={props.githubLink}>Code</Link>
          </button>
        )}
        {props.liveLink && (
          <button
            className="cursor-pointer inline-flex items-center rounded-full my-3 px-9 py-2 md:py-1 text-xl font-mono  text-white hover:text-black border-2 border-[#efefef]
            hover:bg-[#efefef] hover: transition ease-in-out delay-150  focus:bg-transparent"
          >
            <span>
              <Link href={props.liveLink}>Demo</Link>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Project;
