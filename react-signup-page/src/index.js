// App.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Signup.css'
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);

reportWebVitals();

