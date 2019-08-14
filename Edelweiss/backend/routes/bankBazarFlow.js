var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const CIBIL_score= getCibilScore()
    console.log("CIBIL_score",CIBIL_score);
    
    if(CIBIL_score> 700)    {
    res.redirect(307,'/CIBIL700upFlow')

    }else if (CIBIL_score >500 && CIBIL_score < 700){
    res.redirect(307,'/CIBIL500up700lessFlow')

    }
    else {
    res.send({message:"We Regaret to infom you that your loan is not approved"})
    }
});

function getCibilScore(){
    return Math.floor(Math.random() * 1001);
}
module.exports = router;
