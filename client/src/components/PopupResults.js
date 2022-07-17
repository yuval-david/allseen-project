import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Popup(props) {

    function toResults() {
        window.location.href = "/results";
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="popup-wrraper">
            <div className="popup-comp">
                <div className="results-mini-frame-comp">
                    <div className="results-short-frame medium">

                        <h2 className="huge">תוצאות סיכויי התביעה</h2>
                        <p className="results-text big">
                            <b>66.88%</b> לטובת התובע
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
            </div>
        </div>
    )
}
