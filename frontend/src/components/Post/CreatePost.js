import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from  '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createPost} from '../../sevice/api';

const useStyles = makeStyles({
    container:{
        padding:'0 100px'
    },
    image:{
        width: '100%',
        height: '50vh',
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
    }
});

const CreatePost = ()=>{
    const initialState = {
        author:"Akshita",
        image:"https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=550&q=250",
        content:"",
        title:"",
        date:"10-10-2021"
    };
    const [post,setPost] = useState(initialState);
    const history = useHistory(); 
    const classes = useStyles();
    const handleChange =(e)=>{
        setPost({...post, [e.target.name]:e.target.value })
    };
    const publishPost = async()=>{
        await createPost(post);
        history.push('/');
    };
         const image = "https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=550&q=250";

    return(
        <Box className={classes.container}>
            <img src={image} alt="error" className={classes.image}/>
            <FormControl className = {classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase name='title' 
                onChange = {(e)=>handleChange(e)} 
                placeholder='Title' 
                className={classes.textField}></InputBase>
            </FormControl>
            <TextareaAutosize minRows={7} 
            name = 'content' 
            onChange = {(e)=>handleChange(e)} 
            placeholder="What's on your mind!" 
            className = {classes.textArea}></TextareaAutosize>
            <Button onClick = {()=> publishPost()} variant='contained' className={classes.btn}>Publish Post</Button>
        </Box>
    )
};

export default CreatePost;