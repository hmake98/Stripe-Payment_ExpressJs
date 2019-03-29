var express = require('express');
var router = express.Router();
const keyPublishable = 'pk_test_EwErw4n4hCzbYSlsimIGw7cZ00zdLAWR5M';
const keySecret = '';
const stripe = require("stripe")(keySecret);
const User = require('../model/user');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { keyPublishable });
});

router.post("/charge", (req, res) => {
  let token = req.body.stripeToken;
  let amount = parseInt(req.body.value_pay*100);
  let message = req.body.message;
  let email = req.body.email;
  stripe.charges.create({
    amount: amount,
    description: message,
    currency: "usd",
    source: token,
    email: email
  }, function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  })
});


module.exports = router;