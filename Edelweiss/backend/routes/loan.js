var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.post('/evaluateLoan', function(req, res, next) {
  console.log("evaluateLoan");
  console.log(req.headers.authorization.split(' ')[1]);

  console.log(jwt.verify(req.headers.authorization.split(' ')[1],'abhinay'));
    
  const vendor = jwt.verify(req.headers.authorization.split(' ')[1],'abhinay').vendorDetail
  console.log(vendor);
  if(vendor === "Bank Bazar"){
    res.redirect(307,'/bankBazarFlow')
    // 307 ensures method and body will not change after redirect
  } else if(vendor == "Mobile App"){
    res.redirect(307,'/mobileFlow')
  }
  else{
    res.send("unknown vendor")
  }
});

module.exports = router;
