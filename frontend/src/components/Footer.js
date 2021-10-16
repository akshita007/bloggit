import {makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Copyright} from "@material-ui/icons";

const useStyles = makeStyles({
footer :{
    background: "#424242",
    color:'white',
    marginTop: 50
}, container:{
    justifyContent:'center'
}
})

const Footer = ()=>{
    const classes = useStyles()
    return(
        <div className = {classes.footer}>
            <Toolbar className = {classes.container}>
                <Typography>
                        All Rights Reserverd <Copyright/> {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </div>
    )
};

export default Footer;