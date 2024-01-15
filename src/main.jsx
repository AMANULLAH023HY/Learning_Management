

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';

import './index.css';
import {BroserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BroserRouter>
    <App />
    </BroserRouter>
)
