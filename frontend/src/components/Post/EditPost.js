import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from  '@material-ui/core';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {editPost, getPost} from '../../sevice/api';

const useStyles = makeStyles({
    container:{
        padding:'0 100px'
    },
    image:{
        width: '100%',
        height: '400px',
        objectFit:'cover'
    },
    form:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 10
    },
    textField:{
        flex:1,
        fontSize:25,
        margin: '0 30px'
    },
    textArea:{
        width:'100%',
        background: 'inherit',
        border: 'none',
        marginTop:50,
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }
    },
    btn:{
        background: '#00BFFF',
        color:'white',
        width: '100%'
    },
});

const EditPost = ({match})=>{
    const classes = useStyles();
    const history = useHistory();
    const [post, setPost] = useState({
        _id:'',
        title:'',
        content:'',
        image:''
    });
    useEffect(()=>{
        const fetchDetail = async ()=>{
            const data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchDetail();
    },[match.params.id])

    const handleChange =(e)=>{
        setPost({...post, [e.target.name]:e.target.value })
    };
    const UpdatePost = async()=>{
        await editPost(match.params.id,post);
        history.push(`/postDetails/${match.params.id}`);
    };

    return(
        <Box className={classes.container}>
            <img src={`/uploads/${post.image}`} alt="error" className={classes.image}/>
            <FormControl className = {classes.form}>
                {/* <AddCircle fontSize='large' color='action'/> */}
                <InputBase value = {post.title} 
                name='title'
                placeholder='Title' 
                className={classes.textField}
                onChange = {(e)=> handleChange(e)}></InputBase>
            </FormControl>
            <TextareaAutosize value = {post.content}
            name='content'
            minRows={7} 
            placeholder="What's on your mind!" 
            className = {classes.textArea}
            onChange = {(e)=> handleChange(e)}></TextareaAutosize>
            <Button variant='contained' 
            className={classes.btn} 
            onClick={()=>UpdatePost()}>Update</Button>
        </Box>
    )
};

export default EditPost;