import React from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import Home from './home';
import Create from './create';
import Menu from './menu';
import './pinterest.css'

const PinterestContainer = () => {
  return (
    <div className='pinterestbody'>
        <Menu/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default PinterestContainer
