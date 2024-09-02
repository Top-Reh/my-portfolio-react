import React,{useState} from "react"
import styled from "styled-components";
import { motion } from 'framer-motion';
import MenuOpen from './menuOptions.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './blog.js';
import About from './about.js';
import Setting from './setting.js';
import Contact from './contact.js';
import History from './history.js';

export default function Menu(props) {
    const [isOpened,setIsOpened] = useState(false);

    const Menus = styled(motion.div)`
        width: 35px;
        height: 36px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        cursor:pointer;
        position:fixed;
        z-index: 999;
        top:3%;
    `

    const Bar = styled(motion.div)`
        width: 100%;
        height: 3px;
        background-color: ${isOpened ? 'rgb(0, 0, 0)': 'rgb(255, 255, 255)'};
        border-radius: 2px;
    `

    function handleClick() {
        props.Click()
        setIsOpened(!isOpened);
    }

    

    return (
        <div>
            <Menus onClick={handleClick}>
                <Bar
                    initial={{rotate:0,translateY:0}}
                    animate={isOpened? {rotate: -50,translateY:12} : {rotate:0,translateY:0}}
                    transition={{duration:0.5}}            
                ></Bar>
                <Bar
                    initial={{opacity:1}}
                    animate={isOpened? {opacity:0} : {opacity:1}}
                    transition={{duration:0.5}}            
                ></Bar>
                <Bar
                    initial={{rotate:0,translateY:0}}
                    animate={isOpened? {rotate: 50,translateY:-12} : {rotate:0,translateY:0}}
                    transition={{duration:0.5}}            
                ></Bar>
                    <Routes>
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
            </Menus>
        </div>
    )
}