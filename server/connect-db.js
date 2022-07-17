const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "allseen_db"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("connected to SQL");
});

module.exports = db;