"use client";
import Image from "next/image";
import React from "react";
import HeaderLinks from "./HeaderLinks";

export default function Nav() {
  return (
    <nav className="nav">
      <Image
        src="/images/QdeepLogo.png"
        width={100}
        height={100}
        alt="logo"
        className="nav__logo"
      ></Image>
      <HeaderLinks></HeaderLinks>
      <Image
        className="nav__image"
        src="/images/header_shape.png"
        width={100}
        height={100}
        alt="logo"
      ></Image>
    </nav>
  );
}
