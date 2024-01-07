"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "../utils/NavLinks";
import MenuOverlay from "./MenuOverlay";

const NAV_LINKS = [
  { href: "#skills", title: "Skills" },
  { href: "#experience", title: "experience" },
  { href: "#projects", title: "projects" },
  { href: "#connect", title: "connect with me" },
];

const NavigationLink = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsMenuOpen((state) => !state)}
        className="md:hidden flex item-center text-slate-200 border rounded border-slate-200 px-3 py-2 hover:text-white hover:border-white"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <Bars3Icon className="h-5 w-5" />
        )}
      </button>

      {isMenuOpen && (
        <MenuOverlay links={NAV_LINKS} closeMenu={setIsMenuOpen} />
      )}

      <nav className="menu hidden md:block md:w-auto" id="nav">
        <ul className="flex py-4 md:p-0 md:flex-row ">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <NavLinks href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavigationLink;
