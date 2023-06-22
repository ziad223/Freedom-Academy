import React, { useEffect } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() =>{
    AOS.init({duration : 2000})
  }, [])

  return (
    <div className='header'>
    <div className="container">
        <div className="information">
            <h2 data-aos = 'fade-left'>مرحبا بكم في أكاديمية Freedom</h2>
            <p data-aos = 'fade-right'>
            أكاديمية Freedom هي مؤسسة علمية رائدة ومتميزة في مجال التدريب وتقديم الدورات التدريبية والدورات عبر الإنترنت وغير المتصلة بالإنترنت والتدريب عن بعد. نقدم دورات تدريبية في مجالات مختلفة من خلال أمهر وأفضل المدربين.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Header