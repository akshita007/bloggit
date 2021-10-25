import React from 'react';
import {Parallax} from 'react-parallax';
import {makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({

text:{
    
    background: 'rgba(255,255,255,0.8)',
    textAlign:'center',
    color:"black",
    fontSize:"70px",
    fontFamily:"comic sans",
    fontStyle:"italic",
}
})
const Banner=()=> {
    const classes = useStyles();
    return (
    <Parallax bgImage={"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtzcGFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=60"} bgImageAlt="alternate" strength={700}>
        <div style={{ height: '80vh', display:'flex',justifyContent:'center',alignItems:'center' }}>
            {!localStorage.getItem('token')?(<Typography className={classes.text}>Hello! Why don't you login, and enter in the world of blogging!</Typography>):(<Typography className={classes.text}>Welcome Back! {localStorage.getItem('user')} </Typography>)}
        </div>
    </Parallax>
    )
};

export default Banner;