var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log("mobile flow");
    
  if(req.body.loanAmount <3000000){
    res.send({message:"Congratulations your loan is approved"})
  }else{
    res.send({message:"We Regaret to infom you that your loan is not approved"})

  }

});

module.exports = router;
