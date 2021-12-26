// Reducers are functions that take the current state and an action as arguments, and return a new state result.
// In other words, (state, action) => newState.
// state(posts) always needs to be equal to something so we set initial value of an empty array []

    // eslint-disable-next-line import/no-anonymous-default-export
    export default (posts = [], action) => { 
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            // action payload is our updated post and we check if it matches then if it matches we return the updated post.
            // else if it doesn't match return post without updating it
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
};