import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
 // we have id specified so we update the exact post, and we update it.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
