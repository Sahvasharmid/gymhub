import React from 'react'
import './Homepage.module.css'
import Layout from '../components/Layout/Layout'
import frame from '../assets/Frame.png'
import Aboutus from '../components/About/Aboutus'
import Programs from '../components/Programs/Programs'
import Fitness from '../components/Fitness/Fitness'
import Training from '../components/Training/Training'
import Plans from '../components/Plans/Plans'
import Trainers from '../components/Trainers/Trainers'
import Shopping from '../components/Shopping/Shopping'
import Review from '../components/Review/Review'
import style from './Homepage.module.css'
import SocialLinkIcon from '../components/Icons/sociallinkicon'
const HomePage = () => {
  return (
    <>
    <Layout>
       
      <div className={`${style.banner} container-fluid`} id="home" >
        <div className='container' style={{display:"flex",alignItems:"center"}}>
        <div className={`${style.section1}`} >
          
           <h1>Helps for your Ideal Body Business</h1>
<p style={{paddingTop:"10px"}}>Motivate users with benefits and positive reinforcement,and offers modification and progress tracking</p>
        
        <div className={`${style.buttonsection} d-flex pt-2 pb-2`} style={{gap:"10px",alignItems:"center",alignContent:"center"}} >
            <div className={`${style.btn}`}>
            <button type="button" class="btn primarybtn">Get started</button>
             </div>
             <div>
            <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center"}}><img src={frame} /><span style={{ marginLeft: "5px" }}>Watch video</span></a>
             </div>
      
      </div>
       <div className={`${style.newsection} d-flex pt-2 pb-2`} style={{width:"100%"}}>
        <div className={`${style.subhead}`} style={{width:"33.333%"}}>
            <h4 style={{fontWeight:"bold"}}>2500+</h4>
            <p>Members joined</p>
        </div>
        <div className={`${style.subhead}`} style={{width:"33.333%"}}>
        <h4 style={{fontWeight:"bold"}}>115</h4>
            <p>Expert Trainers</p>
        </div>
        <div className={`${style.subhead}`} style={{width:"33.333%"}}>
        <h4 style={{fontWeight:"bold"}}>500+</h4>
            <p>Fitness Program</p>
        </div>
        </div> 
        
        </div>

        
        {/* <div  className='buttonwatsapp p-5' style={{bottom:"10px"}}> */}
        {/* <a href="https://wa.me/your-number" className="whatsapp-button" target="_blank" rel="noopener noreferrer">chat with us</a> */}
{/* </div> */}
          </div>
          </div>
          <div className={style.sociallinks}>
    <SocialLinkIcon width="25" height="25"></SocialLinkIcon>
</div>
          <div className={`container-fluid ${style.fluid}`} id='about'>
          
             
            <Aboutus></Aboutus>
<Programs></Programs>
         <Fitness></Fitness>
         <Training></Training>
         <Plans></Plans>
         <Trainers></Trainers>
         <Shopping></Shopping>
         <Review></Review>
      
            </div>
         
     
        </Layout>
    </>
  )
}

export default HomePage