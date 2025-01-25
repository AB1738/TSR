import React from 'react'
import '../css/NewsGrid.css'
import NewsItem from './NewsItem'

const NewsGrid = ({info,sport}) => {
  console.log(sport)
    console.log(info)
  return (
    <section className='news-grid'>
        {info?(info.map((i,index)=>(
            <NewsItem info={i} key={i.dataSourceIdentifier} idx={index} sport={sport}/>
        ))):('')}
    </section>
  )
}

export default NewsGrid