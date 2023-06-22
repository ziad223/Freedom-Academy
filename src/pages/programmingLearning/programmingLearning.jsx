import React from 'react';
import './programmingLearning.css';
import { Link } from 'react-router-dom';

const programmingLearning = () => {
  return (
    <div className='programming-learning'>
      <div className="container">
        <div className="programming-learning-title">تعلم البرمجة من الصفر </div>
        <div className="buttons">
          <Link className='link-item' to='/front-end'>Front-End</Link>
          <Link className='link-item' to='/python'>Back-End (Python)</Link>
        </div>


      </div>
    </div>
  )
}

export default programmingLearning
