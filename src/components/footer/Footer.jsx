import React, { useEffect } from 'react';
import './Footer.css';
import logo from '../../images/freedom.png';



const Footer = () => {


  return (
    <div className='footer'>

    <div className="container">
      <div className="footer-content">

        <div className="footer-logo">
          <img src={logo} alt="" />
          <h2>Freedom <span>Academy</span></h2>
          </div>

          <div className="footer-social">
            <ul>
              <li><a href="https://www.facebook.com/freedom055" target='_blank'><i class="fa-brands fa-facebook one"></i></a></li>
              <li><a href="https://www.instagram.com/freedom__055/" target='_blank'><i class="fa-brands fa-instagram two"></i></a></li>
              <li><a href="https://twitter.com/freedom52057624" target='_blank'><i class="fa-brands fa-twitter three"></i></a></li>
              <li><a href="https://www.tiktok.com/@freedom_academy?lang=en" target='_blank'><i class="fa-brands fa-tiktok four"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCIY---kfx3Z99wH82crQepQ" target='_blank'><i class="fa-brands fa-youtube five"></i></a></li>
            </ul>
          </div>

      </div>
    </div>
    </div>
  )
}

export default Footer