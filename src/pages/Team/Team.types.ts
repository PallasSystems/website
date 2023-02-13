import { FooterProperties, NavbarProperty } from '../../components';
import { TeamBioPageProperties}  from '../TeamBio'

export interface TeamPageProperties {
    bios: TeamBioPageProperties[];
    footerProps: FooterProperties;
    navBarProps: NavbarProperty;
}