import React from 'react'
import useFetch from '../hooks/useFetch'
import Page from '../components/Page'


const NHL = () => {
  const {info,isLoading,error}=useFetch('https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
  
  return (
    <Page info={info} isLoading={isLoading} sport='nhl'/>

  )
}
export default NHL