import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RecoveryPage from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/recovery" element={<RecoveryPage />}/>
      <Route path="/cloud" element={<CloudPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
    </Routes>
  </BrowserRouter>
    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
