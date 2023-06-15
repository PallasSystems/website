import React, { FC } from 'react';

import { default as BootstrapCarousel } from 'react-bootstrap/Carousel';

// Carousel Properties
import { BannerCarouselItemProperty } from './BannerCarousel.types';

const BannerCarousel: FC<BannerCarouselItemProperty[]> = (items) => {
    return (
        <BootstrapCarousel id="Carousel" variant="light" className="bg-dark">
            { Object.entries(items).map( (value, index) => { 
                return (
                    <BootstrapCarousel.Item key={index} id={"Carousel.Item." + index}>
                        <BootstrapCarousel.Caption id={"Carousel.Caption." + index}>
                            <h1 id={"Carousel.Caption.Title." + index}>{value[1].title}</h1>
                            <p id={"Carousel.Caption.Text." + index}>{value[1].description}</p>
                        </BootstrapCarousel.Caption>
                    </BootstrapCarousel.Item>
                    )
                })
            }
        </BootstrapCarousel>
    );
};

export { BannerCarousel };