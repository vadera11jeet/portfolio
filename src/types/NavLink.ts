export type NavLinkProps = {
  href: string;
  title: string;
};

export type NavMenuLinkProps = {
  links: NavLinkProps[];
  closeMenu: (state: boolean) => void;
};
