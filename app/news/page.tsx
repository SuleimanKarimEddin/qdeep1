"use client";
import NewsHolder from '@/componenets/news/NewsHolder';
import { Input } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react'


const Page = () => {
  const [SearchQ, setSearchQ] = useState("")

    return (
      <>
        <div className="home">
          <h1 className="home-page2">
            Everyday, QDeep is achieving milestones in the Quantum utility road
            & in preparing the next generation for the Quantum revolution
          </h1>
          <Image
            alt="logo"
            src="/images/header_body.png"
            width={100}
            height={100}
            className="home__header"
          />
          <Image
            src="/images/upEffect.svg"
            width={100}
            height={100}
            alt="logo"
            className="home__footer"
          />
        </div>
        <div className="trusted">
          <Image
            src="/images/downEffect.svg"
            width={100}
            height={100}
            alt="logo"
            className="trusted__footer"
          />
        </div>
        <h1 className="news__title">Latest News</h1>
        <div className="caseStudy">
          <div className="caseStudy-holder">
          <Input className='search' placeholder='Search' onChange={(e) => setSearchQ(e.target.value)}/>
          <NewsHolder  search={SearchQ}></NewsHolder>
          </div>
        </div>
      </>
    );
  };
  
  export default Page;