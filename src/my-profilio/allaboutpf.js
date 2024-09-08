import React from 'react';
import {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion , useScroll,useSpring} from 'framer-motion';
import styled from 'styled-components';

const All = styled.div `
    background-color: ${({darkmode}) => (darkmode ? 'rgb(0, 37, 61)' : 'rgb(106, 195, 255)')};
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Allprofile = styled.div`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Pfp = styled.p`
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    border: 1px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Hoverbtn = styled.button`
    background-color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    color: ${({darkmode}) => (darkmode ? 'white' : 'white')};
  `;

  const Line = styled.div`
    background-color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Socials = styled.i`
     color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;


const AllAboutpf = ({darkmode}) => {
  

  function scrollcontant(e) {
    e.preventDefault();
    const href = e.target.closest('a').getAttribute('href').substring(1);
    const hrefId = document.getElementById(href);
    
    if (hrefId) {
      hrefId.scrollIntoView({behavior : 'smooth'});
    }
  }

  function scrollcontants(e) {
    e.preventDefault();
    const href = e.target.closest('a').getAttribute('href').substring(1); // Get the href without '#'
    const targetElement = document.getElementById(href); // Use href to get the target element by ID
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll into view smoothly
    }
  }

  return (
    <All className='allaboutpf' darkmode={darkmode}>
        <Allprofile className='profiliobody' darkmode={darkmode}>
          <Allprofile className='about profiliodiv' darkmode={darkmode}>
            <h2>Top Reh's info</h2>
            <Pfp darkmode={darkmode}>front-end web developer</Pfp>
            <div className='btncontact'>
                  
              <a href="#contact"  key='contant' onClick={scrollcontants}>
                <Hoverbtn className='hoverbtn contactmebtn' darkmode={darkmode}>Contact me</Hoverbtn>
              </a>
              
            </div>
          </Allprofile>
          <div className='myPhoto profiliodiv'>
            <img src='https://i.pinimg.com/564x/c7/b1/52/c7b152f8237968ee43cb382e20b72312.jpg'></img>
          </div>
          <Allprofile className='socials ' darkmode={darkmode}>
            <Pfp darkmode={darkmode}>
              You can contact here
            </Pfp>
            <Line className='line' darkmode={darkmode}></Line> 
            <a href='' className='socialicons'><Socials className="bi bi-facebook" darkmode={darkmode}></Socials></a>
            <a href='' className='socialicons'><Socials className="bi bi-instagram" darkmode={darkmode}></Socials></a>
            <a href='' className='socialicons'><Socials className="bi bi-youtube" darkmode={darkmode}></Socials></a>
            <a href='' className='socialicons'><Socials className="bi bi-twitter" darkmode={darkmode}></Socials></a>
          </Allprofile>
        </Allprofile>
    </All>
  )
}

export default AllAboutpf
