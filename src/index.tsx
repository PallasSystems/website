import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import { HomePage } from './pages';
import { carouselData, featuretteData, FooterData, NavBarData } from './App.data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.solar.css';
import './css/bootstrap.pallas.css';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter >
      <Routes>
        <Route path={ '' }  element={<HomePage carouselProps={carouselData} featuretteProps={featuretteData} footerProps={FooterData} navBarProps={NavBarData}/>} />
        <Route path='/404' element={<h2>404 Not Found</h2>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
