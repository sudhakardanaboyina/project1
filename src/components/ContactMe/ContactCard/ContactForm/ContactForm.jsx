import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s1p6tm8', 'template_mf4r1mq', form.current, {
        publicKey: 'QYht18C9SATJRVrOX',
      })
      
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset form fields after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact-form-content'>
    <div className='card'>
    <form ref={form}  autoComplete="off"onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message"  required/>
        <input type="submit" value="Send" />
      </form>
    </div>
      
    </div>
  )
}

export default ContactForm
