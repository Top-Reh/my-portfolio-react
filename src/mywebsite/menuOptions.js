import React from "react";
import styled from 'styled-components';
import { delay, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MenuOpen(props) {

    const StyleLink = styled(Link)`
        transition: all 0.3s ease-in;

        &:hover {
            font-size: 33px;
  }
    `;

    const MenuuOption = styled(motion.div)`
        transition: all 0.3s ease-in;
        overflow:hidden;
    `
    const varients = {
        open:{
            width:350,
            transition:{duration:0.1}
        },
        closed:{
            width:0,
            transition:{duration:0.1}
        }
    }


    return (
        <MenuuOption className="menuOption"
            variants={varients}
            initial='closed'
            animate={props.isClicked ? "open" : "closed"}
        >
            <div>
                <ul>
                    <li>
                    <StyleLink to="/blog" className="linkmenu">Home</StyleLink>
                    </li>
                    <li>
                    <StyleLink to="/about" className="linkmenu">About</StyleLink>
                    </li>
                    <li>
                    <StyleLink to="/setting" className="linkmenu">Setting</StyleLink>
                    </li>
                    <li>
                    <StyleLink to="/contant" className="linkmenu">Contant us</StyleLink>
                    </li>
                    <li>
                    <StyleLink to="/history" className="linkmenu">History</StyleLink>
                    </li>
                </ul>
            </div>
        </MenuuOption>
    )
}