import React from 'react';

import { FooterProperties, ImageProperty, NavbarProperty, PallasSVG } from '@pallassystems/website-core';

import { ServicesPage } from './Services.components';
import { ServicePageData } from './Services.data';
import { ServiceDevSecOpsData } from './devsecops/index';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ServiceAgileData } from './agile';
import { ServiceDataAnalyticsData } from './analytics';
import { ServiceCloudData } from './cloud';
import { ServiceDataEngData } from './dataeng';

export default {
  title: 'Pages/Services Page',
  component: ServicesPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <HashRouter>
        <Routes>
          <Route path={''} element={<Story />} />
          <Route path={'/services'} element={<Story />} />
          <Route path={'/team'} element={<Story />} />
        </Routes>
      </HashRouter>
    ),
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ServicesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  serviceProps: {
    title: '',
    link: '',
    description: []
  },
  footerProps: {},
  navBarProps: {},
};

const footerProperties: FooterProperties = {
  contact: {
    email: 'info@pallas.uk',
  },
  socialMedia: {
    facebook: '350073883439443',
    linkedin: 'pallas-systems-ltd',
    twitter: 'PallasUK',
  },
  companyName: 'Pallas Systems',
  companyNameLink: 'https://www.pallas.uk'
}

const headerProperties: NavbarProperty = {
  brand: {
    name: 'Pallas Systems',
    imgFn: (props: ImageProperty | undefined) => {return (
      <PallasSVG
        id='BannerNavBar.Brand.Link.Logo.SVG'
        alt='Pallas Systems Logo'
        height='3.5rem'
        width='4rem'
        className='d-inline-block'
      />
    )},
  },
  items: [
    { id:'navbar.home', text: 'Home', path: '' },
    { id:'navbar.services', text: 'Services', path: '/services' },
    { id:'navbar.team', text: 'Team', path: '/team' },
  ],
  scm: {
    project: 'test',
    repository: 'repo',
    imgProps: {
      id: 'SourceLink',
      height: '2rem',
      width: '2.5rem',
      className: 'd-inline-block',
    },
  }
}

export const AgilePage = Template.bind({});
AgilePage.args = {
  serviceProps: ServiceAgileData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};

export const AnalyticsPage = Template.bind({});
AnalyticsPage.args = {
  serviceProps: ServiceDataAnalyticsData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};

export const CloudPage = Template.bind({});
CloudPage.args = {
  serviceProps: ServiceCloudData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};

export const Complete = Template.bind({});
Complete.args = {
  serviceProps: ServicePageData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};

export const DevSecOpsPage = Template.bind({});
DevSecOpsPage.args = {
  serviceProps: ServiceDevSecOpsData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};

export const DataEngPage = Template.bind({});
DataEngPage.args = {
  serviceProps: ServiceDataEngData,
  footerProps: footerProperties,
  navBarProps: headerProperties
};
