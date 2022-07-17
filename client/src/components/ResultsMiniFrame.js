import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ResultsMiniFrame(props) {


    function toResults() {
        window.location.href = "/results";
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="results-mini-frame-comp">
            <div className="results-short-frame medium">
                <p className="results-text">
                    <span className="label-title">תוצאות סיכויי התביעה:</span>
                    &nbsp;
                    66.88% לטובת התובע
                </p>
                <div className="buttons-container flex-container">
                    <div className="btn-div medium">
                        <button onClick={refreshPage}> חשב מחדש </button>
                    </div>
                    <div className="btn-div medium">
                        <button onClick={toResults}>הצגת חקר התוצאות</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
