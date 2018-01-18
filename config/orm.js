var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result){
            if (err) throw err;
            // console.log("success");
            cb(result);
        });
    },
    insertOne: function(tableName, name, cb) {
        var query = "INSERT INTO burgers (??, devoured) VALUES (?, false)";
        connection.query(query, [tableName, name], function(err, result){
            if (err) throw err;
            // console.log("success")
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function(id, cb) {
        var query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, [id], function(err, result){
            if (err) throw err;
            // console.log("success")
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;