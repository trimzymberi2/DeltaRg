import React from 'react'
import './Aboutus.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressCard} from "@fortawesome/free-solid-svg-icons"
import img from '../../images/ban1.png'
import img1 from '../../images/ban2.png'

export default function Aboutus() {
  return (
    <div className='Aboutus-cont flex'>
        <div className='abtus-frstcont animate flex'>
          <div className='abtus-scndbanner flex'>
            <h1 className='flex Tittle'>Who are we?</h1>
            <h3 className='flex '>DeltaRG is an engineering company with 30+ years experience. Envolved in hundreds of projects with an succseful result. Known for the great staff...</h3>
          </div>
          <div className='abtus-frstbanner flex'>
            <img src={img} alt="" />
          </div>
        </div>
       
    </div>
  )
}
