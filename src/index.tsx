import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import { HomePage, CarouselData, FeaturetteData, MissingPage, ServicesPage, ServiceAgileData, ServiceDataAnalyticsData, ServiceCloudData, ServiceDataEngData, ServiceDevSecOpsData } from './pages';
import {  FooterData, NavBarData, ServicesData,  } from './App.data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.solar.css';
import './css/bootstrap.pallas.css';


const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter >
            <Routes>
                <Route path={ '' }  element={<HomePage carouselProps={CarouselData} featuretteProps={FeaturetteData} footerProps={FooterData} navBarProps={NavBarData}/>} />                           
                <Route path={ '/services' } element={<ServicesPage footerProps={FooterData} serviceProps={ServicesData} navBarProps={NavBarData}/>} />
                <Route path={ '/services/agile' } element={<ServicesPage footerProps={FooterData} serviceProps={ServiceAgileData} navBarProps={NavBarData}/>} />
                <Route path={ '/services/analytics' } element={<ServicesPage footerProps={FooterData} serviceProps={ServiceDataAnalyticsData} navBarProps={NavBarData}/>} />
                <Route path={ '/services/cloud' } element={<ServicesPage footerProps={FooterData} serviceProps={ServiceCloudData} navBarProps={NavBarData}/>} />
                <Route path={ '/services/data_engineering' } element={<ServicesPage footerProps={FooterData} serviceProps={ServiceDataEngData} navBarProps={NavBarData}/>} />
                <Route path={ '/services/devsecops' } element={<ServicesPage footerProps={FooterData} serviceProps={ServiceDevSecOpsData} navBarProps={NavBarData}/>} />
                <Route path={'/404'} element={<MissingPage footerProps={FooterData} navBarProps={NavBarData}/>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
