import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import { HomePage, CarouselData, FeaturetteData, MissingPage, ServicesPage, ServicePageData, TeamPage, TeamBioPage, TeamBiosData } from './pages';
import {  FooterData, NavBarData } from './App.data';

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
                
                <Route path={ ServicePageData.link } element={<ServicesPage footerProps={FooterData} serviceProps={ServicePageData} navBarProps={NavBarData}/>} />
                { ServicePageData.items.map( service => {
                    return <Route key={service.title} path={ service.link } element={<ServicesPage footerProps={FooterData} serviceProps={service} navBarProps={NavBarData}/>} />
                })}

                <Route path={ '/team' } element={<TeamPage footerProps={FooterData} bios={TeamBiosData} navBarProps={NavBarData}/>} />
                { TeamBiosData.map(bio => {
                    return <Route key={bio.title} path={ bio.link } element={<TeamBioPage footerProps={FooterData} {...bio} navBarProps={NavBarData}/>} />
                })}
                <Route path={'/404'} element={<MissingPage footerProps={FooterData} navBarProps={NavBarData}/>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
