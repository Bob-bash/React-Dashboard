import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/sharedstates'
import App from './App';
const store = createStore( reducer )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
