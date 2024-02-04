import React, { FC } from 'react';

import { BannerNavBar, Footer } from '@pallassystems/website-core';
import { BannerCarousel, Featurettes } from '../../components';

// HomePage Properties
import { HomePageProperties } from './Home.types';
import { CarouselData, FeaturetteData } from './Home.data';
import { Container } from 'react-bootstrap';

const HomePage: FC<HomePageProperties> = ({ carouselProps, featuretteProps, footerProps, navBarProps }) => {
  const carousel = undefined === carouselProps || null == carouselProps ? CarouselData : carouselProps;
  const featurette = undefined === featuretteProps || null == featuretteProps ? FeaturetteData : featuretteProps;

  return (
    <>
      <BannerNavBar {...navBarProps} />
      <main role={'main'} className={'flex-grow-1'}>
        <BannerCarousel items={carousel} />
        <Featurettes {...featurette} />
      </main>
      <Footer {...footerProps} />
    </>
  );
};

export { HomePage };
