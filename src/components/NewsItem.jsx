import React from 'react'
import '../css/NewsItem.css'
import { Link } from 'react-router-dom'

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

  return (

    <div className={cName}>
            <Link  className='article-link'
    to={`/${sport}/${info.dataSourceIdentifier}`} 
    state={{ articleData: info }} // Passing the data through state
>
         <div className="img-container">
            {((info.images && info.images[0] && info.images[0].url !== undefined))?(
                <img src={info.images[0].url} alt={info.images[0].caption} className='news-item-img' />
            ):(
            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'} alt={'no image found'} className='img-not-found' />
            )
            }
        
        </div>
        <div className="header-container">
        <h1 className='news-item-header'>{info.headline}</h1>
        </div>
        </Link>
    </div>
    
  )
}

export default NewsItem