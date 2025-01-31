import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
import '../css/Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location=useLocation()
    
    useEffect(()=>{
        setIsMobile(false)
    },[location])

    return (
        <nav className='navbar'>

            <div className={`left-nav-content-wrapper ${isMobile ? 'mobile' : ''}`}>
                <ul className={`left-nav-content`}>
                    <li>
                        <NavLink to={'/NBA'} className='nav-link'>
                        NBA
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/NFL'} className='nav-link'>
                        NFL
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/NHL'} className='nav-link'>
                        NHL
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/MLB'} className='nav-link'>
                        MLB
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <h2 className='nav-header'><NavLink to={'/'} className='nav-link-header' >The Sports Room</NavLink></h2>
             
            
            <div className={`right-nav-content-wrapper ${isMobile ? 'mobile' : ''}`}>
                <ul className={`right-nav-content`}>
                    <li>
                    <NavLink to={'/CFB'} className='nav-link'>
                        CFB
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/CBB'} className='nav-link'>
                        CBB
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/UFC'} className='nav-link'>
                        UFC
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to={'/WNBA'} className='nav-link'>
                        WNBA
                        </NavLink>
                    </li>
                </ul>
            </div>
            {!isMobile?(            <button className="hamburger" onClick={() => setIsMobile(!isMobile)}>
                <FaBars className='hamburger-icon'/>
            </button>):(            <button className="hamburger" onClick={() => setIsMobile(!isMobile)}>
                <FaTimes className='close-icon'/>
            </button>)}


        </nav>
    );
};

export default Navbar;
