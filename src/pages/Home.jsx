import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="home-container">
     <div className="ball-1">
      <div className="stroke pos1"></div>
      <div className="stroke pos2"></div>
      <div className="stroke2 pos3"></div>
      <div className="stroke2 pos4"></div>
    </div> 

  
      <section className="hero">
        <h1 className='hero-header'>Welcome to the Ultimate Sports Chat Room!</h1>
        <p className='hero-desc'>Whether you're a die-hard fan or just getting into the game, this is the place to connect with fellow sports lovers from around the world. Here, you'll find a real-time, fast-paced community where you can talk about everything from the latest match results, breaking news, exciting plays, and even offbeat sports trivia!</p>
        <p className='hero-desc'>Our app is designed to keep you in the loop with all the sports action, offering a fun and engaging space where you can chat with people who share your passion for sports. No matter what sport you’re into—basketball, football, soccer, or even niche sports—you’ll find a community that’s just as excited as you are.</p>
        
        <h2 className='hero-header-2'>What Can You Do?</h2>
        <ul className='features-list'>
          <li className='feature'><strong>Engage in Real-Time Conversations:</strong> Chat live with users about ongoing games, player stats, or sports gossip. Share your opinions on the latest trades or predict who’s going to make it to the finals!</li>
          <li className='feature'><strong>Stay Up-to-Date:</strong> Get quick access to the most current sports news and headlines. Whether it’s breaking news about your favorite team or updates on game scores, you’ll always be in the loop.</li>
          <li className='feature'><strong>Join Discussions About Every Sport:</strong> From basketball and football to hockey and MMA, there’s always something to talk about. Dive into conversations about your favorite teams, players, or upcoming games!</li>
          <li className='feature'><strong>Make New Friends & Share Your Passion:</strong> Meet fellow fans who love the game as much as you do. Whether you’re into casual banter or deep analysis, you’ll find a place where your voice matters.</li>
        </ul>

        <h3 className='hero-header-3'>Ready to Join the Action?</h3>
        <p className='hero-desc'>Dive into the latest sports discussions now and start connecting with fans just like you. Click below to check out the latest news and join the conversation!</p>
        <ul className='sports-links'>
          <li />
          <Link to={'/NBA'} >
             <button className="btn btn-light">NBA</button>
             </Link>
          <li />
          <Link to={'/NFL'} >
           <button className="btn btn-light">NFL</button>
          </Link>
          <li />
          <Link to={'/NHL'} >
          <button className="btn btn-light">NHL</button>
          </Link>
          <li />
          <Link to={'/MLB'} >
          <button className="btn btn-light">MLB</button>
          </Link>
          <li />
          <Link to={'/CFB'} >
          <button className="btn btn-light">CFB</button>
          </Link>
          <li />
          <Link to={'/CBB'} >
          <button className="btn btn-light">CBB</button>
          </Link>
          <li />
          <Link to={'/UFC'} >
          <button className="btn btn-light">UFC</button>
          </Link>
          <li />
          <Link to={'/WNBA'} >
          <button className="btn btn-light">WNBA</button>
          </Link>
        </ul>

        <p className='hero-desc'>Whether you’re a fan of the underdogs or rooting for the champions, there’s a spot for you here. So, what are you waiting for? Join the conversation now and never miss a moment of the sports world!</p>
      </section>


    <div className="ball-2">
      <div className="stroke pos1"></div>
      <div className="stroke pos2"></div>
      <div className="stroke2 pos3"></div>
      <div className="stroke2 pos4"></div>
    </div> 
    </main>
  )
}

export default Home