import React from 'react';

import HomePageCarousel from './carousel';
import HomePageFeaturette from './featurette';

function homepage(properties) {
    return (
        <main role={"main"}>
            <HomePageCarousel data={ properties.carousel } />
            <HomePageFeaturette data={ properties.featurette } />
        </main>
    );
}

export default homepage;