import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className='navbar'>
            <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
                ☰
            </div>
            <div className='left-nav-content-wrapper'>
                <ul className={`left-nav-content ${isMobile ? 'mobile' : ''}`}>
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
             
            
            <div className='right-nav-content-wrapper'>
                <ul className={`right-nav-content ${isMobile ? 'mobile' : ''}`}>
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
        </nav>
    );
};

export default Navbar;
