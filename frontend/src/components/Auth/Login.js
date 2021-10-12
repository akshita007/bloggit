import {Box, Button, FormControl, InputBase,  makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    container:{
        margin:' 150px auto',
        padding: '50px 100px',
        height: 'fit-content',
        width: 300,
        background: 'white',
        borderRadius:'100px 0px'
    },
    title:{
        textAlign:'center',
        fontSize:40,
        fontWeight:600,
        fontFamily:''
    },
    form:{
        display:'flex',
        alignItems:'center',
        '& > *':{
            margin: 18,
            borderBottom:'1px solid black'
        }
    },
    btn:{
        background: '#00BFFF',
        color:'white',
        marginTop: 50,
        width: '100%'
    },
    link:{
        textDecoration:'none',
        color:'inherit',
        margin: 'auto'
    }
})

const Login=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <Typography className = {classes.title}>Login</Typography>
            <FormControl className = {classes.form}>
                <Typography>Username
                <InputBase placeholder='Username'></InputBase>
                </Typography>
                <Typography>Password
                <InputBase placeholder='Password'></InputBase>
                </Typography>
                <Button className = {classes.btn} variant='contained'>Login</Button>
                 <Link to = '/register' className = {classes.link}>Not an existing user? Register Here!</Link>
            </FormControl> 
        </Box>
    )
};

export default Login;