import React from "react";
import useFetch from "../hooks/useFetch";
import Page from "../components/Page";

const CBB = () => {
  const { info, isLoading, error } = useFetch("https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news");
  return (
      <Page info={info} isLoading={isLoading}/>
  );
};

export default CBB;
