import React from 'react';
import '../MobileNav/MobileNav.css';
import logo from '../../assets/portfolio.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // Close the mobile menu after clicking on a link
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "activate" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <img className='logo' src={logo} alt='loading'/>

          <ul>
            <li><button className='menu-item' onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className='menu-item' onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button className='menu-item' onClick={() => scrollToSection('workexperience')}>Work Experience</button></li>
            <li><button className='menu-item' onClick={() => scrollToSection('contactme')}>Contact Me</button></li>
            <li><button className='contact-btn' onClick={() => scrollToSection('hireme')}>Hire Me</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
