import React, { useEffect, useState } from "react";
import NewsGrid from "../components/NewsGrid";
import useFetch from "../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";

const NBA = () => {
  const { info, isLoading, error } = useFetch(
    "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news"
  );

  return (
    <main className="content-wrapper">
      {/* <h1 className='header'>NBA News</h1> */}
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
        <NewsGrid info={info.articles} sport="nba" />
      )}
    </main>
  );
};

export default NBA;
