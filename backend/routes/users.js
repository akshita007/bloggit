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
        if(req.body.name) user.name = req.body.name;
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
router.post("/login",(req,res,next)=>{

  passport.authenticate("local",(err,user,info)=>{
    if(err)
      return next(err);
    if(!user){
      res.statusCode = 401;
      res.setHeader("Content-Type","application/json");
      res.json({
        success: false,
        status: "Login Unsuccessfull!",
        err: info
      });
    }req.logIn(user,(err)=>{
      if(err){
        res.statusCode = 401;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: false,
          status: "Login Unsuccessfull!",
          err:"Could not login user!"
        });
      }
      var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: true,
          status: "Login Successfull!",
          token: token,
          user:user.username
        });
    });
  })(req,res,next);
});

//logout the existing user
router.get("/logout",(req,res,next)=>{
  req.logout();
  res.redirect("/post");
});

//check jwt token

router.get("/checkJwt",(req,res)=>{
  passport.authenticate("jwt",{session:false},(err,user,info)=>{
    if(err) return next(err);
    if(!user){
      res.statusCode = 401;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: false,
          status: "Token invalid!",
          err: info
        });
    }
    else{
      res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: true,
          status: "token valid!",
          user: user
        });
      }
  })(req,res);
});
module.exports = router;
