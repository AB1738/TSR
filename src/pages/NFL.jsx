import React from 'react'
import { useState,useEffect } from 'react'
import NewsGrid from '../components/NewsGrid'

const NFL = () => {
  const [info,setInfo]=useState('')
  const[isLoading,setIsLoading]=useState(false)

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setIsLoading(true)
        const response=await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
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
      {isLoading?<h3>Loading...</h3>: <NewsGrid info={info.articles} />}
      
    </main>
  )
}

export default NFL