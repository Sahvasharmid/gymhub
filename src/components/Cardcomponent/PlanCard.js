import React from 'react'
import CheckmarkIcon from '../Icons/Checkmarkicon'
import style from '../Cardcomponent/PlanCard.module.css'
const   PlanCard = ({title,text,sentence,color,className}) => {
  return (
    
        <div className={`${style.card}`} style={color}>
         <div class={`${style.cardbody} card-body`}>
        
           <h5 className={`${style.cardtitle}card-title`}>{title}</h5>
           <p className="card-text">
  <span style={{ fontWeight: "600",fontSize:"1.6rem" }}>${text}</span>
  &nbsp;
  <span style={{ fontWeight: "normal" }}>/per month</span>
</p>

<div className={`${style.list} p-2`}>
{Array.isArray(sentence) && sentence.map((item, index) => (
<div className={`${style.sublist}`}>
 <div className={`${style.icon}`}>
 <CheckmarkIcon></CheckmarkIcon>
 </div>
    <div className={style.item}>
    <p style={{ margin: '0' }}>{item}</p>
    </div>
</div>
))}
</div>
<div className={`${className} btn`}>choose plan</div>
</div>

       </div>
    
  )
}

export default PlanCard