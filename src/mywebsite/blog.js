import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Details from "./details";

export default function Blog() {

    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/details')
    }

    const StyleLink = styled(Link)`
        transition: all 0.3s ease-in;
    }
    `;


    return(
        <div className="blogcomponent">
           
        </div>
    )
}

/**
 *  <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_451,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-jBrhbr.png" alt="nike air force 1"></img>
            <button className="detailsbtn" onClick={handleDetailsClick}>
                <StyleLink >DETAILS</StyleLink>
            </button>
            <div className="sources">
                <h6>Nike air force 1'07</h6>
                <div className="pagefacts">
                    <p>Air Force 1. Nike.com</p>
                    <a href="https://www.nike.com/Air-Force-1?msockid=06234002735d62c13e8252c5720763ad">Nike official link</a>
                </div>
                <p className="price">$115</p>
                <p className="sizes">Sizes - <a href="#sizes">M 6 / W 7.5 , M 6.5 / W 8,  M 7 / W 8.5 , ...</a></p>
                <div className="reviews">
                    <a href="#reviews">Reviews</a>
                    <p><i class="bi bi-caret-right-fill"></i> I AM SO PLEASED WITH NIKE AND THE WAY THEY DO THINGS ITS SO FAST AND EAZY DEFINITELY ONE OF THE BETTER APPS TO ORDER FROM THANKYOU NIKE</p>
                </div>
            </div>
 */