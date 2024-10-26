import React, { useState } from 'react';
import style from './Review.module.css';
import ReviewSlider from '../ReviewSlider/ReviewSlider';

const Review = () => {
  const [currentImage, setCurrentImage] = useState('');

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className={`${style.padding} container`}>

          <div className={`${style.subcontainer} pb-3`}>
            <h3 style={{ textAlign: "center" }}>Let’s See What Our Clients Say</h3>
            <p style={{ textAlign: "center" }}>We are happy with our clients' feedback on our fitness training</p>
          </div>
          <div className={`${style.review}`}>
          <div
              className={style.reviewimage}
              style={{ backgroundImage: `url(${currentImage})` }} // Set background image dynamically
            >
              {/* No <img> tag here since we're using background image */}
            </div>
            <div className={style.reviewlist} >
             
                <div className={style.reviewbtn} >
                  <div className='btn primarybtn' style={{ position: "absolute", bottom: "0", right: "5%"}}>Submit your feedback</div>
                </div>
                <div className={style.reviewperson} >
                  <ReviewSlider onImageChange={handleImageChange} />
                

              </div>
            </div>
          </div>
       
       <div className={`${style.subscription} p-2 `}>
        <div className={`${style.subscribe} p-2`}>
      <h5>Subscribe To Receive Fitness Tips & News Weekly Content!</h5>
      <p  className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
        </div>
        <div className={style.email} style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className={`${style.primarybtn} btn primarybtn`} >subscribe</div>
          <div className={style.input} >
          <input type='email' className={style.pillinput} style={{fontSize:"9px",padding:"15px 15px",border:"1px solid  var(--primary-color)"}} placeholder='Enter your email address'></input>
          </div>
          
        
          </div>
       </div>
        </div>
       
    
  );
};

export default Review;
