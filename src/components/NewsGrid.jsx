import React from 'react'
import '../css/NewsGrid.css'
import NewsItem from './NewsItem'

const NewsGrid = ({info}) => {
    console.log(info)
  return (
    <section className='news-grid'>
        {info?(info.map((i,index)=>(
            <NewsItem info={i} key={i.dataSourceIdentifier} idx={index}/>
        ))):('')}
    </section>
  )
}

export default NewsGrid