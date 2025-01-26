import React, { useEffect, useState } from 'react'
import { useLocation,Navigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Chat from '../components/Chat';
const Article = () => {

  //to fetch the state that was passed to the navlink through the newsitem component
  const location = useLocation();
  const {sport,id}=useParams()
  const { articleData } = location.state || {}; 
  const [fetchedArticle,setFetchedArticle]=useState()
  const [isLoading,setIsLoading]=useState(true)


  const sportEndpoints = {
    nba: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news',
    nfl: 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/news',
    nhl: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news',
    mlb: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news',
    cfb: 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/news',
    cbb: 'https://site.api.espn.com/apis/site/v2/sports/basketball/college-basketball/news',
    ufc: 'https://site.api.espn.com/apis/site/v2/sports/mma/ufc/news',
    wnba: 'https://site.api.espn.com/(apis/site/v2/sports/basketball/wnba/news',
  };



      useEffect(()=>{
        if(articleData){
          setIsLoading(false)
        }
        //if article data doesnt exist, then nothing was passed down via props
           if (!articleData) {
            console.log('no article data found')
            //get the sport and id from the url and look for the article via the enpoints
            //if it doesnt exist then navigate to not found page
            const checkEndPoints=async()=>{
              if(!isLoading) setIsLoading(true)
              const response=await fetch(sportEndpoints[sport])
              const data=await response.json()

              //if no corresponding data is found with either the sport or id navigate to 404
              if(!data)return <Navigate to="/not-found" />;
              // console.log(data.articles.filter(article=>article.dataSourceIdentifier===id))
              setFetchedArticle(data.articles.filter(article=>article.dataSourceIdentifier===id))
              setIsLoading(false)
            }
            checkEndPoints()
        }
    
      },[])



  return (
    <div className='d-flex justify-content-center'>

      {(!isLoading &&(articleData || fetchedArticle[0]))?(
        <>
        <Card style={{ width: '25rem' }}>
  <Card.Title className="text-center">{(articleData && articleData.headline) || (fetchedArticle[0] && fetchedArticle[0].headline)}</Card.Title>

  <Card.Img 
  variant="top" 
  src={(articleData && articleData.images && articleData.images[0] && articleData.images[0].url) || 
       (fetchedArticle && fetchedArticle[0] && fetchedArticle[0].images && fetchedArticle[0].images[0] && fetchedArticle[0].images[0].url)} 
  alt={(
    (articleData && articleData.images && articleData.images[0] && articleData.images[0].caption) || 
    (fetchedArticle && fetchedArticle[0] && fetchedArticle[0].images && fetchedArticle[0].images[0] && fetchedArticle[0].images[0].caption) ||
    (articleData && articleData.images && articleData.images[0] && articleData.images[0].name) ||
    (fetchedArticle && fetchedArticle[0] && fetchedArticle[0].images && fetchedArticle[0].images[0] && fetchedArticle[0].images[0].name) || 
    'Default Alt Text'
  )}
/>

<Card.Body>
  <Card.Text>
    {(articleData && articleData.description) || 
     (fetchedArticle[0] && fetchedArticle[0].description)}
  </Card.Text>
  <div className="d-flex flex-wrap justify-content-center">
  {(articleData?.categories || fetchedArticle[0]?.categories)?.map((category, index) =>
    category.description && (
      <span
        key={index}
        className="badge badge-pill badge-primary m-1"
        style={{ fontSize: '0.8rem', color: 'black' }}
      >
        {category.description}
      </span>
    )
  )}
</div>

</Card.Body>

<Card.Footer className='d-flex justify-content-center'>
  <small className="text-muted">
    Published on {new Date((articleData && articleData.published) || 
                           (fetchedArticle[0] && fetchedArticle[0].published)).toLocaleDateString()}
  </small>
</Card.Footer>

</Card>
<Chat/>
</>
      ):<div>Loading...</div>}



    </div>
  )
}

export default Article