import React, { useState } from 'react';
import style from './Joinus.module.css'
const JoinUsForm = () => {
  // States to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mobileCode: '',
    country: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here (e.g., send to an API)
    console.log(formData);
  };

  return (
    <div className="container p-3">
   
      <form onSubmit={handleSubmit}>
       
        <div className="mb-4">
         
          <input
            type="text"
            className={`form-control ${style.pillinput}`}
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
        
          />
        </div>

        {/* Email */}
        <div className="mb-4">
         
          <input
            type="email"
            className={`form-control ${style.pillinput}`}
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number with Mobile Code */}
        <div className="mb-4 row">
          <div className="col-md-3">
            
            <select
                    className={`form-select  ${style.pillinput}`}
              id="mobileCode"
              name="mobileCode"
              value={formData.mobileCode}
              onChange={handleChange}
              required
            >
              
              <option value="+971">+971 (UAE)</option>
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              {/* Add more country codes as needed */}
            </select>
          </div>
          <div className="col-md-9">
          
            <input
              type="tel"
              className={`form-control ${style.pillinput}`}
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Country Dropdown */}
        <div className="mb-4">
      
          <select
                 className={`form-select ${style.pillinput}`}
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            
            required
          >
            <option value="">Select Emirates</option>
            <option value="dubar">Dubai</option>
            <option value="fujeira">Fujeira</option>
            <option value="Ajman">Ajman</option>
            <option value="ummulquwain">Ummul quwain</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Submit Button */}
        <div className='pt-3 pb-3'>
        <button type="button" className="btn primarybtn" style={{width:"100%"}}>send request</button>
        </div>
       
      </form>
    </div>
  );
};

export default JoinUsForm;
