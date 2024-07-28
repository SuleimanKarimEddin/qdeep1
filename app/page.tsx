"use client";
import NewsHolder from "@/componenets/news/NewsHolder";
import Trusted from "@/componenets/trusted/Trusted";
import Image from "next/image";
import React from "react";
import {caseStudies} from "@/db/caseStudy.json";
export default function Home() {
  return (
    <>
      <div className="home">
        <h1 className="home-page">
          The quantum leap to solving the unsolvable{" "}
          <div className="word-half">
            - making the impossible, <span className="word">possible</span>.
          </div>
        </h1>
        <Image
          alt="logo"
          src="/images/header_body.png"
          width={100}
          height={100}
          className="home__header"
        ></Image>
        <Image
          src="/images/upEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="home__footer"
        ></Image>
      </div>
      <div className="trusted">
        <Image
          src="/images/downEffect.svg"
          width={100}
          height={100}
          alt="logo"
          className="trusted__footer"
        ></Image>
        <h2 className="header">
          Trusted <span className="word">by</span>
        </h2>
        <Trusted></Trusted>
      </div>
      <div className="trusted">
        <h2 className="header2">
          Our <span className="word2">Platforms</span>
        </h2>
        <h3>
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </h3>
        <Trusted is_trusted={false}></Trusted>
      </div>
      <div className="laptop">
        <div className="laptop__first">
          <button className="laptop__first-button">Coming Soon...</button>
          <Image
            src="/images/laptop/1.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__first-image"
          ></Image>
          <Image
            src="/images/laptop/first.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__first-inner1"
          ></Image>
        </div>
        <div className="laptop__second">
          <button className="laptop__second-button">See Our Beta Platform</button>
          <Image
            src="/images/laptop/2.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__second-image"
          ></Image>
          <Image
            src="/images/laptop/second.svg"
            width={100}
            height={100}
            alt="logo"
            className="laptop__second-inner"
          ></Image>
        </div>
      </div>
      <div className="case">
        <h2 className="case__header">Our Featured Case Studies</h2>
        <h3 className="case__description">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </h3>
        {caseStudies.map((item, idx) => (
          <div key={idx} className={`case__first case__first-${idx%2}`}>
          <Image
            src={`/images/case/${item.image}`}
            width={100}
            height={100}
            alt="logo"
            className="case__first-image"
          ></Image>
          <div className="case__first-body">
            <h2 className="case__first-body-header">
              {item.title}
            </h2>
            <h3 className="case__first-body-subheader">
              {item.body}
            </h3>
          </div>
        </div>
        ))}
        
      </div>
      <div className="news">
        <h2 className="news__header">News</h2>
        <h3 className="news__description">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </h3>
        <NewsHolder></NewsHolder>
      </div>
    </>
  );
}
