import React,{useState,useEffect} from 'react';
import { useRef } from 'react';
import { motion,useScroll,useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import AllAboutpf from './allaboutpf';
import Aboutpf from './aboutpf';
import Profilio from './profilio';
import Contactme from './contactme';

const Dkbtn = styled.div`
  color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  transition:1s;
`;

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
    color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    font-size: 25px;
    text-decoration: none;
    margin: 20px;
    padding: 5px;
    border-bottom: 2px solid ${({darkmode}) => (darkmode ? 'blue' : 'black')};
    cursor: pointer;

  `;

  const Searchbtn = styled.button`
    margin-left: 0;
    margin-right: 2px;
    background-color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
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
    color:black;
  `;

  const InputIcon = styled.div`
    position: absolute;
    right: 70px;
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
    background-color: ${({darkmode}) => (darkmode ? 'blue' : 'black')};
  `;

  const Hividbtn = styled.div`
   width: ${({hiclicked}) => (hiclicked ? '210px' : '0')};
   transition:all 0.5s ease-in-out;
  `;

  const variants = {
    initial: {
      x:-500,
      y:0,
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

  const Menuline = styled(motion.div)`
    background-color: ${({darkmode}) => (darkmode ? 'white' : 'black')};
  `;
  

const All = () => {

  const [searching,setSearching] = useState(false);
  const [inputValue,setInputValue] = useState('');
  const [links,setLinks] = useState(['info','about','did','contact']);
  const [hiclicked,setHiclicked] = useState(false);
  const [darkmode,setDarkmode] = useState(false);
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
  };

  useEffect(() => {
    document.body.classList.toggle('darkmode', darkmode);
    document.body.classList.toggle('lightmode', !darkmode);
  }, [darkmode]);

  return (
    <motion.div ref={ref} >
        <div className='navbar'>
            <div class="tooltip-container">
              <span class="tooltip">👋</span>
              <span class="text">Hello!</span>
              <span>TOP</span>
            </div>
            <div >
                <Thelink href="#info" key='info' onClick={scrolltodiv} darkmode={darkmode}>Info</Thelink>
                <Thelink href="#about" key='about' onClick={scrolltodiv} darkmode={darkmode}>About</Thelink>
                <Thelink href="#did" key='did' onClick={scrolltodiv} darkmode={darkmode}>Did</Thelink>
                <Thelink href="#contact"  key='contact' onClick={scrolltodiv} darkmode={darkmode}>Contact</Thelink>
            </div>
            <div className='searchandmode'>
              <Searchbtn  searching={searching} onClick={search} darkmode={darkmode}><i class="bi bi-search"></i></Searchbtn>
              <SearchInput searching={searching} className='searching' value={inputValue} onChange={inputValuechange} onKeyDown={searchthelink}></SearchInput>
              <InputIcon searching={searching} >
                <i class="bi bi-search inputiconsearch" onClick={searchthelink} ></i>
              </InputIcon>
              <Dkbtn className='nightmode' onClick={() => setDarkmode(pre => !pre)} darkmode={darkmode}>
                {darkmode ? <i className="bi bi-moon nighticon"></i> : <i className="bi bi-brightness-high nighticon"></i>}
              </Dkbtn>
            </div>
            <Menuline style={{scaleX}} className='menuunderline' darkmode={darkmode}>

            </Menuline>
        </div>
      <motion.section id='info' variants={variants} initial='initial' whileInView="animate" ><AllAboutpf darkmode={darkmode}/></motion.section>
      <motion.section id='about' variants={variants} initial='initial' whileInView="animate" ><Aboutpf darkmode={darkmode}/></motion.section>
      <motion.section id='did' variants={variants} initial='initial' whileInView="animate" ><Profilio darkmode={darkmode}/></motion.section>
      <motion.section id='contact' variants={variants} initial='initial' whileInView="animate" ><Contactme darkmode={darkmode}/></motion.section>
    </motion.div>
  )
}

export default All
