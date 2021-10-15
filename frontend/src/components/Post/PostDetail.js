import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Box, Button, makeStyles, Typography} from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";
import {deletePost, getPost} from "../../sevice/api";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
    container:{
        padding:'0 100px'
    },
    pic:{
        width: '100%',
        height: '400px',
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
        _id:'',
        title:'',
        author:'',
        content:'',
        image:'',
        createdAt:''
    });
    const history = useHistory();
    const classes = useStyle();
    useEffect(()=>{
        const fetchPost = async ()=>{
            let data = await getPost(props.match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchPost();
    },[props]);
    
    const handleDelete = async()=>{
        await deletePost(post._id)
        history.push(`/`);
    }

    return(
        <Box className={classes.container}>
            <img src={`/uploads/${post.image}`} alt='error' className={classes.pic}/>
            {localStorage.getItem('user') === post.author.username ?
            (<Box className={classes.icons}>
                <Link to={`/editPost/${post._id}`}><Button> <Edit/> </Button></Link>
                <Button onClick={()=>handleDelete()}> <Delete/> </Button>
            </Box>):''}
        
                <Typography className = {classes.heading}>{post.title}</Typography>
                <Typography className = {classes.text}>Created By: {post.author.name}</Typography>
            
            <Box>
                <Typography className = {classes.desc}>{post.content}</Typography>
                <Typography className = {classes.text}>posted on: {new Date(post.createdAt).toDateString()}</Typography>
            </Box>
        </Box>
    )
};

export default PostDetails;