import {Grid} from '@material-ui/core';
import React from 'react';
import Banner from './Banner';
import Filters from './Filters';
import Posts from './Posts';

function Home(props) {
    return (
        <>
        <Banner/>
        <Grid container>
            <Grid item lg={2} xs={12} sm={4}>
                <Filters/>
            </Grid>
            <Grid container item lg={10} xs={12} sm={14}>
                <Posts/>
            </Grid>
        </Grid>
        </>
    );
}

export default Home;