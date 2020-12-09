import React from 'react';
import './HeroSection.css';
// import logo from '../../../assets/insidelogo.png'
import logo from '../../images/SQURL-Logo-FullColor-Green.svg'
import { Button } from '../ButtonElements';

function HeroSection() {
  return(
    <div className="hero-container">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <h1>What is SQURL?</h1>
      <div className='hero-description'>
        <p style={{textAlign:"center"}}>A cross-platform desktop application designed to generate meaningful dummy data and monitor database KPIs</p>
      </div>
      <div className="hero-btns">
       <a href="https://github.com/oslabs-beta/Squrl"><Button fontBig big primary> Get Started</Button></a>
      </div>
    </div>
  )
}
export default HeroSection