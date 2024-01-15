// CSS File
import './index.css';

// Libraries for react 
import ReactDOM from 'react-dom/client';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import {BroserRouter} from 'react-router-dom';

//  Component file 
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BroserRouter>
    <App />
    <Toaster/>
    </BroserRouter>
)
