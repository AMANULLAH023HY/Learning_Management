// CSS File
import './index.css';

// Libraries for react 
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import {BroserRouter} from 'react-router-dom';

//  Component file 
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BroserRouter>
    <App />
    <Toaster/>
    </BroserRouter>
    </Provider>

)
