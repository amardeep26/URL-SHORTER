import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAme6c_djUOXUyVwvlqq_zOOvyBk6I5M1s",
  authDomain: "url-shotner-fa6c6.firebaseapp.com",
  projectId: "url-shotner-fa6c6",
  storageBucket: "url-shotner-fa6c6.firebasestorage.app",
  messagingSenderId: "526753486992",
  appId: "1:526753486992:web:c83cf820b3d848fd6ea015",
  measurementId: "G-4BYBFMK36V"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
