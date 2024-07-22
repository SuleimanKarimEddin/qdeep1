import prisma from '@/lib/prisma'
import React from 'react'
import NewsCart from './NewsCart'

export default async function NewsHolder() {

    const data = await prisma.post.findMany({
    })

  return (
    <div className='news__holder'>
        {data.map((item, idx) => (
            <NewsCart key={idx} {...item}></NewsCart>
        ))}
    </div>
  )
}
