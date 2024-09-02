import React, { useState,useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './weatherstyle.css';

//import Weather from './weather.js'

export default function Component(props) {
    const [inputValue, setInputValue] = useState("");
    const [saveValue,setSaveValue] = useState("");
    const [tabopen,settabopen] = useState(props.openTab);

    useEffect(() => {
        settabopen(props.openTab);
    }, [props.openTab]);

    const handleChange = (event) => {
        setSaveValue(event.target.value);
    };


   /*if (props.text === 'Search') {
    settabopen(!tabopen)
   }*/
    //const handleInputSubmit = () => {
        //props.onSubmit(inputValue)
    //}

    function cityInput() {
        const btn = document.querySelector('.change-location');
        btn.style.display = 'none';
        const input = document.querySelector('.input-location');
        input.style.width = '87%';
        input.value = '';
        const inputbutton = document.querySelector('.inputButton');
        inputbutton.style.display = 'block';
        
    }
    function inputbtn() {
        setInputValue(saveValue);
        const btn = document.querySelector('.change-location');
        btn.style.display = 'inline';
        const input = document.querySelector('.input-location');
        input.style.width = '0';
        const inputbutton = document.querySelector('.inputButton');
        inputbutton.style.display = 'none';
        props.onChange(inputValue);
    }


    const Containerbig = styled(motion.div)`
        height: 0;
        width: 700px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: absolute;
        transition:all 0.5s ease-in-out;
    `
    const Theshow = styled(motion.div)`
        width:0;
        height: 70%;
        border-radius: 12px;
        font-family: 'Arial';
        background-image: url('https://images.pexels.com/videos/5189815/clouds-holiday-ocean-view-sky-5189815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
        background-position: center;
        background-size: cover;
        background-repeat: none;
        transition:all 0.5s ease-in-out;
        overflow:hidden;
    `

    const TheFacts = styled(motion.div)`
        width: 0;
        height: 64%;
        background-color: rgb(22, 28, 59);
        border-radius: 12px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        font-family: 'Arial';
        padding: 12px;
        padding-left: 19px;
        padding-right: 10px;
        position: relative;
    `
    const TheTexts = styled(motion.div)`
        transition:all 4s ease-in-out;
    `

    const Input = styled.input`
        width: 0;
        height: 35px;
        border-radius: 6px;
        color: rgb(0, 0, 0);
        background-color: rgb(255, 255, 255);
        border: none;
        position: absolute;
        transition: 0.5s;
        
    `
    const InputWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-top: 15px;
    `;

    return (
        <Containerbig
            animate={{width:tabopen? '700px' : '0',height:tabopen? '500px' : '0'}}
            transition={{duration:0.2}}
        >
            <Theshow
                animate={{width:tabopen? '40%' : '0'}}
                transition={{duration:0.2}}
            >
                <div className="top-text">
                    <h3>{props.days}</h3>
                    <h5>{props.formattedDate}</h5>
                    <h5><i className="bi bi-geo-alt"></i>{props.city}</h5>
                </div>
                <div className="bottm-text">
                    <img src={props.icon} alt="weather icon" />
                    <h5>{props.temperature}°C</h5>
                    <h5>{props.condition}</h5>
                </div>
            </Theshow> 
            <TheFacts
                animate={{width:tabopen? '40%' : '0'}}
                transition={{duration:0.2}}
                style={{ overflow: 'hidden' }}
                className="the-facts"
            >
                <TheTexts
                     initial={{ opacity: 0 }}
                     animate={{ opacity: tabopen ? 1 : 0 }}
                     transition={{ duration: 1 }}
                     style={{ overflow: 'hidden' }}
                >
                    <h3>PRECIPITATION<span>{props.precip}%</span></h3>
                    <h3>HUMIDITY<span>{props.humidity}%</span></h3>
                    <h3>WIND<span>{props.wind}km/h</span></h3>
                    <div className="weekly-conditions">
                        <div className="daily tue">
                            <img src={props.fore1icon}></img>
                            <p>{props.day1name}</p>
                            <p>{props.fore1degree}°C</p>
                        </div>
                        <div className="daily wed">
                            <img src={props.fore2icon}></img>
                            <p>{props.day2name}</p>
                            <p>{props.fore2degree}°C</p>
                        </div>
                        <div className="daily thu">
                            <img src={props.fore3icon}></img>
                            <p>{props.day3name}</p>
                            <p>{props.fore3degree}°C</p>
                        </div>
                        <div className="daily fri">
                            <img src={props.fore4icon}></img>
                            <p>{props.day4name}</p>
                            <p>{props.fore4degree}°C</p>
                        </div>
                    </div>
                    <InputWrapper>
                        <button className="change-location" onClick={cityInput}><i className="bi bi-geo-alt"></i>Change location</button>
                        <input className="input-location" value={saveValue} onChange={handleChange}></input>
                        <button className="inputButton" onClick={inputbtn}>Find</button> 
                    </InputWrapper>
                    
                </TheTexts>    
            </TheFacts>
        </Containerbig>
    )
}

//<input className="test-input" value={city} onChange={(e) => setcity(e.target.value)}></input>
