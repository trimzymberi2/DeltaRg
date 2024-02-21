import {React, useRef} from 'react'
import './Navbar.scss'
import Logo from '../images/delta-rg.png'
import Hamburger from 'hamburger-react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <BrowserRouter>
      <nav className='nav active'>
          <div className='nav-cont flex'>
              <div className='logo flex'>
                  <img src={Logo} alt="Delta Rg" />
                  <h2 className='flex'><span>Delta</span>RG</h2>
              </div>
              <ul className='flex' ref={navRef}>
                <Link to='#home' smooth>
                  <div onClick={showNavbar}  className='nav-links flex'><a href="/Home">Home</a></div>
                </Link>
                <Link to='#services' smooth>
                  <div  onClick={showNavbar} className='nav-links flex' ><a href="/Services">Services</a></div>
                </Link>
                <Link to='#about' smooth>
                  <div onClick={showNavbar}  className='nav-links flex about'><a href="/AboutUs">About us</a></div>
                </Link>
                <Link to='#contact' smooth>
                  <div onClick={showNavbar}  className='nav-links flex'><a href="/Contact">Contact</a></div>                
                </Link>
              </ul>
              <div className='hamburger'>
                <Hamburger onToggle={showNavbar} direction="right" color='#f8f8f8'/>
              </div>
          </div>
      </nav>
    </BrowserRouter>
  )
}
