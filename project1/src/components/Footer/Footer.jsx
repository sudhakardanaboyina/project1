  import React from 'react';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';

  import './Footer.css';

  const Footer = () => {

    return (
      <div className='footer'>
        <div className='social-icons'>
          {/* LinkedIn Icon with Link */}
          <a href="https://www.linkedin.com/in/james-sudhakar-danaboyina" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className='linkedinicon' />
          </a>


          {/* WhatsApp Icon with Link */}
          <a href="https://wa.me/9505901901" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className='whatsappicon' />
          </a>
     
        </div>

        <p>© 2024 All Rights Reserved</p>
      </div>
    );
  };

  export default Footer;
