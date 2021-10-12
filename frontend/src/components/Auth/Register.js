


import {Box, Button, FormControl, InputBase,  makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    container:{
        margin:' 150px auto',
        padding: '10px 100px',
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
        marginTop:12,
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

const Register=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <Typography className = {classes.title}>Register</Typography>
            <FormControl className = {classes.form}>
            <Typography>Username
                <InputBase placeholder='Name'></InputBase>
                </Typography>
                <Typography>Username
                <InputBase placeholder='Username'></InputBase>
                </Typography>
                <Typography>Password
                <InputBase placeholder='Password'></InputBase>
                </Typography>
                <Typography>Confirm Password
                <InputBase placeholder='Confirm Password'></InputBase>
                </Typography>
                <Button className = {classes.btn} variant='contained'>Register</Button>
                 <Link to = '/login' className = {classes.link}>An existing user? SignIn Here!</Link>
            </FormControl> 
        </Box>
    )
};

export default Register;