import { Routes, Route } from "react-router-dom";

import HomePage from './home/index.jsx';
// Service specific pages
import ServicesPage from './services/index.jsx';
import AgileServicePage from './services/agile/index.jsx';
import AnalyticsServicePage from './services/analytics/index.jsx';
import CloudServicePage from './services/cloud/index.jsx';
import DataEngServicePage from './services/dataeng/index.jsx';
import DevSecOpsServicePage from './services/devsecops/index.jsx';
// Team Pages
import TeamPage from './team/index.jsx';
import TeamBioPage from './team/bio/index.jsx';
import { carouselData, featuretteData, teamBio } from '../data';

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path={ '' }  element={<HomePage carousel={carouselData} featurette={featuretteData} />} />
            <Route path={ '/services' } element={<ServicesPage />} />
            <Route path={ '/services/agile' } element={<AgileServicePage />} />
            <Route path={ '/services/analytics' } element={<AnalyticsServicePage />} />
            <Route path={ '/services/cloud' } element={<CloudServicePage />} />
            <Route path={ '/services/data_engineering' } element={<DataEngServicePage />} />
            <Route path={ '/services/devsecops' } element={<DevSecOpsServicePage />} />

            <Route path={ '/team' } element={<TeamPage bios={teamBio} />} />
            {teamBio.map((data, index) =>
                <Route key={"Team.Bio." + index} path={ data.link } element={<TeamBioPage bio={data} />} />
            )}
            <Route path='/404' element={<h2>404 Not Found</h2>} />
        </Routes>
    )
}

export default SiteRoutes;
