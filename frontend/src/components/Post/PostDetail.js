import {useState, useEffect} from 'react';
import {Box, Button, makeStyles, Typography} from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";
import {getPost} from "../../sevice/api";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
    container:{
        padding:'0 100px'
    },
    pic:{
        width: '100%',
        height: '50vh',
        objectFit:'cover'
    },
    heading:{
        fontSize: 40,
        fontWeight:600,
        fontFamily:"'Yanone Kaffeesatz', sans-serif",
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    icons:{
        float:'right',
        '& > *':{
            margin: 5,
        }
    },
    text:{
        color:'#878787',
        margin: '10px 0 '
    },
    desc:{
        fontSize:18,
        textAlign:'justify',
        fontFamily:"'Yanone Kaffeesatz', sans-serif",
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
})

const PostDetails = (props)=>{
    const [post , setPost] = useState({
        title:'',
        author:'',
        content:'',
        image:'',
        createdAt:''
    });
    const classes = useStyle();
    useEffect(()=>{
        const fetchPost = async ()=>{
            let data = await getPost(props.match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchPost();
    },[props]);
    
    const url = "https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=250&q=150";

    return(
        <Box className={classes.container}>
            <img src={url} alt='error' className={classes.pic}/>
            <Box className={classes.icons}>
                <Link to='/editPost'><Button> <Edit/> </Button></Link>
                <Button> <Delete/> </Button>
            </Box>
        
                <Typography className = {classes.heading}>{post.title}</Typography>
                <Typography className = {classes.text}>Created By: {post.author.username}</Typography>
            
            <Box>
                <Typography className = {classes.desc}>{post.content}</Typography>
                <Typography className = {classes.text}>posted on: {new Date(post.createdAt).toDateString()}</Typography>
            </Box>
        </Box>
    )
};

export default PostDetails;