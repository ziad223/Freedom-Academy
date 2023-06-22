import React, { useEffect } from 'react';
import './About.css';
import img1 from '../../images/about-2.jpg';
import img2 from '../../images/about-2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() =>{
    AOS.init({duration : 1000})
  })
  return (
    <div className='about'>
       <h2 data-aos = 'fade-down'>About Us</h2>
   <div className="container">
      <div className="about-content">
      <div className="about-img" data-aos = 'fade-right' >
        <img src={img1} alt="" />
      </div>

     <div className="about-info" data-aos = 'fade-left' >
     <h3>  مرحبا بكم في أكاديمية Freedom </h3>
        <p>
        أكاديمية   
        Freedom
         هي مؤسسة علمية رائدة ومتميزة في مجال التدريب وتقديم الدورات التدريبية والدورات عبر الإنترنت وغير المتصلة بالإنترنت والتدريب عن بعد. نقدم دورات تدريبية في مجالات مختلفة من خلال أمهر وأفضل المدربين.
        </p>
     </div>
        
      </div>

      <div className="about-content two">
     <div className="about-info" data-aos = 'fade-right' >
     <h3> مرحبا بكم في أكاديمية Freedom</h3>
        <p>
        أكاديمية 
        Freedom
         تضم أكفأ المحاضرين في جميع الدورات ، ولديهم أكثر من عشر سنوات من الخبرة في مجالاتهم ، ولديهم المهارة للتعامل مع جميع الفئات العمرية من أطفال وطلاب وخريجين وكبار السن.
        </p>
     </div>
        <div className="about-img i">
        <img src={img2} alt=""  data-aos = 'fade-left' />
      </div>
      </div>

      
   </div>
    </div>
  )
}

export default About