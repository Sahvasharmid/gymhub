import React from 'react';
import style from './ProductCard.module.css';

const ProductCard = ({ title, text, image, description, description2 }) => {
    return (
        <div className={`${style.card} p-2`}>
            <div 
                className={style.cardimgtop} 
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className={`${style.cardbody} card-body`}>
             
            <div className={style.flexitem1}>
                <div className={style.cardtitle}>
                <h6 className=' card-title'>{title}</h6>
                </div>
                <div className={style.cardtitle2}>
                    
                <h6 className={`${style.cardtitle2} card-title`}>${text}</h6>
                </div>
                
                </div>
                <div className={style.flexitem2}>
                  <div className={style.description}>
                  <p className={`${style.cardtext} card-text`}>{description}</p>
                  <p className={`${style.cardtext} card-text`}>{description2}</p>
                  </div>
<div className={style.button}>
<div className={`${style.btn} btn primarybtn`} >
                    Buy now
                
                </div>
</div>
              
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
