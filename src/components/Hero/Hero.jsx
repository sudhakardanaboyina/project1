import React from 'react'
import '../Hero/Hero.css';
import me from '../../assets/me.jpg'; // Adjust the path based on your actual project structure
import react from '../../assets/react.png'; // Adjust the path based on your actual project structure
import htmlicon from '../../assets/html.png'; // Adjust the path based on your actual project structure
import css from '../../assets/css.png'; // Adjust the path based on your actual project structure
import bootstrap from '../../assets/bootstrap.png'; // Adjust the path based on your actual project structure
import javascript from '../../assets/javascript.png'; 
const Hero = () => {
  return (
    <>
       
       <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hello welcome to portfolio</h2>
            <p>passionate Web developer | Building Tomorrow's World, One Line of Code at a Time.</p>
        </div>
        <div className='hero-img'>
            <div>
                
                <img src={me} alt="james"  className='myimage'/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src={htmlicon} alt="html icon"/>
                </div>
                <div className='tech-icon'>
                    <img src={css} alt="css"/>
                </div>
                <div className='tech-icon'>
                    <img src={bootstrap} alt="bootstrap"/>
                </div>
                <div className='tech-icon'>
                    <img src={javascript} alt="javascript"/>
                </div>
                <div className='tech-icon'>
                <img src={react} className='react-img' alt="react"/>
                </div>
            </div>
            
        </div>
       </section>
       

    
    
    </>
  )
}

export default Hero
