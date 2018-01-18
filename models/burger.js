var orm = require("../config/orm.js");

var works = {
    all: function (cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insert: function (table, input, cb) {
        orm.insertOne(table, input, function(result) {
            cb(result);
        });
    },
    update: function (input, cb) {
        orm.updateOne(input, function(result) {
            cb(result);
        });
    }
};

module.exports = works;