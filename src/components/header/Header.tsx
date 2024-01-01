import Link from "next/link";
import React from "react";
import NavigationLink from "./NavigationLink";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 bg-[#121212] bg-opacity-90 w-full">
      <div className="flex flex-wrap mx-auto p-4 lg:px-5 item-center justify-between w-full text-white">
        <Link
          href={"/"}
          className="text-4xl md:text-4xl lg:text-5xl font-semibold"
        >
          portfolio
        </Link>
        <NavigationLink />
      </div>
    </header>
  );
};

export default Header;
