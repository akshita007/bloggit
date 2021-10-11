import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        backgroundColor:'whitesmoke',
        height: 350,
        margin: 10,
        padding:7,
        borderRadius: 10,
        border: '1px solid #000000',
        display: 'flex',
        alignItems:'center',
        flexDirection:"column",
        '& > *':{
            padding: '0 5px 5px 5px'
        }
        },
    image:{
        height: 150,
        width: "100%",
        objectFit:'cover',
        paddingBottom:7,
        borderRadius:"10px 10px 0 0"
    },
    text:{
        color:'#878787',
        fontSize:12
    },
    heading:{
        fontSize: 21,
        fontWeight: 600,
        fontFamily:"'Yanone Kaffeesatz', sans-serif"
    },
    content:{
        fontSize: 16,
        wordBreak:'break-word',
        fontFamily:"'Yanone Kaffeesatz', sans-serif"
    }
})

const Post = ()=>{
    const classes = useStyles();
    const post = {
        "author":"Akshita",
        "image":"https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=250&q=150",
        "content":"You you are my universe by BTS and ColdsPlay",
        "title":"Hello world!",
        "date":"10-10-2021"
    };
    return(
        <Box className={classes.container}>
            <img src = {post.image} alt= "Looks like a error to me! :(" className={classes.image}/>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>Author: {post.author}</Typography>
            <Typography className={classes.content}>{post.content}</Typography>
            <Typography className={classes.text}>Posted on:{post.date}</Typography>
        </Box>
    )
};

export default Post;