import React from 'react'
import useFetch from '../hooks/useFetch'
import Page from '../components/Page'


const NFL = () => {
  const {info,isLoading,error}=useFetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
  
  return (
    <Page info={info} isLoading={isLoading} sport='nfl'/>

  )
}

export default NFL