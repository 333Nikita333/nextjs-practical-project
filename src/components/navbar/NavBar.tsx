"use client";

import { FC } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { LinkType } from "../../../types";
import styles from "./page.module.css";

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

const NavBar: FC = () => {
  const session = useSession();
  
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
        {session.status === "authenticated" && (
          <button
            className={styles.logout}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
