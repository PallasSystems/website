import React, { FC } from 'react';

import { Carousel } from 'react-bootstrap';

// Carousel Properties
import { BannerCarouselItemProperties } from './BannerCarousel.types';

const BannerCarousel: FC<BannerCarouselItemProperties> = ({ items }) => {
  return (
    <Carousel variant='light' className='bg-dark'>
      {items.map((value) => {
        return (
          <Carousel.Item key={value.title} className={'justify-content-center'}>
            <Carousel.Caption id={'Carousel.Caption.' + value.title}>
              <h1 id={'Carousel.Caption.Title.' + value.title}>{value.title}</h1>
              <p id={'Carousel.Caption.Text.' + value.title}>{value.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export { BannerCarousel };
