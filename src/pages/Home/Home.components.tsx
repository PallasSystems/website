import React, { FC } from 'react';

import { PallasPageWrapper } from '@pallassystems/website-core';
import { BannerCarousel, Featurettes } from '../../components';

// HomePage Properties
import { HomePageProperties } from './Home.types';
import { CarouselData, FeaturetteData } from './Home.data';

const HomePage: FC<HomePageProperties> = ({ carouselProps, featuretteProps, footerProps, navBarProps }) => {
  const carousel = undefined === carouselProps || null == carouselProps ? CarouselData : carouselProps;
  const featurette = undefined === featuretteProps || null == featuretteProps ? FeaturetteData : featuretteProps;

  return (
    <PallasPageWrapper authenticated={true} footerProps={footerProps} navBarProps={navBarProps}>
        <BannerCarousel items={carousel} />
        <Featurettes {...featurette} />
    </PallasPageWrapper>
  );
};

export { HomePage };
