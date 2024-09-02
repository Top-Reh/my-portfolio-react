import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contactme = () => {
  const [sent,setsent] = useState(false);

  const form = useRef();

  const SendInput = styled.input`
    cursor: pointer;
    z-index: 400;
    border: 2px solid ${(props) => (props.sent ? 'green' : 'blue')};
  `;

  const Sentback = styled.div`
    width: ${(sent) ? '60%' : '0'};
    border-radius: 5px;
    background-color:rgb(23, 88, 152);
    height:45px;
    transition: all 2s ease-in-out;
    position:absolute;
    bottom:24px;
    z-index: 4;
  `

  const sendEmail = (e) => {
    setsent(pre => !pre);
    e.preventDefault();

    emailjs
      .sendForm('service_374vtpu', 'template_3ypq3kq', form.current, {
        publicKey: 'x3Ou7s4UwJY1MFhTe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message send');
          form.current.reset();
          setsent(true);
          setTimeout(() => setsent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  function aftersubmit() {
    setsent(pre => !pre)
  }
  return (
    <div className='contactme'>
      <div className='locationAndEmail'>
        <div className='location'>
            <h2>Location</h2>
            <p>Myanmar , Shan State , Naung Shwe</p>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className='email'>
          <label>Your name</label>
          <input type="text" name="user_name" />
          <label>Your email</label>
          <input type="email" name="user_email" />
          <label>Your message</label>
          <textarea name="message" />
          <SendInput type="submit" value={sent ? 'Sent!' : 'Send'} sent={sent}/>
          <Sentback 
            animate={{
              width: sent ? '60%' : '0',
            }}
            transition={{
              type: 'spring',
              
            }}
            sent={sent}
          />
        </form>
      </div>
      <div className='photo'>
        <img src='https://i.pinimg.com/564x/b3/dd/76/b3dd7688f23e6ba5bd4b78d066f3422f.jpg'></img>
      </div>
    </div>
  )
}

export default Contactme

/*<div className='email'>
          <h5>Email</h5>
          <input type='email' placeholder='Your email to contact'></input>
          <h5>Phone number</h5>
          <input placeholder='Your phone number to contact'></input>
          <h5>Message</h5>
          <textarea placeholder='some message to give me'></textarea>
        </div> */

/*
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
*/

/* import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};*/