import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';


export default function LoginForm() {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const [showPopup, setShowPopup] = useState();
    const [popupTitle, setPopupTitle] = useState();

    function checkResponseStatus(res) {
        if (res.ok) {
            return res;
        } else {
            console.log(res);
            throw new Error("ישנה שגיאה בהתחברות, אנא נסו שוב.");
        }
    }

    function loginFunc() {
        fetch("http://localhost:1000/login",
            {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user, pass })
            })
            .then(res => checkResponseStatus(res))
            .then(details => details.json())
            .then(data => {
                console.log(data);
                const full_name = data.full_name;
                if (full_name) {
                    const first_name = full_name.split(" ")[0];
                    localStorage.setItem("first_name", first_name);
                    window.location.href = "/calc";
                }
            })
            .catch((err) => {
                console.log(err);
                // alert(err);
                setShowPopup(true);
                setPopupTitle(err.message);
            })
    }

    function closePopup() {
        setShowPopup(false);
    }


    return (
        <div className="login-form-comp">
            {/****  HEADER  ****/}
            <header>
                <h2> ALL SEEN </h2>
                <h1 className="big"> התחברות למערכת </h1>
                <h3 className="small"> לא רשום למערכת? <Link to="/register"> לחץ כאן </Link> </h3>
            </header>

            {/****  LOGIN FORM  ****/}
            <main>
                <form id="login_form" className="login-form">

                    <div className="inp-div medium">
                        <label htmlFor="user"> מספר עורך דין: </label>
                        <input placeholder="" type="text" id="user" name="user" onChange={e => setUser(e.target.value)} />
                    </div>
                    <div className="inp-div medium">
                        <label htmlFor="pass"> סיסמא: </label>
                        <input placeholder="" type="password" id="pass" name="pass" onChange={e => setPass(e.target.value)} />
                    </div>

                    <button onClick={loginFunc} className="submit-btn medium" id="submit_login" type="button"> כניסה </button>

                </form>
            </main>

            {
                showPopup ? <Popup title="" content={popupTitle} button="אישור" buttonFunc={closePopup} isLoader={0} /> : ""
            }
        </div>
    )
}
