import React from 'react'
import './Services.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWrench ,faHelmetSafety, faArrowRightArrowLeft, faRoad, faPersonDigging, faSnowplow, faScrewdriverWrench, faToolbox} from "@fortawesome/free-solid-svg-icons"
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

export default function Services() {
  return (
    <div className='services-cont flex'>
        <h1 className='Tittle flex'>Our Services<FontAwesomeIcon icon={faWrench} /></h1>
        <div class="services-parent flex">
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faHelmetSafety} style={{color: "#ffffff", height:"30px"}} />
                <h2>Engineering / Construction</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{color: "#ffffff", height:"30px"}} />
                <h2>Intermediation / Trade</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faRoad} style={{color: "#ffffff", height:"30px"}} />
                <h2>Asphalt Plants / Additive</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faPersonDigging} style={{color: "#ffffff", height:"30px"}} />
                <h2>Concrete Plants / Additivess</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faSnowplow} style={{color: "#ffffff", height:"30px"}} />
                <h2>Construction Machinery</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#ffffff", height:"30px"}} />
                <h2>Testing Equipments</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faLightbulb} style={{color: "#ffffff", height:"30px"}} />
                <h2>Renewable Energy</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
            <div className='services-card animate flex'>
            <FontAwesomeIcon icon={faToolbox} style={{color: "#ffffff", height:"30px"}} />
                <h2>Construction Materials</h2>
                <p>"If you care for your time, I hands down would go with this."</p>
            </div>
        </div>  
    </div>
  )
}
