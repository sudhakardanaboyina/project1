import React from 'react';
import './ContactMe.css';
import ContactCard from './ContactCard/ContactCard';
import Email from '../../assets/email.ico';
import Naukri from '../../assets/Naurki.png';
import Linkedin from '../../assets/linkedin.png';
import ContactForm from './ContactCard/ContactForm/ContactForm';
const ContactMe = () => {
  return (
    <div>
     <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactCard
                  iconUrl={Email} // Use the imported image directly
                  text="jamessudhakar297@gmail.com"
                />
                 <ContactCard
                  iconUrl={Naukri}
                  text="James sudhakar danaboyina"
                />
                 <ContactCard
                  iconUrl={Linkedin}
                  text="James sudhakar danaboyina"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
     </section>
    </div>
  )
}

export default ContactMe;
