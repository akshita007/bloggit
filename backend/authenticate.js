const passport = require('passport');
const LocalStatergy = require("passport-local").Strategy;
const User = require('./models/user');
const JwtStatergy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const jwt = require('jsonwebtoken');
const config = require("./config");

exports.local = passport.use(new LocalStatergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.getToken = (user)=>{
    return jwt.sign(user, config.secretKey,{
        expiresIn: 36000
    });
};

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStatergy(opts,
    (jwtPayload, done)=>{
        console.log(jwtPayload);
        User.findOne({_id:jwtPayload._id},(err,user)=>{
            if(err){
                return done(err,false);
            }else if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));

exports.verifyUser = passport.authenticate("jwt",{session: false});