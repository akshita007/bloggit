import {Box, Button, FormControl, makeStyles, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import {Link} from "react-router-dom";
import { loginUser} from "../../sevice/api";

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
            width: '100%',
            margin: 18,
            borderBottom:'1px solid black'
        },
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
    const [username,setusername]= useState('');
    const [password,setpass]= useState('');
    
    const handleSubmit = async ()=>{
        if(username !== '' && password !== ''){
            await loginUser({username,password});
            window.location.replace('/')
        }else{
            alert("All fields are required!")
        }
        
    }
    return(
        <Box className={classes.container}>
            <Typography className = {classes.title}>Login</Typography>
            <FormControl className = {classes.form}>
                <TextField label='Email' name='username'
                type ="email"
                onChange = {(e)=>setusername(e.target.value)}
                  required/>
                <TextField label='Password' name='password'
                onChange = {(e)=>setpass(e.target.value)}
                 type='password' required/>
                <Button className = {classes.btn} 
                onClick ={()=>handleSubmit()}
                 variant='contained'>Login</Button>
                 <Link to = '/register' className = {classes.link}>Not an existing user? Register Here!</Link>
            </FormControl> 
        </Box>
    )
};

export default Login;