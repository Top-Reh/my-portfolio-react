import React,{useState} from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Component from "./weather-component.js";

export default function Test(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [openTab, setOpenTab] = useState(false);
    const [text,setText] = useState('Search');


    const handleClick = () => {
        if (isClicked) {
            if (text === 'Start') {
                setOpenTab(!openTab);
            } else if (text === 'Close') {
                setOpenTab(false);
            } 
        }
        changeTheText();
    }

    const changeTheText = () => {
        if (text === 'Search') {
            setText('Start');
            setIsClicked(!isClicked);
        } else if (text === 'Start') {
            setText('Close');
        } else {
            setText('Search');
            setIsClicked(false);
        }
    }

    const Contain = styled.div`
        width:1500px;
        height:760px;
        background-image:url('https://www.teahub.io/photos/full/278-2789036_sky-sea-blue-sky-views.jpg');
        background-position:center;
        background-size:cover;
        color:blue;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
    `;

    const Title = styled.p`
        position:absolute;
        top:30%;
        color:white;
        font-size:25px;
        font-family: serif;
        font-weight:bold;
    `

    const Hr = styled.hr`
        background-color: rgb(255, 255, 255);
        width:250px;
        height:5px;
        position:absolute;
        top:35%;
    `

    let Icon = styled(motion.button)`
        width: 55px;
        height:55px;
        background-color:white;
        border-radius:${props => props.text=== 'Search'? '50%' : '12px'};
        border:none;
        font-size:30px;
        transition:all 0.3s ease-in-out;
        font-family: serif;

        &:hover {
            box-shadow:0 0 2px 2px rgb(0, 119, 254);
        }

        i{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight:bolder;
        }
    `;

    return (
        <Contain>
            <Title>
                Let's see your city's weather
            </Title>
            <Hr />
            <Icon 
                animate={{width:text === 'Search'? '55px' : '160px',marginTop:openTab?'550px':'0'}}
                transition={{duration:0.2}}
                clicked={isClicked} 
                text={text}
                onClick={handleClick}
                openTab={openTab}
            >
               {text === 'Search' ? (<i className="bi bi-search"></i>) : (<p>{text}</p>)}
            </Icon>
            {text === 'Close' ? <Component 
                openTab={openTab} 
                text={text} 
                {...props}/> : '.'}
        </Contain>
    )
}
/*            {openTab && <Component 
                openTab={openTab} 
                text={text} 
                {...props}/>}*/
//{isClicked ? <p >Start</p> : <i className="bi bi-search"></i>}