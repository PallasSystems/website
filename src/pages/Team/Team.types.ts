import { FooterProperties, NavbarProperty } from "@pallassystems/website-core";
import { TeamBioPageProperties } from "../TeamBio";

export interface TeamPageProperties {
  bios?: TeamBioPageProperties[];
  footerProps?: FooterProperties;
  navBarProps?: NavbarProperty;
}
