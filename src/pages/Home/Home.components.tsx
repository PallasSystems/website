import React, { FC } from 'react';

import { BannerCarousel, BannerNavBar, Featurettes, Footer } from '../../components';

// HomePage Properties
import {HomePageProperties} from './Home.types';


const HomePage: FC<HomePageProperties> = ({ carouselProps, featuretteProps, footerProps, navBarProps }) => {
    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerNavBar {...navBarProps}/>
            <BannerCarousel {...carouselProps} />
            <Featurettes {...featuretteProps} />
            <Footer {...footerProps} />
        </main>
    )
};

export { HomePage };