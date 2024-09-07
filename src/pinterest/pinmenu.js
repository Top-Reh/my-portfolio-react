import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import styled from 'styled-components';
import pinterestData from './pinterestData';
import Pinhome from './pinhome';
import Pincreate from './pincreate';

const Btnhm = styled.button`
 background-color: ${({clicked}) => (clicked ==='Home' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked ==='Home' ? 'white' : 'black')};
`;

const Btncr = styled.button`
 background-color: ${({clicked}) => (clicked === 'Create' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked === 'Create' ? 'white' : 'black')};
`;

const Pinmenu = ({setMenuData,setFirstHome,menuData,firstHome}) => {
  const [clicked,setClicked] = useState('Home');
  const [userName,setUsername] = useState(pinterestData);
  const [searchresult,setSearchResult] = useState();
  const [searching,setSearching] = useState('');
  const [clickhm,setClickhm] = useState(false);
  const [clickcr,setClickcr] = useState(false);
 
  function btnClickedhome() {
    setClicked('Home');
    setClickhm(true);
    setClickcr(false);
  }

  function btnClickedcreat() {
    setClicked('Create');
    setClickcr(true);
    setClickhm(false);
    if (firstHome === '') {
      setFirstHome('Create');
    }
  }

  useEffect(() => {
    if (clickcr) {
      setClicked('Create');
    }
  },[setClickcr])

  useEffect(()=> {
    const filtering = userName.filter(name => name.username.toLocaleLowerCase().includes(searching.toLowerCase()));
    if (menuData) {
      setMenuData(filtering);
    }
  },[searching,userName]);

  return (
    <div >
      <div className='menu'>
        <Link to='/' className='pinlink'><i className="bi bi-pinterest pincls"></i></Link>
        <Link to='/PinterestContainer' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}} searchresult={searchresult}><Btnhm className='homebtn' onClick={btnClickedhome} clicked={clicked}>Home</Btnhm></Link>
        <Link to='/Pincreate' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}} ><Btncr className='createbtn' onClick={btnClickedcreat} clicked={clicked}>Create</Btncr></Link>
        <input placeholder=' Search' value={searching} onChange={(e) => setSearching(e.target.value)}></input>
        <i className="bi bi-bell-fill"></i>
        <i className="bi bi-chat-dots-fill"></i>
        <div className='profileT'>T</div>
        <i className="bi bi-chevron-down downarrow"></i>
      </div>
    </div>
  )
}

export default Pinmenu
