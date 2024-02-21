import React from 'react'
import './Contact.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faAddressBook, faEnvelope, faLocationPin} from "@fortawesome/free-solid-svg-icons"
import img from '../../images/cnt2.png'

export default function Contact() {
  return (
    <div className='Contact-cont flex'>
        <div className='contact-banner animate flex'>
            <div className='contact-slogan flex'>
                <h2>Have an idea in mind?</h2>
                <img src={img} alt="" />
                <p>Don't hesitate to reach us. At DeltaRG you can make your idea's real.</p>
            </div>
            <div className='contact-info flex'>
                <h2 className='flex'><FontAwesomeIcon icon={faPhone} /> +383 49 465 045</h2>
                <h2 className='flex'><FontAwesomeIcon icon={faEnvelope} /> deltargkos@gmail.com</h2>
                <h2 className='flex'><FontAwesomeIcon icon={faLocationPin} />Str. Jahja Beatle No.26 Gjilan, Kosova</h2>
            </div>
        </div>
    </div>
  )
}

