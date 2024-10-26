import React from 'react'
import style from './Trainers.module.css'
import Trainercard from '../Cardcomponent/Trainercard'
import image from '../../assets/muscleman.png'
import ladytrainer from '../../assets/redhairgirl.png'
import happytrainer from '../../assets/happytrainer.png'
const Trainers = () => {
  return (
    <div id="trainers">
 
    <div className={`${style.padding} container`}>
        <div className={style.subcontainer} style={{paddingBottom:"3rem"}}>
            <h3 style={{textAlign:"center"}}>Our Trainers</h3>
            <p style={{textAlign:"center"}}>Meet the dedicated individuals behind your fitness journey</p>
        
        </div>
        <div className={`${style.cardrow} pt-5`}>
            
            <Trainercard title="Emran Ejaz" className={`${style.cardbackground}`} text="senior trainer" image={image} ></Trainercard>
            <Trainercard title="Eliza Rodriguez" className={`${style.cardbackground}`} text="yoga instructor" image={ladytrainer}></Trainercard>
            <Trainercard title="Martin Philip" className={`${style.cardbackground}`} text="Martin philip" image={happytrainer}></Trainercard>
            </div>

        </div>
        </div>
  )
}

export default Trainers
