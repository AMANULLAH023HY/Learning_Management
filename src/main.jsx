// CSS File
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

// Libraries for react 
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

//  Component file 
import App from './App.jsx';
import store from './Redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
    </>

)
