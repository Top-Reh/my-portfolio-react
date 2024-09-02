import React from "react";


export default function Contant(props) {

    let idnumber
    if (props.id %2 === 0) {
        idnumber = 'online';
    }else {
        idnumber = 'offline';
    }
    return (
        <div className="contant-card">
            <img src={props.img} className="catimg"></img>
            <h3>{props.name}</h3>
            <p>{props.about}</p>
            <p>{idnumber}</p>
        </div>
    )
    //the other way to call image if the image link in other file <img src={'../image/${props.img}'} className="catimg"></img>
}