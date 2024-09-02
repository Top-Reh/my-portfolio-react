import React,{useState,useEffect} from 'react';
import { useRef } from 'react';
import { motion,useScroll,useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import AllAboutpf from './allaboutpf';
import Aboutpf from './aboutpf';
import Profilio from './profilio';
import Contactme from './contactme';

const expand = keyframes `
    from {
      width:0;
      opacity:0;
    }
      to {
        width:300px;
        opacity:1;
      }
  `;

  const collapse = keyframes `
    from {
      width: 300px;
      opacity:1;
    }
      to {
        width: 0;
        opacity:0;
      }
  `

  const Thelink = styled.a `
    color: rgb(97, 200, 255);
    font-size: 25px;
    text-decoration: none;
    margin: 20px;
    padding: 5px;
    border-bottom: 2px solid rgb(0, 153, 255);
    cursor: pointer;
    transition: 2s;
  `;

  const Searchbtn = styled.button`
    margin-left: 0;
    margin-right: 20px;
    background-color: blue;
    border-radius: 40%;
  `;

  const SearchInput = styled.input `
    position: absolute;
    display: ${({ searching } ) => (searching ?  'block' : 'none')};
    width: ${({ searching } ) => (searching ?  '300px' : '0px')};
    opacity: ${({ searching } ) => (searching ?  1 : 0)};
    transition: width 2s ease , opacity 2s ease;
    pointer-events: ${({ searching }) => (searching ? 'auto' : 'none')};
    animation: ${({ searching }) => (searching ? expand : collapse)} 0.5s forwards;
  `;

  const InputIcon = styled.div`
    position: absolute;
    right: 40px;
    color: black;
    font-size: 24px;
    cursor: pointer;
    display: ${({ searching } ) => (searching ?  'block' : 'none')};
  `;

  const Hibtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: ${({hiclicked}) => (hiclicked ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition:all 0.5s ease-in-out;
  `;

  const Hividbtn = styled.div`
   width: ${({hiclicked}) => (hiclicked ? '210px' : '0')};
   transition:all 0.5s ease-in-out;
  `

  const variants = {
    initial: {
      x:-500,
      y:0,
      opacity:0,
    },
    animate: {
      x:0,
      y:0,
      opacity:1,
      transition : {
        duration:0.5,
        staggerChildren:0.1,
      },
    },
  };
  

const All = () => {

  const [searching,setSearching] = useState(false);
  const [inputValue,setInputValue] = useState('');
  const [links,setLinks] = useState(['info','about','profilio','contant']);
  const [hiclicked,setHiclicked] = useState(false);
  const ref = useRef();
  

  function search() {
    setSearching(pre => !pre);
  };

  function searchthelink(e) {
    if (e.key === 'Enter' || e.type === 'click') { // Check if the pressed key is 'Enter'
      const sectionId = inputValue.trim().toLocaleLowerCase();
      const section = document.getElementById(sectionId);
      setSearching(pre => !pre);

      if (links.includes(sectionId)) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Section not found');
        console.log(inputValue);
      }
      setInputValue('')
    }
  }

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['end end','start start']
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness : 100,
    damping: 30,
  });

  function inputValuechange(e) {
    setInputValue(e.target.value);
  };

  function scrolltodiv(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href').substring(1);
    const hrefId = document.getElementById(href)
    hrefId.scrollIntoView({ behavior: 'smooth' });
  };

  function hiclickedfun() {
    setHiclicked(pre => !pre);
    setTimeout(() => {
      setHiclicked(pre => !pre);
    }, 3000);
  }

  return (
    <motion.div ref={ref} >
        <div className='navbar'>
            <Hibtn className='hoverbtn ' onClick={hiclickedfun} hiclicked={hiclicked}>
              {hiclicked ? <i class="bi bi-arrow-left"></i> : 'HI'}
            </Hibtn>
            <Hividbtn className='hivid' hiclicked={hiclicked}>
              <h4>Welcome</h4>
              <motion.img 
                src="https://media.giphy.com/media/AWNxDbtHGIJDW/giphy.gif?cid=ecf05e4795ui617yr3qdgnvb5h3i3kqm9f7b3z98pna2vviz&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                alt="Funny GIF"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5}}
              />
              </Hividbtn>
            <div >
                <Thelink href="#info" key='info' onClick={scrolltodiv}>Info</Thelink>
                <Thelink href="#about" key='about' onClick={scrolltodiv}>About</Thelink>
                <Thelink href="#profilio" key='profilio' onClick={scrolltodiv}>Profilio</Thelink>
                <Thelink href="#contant"  key='contact' onClick={scrolltodiv}>Contant</Thelink>
            </div>
            <Searchbtn  searching={searching} onClick={search}><i class="bi bi-search"></i></Searchbtn>
            <SearchInput searching={searching} className='searching' value={inputValue} onChange={inputValuechange} onKeyDown={searchthelink}></SearchInput>
            <InputIcon searching={searching} >
              <i class="bi bi-search inputiconsearch" onClick={searchthelink} ></i>
            </InputIcon>
            <motion.div style={{scaleX}} className='menuunderline'>

            </motion.div>
        </div>
      <motion.section id='info' variants={variants} initial='initial' whileInView="animate" ><AllAboutpf /></motion.section>
      <motion.section id='about' variants={variants} initial='initial' whileInView="animate" ><Aboutpf/></motion.section>
      <motion.section id='profilio' variants={variants} initial='initial' whileInView="animate" ><Profilio/></motion.section>
      <motion.section id='contant' variants={variants} initial='initial' whileInView="animate" ><Contactme/></motion.section>
    </motion.div>
  )
}

export default All
