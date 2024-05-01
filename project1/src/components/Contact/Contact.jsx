import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css';
import Swal from 'sweetalert2';
import formimg from '../../assets/form img.webp';
import "bootstrap/dist/css/bootstrap.min.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_s1p6tm8', 'template_mf4r1mq', form.current, {
      publicKey: 'QYht18C9SATJRVrOX',
    })
   
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text:'Thank you for your message. We will get back to you as soon as possible.',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          form.current.reset();
          setName('');
          setNum('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const clearInput = () => {
    // Check if any input field has content
    const hasContent = Object.values(form.current.elements).some((element) => {
      return element.value.trim() !== '';
    });
  
    // If any input field has content, display the confirmation dialog
    if (hasContent) {
      Swal.fire({
        title: 'Clear Form',
        text: 'Are you sure you want to clear the form?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, clear it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Clear the form fields if the user confirms
          form.current.reset();
          // Reset the state variables for name and mobile number
          setName('');
          setNum('');
        }
      });
    }
  };
  

  const [num, setNum] = useState('');
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,10}$/.test(inputValue)) {
      setNum(inputValue);
    }
  };

  const [name, setName] = useState('');
  const namehandler = (e) => {
    const nameControl = e.target.value;
    const nameResult = nameControl.replace(/(\b\w)/g, function (word) {
      return word.toUpperCase();
    });
    if (nameResult.length <= 30) {
      setName(nameResult);
    } else {
      alert('Name must be 6 characters and max 30 characters');
    }
  };

  return (
    <div className="contact-form-content">
      <h2>Contact-Us</h2>
      <div className='card-contact'>
        <div className="form-content">
          <form ref={form} autoComplete="off" onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder='Enter Your Full Name'
                value={name}
                onChange={namehandler}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                placeholder='example@gmail.com'
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="user_number"
                placeholder='Enter Your Mobile Number'
                value={num}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder='Type Your Message Here...'
                required
              />
            </div>
            <div className='btn-class'>
              <button type="submit"
                className="btn btn-lg  rounded-pill  btn-success " id='btn1' >Send</button>
              <button type="button"
                className="btn  btn-lg rounded-pill  btn-danger" id='btn2'
                onClick={clearInput}>Cancel</button>
            </div>
          </form>
        </div>
        <div className='img-section'>
          <img src={formimg} alt='loadingfailed' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
