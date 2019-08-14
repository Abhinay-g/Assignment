var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    
    const name = req.body.username;
    const password = req.body.password;
    const vendor =req.body.vendor
    const token=  jwt.sign({vendorDetail:vendor},'abhinay')
    if(name === "abhinay" && password ==="abhinay"){
        console.log(token);
        
        res.status(200).send({access_token :token})
    }
    else{
        res.status(401).send("unauthorized")
    }
});

module.exports = router;
