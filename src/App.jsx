import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import NBA from './pages/NBA';
import NFL from './pages/NFL';
import MLB from './pages/MLB';
import CBB from './pages/CBB';
import WNBA from './pages/WNBA';
import CFB from './pages/CFB';
import UFC from './pages/UFC';
import NHL from './pages/NHL';
import NotFound from './pages/NotFound';
import Article from './pages/Article';
import Footer from './components/Footer';
import './App.css'


function App() {

  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/nfl" element={<NFL />} />
          <Route path="/mlb" element={<MLB />} />
          <Route path="/cfb" element={<CFB />} />
          <Route path="/cbb" element={<CBB />} />
          <Route path="/wnba" element={<WNBA />} />
          <Route path="/ufc" element={<UFC />} />
          <Route path="/nhl" element={<NHL />} />
          <Route path="/:sport/:id" element={<Article />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
