import React from "react";
import { NavMenuLinkProps } from "../../types/NavLink";
import Link from "next/link";

const MenuOverlay = ({ links }: NavMenuLinkProps) => {
  return (
    <div className="flex z-10  flex-col w-screen justify-center items-center h-[100vh]">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="pt-2 text-2xl ">
            <Link href={link.href}> {link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
