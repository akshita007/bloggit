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
    pic:{
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
    desc:{
        maxHeight: 90,
        fontSize: 16,
        margin:5,
        overflow: 'hidden',
        textOverflow:'ellipsis',
        wordBreak:'break-word',
        fontFamily:"'Yanone Kaffeesatz', sans-serif"
    }
})

const Post = ({post})=>{
    const classes = useStyles();
    
    const url = "https://images.unsplash.com/photo-1572129421341-77455b1478b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTIyMjM3MTR8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=250&q=150";

    return(
        <Box className={classes.container}>
            <img src = {url} alt= "Looks like a error to me! :(" className={classes.pic}/>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>Author: {post.author.username}</Typography>
            <Box className={classes.desc}>
            <Typography >{post.content}</Typography>
            </Box>Tap to read more...
            <Typography className={classes.text} >Posted on:{new Date(post.createdAt).toDateString()}</Typography>
        </Box>
    )
};

export default Post;