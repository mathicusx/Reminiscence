import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux"; //Allows you to extract data from the Redux store state, using a selector function.

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId}) => {
    const posts = useSelector((state) => state.posts ); // posts comes from Reducers(Redux) index.js
    const classes = useStyles(); // MATERIALUI STYLE FROM STYLE.JS >> MATERIALUI
    

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : ( // check if we have posts, else CircularProgress(loading..).
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) =>  (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;