import React from 'react'
import image from "../../assets/logopng.png";
import style from './Footer.module.css'
import call from '../../assets/call.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'
import SocialLinkIcon from '../Icons/sociallinkicon';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
  return (
    <div className={`${style.footer} container-fluid`}>
      <div className="container">
      <img src={image} alt="Logo" style={{marginLeft:"-16px"}}/>
        <div className={`${style.flex} d-flex`} >
        <div className={`${style.section} `}>
       
        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non, ullam temporibus modi a atqu</p>
        <p>Follow us on</p>
        <div className={style.sociallinks}>
<SocialLinkIcon></SocialLinkIcon>
        </div>
        </div>
        <div className={`${style.section}`}>
<h5 style={{paddingBottom:"10px"}}>Quick Links</h5>
<ul style={{padding:0}}>
  <li>
  <HashLink smooth to="#home">Home</HashLink></li>
  <li>
  <HashLink smooth to="#about">About us</HashLink></li>
  <li>
  <HashLink smooth to="#prices">pricing</HashLink></li>
  <li>
  <HashLink smooth to="#trainers">trainers</HashLink></li>
  <li>
  <HashLink smooth to="#programs">programs</HashLink></li>
  <li>
  <HashLink smooth to="#products">products</HashLink></li>
  
</ul>
        </div>
        <div className={`${style.section} `}>
<h5 style={{paddingBottom:"10px"}}>Categories</h5>
<ul style={{padding:0}}>
  <li>Body Building</li>
  <li>Basic Yoga</li>
  <li>Strength Training</li>
  <li>Weight Loss</li>
  <li>Health Checkup</li>
  <li>Diet Plan</li>
</ul>
        </div>
                <div className={`${style.section} `}>

          <h5 style={{paddingBottom:"10px"}}>Contact Us</h5>
          <div className={style.contactItem}>
            <img src={call} alt="Phone" />
            <p style={{fontSize:"12px"}}>+1 234 567 890</p>
          </div>
          <div className={style.contactItem}>
            <img src={call} alt="Phone" />
            <p style={{fontSize:"12px"}}>+1 234 567 890</p>
          </div>
          <div className={style.contactItem}>
            <img src={email} alt="Email" />
            <p style={{fontSize:"12px"}}>info@example.com</p>
          </div>
          <div className={style.contactItem}>
            <img src={location} alt="Location" />
            <p style={{fontSize:"12px"}}>123 Main Street, City,<br></br> Mezzanine floor <br></br>Dubai,uae</p>
            
          </div>
          
        </div>
        </div>
        <div className={style.divider}></div>
        </div>
       
<p className='pt-3 pb-3 center' style={{color:"#FFFFFFB2"}}>Copyright © 2024 www.gymhub.com . All Rights Reserved.</p>
       
    </div>
  )
}

export default Footer
