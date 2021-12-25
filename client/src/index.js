import React from 'react';
import ReactDom from 'react-dom';
// The Provider component makes the Redux store available to any nested components that need to access the Redux store.
import { Provider } from 'react-redux'; 
// createStore - Creates a Redux store that holds the complete state tree of your app. 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //middleware that allows you to return functions, rather than just actions.

import { reducers } from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// We Render App, and with the second command we are connecting with the Id of Root
    ReactDom.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
    );
