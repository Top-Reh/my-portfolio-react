import React, { useState } from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import Home from './home';
import Create from './create';
import Menu from './menu';
import './pinterest.css'

const PinterestContainer = () => {
  const [menuData,setMenuData] = useState();
  const [firstHome,setFirstHome] = useState('');

  return (
    <div className='pinterestbody'>
        <Menu setMenuData={setMenuData} setFirstHome={setFirstHome}/>
        {firstHome==='Create' ? <h1>click the home button</h1> : <Home/>}
      <Routes>
        <Route exact path='/' element={<Home menuData={menuData}/>}/>
        <Route exact path='/Create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default PinterestContainer
