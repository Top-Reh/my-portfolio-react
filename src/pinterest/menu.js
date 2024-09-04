import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import styled from 'styled-components';
import pinterestData from './pinterestData';
import Home from './home';
import Create from './create';

const Btnhm = styled.button`
 background-color: ${({clicked}) => (clicked ==='Home' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked ==='Home' ? 'white' : 'black')};
`;

const Btncr = styled.button`
 background-color: ${({clicked}) => (clicked === 'Create' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked === 'Create' ? 'white' : 'black')};
`;

const Menu = ({setMenuData,setFirstHome}) => {
  const [clicked,setClicked] = useState('Home');
  const [userName,setUsername] = useState(pinterestData);
  const [searchresult,setSearchResult] = useState();
  const [searching,setSearching] = useState('');
 
  function btnClickedhome() {
    /*if (!isClickedhm) {
      setIsClickedhm(!isClickedhm);
      setIsClickedcr(!isClickedcr);
      setClicked('Home');
    }*/
    setClicked('Home');
    setFirstHome('Create');
  }

  function btnClickedcreat() {
    /*if (!isClickedcr) {
      setIsClickedcr(!isClickedcr);
      setIsClickedhm(!isClickedhm);
      setClicked('Create')
    }*/
    setClicked('Create');
    setFirstHome('Create');
  }

  useEffect(()=> {
    const filtering = userName.filter(name => name.username.toLocaleLowerCase().includes(searching));
    setSearchResult(filtering);
    setMenuData(searchresult);
  },[searching,userName]);

  return (
    <div >
      <div className='menu'>
        <i className="bi bi-pinterest pincls"></i>
        <Link to='/' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}} searchresult={searchresult}><Btnhm className='homebtn' onClick={btnClickedhome} clicked={clicked}>Home</Btnhm></Link>
        <Link to='/Create' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}}><Btncr className='createbtn' onClick={btnClickedcreat} clicked={clicked}>Create</Btncr></Link>
        <input placeholder=' Search' value={searching} onChange={(e) => setSearching(e.target.value)}></input>
        <i className="bi bi-bell-fill"></i>
        <i className="bi bi-chat-dots-fill"></i>
        <div className='profileT'>T</div>
        <i className="bi bi-chevron-down downarrow"></i>
      </div>
    </div>
  )
}

export default Menu
