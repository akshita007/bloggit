var express = require('express');
var bodyParser = require("body-parser");
const passport = require('passport');
var router = express.Router();
const User = require("../models/user");
const authenticate = require('../authenticate');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Register the user router

router.post("/register",(req,res,next)=>{
  User.register(new User({
    username: req.body.username}),
    req.body.password, (err,user)=>{
      if(err){
        res.statusCode = 500;
        res.setHeader("Content-Type","application/json");
        res.json({err: err});
      }else{
        if(req.body.firstName) user.firstName = req.body.firstName;
        if(req.body.lastName) user.lastName = req.body.lastName;
        user.save((err,user)=>{
          if(err){
            res.statusCode = 500;
            res.setHeader("Content-Type","application/json");
            res.json({err: err});
            return;
          }
          passport.authenticate("local")(req,res,() => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json({
              status:"Registration Successfully Done!",
              user: user,
              success: true
            });
          });
        });
      }
    });
});

//login the existing user
router.post("/login",passport.authenticate("local"),(req,res)=>{
  var token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader("Content-Type","application/json");
  res.json({
    success: true,
    status: "Login Successfull!",
    token: token
  });
});

//logout the existing user
router.get("/logout",(req,res,next)=>{
  req.logout();
  res.redirect("/post");
});
module.exports = router;
