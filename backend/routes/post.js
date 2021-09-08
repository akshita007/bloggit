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
    //if(!mongoose.Types.ObjectId.isValid())
    Post.find({})
  .populate("author")
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
        author: req.user._id,
        title: req.body.title,
        image: req.file.filename,
        content: req.body.content
    });
    post.save()
    .then((post)=>{
        Post.findOne({_id:req.user._id})
        .populate("author");
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
.delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,(req,res,next)=>{
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
    .populate("author")
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
        //console.log("Id is", req.user._id)
        if(!(post.author._id).equals(req.user._id)){
            var err = new Error("Only author can change the post!");
            err.status = 403;
            return next(err);
        }
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
    Post.findById(req.params.post_id)
    .then(post=>{
        if(!(post.author._id).equals(req.user._id)){
            var err = new Error("Only author can delete the post!");
            err.status = 403;
            return next(err);
        }
        post.remove()
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({status:"Post Deleted!"});
    },err =>next(err))
    .catch(err =>next(err));
});
module.exports = postRouter;