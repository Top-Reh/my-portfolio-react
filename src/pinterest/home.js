import React, { useState, useEffect } from 'react';
import pinterestData from './pinterestData';
import Imageblog from './imageblog';

const Home = ({menuData}) => {
  

  return (
    <div className='home'> 
      <div className='homeblogs'>
        <Imageblog searchresult={menuData}/>
      </div>
    </div>
  );
};

export default Home;
