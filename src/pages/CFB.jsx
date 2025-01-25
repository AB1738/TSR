import React from 'react'
import { useState,useEffect } from 'react'
import NewsGrid from '../components/NewsGrid'
import useFetch from '../hooks/useFetch'
import Spinner from "react-bootstrap/Spinner";

const CFB = () => {
  const {info,isLoading,error}=useFetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/news')
  return (
    <main className='content-wrapper'>
                  {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <NewsGrid info={info.articles} sport="cfb" />
      )}
      
    </main>
  )
}

export default CFB