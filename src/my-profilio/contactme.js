import React, { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Contact = styled.div `
    background-color: ${({darkmode}) => (darkmode ? 'rgb(0, 37, 61)' : 'rgb(106, 195, 255)')};
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

const SendInput = styled.input`
    cursor: pointer;
    z-index: 400;
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 2px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Mailform = styled.form`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Input= styled.input`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Textarea = styled.textarea`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Label = styled.label`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Pfp = styled.p`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Location = styled.div`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

const Contactme = ({darkmode}) => {

  const [sent,setsent] = useState(false);

  const form = useRef();

  const Sentback = styled.div`
  width: ${(sent) ? '60%' : '0'};
  border-radius: 5px;
  background-color:rgb(23, 88, 152);
  height:45px;
  transition: all 2s ease-in-out;
  position:absolute;
  bottom:24px;
  z-index: 4;
`;

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
    <Contact className='contactme' darkmode={darkmode}>
      <div className='locationAndEmail'>
        <Location className='location' darkmode={darkmode}>
            <h2>Location</h2>
            <Pfp darkmode={darkmode}>Myanmar , Shan State , Naung Shwe</Pfp>
        </Location>
        
        <Mailform ref={form} onSubmit={sendEmail} className='email' darkmode={darkmode}>
          <Label darkmode={darkmode}>Your name</Label>
          <Input type="text" name="user_name" darkmode={darkmode}/>
          <Label darkmode={darkmode}>Your email</Label>
          <Input type="email" name="user_email" darkmode={darkmode}/>
          <Label darkmode={darkmode}>Your message</Label>
          <Textarea name="message" darkmode={darkmode}/>
          <SendInput type="submit" value={sent ? 'Sent!' : 'Send'} sent={sent} darkmode={darkmode} className='sendbtn'/>
        </Mailform>
      </div>
      <div className='photo'>
        <img src='https://i.pinimg.com/564x/b3/dd/76/b3dd7688f23e6ba5bd4b78d066f3422f.jpg'></img>
      </div>
    </Contact>
  )
}

export default Contactme
