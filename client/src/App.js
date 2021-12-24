import React, { useEffect } from 'react';
import {Container, AppBar, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux'; // This hook returns a reference to the dispatch function from the Redux store.

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import reminiscence from './images/Reminiscence.png';
import useStyles from './styles';


const App = ()  =>{
    const classes = useStyles(); // MATERIALUI STYLE FROM STYLE.JS >> MATERIALUI
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth = 'lg'>
            <AppBar className={classes.appBar} position ='static' color ='inherit'>
                <img className={classes.image} src={reminiscence} alt='reminiscence' height='120' width='350'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent ="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;