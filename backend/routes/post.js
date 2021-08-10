var express = require("express");
const Post = require("../models/post");
const mongoose = require("mongoose");
const postRouter = express.Router();

postRouter.all("/",(req,res,next)=>{
    res.send("Welcome to the post router!")
})