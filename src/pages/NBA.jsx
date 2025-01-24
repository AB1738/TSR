import React, { useEffect, useState } from 'react'
import NewsGrid from '../components/NewsGrid'

const NBA = () => {
  const [info,setInfo]=useState('')
  const[isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setIsLoading(true)
        const response=await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news')
        const data=await response.json()
        console.log(data)
        setInfo(data)
        setIsLoading(false)
      }catch(e){
        console.error(e)
      }
     
    }
    console.log(info)
    fetchData()
  },[])
  
  return (
    <main className='content-wrapper'>
      {/* <h1 className='header'>NBA News</h1> */}
      {isLoading?<h3>Loading...</h3>: <NewsGrid info={info.articles} />}
      
    </main>
  )
}

export default NBA