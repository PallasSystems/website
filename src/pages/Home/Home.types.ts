import { FooterProperties, NavbarProperty } from "@pallassystems/website-core";
import {
  BannerCarouselItemProperty,
  FeaturetteProperty,
} from "../../components";

interface HomePageProperties {
  carouselProps?: BannerCarouselItemProperty[];
  featuretteProps?: FeaturetteProperty[];
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
}

export type { HomePageProperties };
