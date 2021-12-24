import React from "react";
import { useSelector } from "react-redux"; //Allows you to extract data from the Redux store state, using a selector function.

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts ); // posts comes from Reducers index.js
    const classes = useStyles(); // MATERIALUI STYLE FROM STYLE.JS >> MATERIALUI

    console.log(posts);

    return (
        
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;