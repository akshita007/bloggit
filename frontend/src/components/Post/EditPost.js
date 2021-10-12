


import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from  '@material-ui/core';
import {AddCircle} from '@material-ui/icons';

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
    },
});

const EditPost = ()=>{
    const classes = useStyles();
    const post = {
        "author":"Akshita",
        "image":"https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=550&q=250",
        "content":"Enim incididunt elit esse nulla quis velit do ullamco enim. Cillum et aute nostrud ut officia aliquip enim eiusmod cupidatat culpa. Nulla nisi exercitation in minim reprehenderit ea eu exercitation pariatur cillum eu ea. Excepteur cillum voluptate pariatur commodo tempor incididunt officia nisi minim. Pariatur tempor elit aliquip ut pariatur non. Cillum nisi velit adipisicing sint voluptate mollit cillum dolore nisi laboris. Lorem laborum cupidatat occaecat proident esse exercitation fugiat veniam.",
        "title":"Hello world!",
        "date":"10-10-2021"
    };
    return(
        <Box className={classes.container}>
            <img src={post.image} alt="error" className={classes.image}/>
            <FormControl className = {classes.form}>
                <AddCircle fontSize='large' color='action'/>
                <InputBase placeholder='Title' className={classes.textField}></InputBase>
            </FormControl>
            <TextareaAutosize minRows={7} placeholder="What's on your mind!" className = {classes.textArea}></TextareaAutosize>
            <Button variant='contained' className={classes.btn}>Update</Button>
        </Box>
    )
};

export default EditPost;