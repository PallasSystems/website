import React, { FC } from 'react';

import { BannerCarousel, Featurettes } from '../../components';

// HomePage Properties
import {HomePageProperties} from './Home.types';


const HomePage: FC<HomePageProperties> = ({ carousel, featurette }) => {
    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerCarousel items={carousel} />
            <Featurettes items={featurette} />
        </main>
    )
};

export { HomePage };