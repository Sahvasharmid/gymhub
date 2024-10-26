import React from 'react';
import { HashLink } from 'react-router-hash-link';
import style from './Navbar.module.css';
import image from "../../assets/logopng.png";
import JoinUsForm from '../Form/JoinusForm';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className={`container-fluid ${style.navcontainer}`}>
          <HashLink 
            smooth 
            to="#home" 
            className={`navbar-brand flex-grow-1 ms-lg-5 ${style.navbarbrand} ${style.navbar}`}
          >
            <img src={image} alt="Logo" />
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink smooth to="#home" className={`nav-link active ${style.navlink}`}>Home</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#about" className={`nav-link active ${style.navlink}`}>About Us</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#programs" className={`nav-link active ${style.navlink}`}>Programs</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#why-gymhub" className={`nav-link active ${style.navlink}`}>Why Gymhub</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#our-classes" className={`nav-link active ${style.navlink}`}>Our Classes</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#prices" className={`nav-link active ${style.navlink}`}>Prices</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#trainers" className={`nav-link active ${style.navlink}`}>Trainers</HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="#products" className={`nav-link active ${style.navlink}`}>Products</HashLink>
              </li>
            </ul>
            <div className="navbar-btn ms-lg-3">
              {/* Button to trigger modal */}
              <button 
                type="button" 
                className="btn primarybtn me-lg-5" 
                data-bs-toggle="modal" 
                data-bs-target="#joinUsModal"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      <div 
        className="modal fade" 
        id="joinUsModal" 
        tabIndex="-1" 
        aria-labelledby="joinUsModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" style={{ zIndex: 1100 }}>
          <div className="modal-content" style={{ backgroundColor: "var(--card-color)" }}>
            <div className="modal-header" style={{ borderBottom: "none", padding: "0.5rem 1rem" }}>
              
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <h5 className='center pt-3'>Interested to Join Us</h5>
            <p className='center' style={{fontSize:"10px"}}>We are happy to provide you healthy lifestyle</p>
            <div className="modal-body" style={{ padding: "1rem" }}>
              <JoinUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
