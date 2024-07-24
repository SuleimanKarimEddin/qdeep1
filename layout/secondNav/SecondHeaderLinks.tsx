"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  {
    name: "Home",
    link: "/qfss",
  },
  {
    name: "myFiles",
    link: "/myfiles",
  },
  {
    name: "Payments",
    link: "/payments",
  },
  {
    name: "MainHome",
    link: "/",
  }
];
export default function SecondHeaderLinks() {
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
