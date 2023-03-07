import React, { FC } from 'react';

import { BannerCarousel, BannerNavBar, Featurettes, Footer } from '../../components';

// HomePage Properties
import { HomePageProperties} from './Home.types';
import {CarouselData, FeaturetteData } from './Home.data';

const HomePage: FC<HomePageProperties> = ({ carouselProps, featuretteProps, footerProps, navBarProps }) => {

    const carousel = undefined === carouselProps || null == carouselProps ? CarouselData : carouselProps;
    const featurette = undefined === featuretteProps || null == featuretteProps ? FeaturetteData : featuretteProps;

    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <BannerNavBar {...navBarProps}/>
            <BannerCarousel {...carousel} />
            <Featurettes {...featurette} />
            <Footer {...footerProps}/>
        </main>
    )
};

export { HomePage };
