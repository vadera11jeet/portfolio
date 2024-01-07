import Image from "next/image";
import Link from "next/link";

import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <section className="container px-12 py-4">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
        <div className="col-span-7 place-self-center max-h-100 items-center text-center sm:text-left ">
          <HeroTitle />
          <p className="text-lg md:text-2xl mx-auto text-[#adb7be] mb-6">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications
          </p>
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1N9XwifvqnOzL6_thwpmZLiyxk_NAfKit/view?usp=sharing"
              }
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 mt-4  place-self-center order-first md:order-none">
          <div className=" w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative ">
            <Image
              src={"/blob.svg"}
              alt="hero-image"
              width={300}
              height={300}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className="my-3 col-span-5"></div>
      </div>
    </section>
  );
};

export default Hero;
