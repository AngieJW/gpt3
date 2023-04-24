import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h2 className='gradient__text'>Do you want to step into the future before others</h2>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p> All Rights Reserved </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>About us</p>
          <p>Social media</p>
          <p>Contact</p>
          <p>Counters</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>our location</p>
          <p>info@payme.net</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>©2023 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer