import React from 'react'
import PlanCard from '../Cardcomponent/PlanCard'
import style from './Plans.module.css'


const Plans = () => {
    const card1List = [
      'Acces to Gym Facilities',
      'Unlimited Gym access',
      'Free Group fitness classes',
      'Locker room access'
      
      ];
    
      const card2List = [
'All  Basic Package Benefits',
'Personalized training Plan',
'Access to Advanced Equipments',
'Monthly Fitness Assessment'
      ];
    
      const card3List = [
       'All Premium Package Benefits',
       'Nutrition Consultation',
       'Access to Vip Lounge',
       'Daily Health Checkup'
      ];
  return (
    
         <div id="prices">
        <div className={`${style.padding} container`}>
         
            <div className={style.subcontainer}>
                <h3 style={{textAlign:"center"}}>Choose the Best Plan</h3>
                <p style={{textAlign:"center"}}>Choose a plan that’s right for your growing team.Simple pricing no hidden charges</p>
                </div>
                <div className={`${style.cardrow} pt-5`}>
                <PlanCard title="Basic" text="99" sentence={card1List} color={{backgroundColor:'var(--card-color)'}} className="btncard">
            
                </PlanCard>
                <PlanCard title="Premium" text="299" sentence={card2List} color={{backgroundColor:'var(--primary-color)'}} className={`${style.btnwhite}`}>
             

                </PlanCard>
                <PlanCard title="Professional" text="199" sentence={card3List} color={{backgroundColor:'var(--card-color)'}} className="btncard"></PlanCard>
            </div>
      
    </div>
   </div>
  )
}

export default Plans