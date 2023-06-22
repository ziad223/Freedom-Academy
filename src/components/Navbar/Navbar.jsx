import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/freedom.png';
import { Link } from 'react-router-dom';
import {BiChevronDown} from 'react-icons/bi';
import {BsFacebook, BsInstagram, BsTiktok, BsTwitter, BsYoutube} from 'react-icons/bs';

const Navbar = () => {

    const [showNowPart , setShowNowPart] = useState(false);
    const [showEducationPart , setShowEducationPart] = useState(false);
    const [showChannelsPart , setShowChannelsPart] = useState(false);
    const [showTechnologyPart , setShowTechnologyPart] = useState(false);

    const showNowPartHandler = () =>{
        setShowNowPart(!showNowPart);
        setShowEducationPart(false);
        setShowTechnologyPart(false);
        setShowChannelsPart(false);
    }
    const showEducationPartHandler = () =>{
        setShowEducationPart(!showEducationPart);
        setShowNowPart(false);
        setShowTechnologyPart(false);
        setShowChannelsPart(false);

    }

    const showChannelsPartHandler = () =>{
        setShowChannelsPart(!showChannelsPart);
        setShowNowPart(false);
        setShowEducationPart(false);
        setShowTechnologyPart(false);

    }
    const showTechnologyPartHandler = () =>{
      setShowTechnologyPart(!showTechnologyPart);
      setShowChannelsPart(false);
      setShowNowPart(false);
      setShowEducationPart(false);
  }


  return (
    <div className='navbar'>
      <div className="container navbar-s">
    <div className="logo">
    <Link to='/' style={{textDecoration : 'none'}}>
        <img src={logo} alt="" />
        </Link>
    <Link to='/' style={{textDecoration : 'none'}}>
        <h2 className='logo-title'>أكاديمية Freedom</h2>
        </Link>
    </div>
    <div className="links">

     <div className="link">
      <div className="book-part">
      <div className="now-part" onClick={showNowPartHandler}>
      <h2>تعلم الأن</h2>
    <BiChevronDown/>
      </div>
    </div>

     {showNowPart &&  <ul id='nav-list'>
     <li><Link onClick={() =>setShowNowPart(false)} className='link-item' to='/buy-books'>شراء الكتب</Link></li>
     <li><Link onClick={() =>setShowNowPart(false)} className='link-item' to='/buy-books'>شراء الكتب</Link></li>
     <li><Link onClick={() =>setShowNowPart(false)} className='link-item' to='/buy-books'>شراء الكتب</Link></li>
      </ul>}
      </div>

      <div className="link">
      <div className="education-part" onClick={showEducationPartHandler}>
      <h2> مسار تعلم اللغات</h2>
      <BiChevronDown/>
      </div>

     {showEducationPart &&  <ul id='nav-list'>
     <li><Link onClick={() =>setShowEducationPart(false)} className='link-item' to='/english-learning'>  مسار تعلم اللغة الأنجليزية</Link></li>
     <li><Link onClick={() =>setShowEducationPart(false)} className='link-item' to='/french-learning'>  مسار تعلم اللغة الفرنسية</Link></li>
     <li><Link onClick={() =>setShowEducationPart(false)} className='link-item' to='/italy-learning'>  مسار تعلم اللغة الأيطالية</Link></li>
     <li><Link onClick={() =>setShowEducationPart(false)} className='link-item' to='/german-learning'>  مسار تعلم اللغة الألمانية</Link></li>
      </ul>}
      </div>

      <div className="link">
      <div className="education-part" onClick={showTechnologyPartHandler}>
      <h2> مسار تعلم التكنولوجي</h2>
      <BiChevronDown/>
      </div>

     {showTechnologyPart &&  <ul id='nav-list'>
     <li><Link onClick={() =>setShowTechnologyPart(false)} className='link-item' to='/programming-learning'>  مسار تعلم البرمجة</Link></li>
     <li><Link onClick={() =>setShowTechnologyPart(false)} className='link-item' to='/graphic-learning'>  مسار تعلم  الجرافيك</Link></li>
     <li><Link onClick={() =>setShowTechnologyPart(false)} className='link-item' to='/icdl-learning'> ICDL مسار تعلم اللغة ال </Link></li>
      </ul>}
      </div>
      
      
      <div className="link">
     <div className="channels-part" onClick={showChannelsPartHandler}>
     <h2>قنوات السوشيال ميديا </h2>
      <BiChevronDown/>
     </div>

    {showChannelsPart &&   <ul id='nav-list'>
     <li  className='list'>
      <a onClick={() =>setShowChannelsPart(false)} className='link-item youtube' href='https://www.youtube.com/channel/UCIY---kfx3Z99wH82crQepQ' target='_blank'>
      <p className='icon-paragraph'>Youtube</p>
      <BsYoutube className='youtube-icon'/>
      </a> </li>
     <li  className='list'>
      <a onClick={() =>setShowChannelsPart(false)} className='link-item facebook' href='https://www.facebook.com/freedom055' target='_blank'>
      <p className='icon-paragraph'>Facebook</p>
      <BsFacebook className='facebook-icon'/>
      </a></li>
     <li  className='list'><a onClick={() =>setShowChannelsPart(false)} className='link-item twitter' href='https://twitter.com/freedom52057624' target='_blank'>
      <p className='icon-paragraph'>Twitter</p>
      <BsTwitter className='twitter-icon'/>
      
       </a></li>

       <li  className='list'><a onClick={() =>setShowChannelsPart(false)} className='link-item tiktok' href='https://www.tiktok.com/@freedom_academy?lang=en' target='_blank'>
      <p className='icon-paragraph'>TikTok</p>
      <BsTiktok className='tiktok-icon'/>
      
       </a></li>


       
       <li className='list'><a onClick={() =>setShowChannelsPart(false)} className='link-item instegram' href='https://www.instagram.com/freedom__055/' target='_blank'>
      <p className='icon-paragraph'>Instegram</p>
      <BsInstagram className='instegram-icon'/>
      
       </a></li>

      </ul>}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar