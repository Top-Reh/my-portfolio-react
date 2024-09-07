import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dice from '../dice.js';

const Did = styled.div `
background-color: ${({darkmode}) => (darkmode ? 'rgb(0, 37, 61)' : 'rgb(106, 195, 255)')};
color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
`;

const Hoverbtn = styled.button`
background-color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
color: ${({darkmode}) => (darkmode ? 'white' : 'white')};
`;

const Diddiv = styled.div`
color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
border: 2px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
`;

const Profilio = ({darkmode}) => {

  return (
    <Did className='did' darkmode={darkmode}>
      <h1>What I did</h1>
      <div className='didBlogs'>
        <Diddiv className='mydids numbers' darkmode={darkmode}>
        <Link to='/dice' className='didlinks'>Dice</Link>
        </Diddiv>
        <Diddiv className='mydids zeagwat' darkmode={darkmode}>
        <Link to='/mainBlog' className='didlinks'>Zeagwat</Link>
        </Diddiv>
        <Diddiv className='mydids profilefast' darkmode={darkmode}>
        <Link to='/profiliofast' className='didlinks'>Profiliofast</Link>
        </Diddiv>
        <Diddiv className='mydids pinterest' darkmode={darkmode}>
          <Link to='/PinterestContainer' className='didlinks'>PinterestContainer</Link>
        </Diddiv>
      </div>
    </Did>
  )
}

export default Profilio
