"use client";

import Link from "next/link";
import { LinkType } from "../../../types";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

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
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        My App
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(({ id, title, url }) => (
          <Link key={id} href={url}>
            {title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log("Logout")}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
