import Link from "next/link";
import { LinkType } from "../../../types";

const links: LinkType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <nav>
      <Link href="/">My App</Link>
      <div>
        {links.map(({ id, title, url }) => (
          <Link key={id} href={url}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
