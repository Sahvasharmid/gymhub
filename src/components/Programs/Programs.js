import React from 'react'
import style from './Programs.module.css'
import weight from '../../assets/Weightlifting.png'
import Yoga from '../../assets/Yoga.png'
import Bicep from '../../assets/Bicep Muscles.png'
import running from '../../assets/running.png'
import arrow from '../../assets/arrow.png'
const Programs = () => {
  return (
  <div id="programs">
        <div className={`${style.padding} container`} >
            <div className={`${style.subcontainer}`}>
                <h3 className='center'>The Best Programs We Offer for You</h3>
                <p style={{textAlign:"center"}}>Motivate Users with benefits and positive reinforcement and offers modification and progress tracking</p>
           </div>
        
           <div className={`${style.cardrow}`}>
           <div className={style.flexcontainer}>
         <div className={`${style.card} `}>
         
  <div class={`${style.cardbody}`}>
  <img src={weight}  alt="weightlift"></img>
    <h5 className={`${style.cardtitle}`}>Strength Training</h5>
    <p className="card-text">Our Trainer will design  that a progressive work plan that proper achieve gains strength.</p>
    <a href="#"><span style={{display:"flex",alignContent:"center"}}> Learn more<img src={arrow}></img></span></a>
  </div>
</div>
</div>
<div className={style.flexcontainer}>
<div className={`${style.card}`}>

<div class={`${style.cardbody}`}>
<img src={Yoga}  alt="weightlift"></img>
    <h5 className={`${style.cardtitle}`}>Basic Yoga</h5>
    <p className="card-text">This program combines yoga with cardio and strength training to loss weight and fitness.</p>
    <a href="#"><span style={{display:"flex",alignContent:"center"}}> Learn more<img src={arrow}></img></span></a>
  </div>
</div>
</div>
<div className={style.flexcontainer}>

<div className={`${style.card} `}>
          
<div class={`${style.cardbody}`}>
<img src={Bicep}  alt="weightlift"></img>
    <h5 className={`${style.cardtitle}`}>Body Building</h5>
    <p className="card-text">For Those looking g to increase to build body muscles and good body stricture..</p>
    <a href="#"><span style={{display:"flex",alignContent:"center"}}> Learn more<img src={arrow}></img></span></a>
  </div>
</div>
</div>
<div className={style.flexcontainer}>

<div className={`${style.card}`} >
         
<div class={`${style.cardbody}`}>
<img src={running}  alt="weightlift"></img>
    <h5 className={`${style.cardtitle}`}>Running</h5>
    <p className="card-text">Our weight loss program are designed to help you make sustainable lifestyle changes</p>
    <a href="#"><span style={{display:"flex",alignContent:"center"}}> Learn more<img src={arrow}></img></span></a>
  </div>
</div>
</div>
        </div>
        
   </div>
    </div>
  )
}

export default Programs