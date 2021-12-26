import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";


import useStyles from './styles';
import { createPost, updatePost } from "../../actions/posts";


// GET CURRENT ID OF POST FOR UPDATE FUNCTION
const Form = ({ currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    // if we have a currentId  then we loop over state.posts  we want to find the post that has same id p = p._id as our current Id, if we dont have id we just return null.
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null)); 
    const classes = useStyles(); // MATERIALUI STYLE FROM STYLE.JS >> MATERIALUI
    const dispatch = useDispatch();

    // useEffect to populate the values on the form that we are updating.
    //The useEffect hook takes a “dependencies” array, that will only re-run the effect when the values within the array change across re-renders([post]).
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
         
        } 
          clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{ currentId ? 'Edit' : 'Your' } Reminiscence</Typography>
                    <TextField 
                        name="creator" 
                        variant="outlined" 
                        label="Creator" 
                        fullWidth
                        value={postData.creator} // will be stored in the State PostData
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                    />
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}  onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}  onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}  onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;