var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.send({message:"you can apply for load by manual process"})
});

module.exports = router;
