import {AppBar, Toolbar, Typography,makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom";

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
}
})
const Header = ()=>{
    const classes = useStyles();
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
                <Link to = '/login' className={classes.link}>
                    <Typography>LOGIN</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;