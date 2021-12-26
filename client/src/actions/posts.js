import * as api from "../api/index.js";

//An action creator is a function that literally creates an action object.
// In Redux, action creators simply return an action object and pass the argument value if necessary.

export const getPosts = () => async (dispatch) => { // <-- redux thunk allows us to specify an additional arrow function.
    try {
        const { data } = await api.fetchPosts();

        // actions must have the type property that we have assigned to it, and they can also have payload(the data where we store our posts)
        dispatch({ type: 'FETCH_ALL', payload: data }); // with redux thunk you have to dispatch the action instead of returning it.}
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); // returning the updated post

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}