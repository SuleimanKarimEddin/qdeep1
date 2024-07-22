import Image from "next/image";
import Link from "next/link";
import React from "react";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Security",
    link: "/security",
  },
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__first">
        <Image src="/images/footer/1.svg" width={100} height={100} alt="logo" className="footer__first-image"></Image>
        <div className="footer__first-text">
          <h1>
            Start your Quantum journey with <span>QDeep today!</span>
          </h1>
          <h3>Ready to be part of the new revolution? Join QDeep now, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxand let us help you achieve your financial goals with our tailored solutions and exceptional customer service</h3>
        </div>
        <div className="footer__first-button">
        <button >Open Account</button>
        </div>
      </div>
      <div className="footer__second">
        <div className="footer__logos">
          <Image src="/images/QdeepLogo.png" width={100} height={100} alt="logo"></Image>
          <Image src="/images/QDeep.svg" width={100} height={100} alt="logo"></Image>
        </div>
        <div className="footer__links">
          {links.map((link, idx) => (
            <Link href={link.link} key={idx} className="footer__link">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="footer__br"/>
        <div className="footer__info">
          <div className="footer__info-part">
            <Image alt="logo" src="/images/footer/email.svg" width={100} height={100} ></Image>
            hello@skillbirdge.com
          </div>
          <div className="footer__info-part">
            <Image alt="logo" src="/images/footer/phone.svg" width={100} height={100} ></Image>
            +91 91813 23 2309
          </div>
          <div className="footer__info-part">
            <Image alt="logo" src="/images/footer/location.svg" width={100} height={100} ></Image>
            Somewhere in the World
          </div>
        </div>
        <div className="footer__br"/>
        <div className="footer__last">
          <div className="footer__last-logos">
            <Image alt="logo" src="/images/footer/face.svg" width={100} height={100}></Image>
            <Image alt="logo" src="/images/footer/tet.svg" width={100} height={100}></Image>
            <Image alt="logo" src="/images/footer/lin.svg" width={100} height={100}></Image>
          </div>
          <div className="footer__last-mid">QDeep All Rights Reserved</div>
          <div className="footer__last-end">Privacy Policy | Terms of Service</div>
        </div>
      </div>
    </footer>
  );
}
