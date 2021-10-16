import {AppBar, Toolbar, Typography,makeStyles, Button} from "@material-ui/core"
import {Link} from "react-router-dom";
import {logoutUser} from "../sevice/api";

const useStyles = makeStyles({
navbar:{
    background:"#424242",
    color: "white"
},
container:{
    "& > *":{
        padding: 20
    }
},
brand:{
   fontWeight:600
},
link:{
    textDecoration:'none',
    color: 'inherit'
},
btn:{
    background:'#ffffff',
    height:20,
    color: 'black',
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
        <AppBar className = {classes.navbar} >
            <Toolbar className = {classes.container}>
                <Link to='/' className={classes.link}>
                <Typography variant='h6' color='inherit' className= {classes.brand}>Bloggit!</Typography>
                </Link>
                <Link to='/' className={classes.link}>
                    <Typography>HOME</Typography>
                </Link>
                <Link to='/aboutus' className={classes.link}>
                    <Typography>ABOUT US</Typography>
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