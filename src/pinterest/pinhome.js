import React, { useState, useEffect } from 'react';
import pinterestData from './pinterestData';
import Pinimageblog from './pinimageblog';

const Pinhome = ({menuData}) => {
  

  return (
    <div className='home'> 
      <div className='homeblogs'>
        <Pinimageblog menuData={menuData}/>
      </div>
    </div>
  );
};

export default Pinhome;
