import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
image:{
    background:`url(${"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtzcGFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=60"}) center no-repeat black`,
    width: '100%',
    height:'90vh',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "& > *":{
        color:"black",
        fontSize:"70px",
        fontFamily:"comic sans",
        fontStyle:"italic"
    }
}
})
const Banner=()=> {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>Welcome</Typography>
        </Box>
    );
}

export default Banner;