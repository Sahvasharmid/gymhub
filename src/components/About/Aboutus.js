import React from 'react'
import style from './About.module.css'
import image from '../../assets/aboutimg.png'
import liftimage from '../../assets/aboutliftimg.png'
const Aboutus = () => {
  return (
   <div className='container' >
     <h2>About Us</h2>
      <div className={`${style.aboutus} `}>
        
        <div className={`${style.aboutsection}`} >

<p style={{fontSize:"15px"}}>At GYMHUB, we believe that fitness is not just about lifting weights – it's about lifting your lifestyle. Our state-of-the-art facility is designed to inspire and empower individuals of all fitness levels to achieve their personal best. Whether you're a seasoned athlete or just starting your fitness journey, we offer a welcoming environment, expert trainers, and a diverse range of classes and equipment to help you succeed. At the heart of GYMHUB, we foster a supportive community where goals are met, and every achievement is celebrated. Join us, and let's make fitness a lifelong passion together!</p>
        
        </div>
        <div className={`${style.aboutimg} p-2`}>
<div className={`${style.left}`}>

</div>
<div className={`${style.right}`}>

</div>
        </div>
        
</div>
</div>
  
  )
}

export default Aboutus