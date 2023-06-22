import React from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu';
import About from '../../components/About/About';
import Courses from '../../components/courses/Courses';
import ChooseUs from '../../components/chooseUs/ChooseUs';

const Home = () => {
  return (
    <>
     <Header/>
     <Menu/> 
     <About/>
     <Courses/>
     <ChooseUs/>
    </>
  )
}

export default Home
