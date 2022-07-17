import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Popup from './Popup';


export default function Register() {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [showPopup, setShowPopup] = useState();
    const [popupTitle, setPopupTitle] = useState();
    const [popupBtnText, setPopupBtnText] = useState();
    const [isErr, setIsErr] = useState();

    function registerPopupBtn() {
        if (isErr) {
            setShowPopup(false);
        } else {
            window.location.href = '/';
        }
    }

    function registerFunc(e) {
        fetch("http://localhost:1000/register",
            {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, username, password })
            })
            .then(data => {
                if (data.ok) {
                    console.log(data);
                } else {
                    throw new Error("אנא נסו שוב.");
                }
            })
            .then(res => console.log(res))
            .then(() => {
                setShowPopup(true);
                setPopupTitle("המשתמש נוצר בהצלחה במערכת.");
                setPopupBtnText("מעבר להתחברות");
                setIsErr(false);
                //alert("המשתמש נוצר בהצלחה במערכת.");
            }).catch((err) => {
                console.log(err);
                //alert("ישנה שגיאה. אנא נסו שוב.")
                setShowPopup(true);
                setPopupBtnText("אישור");
                setPopupTitle("ישנה שגיאה. אנא נסו שוב.");
                setIsErr(true);
            })
    }

    return (
        <div className="register-comp">
            <Header />
            <header>
                <h1 className="huge"> Allseen </h1>
                <h2 className="big"> הרשמה למערכת </h2>
                <h3 className="small"> למסך ההתחברות <Link to="/"> לחץ כאן </Link> </h3>
            </header>

            <main>
                <form id="register_form" className="register-form wide-form">

                    <div className="inp-div medium">
                        <label htmlFor="fullName"> שם מלא: </label>
                        <input placeholder="" type="text" id="fullName" onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div className="inp-div medium">
                        <label htmlFor="email"> אימייל: </label>
                        <input placeholder="" type="email" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="inp-div medium">
                        <label htmlFor="username"> מספר רישיון עו"ד: </label>
                        <input placeholder="" type="number" id="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="inp-div medium">
                        <label htmlFor="password"> סיסמא: </label>
                        <input placeholder="" type="password" id="password" onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button className="submit-btn medium" type="button" onClick={registerFunc}> יצירת משתמש </button>

                </form>
            </main>

            {
                showPopup ? <Popup title="" content={popupTitle} button={popupBtnText} buttonFunc={registerPopupBtn} isLoader={0} /> : ""
            }
        </div>
    )
}
