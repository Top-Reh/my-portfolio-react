import { useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { Route,Link,Routes } from 'react-router-dom';
import styled from 'styled-components';

const Btnhm = styled.button`
 background-color: ${({clicked}) => (clicked ==='Home' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked ==='Home' ? 'white' : 'black')};
`;

const Btncr = styled.button`
 background-color: ${({clicked}) => (clicked === 'Create' ? 'black' : 'white')};
 color: ${({clicked}) => (clicked === 'Create' ? 'white' : 'black')};
`;

const Menu = () => {
  const [clicked,setClicked] = useState('Home')

  function btnClickedhome() {
    /*if (!isClickedhm) {
      setIsClickedhm(!isClickedhm);
      setIsClickedcr(!isClickedcr);
      setClicked('Home');
    }*/
    setClicked('Home');
  }

  function btnClickedcreat() {
    /*if (!isClickedcr) {
      setIsClickedcr(!isClickedcr);
      setIsClickedhm(!isClickedhm);
      setClicked('Create')
    }*/
    setClicked('Create')
  }

  return (
    <div >
      <div className='menu'>
        <i className="bi bi-pinterest pincls"></i>
        <Link to='/' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}}><Btnhm className='homebtn' onClick={btnClickedhome} clicked={clicked}>Home</Btnhm></Link>
        <Link to='/Create' style={{textDecoration: 'none',border: 'none',margin:'0',fontSize:'16px'}}><Btncr className='createbtn' onClick={btnClickedcreat} clicked={clicked}>Create</Btncr></Link>
        <input placeholder=' Search'></input>
        <i className="bi bi-bell-fill"></i>
        <i className="bi bi-chat-dots-fill"></i>
        <div className='profileT'>T</div>
        <i className="bi bi-chevron-down downarrow"></i>
      </div>
    </div>
  )
}

export default Menu
