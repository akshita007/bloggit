import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from  '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createPost} from '../../sevice/api';

const useStyles = makeStyles({
    container:{
        margin:100,
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
    }
});

const CreatePost = ()=>{

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [file, setFile] = useState();
    const [image,setImage] = useState();
    const history = useHistory(); 
    const classes = useStyles();
    const handleChange =(e)=>{
        if(!e.target.files || e.target.files.length === 0) {
            setFile(undefined);
            return
        }
        setFile(e.target.files[0])
    };

    useEffect(()=>{
            if(!file){
                setImage(undefined)
                return
            }
            const url = URL.createObjectURL(file)
            setImage(url)

            return()=> URL.revokeObjectURL(url)
    },[file]);

    
    const publishPost = async()=>{
       const formData = new FormData()
       formData.append('title',title);
       formData.append('content',content);
       formData.append('imageFile',file);
       if( title !== '' && content !=='' && image !==''){
        await createPost(formData)
        history.push('/');
       }else{
           alert('Insert data in all the fields');
       }
        
    };
    return(
        <Box className={classes.container}>
            {file && <img src={image} alt="error" className={classes.image}/>}
            <FormControl className = {classes.form} >
                <label htmlFor='imageFile'>
                    <AddCircle fontSize='large' color='action'/></label>
                <input
                type='file' id='imageFile'
                name='imageFile'
                onChange={(e)=> handleChange(e)}
                style={{display:'none'}}
                />
                <InputBase name='title' 
                onChange = {(e)=>setTitle(e.target.value)} 
                placeholder='Title' 
                className={classes.textField}></InputBase>
            </FormControl>
            <TextareaAutosize minRows={7} 
            name = 'content' 
            onChange = {(e)=>setContent(e.target.value)} 
            placeholder="What's on your mind!" 
            className = {classes.textArea}></TextareaAutosize>
            <Button onClick = {()=> publishPost()} variant='contained' className={classes.btn}>Publish Post</Button>
        </Box>
    )
};

export default CreatePost;