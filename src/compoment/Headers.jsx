import React from 'react'
import './Headers.css'
import Logo from '../assest/logo.svg'

const  Headers = () => {
  return (
    <div className='header'>
         
            <p>GILLY'S <br /> <span>Koramangala</span></p>
         
            <img src={Logo} alt="" /> 
    </div>
  )
}

export default Headers