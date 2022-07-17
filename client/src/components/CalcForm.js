import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
import Select from 'react-select'
import Header from './Header';
import Popup from './Popup';
import Results from './Results';
import ResultsMiniFrame from './ResultsMiniFrame';
import PopupResults from './PopupResults';

export default function CalcForm() {

    const first_name = localStorage.getItem("first_name");

    //Form Fields
    const [claimamount, setClaimamount] = useState();
    const [courtid, setCourtid] = useState();
    const [judge, setJudge] = useState();
    const [proceedinid, setProceedinid] = useState();
    const [casetypeid, setCasetypeid] = useState();
    const [inian, setInian] = useState();
    const [acceptancedate, setAcceptancedate] = useState();
    const [casestatusstartdate, setCasestatusstartdate] = useState();
    const [Defense, setDefense] = useState();
    const [Prosecution, setProsecution] = useState();
    const [Prosecution_Gender, setProsecution_Gender] = useState();
    const [Disability_Type, setDisability_Type] = useState();
    const [Physical_Disability, setPhysical_Disability] = useState();
    const [Mental_Disability, setMental_Disability] = useState();

    const [showResults, setShowResults] = useState();
    const [showLoadPopup, setShowLoadPopup] = useState();
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleChange = e => {
        setSelectedOption(e.value);
    }

    function getCalculation() {
        fetch("https://api.coingecko.com/api/v3/coins")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTimeout(() => {
                    setShowLoadPopup(false)
                    setShowResults(true);
                    window.scrollBy(0, 200);
                    console.log(document.body.scrollHeight);
                }, 3000);

            })
    }

    function calcForm() {

        calcForm = document.getElementById("calculation_form");

        fetch("http://localhost:1000/calc", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ claimamount, courtid, judge, proceedinid, casetypeid, inian, acceptancedate, casestatusstartdate, Defense, Prosecution, Prosecution_Gender, Disability_Type, Physical_Disability, Mental_Disability })
        })
            .then(data => {
                if (data.ok) {
                    console.log(data);
                } else {
                    throw new Error("אנא נסו שוב.");
                }
            })
            .then(() => {
                setShowLoadPopup(true);
                getCalculation();
            }).catch((err) => {
                console.log(err);
                alert("ישנה שגיאה. אנא נסו שוב.");
            })

    }

    return (
        <div className="calc-form-comp">
            <Header />


            <div className="display-calc-form">
                <header>
                    <h1 className="huge" id="hello_name"> שלום {first_name}, שמחים לראותך</h1>
                </header>

                <main>
                    <form id="calculation_form" className="login-form calc-form wide-form">

                        <div className="flex-form">
                            <div className="col-right">
                                {/*
                                    <div className="inp-div medium">
                                        <label htmlFor="courtid"> בית משפט: </label>
                                        <Select
                                            options={options}
                                            placeholder="בחר/י"
                                            name="courtid"
                                            id="courtid"
                                            onChange={handleChange}
                                            value={options.find(obj => obj.value === selectedOption)}
                                        />
                                    </div>
                                */}
                                <div className="inp-div medium">
                                    <label htmlFor="claimamount"> סכום התביעה: </label>
                                    <input type="number" name="claimamount" id="claimamount" onChange={e => setClaimamount(e.target.value)} />
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="courtid"> בית משפט: </label>
                                    <select name="courtid" id="courtid" onChange={e => setCourtid(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value="אזורי לעבודה חיפה">אזורי לעבודה חיפה</option>
                                        <option value="אזורי לעבודה תל אביב - יפו">אזורי לעבודה תל אביב - יפו</option>
                                        <option value="אזורי לעבודה באר שבע">אזורי לעבודה באר שבע</option>
                                        <option value="אזורי לעבודה נצרת">אזורי לעבודה נצרת</option>
                                        <option value="אזורי לעבודה ירושלים">אזורי לעבודה ירושלים</option>
                                        <option value='אזורי לעבודה ב"ש בשבתו באילת'>אזורי לעבודה ב"ש בשבתו באילת</option>
                                    </select>
                                </div>


                                <div className="inp-div medium">
                                    <label htmlFor="judge"> שם השופט: </label>
                                    <select name="judge" id="judge" onChange={e => setJudge(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value="כב' השו' מ. פריימן">כב' השו' מ. פריימן</option>
                                        <option value="כב' השו' א. דגן-טוכמכר">כב' השו' א. דגן-טוכמכר</option>
                                        <option value="כב' השו' א. גילצר-כץ">כב' השו' א. גילצר-כץ</option>
                                        <option value="כב' השו' ד. ספיבק">כב' השו' ד. ספיבק</option>
                                        <option value="כב' הרש' ע. ריכטמן">כב' הרש' ע. ריכטמן</option>
                                        <option value="כב' הרש' ר. כהן">כב' הרש' ר. כהן</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' מ. פריימן">כב' השו' מ. פריימן</option>
                                        <option value="כב' השו' ח. גרשון-יזרעאלי">כב' השו' ח. גרשון-יזרעאלי</option>
                                        <option value="כב' השו' ה. יהלום">כב' השו' ה. יהלום</option>
                                        <option value="כב' השו' ד. חסון זכריה">כב' השו' ד. חסון זכריה</option>
                                        <option value="כב' הרש' א. רימון-קפלן">כב' הרש' א. רימון-קפלן</option>
                                        <option value="כב' השו' מ. שוורץ">כב' השו' מ. שוורץ</option>
                                        <option value="כב' השו' א. קוגן">כב' השו' א. קוגן</option>
                                        <option value="כב' השו' ר. גרוס">כב' השו' ר. גרוס</option>
                                        <option value="כב' השו' ע. איצקוביץ">כב' השו' ע. איצקוביץ</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' צ. פרנקל">כב' השו' צ. פרנקל</option>
                                        <option value="כב' השו' א. דגן-טוכמכר">כב' השו' א. דגן-טוכמכר</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                        <option value="כב' השו' י. יוספי">כב' השו' י. יוספי</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="proceedinid"> סוג ההליך: </label>
                                    <select name="proceedinid" id="proceedinid" onChange={e => setProceedinid(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value="אזרחי">אזרחי</option>
                                        <option value="פלילי">פלילי</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="casetypeid"> תחום עיקרי בו עוסקת התביעה: </label>
                                    <select name="casetypeid" id="casetypeid" onChange={e => setCasetypeid(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value='בקשה לאישור עיקול (בע"ק)'>בקשה לאישור עיקול (בע"ק)</option>
                                        <option value='בקשה לאישור עיקול (בע"ק)'>בקשה לאישור עיקול (בע"ק)</option>
                                        <option value='דיון מהיר (ד"מ)'>דיון מהיר (ד"מ)</option>
                                        <option value='דיון מהיר בסמכות רשם (דמ"ר)'>דיון מהיר בסמכות רשם (דמ"ר)</option>
                                        <option value='דיון מהיר בסמכות שופט (דמ"ש)'>דיון מהיר בסמכות שופט (דמ"ש)</option>
                                        <option value='דמי חבר (ד"ח)'>דמי חבר (ד"ח)</option>
                                        <option value='דמי טיפול ארגוני (ד"ט)'>דמי טיפול ארגוני (ד"ט)</option>
                                        <option value='הארכת מועד להישפט (המ"ש)'>הארכת מועד להישפט (המ"ש)</option>
                                        <option value='המרצת פתיחה בוררות (הפ"ב)'>המרצת פתיחה בוררות (הפ"ב)</option>
                                        <option value='התנגדות לביצוע שטר (ת"ט)'>התנגדות לביצוע שטר (ת"ט)</option>
                                        <option value='חוק ביטוח בריאות ממלכתי (חב"ר)'>חוק ביטוח בריאות ממלכתי (חב"ר)</option>
                                        <option value='סכסוך עבודה (ס"ע)'>סכסוך עבודה (ס"ע)</option>
                                        <option value='סכסוך עבודה בסמכות שופט (סע"ש)'>סכסוך עבודה בסמכות שופט (סע"ש)</option>
                                        <option value='סכסוך קיבוצי (ס"ק)'>סכסוך קיבוצי (ס"ק)</option>
                                        <option value='ערעור על החלטת רשם (ע"ר)'>ערעור על החלטת רשם (ע"ר)</option>
                                        <option value='ערעור על פי חוק (על"ח)'>ערעור על פי חוק (על"ח)</option>
                                        <option value='פסק דין הצהרתי - כללי (פ"ה)'>פסק דין הצהרתי - כללי (פ"ה)</option>
                                        <option value='צו עשה/צו מניעה (קבועים) (צ"ו)'>צו עשה/צו מניעה (קבועים) (צ"ו)</option>
                                        <option value='קופת גמל (ק"ג)'>קופת גמל (ק"ג)</option>
                                        <option value='שכר עבודה בסמכות רשם (ש"ע)'>שכר עבודה בסמכות רשם (ש"ע)</option>
                                        <option value='תביעות בוררות (ת"ב)'>תביעות בוררות (ת"ב)</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="inian"> תחום משני: </label>
                                    <select name="inian" id="inian" onChange={e => setInian(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value='אחר'>אחר</option>
                                        <option value='אחר - פטור מאגרה'>אחר - פטור מאגרה</option>
                                        <option value='אישור פסק בורר'>אישור פסק בורר</option>
                                        <option value='ביטול פסק בורר'>ביטול פסק בורר</option>
                                        <option value='בקשה לאישור עיקול'>בקשה לאישור עיקול</option>
                                        <option value='בקשה לשחזור תיק'>בקשה לשחזור תיק</option>
                                        <option value='דיון מהיר - חייב באגרה'>דיון מהיר - חייב באגרה</option>
                                        <option value='דיון מהיר - פטור מאגרה'>דיון מהיר - פטור מאגרה</option>
                                        <option value='דיון מהיר בסמכות רשם - לא פטור מאגרה'>דיון מהיר בסמכות רשם - לא פטור מאגרה</option>
                                        <option value='דיון מהיר בסמכות רשם - פטור מאגרה '>דיון מהיר בסמכות רשם - פטור מאגרה </option>
                                        <option value='דיון מהיר בסמכות שופט'>דיון מהיר בסמכות שופט</option>
                                        <option value='דמי חבר'>דמי חבר</option>
                                        <option value='דמי טיפול ארגוני - מקצועי'>דמי טיפול ארגוני - מקצועי</option>
                                        <option value='הגבלת עיסוק'>הגבלת עיסוק</option>
                                        <option value='הטרדה מינית - מכוח החוק למניעת הטרדה מינית'>הטרדה מינית - מכוח החוק למניעת הטרדה מינית</option>
                                        <option value='הטרדה מינית ורכיבים נוספים'>הטרדה מינית ורכיבים נוספים</option>
                                        <option value='הכרה כידוע/ה בציבור'>הכרה כידוע/ה בציבור</option>
                                        <option value='התנגדות לביצוע שטר'>התנגדות לביצוע שטר</option>
                                        <option value='התנגדות לבקשה לביצוע תביעה'>התנגדות לבקשה לביצוע תביעה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                        <option value='ועדת ערר- מס הכנסה'>ועדת ערר- מס הכנסה</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="acceptancedate"> תאריך הגשת התביעה: </label>
                                    <input type="date" id="acceptancedate" name="acceptancedate" onChange={e => setAcceptancedate(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-left">

                                <div className="inp-div medium">
                                    <label htmlFor="casestatusstartdate"> תאריך: </label>
                                    <input type="date" id="casestatusstartdate" name="casestatusstartdate" onChange={e => setCasestatusstartdate(e.target.value)} />
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Defense"> מספר הנתבעים: </label>
                                    <input type="number" id="Defense" name="Defense" onChange={e => setDefense(e.target.value)} />
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Prosecution"> מספר התובעים: </label>
                                    <input type="number" id="Prosecution" name="Prosecution" onChange={e => setProsecution(e.target.value)} />
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Prosecution_Gender"> מגדר: </label>
                                    <select name="Prosecution_Gender" id="Prosecution_Gender" onChange={e => setProsecution_Gender(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value='גבר'>גבר</option>
                                        <option value='אישה'>אישה</option>
                                        <option value='לא רלוונטי'>לא רלוונטי</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Disability_Type"> סוג מוגבלות: </label>
                                    <select name="Disability_Type" id="Disability_Type" onChange={e => setDisability_Type(e.target.value)}>
                                        <option value="0">בחר/י</option>
                                        <option value='קבועה'>קבועה</option>
                                        <option value='לא ידוע'>לא ידוע</option>
                                        <option value='אין נכות'>אין נכות</option>
                                        <option value='זמנית'>זמנית</option>
                                        <option value='קבועה'>קבועה</option>
                                    </select>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Physical_Disability"> מוגבלות פיזית: </label>
                                    <div className="radios-buttons">
                                        <div className="radio-div">
                                            <input type="radio" name='Physical_Disability' value="1" onChange={e => setPhysical_Disability(e.target.value)} />
                                            <div className="radio-text"> יש </div>
                                        </div>
                                        <div className="radio-div">
                                            <input type="radio" name='Physical_Disability' value="0" onChange={e => setPhysical_Disability(e.target.value)} />
                                            <div className="radio-text"> אין </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inp-div medium">
                                    <label htmlFor="Mental_Disability"> מוגבלות נפשית: </label>
                                    <div className="radios-buttons">
                                        <div className="radio-div">
                                            <input type="radio" name='Mental_Disability' value="1" onChange={e => setMental_Disability(e.target.value)} />
                                            <div className="radio-text"> יש </div>
                                        </div>
                                        <div className="radio-div">
                                            <input type="radio" name='Mental_Disability' value="0" onChange={e => setMental_Disability(e.target.value)} />
                                            <div className="radio-text"> אין </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="submit-btn medium" type="button" onClick={calcForm}> חשב את סיכויי התביעה </button>

                    </form>

                    {showLoadPopup ? <Popup title="הנתונים נשלחו בהצלחה" content="כעת מתבצע חישוב סיכויי התביעה." button="" buttonFunc="" isLoader={1} /> : ""}
                    {/*showResults ? <ResultsMiniFrame /> : ""*/}
                    {showResults ? <PopupResults title="תוצאות סיכויי התביעה" content="66.88% לטובת התובע" button="" buttonFunc="" isLoader={0} /> : ""}


                </main>
            </div>

            {/* delete this after */}
            <div className="display-all-results">
                <Results />
            </div>


        </div>
    )
}
