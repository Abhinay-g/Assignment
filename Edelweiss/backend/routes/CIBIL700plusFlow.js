var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.send({message:"do yo uwant to apply for loan ? YES | NO"})
  
});

module.exports = router;
