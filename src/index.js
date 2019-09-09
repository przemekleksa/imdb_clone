import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import setAuthToken from './utils/setAuth';
import { checkToken } from './actions/auth';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

let token = localStorage.getItem('token');
if(token) {
    setAuthToken(token);
    store.dispatch(checkToken());
}

ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
