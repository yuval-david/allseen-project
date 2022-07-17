import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Results() {

    function backToCalc() {
        window.location.href = "/calc";
    }

    const resultsList = [
        {
            "label": 'ב"ל 3839-11-20',
            "value": 'המוסד לביטוח לאומי'
        },
        {
            "label": '1239-11-20',
            "value": 'המוסד לביטוח לאומי'
        }, {
            "label": '5539-11-20',
            "value": 'המוסד לביטוח לאומי'
        }, {
            "label": 'ב"ל 3839-17-20',
            "value": 'המוסד לאומי'
        }, {
            "label": 'ב"ל 3839-11-20',
            "value": 'המוסד לביטוח לאומי'
        }, {
            "label": 'ב"ל 3839-11-20',
            "value": 'המוסד לביטוח לאומי'
        }, {
            "label": 'ב"ל 3839-11-20',
            "value": 'המוסד לביטוח לאומי'
        }
    ]

    return (
        <div className="results-comp">
            <header>
                <h1 className="huge" id="hello_name">חקר התוצאות</h1>
            </header>

            <main>
                <div className="results-frame medium">
                    <ul>
                        {
                            resultsList.map((item, index) =>
                                <li key={index}>
                                    <label>{item.label}</label>:
                                    <span className="value">&nbsp;{item.value}</span>
                                </li>
                            )
                        }

                    </ul>
                </div>

                <button className="submit-btn medium" type="button" onClick={backToCalc}> בחזרה לחישוב </button>
            </main>
        </div>
    )
}
