import { ImageProperty, FooterProperties, NavbarProperty, SocialMediaProperties } from '../../components';

export interface TeamBioPageProperties {
    name: string;
    title: string;
    img: ImageProperty;
    link: string;
    description: string[];
    footerProps?: FooterProperties;
    navBarProps?: NavbarProperty;
    socialMedia?: SocialMediaProperties;
}