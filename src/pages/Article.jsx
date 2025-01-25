import React from 'react'
import { useLocation,Navigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Chat from '../components/Chat';
const Article = () => {


  const location = useLocation();
  console.log(location)
    const { articleData } = location.state || {}; 
       if (!articleData) {
        return <Navigate to="/not-found" />;
    }

   console.log(articleData)
  return (
    <div className='d-flex justify-content-center'>

<Card style={{ width: '25rem' }}>
  <Card.Title className="text-center">{articleData.headline}</Card.Title>

  <Card.Img variant="top" src={articleData.images[0].url} alt={articleData.images[0].caption} />
  
  <Card.Body>
    <Card.Text>{articleData.description}</Card.Text>

    <div className="d-flex flex-wrap justify-content-center">
      {articleData.categories.map((category, index) =>
        category.description && (
          <span
            key={index}
            className="badge badge-pill badge-primary m-1"
            style={{ fontSize: '0.8rem', color:'black' }}
          >
            {category.description}
          </span>
        )
      )}
    </div>
  </Card.Body>

  <Card.Footer className='d-flex justify-content-center'>
    <small className="text-muted">
      Published on {new Date(articleData.published).toLocaleDateString()}
    </small>
  </Card.Footer>
</Card>
<Chat/>


        {/* <div className="article-container">
          <div className="header-container">
            <h1 className="header">
              {articleData.headline}
            </h1>
          </div>
          <div className="img-container">
            <img src={articleData.images[0].url} alt={articleData.images[0].caption} />
          </div>
          <div className="description-container">
            <h2 className="description">
              {articleData.description}
            </h2>
          </div>
          <span>Published on {new Date(articleData.published).toLocaleDateString()}</span>
          <div className="tags-container">
            {articleData.categories.map((category,index)=>(
              category.description&&  <span key={index}>{category.description} </span>
             
            ))}
          </div>
        </div> */}
    </div>
  )
}

export default Article