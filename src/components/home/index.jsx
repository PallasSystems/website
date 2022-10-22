import React from 'react';

import HomePageCarousel from './carousel';
import HomePageFeaturette from './featurette';

function homepage(properties) {
    return (
        <main role={"main"} class={"flex-shrink-0"}>
            <HomePageCarousel data={ properties.carousel } contextPath={ properties.contextPath } />
            <HomePageFeaturette data={ properties.featurette } contextPath={ properties.contextPath } />
        </main>
    );
}

export default homepage;