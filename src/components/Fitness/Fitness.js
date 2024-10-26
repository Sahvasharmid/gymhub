import React from 'react'
import style from './Fitness.module.css'



import bullet from '../../assets/bullet.png'
const Fitness = () => {
  return (
    <div id="why-gymhub">
<div className={`${style.padding} container`} >
<div className={style.fithead}>
<h2>Why Should People Choose Gymhub Fitness Services</h2>
</div>
<div className={`${style.flex} d-flex`}>
    <div className={`${style.fitcontainer}`}>
       
<div className={`${style.list}`}>
<div className={`${style.sublist}`}>
    <span style={{ marginRight: '10px' }}>
        <img src={bullet} alt="bullet-icon" style={{ width: '20px', height: '20px' }} />
    </span>
    <div>
        <h6 style={{ margin: '0' ,paddingBottom:"10px"}}>Personalised Attention</h6>
        <p style={{ margin: '0' }}>Our coaches provide one-on-one guidance to ensure your fitness plan is perfectly suited</p>
    </div>
</div>
<div className={`${style.sublist}`}>
    <span style={{ marginRight: '10px' }}>
        <img src={bullet} alt="bullet-icon" style={{ width: '20px', height: '20px' }} />
    </span>
    <div>
        <h6 style={{ margin: '0',paddingBottom:"10px" }}>Personalised Attention</h6>
        <p style={{ margin: '0' }}>Our coaches provide one-on-one guidance to ensure your fitness plan is perfectly suited</p>
    </div>
</div>
<div className={`${style.sublist}`}>
    <span style={{ marginRight: '10px' }}>
        <img src={bullet} alt="bullet-icon" style={{ width: '20px', height: '20px' }} />
    </span>
    <div>
        <h6 style={{ margin: '0',paddingBottom:"10px" }}>Personalised Attention</h6>
        <p style={{ margin: '0' }}>Our coaches provide one-on-one guidance to ensure your fitness plan is perfectly suited</p>
    </div>
</div>
    <div>
    <div className='btn primarybtn'>Join Today</div>
    </div>
</div>

    </div>
    <div className={`${style.fitimg}`} >
       <div className={`${style.left}`}>
        <div className={`${style.topimg}`}>


        </div>
        <div className={`${style.botimg}`}>

        </div>
       </div>
       <div className={`${style.right}`}>
        
       </div>
       </div>
    </div>
</div>
</div>

  
  )
}

export default Fitness