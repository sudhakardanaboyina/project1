import React, { useState, useEffect } from 'react';
import '../components/navbarstyle.css';
import logo from '../assets/portfolio.png';
import MobileNav from './MobileNav/MoibleNav';

// Assuming this import is correct

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Perform any action after a certain timeout
            console.log('Timeout finished');
        }, 1000); // 1000 milliseconds (1 second) timeout

        return () => {
            // Cleanup function to clear the timeout when the component unmounts or rerenders
            clearTimeout(timeout);
        };
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // Function to handle smooth scrolling
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu(); // Close the mobile menu after clicking on a link
    };

    return (
        <div>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src={logo} alt="icon loading.." />
                    <ul>
                        <li>
                            <button className='menu-item' onClick={() => scrollToSection('home')}>Home</button>
                        </li>
                        <li>
                            <button className='menu-item' onClick={() => scrollToSection('skills')}>Skills</button>
                        </li>
                        <li>
                            <button className='menu-item' onClick={() => scrollToSection('workexperience')}>Work Experience</button>
                        </li>
                        <li>
                            <button className='menu-item' onClick={() => scrollToSection('contactme')}>Contact Me</button>
                        </li>
                        <li>
                            <button className='contact-btn' onClick={() => scrollToSection('hireme')}>Hire Me</button>
                        </li>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className="material-icons" style={{ fontSize: '1.8rem' }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
