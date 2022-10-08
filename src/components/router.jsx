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

const SiteRoutes = (props) => {
    return (
        <Routes>
            <Route path={ props.contextPath }  element={<HomePage carousel={carouselData} featurette={featuretteData}/>} />
            <Route path={ props.contextPath + "/services" } element={<ServicesPage />} />
            <Route path={ props.contextPath + "/services/agile" } element={<AgileServicePage />} />
            <Route path={ props.contextPath + "/services/cloud" } element={<CloudServicePage />} />
            <Route path={ props.contextPath + "/services/devsecops" } element={<DevSecOpsServicePage />} />

            <Route path={ props.contextPath + "/team" } element={<TeamPage bios={teamBio}/>} />
            {teamBio.map((data, index) =>
                <Route key={"Team.Bio." + index} path={ data.link } element={<TeamBioPage bio={data} />} />
            )}
            <Route path="/404" element={<h2>404 Not Found</h2>} />
        </Routes>
    )
}

export default SiteRoutes;
