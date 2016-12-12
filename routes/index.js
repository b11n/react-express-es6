var express = require("express");
var indexController = require("../controllers/indexController");

 
module.exports = function() {

  var router = express.Router();
  router.get('/', indexController);


  return router;
}
