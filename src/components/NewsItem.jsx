import React from 'react'
import '../css/NewsItem.css'

const NewsItem = ({info,idx}) => {
    let cName=''
    if(idx%4===0 ){
        cName='news-item news-item-1'
    }
    else if(idx%4===1){
        cName='news-item news-item-2'
    }
    else if(idx%4===2){
        cName='news-item news-item-3'
    }
    else if(idx%4===3){
        cName='news-item news-item-4'
    }

    console.log(idx%4)
  return (
    <div className={cName}>
         <div className="img-container">
        <img src={info.images[0].url} alt={info.images[0].caption} className='news-item-img' />
        </div>
        <div className="header-container">
        <h1 className='news-item-header'>{info.headline}</h1>
        </div>

    </div>
  )
}

export default NewsItem