import React from 'react'
import NewsCart from './NewsCart'
import data from '@/db/news.json'
export default function NewsHolder({search}:{search?:string}) {
  const final = search ? data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())) : data
   
  return (
    <div className='news__holder'>
        {final.map((item, idx) => (
            <NewsCart key={idx} {...item}></NewsCart>
        ))}
    </div>
  )
}
