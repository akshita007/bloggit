var express = require("express");
const bodyParser = require('body-parser');
const Post = require("../models/post");
const mongoose = require("mongoose");
const postRouter = express.Router();

postRouter.use(bodyParser.json());

postRouter.route("/")
.get((req,res,next)=>{
    Post.find({})
    .then((post)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(post);
    },err =>{
        next(err);
    }).catch(err => next(err));
})
.post((req,res,next)=>{
    Post.create(req.body)
    .then((post)=>{
        console.log("POST created is",post);
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(post);
    },(err)=>next(err))
    .catch(err => next(err));
})
.put((req,res,next)=>{
    res.statusCode = 403
    res.end("This operation cannot be performed on /post")
})
.delete((req,res,next)=>{
    Post.remove({})
    .then(response=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(response);
    },err =>next(err))
    .catch(err =>next(err));
});
module.exports = postRouter;