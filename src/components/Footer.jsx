import React, { useEffect, useState } from 'react'
import '../css/Footer.css'


const Footer = () => {
    
    const [path,setPath]=useState(window.location.pathname)
    useEffect(()=>{

    },[path])
    // const isHomepage = window.location.pathname === "/";
  return (
<footer className="footer">
  <div className="footer-content">
    <p className="credits">
      Built with React, ESPN API, and Firebase for real-time chat.
    </p>
   
        <p className="creator-info">
        Created by AB1738 | View more projects on my <a href="https://www.github.com/ab1738">GitHub</a>.
      </p>
    <p>Basketball animation by <a href="https://codepen.io/zajcus/pen/oLGLQV" target="_blank">Zajcus on CodePen</a>.</p>

    <p className="copyright">© 2025 The Sports Room. All rights reserved.</p>
  </div>
</footer>

  
  )
}

export default Footer