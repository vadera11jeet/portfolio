import Image from "next/image";
import Link from "next/link";
import React from "react";

const Connect = () => {
  return (
    <section
      id="connect"
      className=" grid grid-cols-1 md:grid-cols-2 grid-rows-2  md:grid-rows-1 gap-16 md:my-12  py-8 md:py-24 items-center"
    >
      <div className="w-[80%] mx-auto my-0">
        <h5 className="text-2xl font-bold text-white my-2">{"Let's connect"}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
          {
            "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          }
        </p>
        <div className="flex flex-row gap-4 my-3">
          <Link href={"https://twitter.com/JeetVadera"}>
            <Image src={"x-twitter.svg"} alt="twitter" width={32} height={32} />
          </Link>
          <Link href={"https://github.com/vadera11jeet"}>
            <Image src={"github.svg"} alt="github" width={32} height={32} />
          </Link>
          <Link href={"https://www.linkedin.com/in/jeet-vadera-3bb1a91a0/"}>
            <Image src={"linkedin.svg"} alt="linkedin" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-0">
        <form className="flex flex-col  gap-1">
          <div className="mb-2">
            <label htmlFor="#email" className="text-base font-bold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full p-2 border border-[#efefef] rounded-lg bg-transparent mt-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="#subject" className="text-base font-bold">
              subject
            </label>
            <input
              type="email"
              id="subject"
              required
              placeholder="Just saying hi"
              className="w-full p-2 border border-[#efefef] rounded-lg bg-transparent my-2"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="#subject" className="text-base font-bold">
              message
            </label>
            <textarea
              rows={3}
              id="message"
              required
              placeholder="Let's talk about..."
              className="w-full p-2 border border-[#efefef] rounded-lg bg-transparent my-2"
            />
          </div>
          <div className="mb-2">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg block w-full">
              send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connect;
