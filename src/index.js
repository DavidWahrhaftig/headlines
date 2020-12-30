import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
// redux 
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
// Chrome Deve Tools
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

axios.defaults.baseURL = 'https://newsapi.org/v2';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
