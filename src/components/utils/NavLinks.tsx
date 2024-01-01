import Link from "next/link";
import { NavLinkProps } from "@/types/NavLink";

const NavLinks = (link: NavLinkProps) => {
  return (
    <Link
      className="block font-600 pr-4 pl-3 py-4 text-[#ADB7db] sm:text-xl rounded md:px-2 lg:px-4 hover:text-white"
      href={link.href}
    >
      {link.title}
    </Link>
  );
};

export default NavLinks;
