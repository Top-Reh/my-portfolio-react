import React, { useState } from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import Pinhome from './pinhome';
import Pincreate from './pincreate';
import Pinmenu from './pinmenu';
import './pinterest.css';
import pinterestData from './pinterestData';
import Soloimageblog from './soloimageblog';

const PinterestContainer = () => {
  const [menuData,setMenuData] = useState(pinterestData);
  const [firstHome,setFirstHome] = useState('');

  return (
    <div className='pinterestbody'>
        <Pinmenu setMenuData={setMenuData} setFirstHome={setFirstHome} menuData={menuData}/>
        {firstHome==='Create' ? <Pincreate setFirstHome={setFirstHome}/> : <Pinhome menuData={menuData}/>}
      <Routes>
        <Route exact path='/Pinhome' element={<Pinhome menuData={menuData} setMenuData={setMenuData} setFirstHome={setFirstHome}/>}/>
        <Route exact path='/Pincreate' element={<Pincreate setFirstHome={setFirstHome} firstHome={firstHome} setMenuData={setMenuData} menuData={menuData}/>}/>
        <Route path='/Soloimageblog/:id' element={<Soloimageblog  setFirstHome={setFirstHome} firstHome={firstHome} setMenuData={setMenuData} menuData={menuData}/>}/>
      </Routes>
    </div>
  )
}

export default PinterestContainer
