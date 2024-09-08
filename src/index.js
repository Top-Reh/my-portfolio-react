import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profiliofast from './fast-profile/fast-profilio.js';
import Tester from './cat-profile.js';
import Dice from './dice.js';
import Weather from './weather/weather.js';
import Component from "./weather/weather-component.js";
import Test from './weather/weather-intro.js';
import Appss from './blackboxtest.js';
import Mywebsite from './mywebsite/mywebsite.js';
import Container from './react-course-making-test/container.js';
import MainBlog from './zeagwat/mainBlog.js';
import Myprofilio from './my-profilio/myprofilio.js';
import PinterestContainer from './pinterest/pinterestContainer.js';

console.log("create profile by adding some information and it has to make the profile automically like photo,name and bio")

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



/*
*/
root.render(
  <Router>
    <Myprofilio/>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

