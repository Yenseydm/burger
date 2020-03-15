var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
       burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(data) {
    // Send back the ID of the new quote
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    "devourIt": req.body.devourIt
  }, condition, function(data) {
    res.redirect("/burgers")
  });
});

// Export routes for server.js to use.
module.exports = router;