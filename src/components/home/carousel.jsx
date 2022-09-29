import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomePageCarousel(properties) {
    return (
        <Carousel id="HomePageCarousel" variant="light" className="bg-dark">
            { properties.data.map(caption =>
                <Carousel.Item key={caption.title + ".Carousel.Item"} id={caption.title + ".Carousel.Item"}>
                    <Carousel.Caption id={caption.title + ".Carousel.Caption"}>
                        <h1 id={caption.title + ".Carousel.Caption.Title"}>{caption.title}</h1>
                        <p id={caption.title + ".Carousel.Caption.Text"}>{caption.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default HomePageCarousel;
