import React, { useState } from 'react';
import proteinpowder from '../../assets/proteinpowder.png'
import shoe from '../../assets/shoes.png'
import style from './Shopping.module.css'; // Importing the CSS module
import ProductCard from '../Cardcomponent/ProductCard';
import dumbells from '../../assets/dumbells.png'
import nike from '../../assets/nike.png'
import bottle from '../../assets/bottle.png'
import headphone from '../../assets/headphone.png'
const Shopping = () => {
    const [activeSection, setActiveSection] = useState('left');

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  return (
    <div id="products">
      <div className={`${style.padding} container`}>
        <div className={style.subcontainer}>
          <h3 style={{ textAlign: 'center' }}>Shop Our Products</h3>
          <p style={{ textAlign: 'center' }}>
            Our passion for fitness and wellness drives us to bring you the latest trends and essential workout gear.
          </p>
          </div>
          <div className={style.products} >
          <div className={`${style.formbox} p-3`} style={{marginBottom:"10px"}}>
      <div className={style.buttonbox}>
        <div
          id={style.btnnew}
          className={activeSection === 'left' ? style.slideLeft : style.slideRight}
        ></div>
        <div
          
          className={`${style.togglebtn} ${activeSection === 'left' ? style.leftActive : style.inactive} btn primarybtn`}
          onClick={() => handleToggle('left')}
        >
          New Arrival
        </div>
        <div
        
          className={`${style.togglebtn} ${activeSection === 'right' ? style.rightActive : style.inactive} btn primarybtn`}
          onClick={() => handleToggle('right')}
        >
          Allitems
        </div>
      </div>
      </div>
      
      

      {/* Sliding Content */}
      <div className={style.contentBox}>
        {activeSection === 'left' ? (
          <div className={style.leftSection}>
             <div className={`${style.cardrow} ` } >

    <ProductCard image={proteinpowder} title="Extra Mass Gainer"  text="100" description="Protein Supplements"  description2="Low sugar"></ProductCard>


    <ProductCard image={dumbells} title="Dumbbell Set" text="99" description="Hexa Dumbbell Handler" description2="20 Kg Set"></ProductCard>


    <ProductCard image={nike} title="nike bag" text="34" description="Sportscarry Handbag " description2="Multi Color"></ProductCard>



    <ProductCard image={shoe} title="Sports shoe" text="80" description="Soft Sole Workout Comfort" description2="Black White Pink "></ProductCard>


    <ProductCard image={headphone} title="Headset H120" text="40" description="Poly Voyager Surround" description2="Bluetooth"></ProductCard>


    <ProductCard image={bottle} title="Sport Water Bottle" text="60" description="Sports Suite Drinking Bottle" description2="Multi Color"></ProductCard>

            </div>
            </div>
          
        ) : (
          <div className={style.rightSection}>
            <h6 style={{textAlign:"center"}}>All items</h6>
          <p style={{textAlign:"center"}}>No products to display</p>
          </div>
        )}
      </div>
    </div>
      
        </div>
 </div>
    
  );
};

export default Shopping;
