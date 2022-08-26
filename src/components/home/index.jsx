import React from 'react';

import HomePageCarousel from './carousel';
import HomePageFeaturette from './featurette';

function homepage() {
    return (
        <main role={"main"}>
            <HomePageCarousel />
            <HomePageFeaturette />
        </main>
    );
}

export default homepage;