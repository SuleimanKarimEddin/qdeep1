"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Case Studies",
    link: "/case",
  },
  {
    name: "News",
    link: "/news",
  },
  
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
 
];
export default function HeaderLinks() {
  const params = usePathname();

  return (
    <div className="nav__menu">
      {links.map((link, idx) => (
        <Link
          key={idx}
          className={params === link.link ? "active" : "menuLink"}
          href={link.link}
        >
          <h3>{link.name}</h3>
        </Link>
      ))}
    </div>
  );
}
