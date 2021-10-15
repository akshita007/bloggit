import {AppBar, Toolbar, Typography,makeStyles, Button} from "@material-ui/core"
import {Link} from "react-router-dom";
import {logoutUser} from "../sevice/api";

const useStyles = makeStyles({
navbar:{
    background:"#ffffff",
    color: "black"
},
container:{
    justifyContent:"center",
    "& > *":{
        padding: 20
    }
},
link:{
    textDecoration:'none',
    color: 'black'
},
btn:{
    background:'#424242',
    height:20,
    color: 'white',
    marginLeft:15
}
})
const Header = ()=>{
    const classes = useStyles();
    const logout = async ()=>{
        await logoutUser();
        window.location.reload();
    }
    return(
        <AppBar className = {classes.navbar}>
            <Toolbar className = {classes.container}>
                <Link to='/' className={classes.link}>
                    <Typography>HOME</Typography>
                </Link>
                <Link to='/aboutus' className={classes.link}>
                    <Typography>ABOUT US</Typography>
                </Link>
                <Link to='/contactus' className={classes.link}>
                    <Typography>CONTACT US</Typography>
                </Link>
                {!localStorage.getItem('token')?
                (<Link to = '/login' className={classes.link}>
                    <Typography>LOGIN</Typography>
                </Link>):(<Button className = {classes.btn}
                variant = "contained" onClick = {logout}>LOGOUT</Button>)}
            </Toolbar>
        </AppBar>
    )
}

export default Header;