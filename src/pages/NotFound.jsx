import React from 'react'
import '../css/NotFound.css'

const NotFound = () => {
  return (
    <section className="not-found-container">
      <div className="not-found-wrapper">
        <h3>
        Game Over! 404 Error
        </h3>
        <p>The page you’re looking for just fouled out.</p>
        <p>You can go back to the main page and start fresh.</p>
        <button className="btn btn-light return-btn" >
          <a href="/" className='return-link'>Return to the Locker Room</a>
          </button>
      </div>
    </section>
  )
}

export default NotFound


