var express = require("express");

var router = express.Router();

var work = require("../models/burger.js");

router.get("/", function(req, res) {
    work.all(function(data) {
      var obj = {
        burger: data
      };
      // console.log(obj);
      res.render("index", obj);
    });
  });

  router.post("/api/burgers", function(req, res) {
    // console.log(req.body.name);
    work.insert("burger_name", req.body.name, function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    work.update(req.params.id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;