import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Page from '../components/Page'


const NBA = () => {
  const { info, isLoading, error } = useFetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news"
  );

  return (
    <Page info={info} isLoading={isLoading}/>

  );
};

export default NBA;
