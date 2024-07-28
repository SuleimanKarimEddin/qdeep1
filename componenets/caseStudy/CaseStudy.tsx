import Image from 'next/image'
import React from 'react'
interface ICaseStudy {
  image: string
  title:string
  body:string
  pdf?:string

}
export default function CaseStudy({body,image,title}: ICaseStudy) {
  return (
    <div className='study'>
        <Image src={`/images/case/${image}`} width={100} height={100} alt="logo" className="study__image"></Image>
        <h3 className="study__title">{title}</h3>
    </div>
  )
}
