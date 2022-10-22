import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "./home";
// Service specific pages
import ServicesPage from "./services";
import AgileServicePage from "./services/agile";
import AnalyticsServicePage from "./services/analytics";
import CloudServicePage from "./services/cloud";
import DataEngServicePage from "./services/dataeng";
import DevSecOpsServicePage from "./services/devsecops";
// Team Pages
import TeamPage from "./team";
import TeamBioPage from "./team/bio";
import { carouselData, featuretteData, teamBio } from '../data';

/**
 *
 */
function getResourcePath(contextPath, path) {
  return process.env.NODE_ENV === "production" ? contextPath + path : path;
}

const SiteRoutes = (props) => {
    return (
        <Routes>
            <Route path={ '' }  element={<HomePage carousel={carouselData} featurette={featuretteData} contextPath={props.contextPath} />} />
            <Route path={ '/services' } element={<ServicesPage contextPath={props.contextPath} />} />
            <Route path={ '/services/agile' } element={<AgileServicePage contextPath={props.contextPath} />} />
            <Route path={ '/services/analytics' } element={<AnalyticsServicePage contextPath={props.contextPath} />} />
            <Route path={ '/services/cloud' } element={<CloudServicePage contextPath={props.contextPath} />} />
            <Route path={ '/services/data_engineering' } element={<DataEngServicePage contextPath={props.contextPath} />} />
            <Route path={ '/services/devsecops' } element={<DevSecOpsServicePage contextPath={props.contextPath} />} />

            <Route path={ '/team' } element={<TeamPage bios={teamBio} contextPath={props.contextPath} />} />
            {teamBio.map((data, index) =>
                <Route key={"Team.Bio." + index} path={ data.link } element={<TeamBioPage bio={data} contextPath={props.contextPath}  />} />
            )}
            <Route path='/404' element={<h2>404 Not Found</h2>} />
        </Routes>
    )
}

export default SiteRoutes;
