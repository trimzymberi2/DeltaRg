import React from 'react'
import './Whoarewe.scss'
import img1 from '../../images/ban2.png'


export default function Whoarewe() {
  return (
    <div className='Aboutus-cont whoarewe-cont flex'>
        <div className='abtus-frstcont animate scnd-cont flex'>
          <div className='abtus-frstbanner flex'>
            <img src={img1} alt="" />
          </div>
          <div className='abtus-scndbanner flex'>
            <h1 className='flex Tittle'>Why you should choose us?</h1>
            <h3 className='flex'>We are known for correction in work and in time.</h3>
          </div>
        </div>
    </div>
  )
}
