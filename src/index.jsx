import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Router from './components/router';

import PallasNavBar from './components/navbar';
import PallasFooter from "./components/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/bootstrap.solar.css';
import './components/css/bootstrap.pallas.css';

import { contextPath } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <PallasNavBar contextPath={ contextPath } />
            <Router contextPath={ contextPath } />
            <PallasFooter />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
