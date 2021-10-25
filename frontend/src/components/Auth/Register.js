import {Box, Button, FormControl, makeStyles, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import {registerUser} from "../../sevice/api";

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
            width:'100%',
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
    const [username,setusername]= useState('');
    const [name,setname]= useState('');
    const [password,setpass]= useState('');
    //const [data,setData]=useState({});
    const history = useHistory();
    
    const handleSubmit = async ()=>{
        // console.log(data)
        if(username !== '' && name !=='' && password!==""){
            await registerUser({username,name,password})
            history.push('/login')
        }else{
            alert("All fiels are required")
        }
        
    }
    //const rex = new RegExp("/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\. [a-zA-Z0-9-]+)*$/");
    return(
        <Box className={classes.container}>
            <Typography className = {classes.title}>Register</Typography>
            <FormControl className = {classes.form}>
               <TextField label='Email' type ='email' 
                  name='username'
                  onChange = {(e)=>setusername(e.target.value)}
                  required/>
                <TextField label='Name' name='name'
                  onChange = {(e)=>setname(e.target.value)}
                  required/>
                <TextField label='Password' name='password'
                  onChange = {(e)=>setpass(e.target.value)}
                  type='password' required/>
                <Button className = {classes.btn} 
                onClick = {()=>handleSubmit()}
                variant='contained'>Register</Button>
                 <Link to = '/login' className = {classes.link}>An existing user? SignIn Here!</Link>
            </FormControl> 
        </Box>
    )
};
export default Register;