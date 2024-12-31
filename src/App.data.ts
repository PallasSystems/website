
import { ReactNode } from 'react';

import { PallasSVG } from '@pallassystems/website-core';
import type { FooterProperties, ImageProperty, NavbarProperty } from '@pallassystems/website-core';

import { ServicePageData } from "./pages";

export const NavBarData: NavbarProperty = {
    brand: {
        name: 'Pallas Systems',
        imgFn:  (props?: ImageProperty): ReactNode => { return PallasSVG({
          id: 'BannerNavBar.Brand.Link.Logo.SVG',
          alt: props?.alt ?? 'Pallas System Logo',
          height: props?.height ?? '3.5rem',
          width: props?.width ?? '4rem',
          className: props?.className ?? 'd-inline-block',
        })},
      },
      items: [
        { id: "navbar.services", path: ServicePageData.link, text: 'Services' },
        { id: "navbar.team", path: '/team', text: 'Team' },
      ],
}

export const FooterData: FooterProperties = {
  companyName: 'Pallas Systems',
  companyNameLink: 'https://www.pallas.uk',
  contact: {
    email: "info@pallas.uk"
  },
  socialMedia: {
    facebook: '350073883439443',
    linkedin: 'pallas-systems-ltd',
    twitter: 'PallasUK',
  }
}
  