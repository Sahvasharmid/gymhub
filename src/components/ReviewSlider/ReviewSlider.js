import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import style from './ReviewSlider.module.css'

const ReviewSlider = ({ onImageChange }) => {
  const [index, setIndex] = useState(0);
  const { name, stars, image, text } = people[index];

  useEffect(() => {
    if (onImageChange) {
      onImageChange(image);
    }
  }, [image, onImageChange]);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  const renderStars = (starCount) => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      starsArray.push(
        <span key={i} style={{ color: i <= starCount ? '#FFD700' : '#ddd' }}>
          ★
        </span>
      );
    }
    return starsArray;
  };
  return (
  
    <article className={style.review}>
      
     
      <div className={style.flex} style={{display:"flex",gap:"10px"}}>
        <div className={style.sublist} >
      <div className={style.reviewText} >
         <h4 className={style.author}>@{name}</h4>
      <div className={style.stars} style={{textAlign:"left"}}>{renderStars(stars)}</div>
      <div className={style.subflex} style={{display:"flex",width:"100%"}}>
        <div className={style.miniflex} style={{width:"75%"}}>
        <div className={style.text}>
            <p className={style.info}>{text}</p>
            </div>
            <div className={style.buttoncontainer}>
        <button className={style.prevbtn} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={style.nextbtn} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      </div>
          
     
   

<div className={style.divider}></div>
      {/* Names List on the Right Side */}
      <div className="names-list">
        {people.map((person, personIndex) => (
          <div
            key={personIndex}
            className={`${style.nameitem} ${personIndex === index ?style.highlight : ''}`}
            onClick={() => setIndex(checkNumber(personIndex))} // Click to highlight name
          >
            {person.name}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
    </div>
    </article>
   
  );
};

export default ReviewSlider;
