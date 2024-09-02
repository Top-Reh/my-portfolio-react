import React from 'react';
import {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion , useScroll,useSpring} from 'framer-motion';
import styled from 'styled-components';


const AllAboutpf = () => {

  const Contactme = styled.button `

  `;

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
    <div className='allaboutpf' >
        <div className='profiliobody'>
          <div className='about profiliodiv'>
            <h2>Top Reh's info</h2>
            <p>Junior front-end web developer</p>
            <div className='btncontact'>
                  
              <a href="#contant"  key='contant' onClick={scrollcontants}>
                <button className='hoverbtn'>Contact me</button>
              </a>
              
            </div>
          </div>
          <div className='myPhoto profiliodiv'>
            <img src='https://i.pinimg.com/564x/c7/b1/52/c7b152f8237968ee43cb382e20b72312.jpg'></img>
          </div>
          <div className='socials '>
            <p>
              You can contact here
            </p>
            <div className='line'></div> 
            <a href='https://www.facebook.com/profile.php?id=100070858609953&mibextid=ZbWKwL' className='socialicons'><i class="bi bi-facebook"></i></a>
            <a href='' className='socialicons'><i class="bi bi-instagram"></i></a>
            <a href='' className='socialicons'><i class="bi bi-youtube"></i></a>
            <a href='' className='socialicons'><i class="bi bi-twitter"></i></a>
          </div>
        </div>
    </div>
  )
}

export default AllAboutpf
