import React from 'react'
import NewsGrid from './NewsGrid'
import Spinner from "react-bootstrap/Spinner";


const Page = ({isLoading,info}) => {
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
        <NewsGrid info={info.articles} sport="nfl" />
      )}
      
    </main>
)
}

export default Page