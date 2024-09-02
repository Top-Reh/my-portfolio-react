import React,{useState,Suspense, lazy} from "react";
import styled from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './menu.js';
import Blog from './blog.js';
import MenuOpen from './menuOptions.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from "./details";
import './mywebsite.css';

export default function Mywebsite() {
    const [isClicked,setIsClicked] = useState(false);

    function openMenu() {
        setIsClicked(!isClicked);
    }

    return (
        <div className="thepage">
            <div className="menutab">
                <Menu Click={openMenu}/>
                <h2>home feed</h2>
                <i class="bi bi-cart-check cart"></i>
            </div>
            <div className="bodytag">
                <Routes>
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </div>
            {isClicked ? <MenuOpen isClicked={isClicked}/> : ''}
        </div>
    )
}