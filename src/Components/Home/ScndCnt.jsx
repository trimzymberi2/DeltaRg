import React from 'react'
import './ScndCnt.scss'
import Emak from '../../images/emak.png'
import Blend from '../../images/Logo-blendplants.png'
import InfraTest from '../../images/infratest_logo.webp'
import Ingevity from '../../images/ingevity.png'
import Ruthman from '../../images/brand.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandshake} from "@fortawesome/free-solid-svg-icons"




export default function ScndCnt() {
  return (
    <div className='ScndCnt-cont flex'>
        <h1 className='Tittle'>Our Partners <FontAwesomeIcon icon={faHandshake} /></h1>
        <div className='ScndCnt-banner animate flex'>
            <img src={Emak} alt="Emak" />
            <img src={Blend} alt="Blend" />
            <img src={InfraTest} alt="InfraTest" />
            <img src={Ingevity} alt="Ingevity"/>
            <img src={Ruthman} alt="Ruthman" />
        </div>
    </div>
  )
}
