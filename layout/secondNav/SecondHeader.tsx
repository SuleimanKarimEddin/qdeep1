import Image from 'next/image'
import React from 'react'
import SecondHeaderLinks from './SecondHeaderLinks'
import Auth from './Auth'

export default function SecondHeader() {
  return (
    <div className="secondHeader">
        <Image
        src="/images/QdeepLogo.png"
        width={100}
        height={100}
        alt="logo"
        className="nav__logo"
      ></Image>
      <SecondHeaderLinks></SecondHeaderLinks>
      <Auth/>
    </div>
  )
}
