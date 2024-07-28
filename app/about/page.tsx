"use client"
import Image from 'next/image'
import React from 'react'
import {visions,members} from '@/db/about.json';

export default function Page() {
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
    <div className="case">
        <h2 className="case__header">Mission & Vision</h2>
        <h3 className="case__description">
        We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
        </h3>
        {visions.map((item, idx) => (
          <div key={idx} className={`case__first case__first-${idx%2}`}>
          <Image
            src={`/images/about/${item.image}`}
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
      <div className='about'>
        { members.map((item,idx)=>{
          return (
            <div key={idx} className="about__member">
             
              <div className="about__member-holder">
              <h2 className="about__member-header">
                  {item.name}
                </h2>
                <h3 className="about__member-role">
                  {item.role}
                </h3>
                </div>
              <div className="about__member-body">
              <Image
                src={`/images/about/${item.image}`}
                width={100}
                height={100}
                alt="logo"
                className="about__member-body-image"
              ></Image>
              <Image
                src={`/images/about/line.svg`}
                width={100}
                height={100}
                alt="logo"
                className="about__member-body-image2"
              ></Image>
              <Image
                 onClick={()=>{
                    window.open(item.linkedin,'_blank')
                  }}
                src={`/images/about/linkedin.svg`}
                width={100}
                height={100}
                alt="logo"
                className="about__member-body-link"
              ></Image>
              <Image
              onClick={()=>{
                window.open(item.research,'_blank')
              }}
                src={`/images/about/research.svg`}
                width={100}
                height={100}
                alt="logo"
                className="about__member-body-link2"
              ></Image>
                <p>{item.description}</p>
              </div>
            </div>
          )
        })}

      </div>
     
    </>
  )
}
