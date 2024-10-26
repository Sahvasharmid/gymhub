import React from 'react'
import arrow from '../../assets/arrow.png'
import style from './Cardcomponent.module.css'
const Cardcomponent = ({image,title,text}) => {
  return (
    
        <div className={`${style.card}`}>
    <img src={image} class="card-img-top rounded p-1" alt="..."></img>
         <div class={`${style.cardbody} card-body`}>
        
           <h5 className={`${style.cardtitle} card-title`}>{title}</h5>
           <p className="card-text">{text}</p>
           <a href="#"><span style={{display:"flex",alignContent:"center"}}> Learn more<img src={arrow}></img></span></a>
         </div>
       </div>
    
  )
}

export default Cardcomponent