import React from 'react'
import Page from '../components/Page'
import useFetch from '../hooks/useFetch'

const CFB = () => {
  const {info,isLoading,error}=useFetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/news')
  return (
    <Page info={info} isLoading={isLoading}/>
  )
}

export default CFB