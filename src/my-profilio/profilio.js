import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dice from '../dice.js';

const Profilio = () => {
  return (
    <div className='did'>
      <h1>What I did</h1>
      <div className='didBlogs'>
        <div className='mydids'>
        <Link to='/dice'>Dice</Link>
        </div>
        <div className='mydids'>
        <Link to='/mainBlog'>MainBlog</Link>
        </div>
        <div className='mydids'>
        <Link to='/profiliofast'>Profiliofast</Link>
        </div>
        <div className='mydids'>
        <Link to='/container'>Container</Link>
        </div>
        <div className='mydids'>
          <Link to='/PinterestContainer'>PinterestContainer</Link>
        </div>
      </div>
      <button>View more</button>
    </div>
  )
}

export default Profilio
