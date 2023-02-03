import { ImageProperty, FooterProperties, NavbarProperty } from '../../components';

export interface ServicesPageProperties {
    link: string;
    page: ServicePageProperties;
}

export interface ServicePageProperties {
    footerProps: FooterProperties;
    serviceProps: ServiceDetailProperties;    
    navBarProps: NavbarProperty;
}

export interface ServiceDetailProperties {
    title: string;
    img?:  ImageProperty;
    description: string[];
    items: ServiceBulletPointProperties[];
}

export interface ServiceBulletPointProperties {
    title: string;
    img:  ImageProperty;
    link?: string;
    description: string[];
}
