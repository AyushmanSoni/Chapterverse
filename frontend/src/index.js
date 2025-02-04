import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; 
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/index.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    {/* <App /> */}
    <Provider store = {store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
