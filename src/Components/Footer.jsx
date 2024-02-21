import React from 'react'
import './Footer.scss'
import Logo from '../images/delta-rg.png'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'

export default function Footer() {
  return (
    <BrowserRouter>
    <div className='footer-cnt'>
    <div className='footer-frst-banner flex'>
        <div className='footer-logo flex'>
            <img src={Logo} alt="" />
            <h3 className='flex'><span>Delta</span>RG</h3>
        </div>
        <div className='footer-data flex'>
            <Link  to='#home' smooth>
            <h3>Home</h3>
            </Link>
            <Link  to='#services' smooth>
            <h3>Services</h3>
            </Link>
            <Link  to='#about' smooth>
            <h3>About us</h3>
            </Link>
            <Link  to='#contact' smooth>
            <h3>Contact</h3>
            </Link>
        </div>
    </div>
    <div className='footer-scnd-banner flex'>
        <p className='flex'>Powered by: TZ-Dev</p>
    </div>
</div>
    </BrowserRouter>
  )
}
