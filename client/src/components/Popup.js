import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Popup(props) {

    return (
        <div className="popup-wrraper">
            <div className="popup-comp">
                <h2 className='huge'> {props.title} </h2>
                <p className='big'>
                    {props.content}
                </p>
                {props.isLoader ? <div className="loader"></div> : ""}
                {props.button ? <button className="submit-btn medium" onClick={props.buttonFunc}> {props.button} </button> : ""}

            </div>
        </div>

    )
}
