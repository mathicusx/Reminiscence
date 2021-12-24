// Reducers are functions that take the current state and an action as arguments, and return a new state result.
// In other words, (state, action) => newState.
// state(posts) always needs to be equal to something so we set initial value of an empty array []

    // eslint-disable-next-line import/no-anonymous-default-export
    export default (posts = [], action) => { 
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}