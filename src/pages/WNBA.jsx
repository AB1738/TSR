import React from 'react'
import useFetch from '../hooks/useFetch'
import Page from '../components/Page'

const WNBA = () => {
  const {info,isLoading,error}=useFetch('https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news')
  
  return (
    <Page info={info} isLoading={isLoading}/>

  )
}
export default WNBA