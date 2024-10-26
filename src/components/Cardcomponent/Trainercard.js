import React from 'react'
import style from './TrainerCard.module.css'
import SocialLinkIcon from '../Icons/sociallinkicon'

function Trainercard({title,text,image}) {
  return (
    <div className={style.card}>
         <div className={style.cardbody}>
            
         <div 
      className={style.cardimgtop} 
      style={{
        backgroundImage: `url(${image})`,
       
      }}
    ></div>
   
   <div className='content' style={{width:"90%",margin:"auto"}}>
      <h5 className="card-title">{title}</h5>
      <div className={`${style.contentsection} d-flex`}>
      <p className="card-text" style={{flexGrow:1}}>{text}</p>
      <div className='flex-end' >
    
      <SocialLinkIcon width="17" height="17"></SocialLinkIcon>
      </div>
    </div>
</div>
    </div>
  </div>
 
  )
}

export default Trainercard