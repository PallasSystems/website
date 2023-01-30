import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import { HomePage, MissingPage } from './pages';
import { CarouselData, FeaturetteData, FooterData, NavBarData } from './App.data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.solar.css';
import './css/bootstrap.pallas.css';


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <HashRouter >
            <Routes>
                <Route path={ '' }  element={<HomePage carouselProps={CarouselData} featuretteProps={FeaturetteData} footerProps={FooterData} navBarProps={NavBarData}/>} />            
                <Route path={ '/404' } element={<MissingPage footerProps={FooterData} navBarProps={NavBarData} />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
