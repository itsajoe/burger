var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9@gbl721",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected");
});

module.exports = connection;