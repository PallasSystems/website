import { BannerCarouselItemProperty, FeaturetteProperty, FooterProperties, NavbarProperty } from '../../components';

interface HomePageProperties {
    carouselProps?: BannerCarouselItemProperty[];
    featuretteProps?: FeaturetteProperty[];
    footerProps?: FooterProperties;
    navBarProps?: NavbarProperty;
}

export type { HomePageProperties };