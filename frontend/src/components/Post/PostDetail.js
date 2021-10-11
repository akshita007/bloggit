import {Box, makeStyles, Typography} from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";

const useStyle = makeStyles({
    container:{
        padding:'0 100px'
    },
    image:{
        width: '100%',
        height: '50vh',
        objectFit:'cover'
    },
    title:{
        fontSize: 40,
        fontWeight:600,
        fontFamily:"'Yanone Kaffeesatz', sans-serif",
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    icons:{
        float:'right',
        '& > *':{
            padding: 7,
            margin: 7,
        }
    },
    text:{
        color:'#878787',
        margin: '10px 0 '
    },
    content:{
        fontSize:18,
        textAlign:'justify',
        fontFamily:"'Yanone Kaffeesatz', sans-serif",
    }
})

const PostDetails = ()=>{
    const classes = useStyle();
    const post = {
        "author":"Akshita",
        "image":"https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=550&q=250",
        "content":"Enim incididunt elit esse nulla quis velit do ullamco enim. Cillum et aute nostrud ut officia aliquip enim eiusmod cupidatat culpa. Nulla nisi exercitation in minim reprehenderit ea eu exercitation pariatur cillum eu ea. Excepteur cillum voluptate pariatur commodo tempor incididunt officia nisi minim. Pariatur tempor elit aliquip ut pariatur non. Cillum nisi velit adipisicing sint voluptate mollit cillum dolore nisi laboris. Lorem laborum cupidatat occaecat proident esse exercitation fugiat veniam.",
        "title":"Hello world!",
        "date":"10-10-2021"
    };
    return(
        <Box className={classes.container}>
            <img src={post.image} alt='error' className={classes.image}/>
            <Box className={classes.icons}>
                <Edit/>
                <Delete/>
            </Box>
            <Box>
                <Typography className = {classes.title}>{post.title}</Typography>
                <Typography className = {classes.text}>Created By: {post.author}</Typography>
            </Box>
            <Box>
                <Typography className = {classes.content}>{post.content}</Typography>
                <Typography className = {classes.text}>posted on: {post.date}</Typography>
            </Box>
        </Box>
    )
};

export default PostDetails;