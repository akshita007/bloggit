var express = require("express");
const bodyParser = require('body-parser');
const Post = require("../models/post");
const mongoose = require("mongoose");
const postRouter = express.Router();
const multer = require("multer");
const authenticate = require("../authenticate");

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"../../blogg/blog/public/uploads/");;
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const fileFilter  = (req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)){
        return cb(new Error("You can upload only image files"),false);
    }
    cb(null, true);
};

const upload  = multer({storage: storage, fileFilter: fileFilter});

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
.post(authenticate.verifyUser,upload.single("imageFile"),(req,res,next)=>{
    const post =new Post({
        author : req.body.author,
        title: req.body.title,
        image: req.file.filename,
        content: req.body.content
    });
    post.save()
    .then((post)=>{
        console.log("POST created is");
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({post: post, msg:"Post successfully created!"});
    },(err)=>next(err))
    .catch(err => next(err));
})
.put(authenticate.verifyUser, (req,res,next)=>{
    res.statusCode = 403
    res.end("This operation cannot be performed on /post")
})
.delete(authenticate.verifyUser,(req,res,next)=>{
    Post.remove({})
    .then(response=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(response);
    },err =>next(err))
    .catch(err =>next(err));
});
postRouter.route("/:post_id")
.get((req,res,next)=>{
    Post.findById(req.params.post_id)
    .then((post)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(post);
    },err =>{
        next(err);
    }).catch(err => next(err));
})
.post(authenticate.verifyUser, (req,res,next)=>{
    res.statusCode = 400;
    res.end("POST opteration cannot be performed on /post:",req.params.post_id);
})
.put(authenticate.verifyUser, upload.single("imageFile"),(req,res,next)=>{
    Post.findById(req.params.post_id)
    .then((post)=>{
        post.author= req.body.author;
        post.title= req.body.title;
        post.image= req.file.filename;
        post.content= req.body.content;
        
        post.save()
        .then((post)=>{
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json({post: post, msg:"Post successfully edited!"});
        },(err)=>next(err))
        .catch(err=> next(err));
       },(err)=>next(err))
    .catch(err => next(err));
})
.delete(authenticate.verifyUser, (req,res,next)=>{
    Post.findByIdAndRemove(req.params.post_id)
    .then(response=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(response);
    },err =>next(err))
    .catch(err =>next(err));
});
module.exports = postRouter;