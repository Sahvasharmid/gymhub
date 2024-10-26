import React from 'react'
import style from './Training.module.css'
import Cardcomponent from '../Cardcomponent/Cardcomponent'
import platestraining from '../../assets/platestraining.png'
import training from '../../assets/training.png'
import heavylift from '../../assets/heavylift.png'
function Training() {
  return (
    <div id="our-classes">
    
        <div className={`${style.padding} container`}>
            <div className={style.subcontainer}>
                <h3 style={{textAlign:"center"}}>Our Classes and Training</h3>
                <p style={{textAlign:"center"}}>Explore our diverse fitness classes, from high intensity workout to relaxing yoga session, designed to cater to all levels and interests</p>
            
            </div>
            
            <div className={`${style.cardrow}`}>
                <Cardcomponent title="Plates training" text="Our Trainer will design  that a progressive work plan that proper achieve gains strength" image={platestraining} ></Cardcomponent>
                <Cardcomponent title="Aerobic Training" text="Our Trainer will design  that a progressive work plan that proper achieve gains strength" image={training} ></Cardcomponent>
                <Cardcomponent title="Crossfit workout" text="Our Trainer will design  that a progressive work plan that proper achieve gains strength" image={heavylift}  ></Cardcomponent>
               

</div>
        </div>
</div>
  
  )
}

export default Training