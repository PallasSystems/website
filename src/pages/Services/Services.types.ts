import { FooterProperties, NavbarProperty } from "@pallassystems/website-core";
import { ImageProperty } from "../../components";

export interface ServicesPageProperties {
  link: string;
  page: ServicePageProperties;
}

export interface ServicePageProperties {
  footerProps?: FooterProperties;
  serviceProps: ServiceDetailProperties;
  navBarProps?: NavbarProperty;
}

export interface ServiceDetailProperties {
  title: string;
  link: string;
  img?: ImageProperty;
  thumbnail?: ServiceDetailProperties;
  description: string[];
  items?: ServiceDetailProperties[];
}
