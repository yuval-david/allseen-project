const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./connect-DB');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));



// GET request - get all USERS
app.use(async function (req, res, next) {
    let q = `SELECT * FROM allseen_db.users;`;
    try {
        const results = await Query(q);
        users_array = results;
        // console.log(users_array);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }
    next();
});


// POST request - LOGIN
app.post("/login", function (req, res) {
    const { user, pass } = req.body;
    if (user && pass) {
        userFiltered = users_array.filter(u => u.username == req.body.user)[0];
        if (userFiltered) {
            if (pass == userFiltered.password) {
                // console.log(userFiltered);
                res.status(201).json({ "full_name": userFiltered.fullName });

            } else {
                res.status(400).send({ "message": "Wrong password" });
            }
        } else {
            res.status(400).send({ "message": "User not found" });
        }

    } else {
        res.status(400).send({ "message": "Missing some info" });
    }
});


// POST request - REGISTER
app.post("/register", async function (req, res) {
    const { fullName, email, username, password } = req.body;
    if (fullName && email && username && password != undefined) {
        userExist = users_array.filter(u => u.username == username);
        if (!userExist.length) {
            let q = `INSERT INTO users
            (fullName, email, username, password)
            VALUES
            ("${fullName}", "${email}", ${username}, "${password}");`;

            try {
                const results = await Query(q);
                //console.log(results);
                console.log(fullName, email, username, password);
                res.sendStatus(201);
            }
            catch (err) {
                res.sendStatus(500);
                throw err;
            }
        } else {
            res.status(400).send("The user is already exist.");
        }
    } else {
        res.status(400).send("Missing some info");
    }
});

// POST request - CALCULATION
app.post("/calc", async function (req, res) {
    const { claimamount, courtid, judge, proceedinid, casetypeid, inian, acceptancedate, casestatusstartdate, Defense, Prosecution, Prosecution_Gender, Disability_Type, Physical_Disability, Mental_Disability } = req.body;
    //if (courtid && judge && proceedinid && casetypeid && inian && acceptancedate && casestatusstartdate && Defense && Prosecution && Prosecution_Gender && Disability_Type && Physical_Disability && Mental_Disability) {
    console.log(claimamount, courtid, judge, proceedinid, casetypeid, inian, acceptancedate, casestatusstartdate, Defense, Prosecution, Prosecution_Gender, Disability_Type, Physical_Disability, Mental_Disability);

    try {
        console.log(req.body);
        res.json(req.body);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }

    // } else {
    //     console.log(courtid, judge, proceedinid, casetypeid, inian, acceptancedate, casestatusstartdate, Defense, Prosecution, Prosecution_Gender, Disability_Type, Physical_Disability, Mental_Disability);
    //     res.status(400).send("Missing some info");
    // }
});





// APP LISTEN
app.listen(1000, console.log('server is working'));



/* פונקציה שאנחנו כותבים כדי להפוך את הספריה של אסקיואל לבעלת יכולת להחזיר הבטחה */
function Query(q) {
    return new Promise((resolve, reject) => {
        db.query(q, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};