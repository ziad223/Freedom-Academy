import React, { useEffect } from 'react';
import './chooseUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img3 from '../../images/about-dark-1.jpg';


const ChooseUs = () => {

  useEffect(() =>{
    AOS.init({duration : 2000})
  }, [])
  return (
    <div className='chooseUs'>
    <div className="container">
        <div className="choose-content">
            <img src={img3} alt="" data-aos = 'fade-right'  />
            <div className="choose-wrapper">
                 <h2 data-aos = 'fade-up'>لماذا نحن ؟ </h2>
                 <div className="chooses">
               
                <div className="choose-a">
                <div className="choose">
                <i class="fa-solid fa-earth-europe"></i>
                 <p data-aos = 'fade-right'>الخدمات الإلكترونية</p>
                 </div>
                    <div className="choose">
                    <i class="fa-solid fa-globe"></i>
                    <p  data-aos = 'fade-right'>أونلاين && أوفلاين</p>
                    </div>
                </div>

                  <div className="choose-a">
                  <div className="choose">
                  <i class="fa-solid fa-wifi"></i>
                      <p data-aos = 'fade-left'>واي فاي مجاني طوال الوقت</p>
                    </div>

                    <div className="choose">
                    <i class="fa-solid fa-clock"></i>
                    <p data-aos = 'fade-right'>متابعة مستمرة</p>
                    </div>
                  </div>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ChooseUs