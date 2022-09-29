import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./home";
// Service specific pages
import ServicesPage from "./services";
import AgileServicePage from "./services/agile";
import CloudServicePage from "./services/cloud";
import DevSecOpsServicePage from "./services/devsecops";
// Team Pages
import TeamPage from "./team";
import TeamBioPage from "./team/bio";
import { carouselData, featuretteData, teamBio } from '../data';

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage carousel={carouselData} featurette={featuretteData}/>} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/agile" element={<AgileServicePage />} />
            <Route path="/services/cloud" element={<CloudServicePage />} />
            <Route path="/services/devsecops" element={<DevSecOpsServicePage />} />

            <Route path="/team" element={<TeamPage bios={teamBio}/>} />
            {teamBio.map((data, index) =>
                <Route key={"Team.Bio." + index} path={data.link} element={<TeamBioPage bio={data} />} />
            )}
        </Routes>
    )
}

export default SiteRoutes;
