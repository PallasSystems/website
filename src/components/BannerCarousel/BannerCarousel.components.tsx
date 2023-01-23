import React, { FC } from 'react';

import { default as BootstrapCarousel } from 'react-bootstrap/Carousel';

// Carousel Properties
import { BannerCarouselItems, BannerCarouselItemProperty } from './BannerCarousel.types';

const BannerCarousel: FC<BannerCarouselItems> = ({ items }) => {
    return (
        <BootstrapCarousel id="Carousel" variant="light" className="bg-dark">
            { items.map( (caption: BannerCarouselItemProperty, index: number) => { 
                return (
                    <BootstrapCarousel.Item key={index} id={"Carousel.Item." + index}>
                        <BootstrapCarousel.Caption id={"Carousel.Caption." + index}>
                            <h1 id={"Carousel.Caption.Title." + index}>{caption.title}</h1>
                            <p id={"Carousel.Caption.Text." + index}>{caption.description}</p>
                        </BootstrapCarousel.Caption>
                    </BootstrapCarousel.Item>
                    )
                })
            }
        </BootstrapCarousel>
    );
};

export { BannerCarousel };