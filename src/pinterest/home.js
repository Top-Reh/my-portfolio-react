import React, { useState, useEffect } from 'react';
import pinterestData from './pinterestData';
import Imageblog from './imageblog';

const Home = () => {
  

  return (
    <div className='home'> 
      <div className='homeblogs'>
        <Imageblog />
      </div>
    </div>
  );
};

export default Home;
