import React from 'react';

import { Footer } from './components';
import { HomePage } from './pages';

import { carouselData, featuretteData, FooterData } from './App.data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.solar.css';
import './css/bootstrap.pallas.css';


function App() {
  return (
    <div className="App">
        <HomePage carousel={carouselData} featurette={featuretteData}/>
        <Footer {...FooterData} />
    </div>
  );
}

export default App;
