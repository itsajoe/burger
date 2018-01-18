var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "9@gbl721",
        database: burgers_db
    });
};

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected");
});

module.exports = connection;