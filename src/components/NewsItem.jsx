import React from 'react'
import '../css/NewsItem.css'
import { NavLink } from 'react-router-dom'

const NewsItem = ({info,idx,sport}) => {
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

    // console.log(idx%4)
    // console.log(`/${sport}/${info.dataSourceIdentifier}`)
  return (

    <div className={cName}>
            <NavLink  className='article-link'
    to={`/${sport}/${info.dataSourceIdentifier}`} 
    state={{ articleData: info }} // Passing the data through state
>
         <div className="img-container">
        <img src={info.images[0].url} alt={info.images[0].caption} className='news-item-img' />
        </div>
        <div className="header-container">
        <h1 className='news-item-header'>{info.headline}</h1>
        </div>
        </NavLink>
    </div>
    
  )
}

export default NewsItem