import HomePageCarousel from './carousel.jsx';
import HomePageFeaturette from './featurette.jsx';

const homepage = (properties) => {
    return (
        <main role={"main"} className={"flex-shrink-0"}>
            <HomePageCarousel data={ properties.carousel } />
            <HomePageFeaturette data={ properties.featurette } />
        </main>
    );
}

export default homepage;