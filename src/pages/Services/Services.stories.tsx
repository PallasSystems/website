import React from 'react';

import { PallasSVG } from '@pallassystems/website-core';

import { ServicesPage } from './Services.components';
import { ServicePageData } from './Services.data';
import { ServiceDevSecOpsData } from './devsecops/index';
import { HashRouter, Route, Routes } from 'react-router-dom';

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
  serviceProps: ServiceDevSecOpsData,
  footerProps: {},
  navBarProps: {},
};

export const Complete = Template.bind({});
Complete.args = {
  serviceProps: ServicePageData,
  footerProps: {
    contact: {
      email: 'info@pallas.uk',
    },
    socialMedia: {
      facebook: '350073883439443',
      linkedin: 'pallas-systems-ltd',
      twitter: 'PallasUK',
    },
    companyName: 'Pallas Systems',
    companyNameLink: 'https://www.pallas.uk',
  },
  navBarProps: {
    brand: {
      name: 'Pallas Systems',
      imgFn: (
        <PallasSVG
          id='BannerNavBar.Brand.Link.Logo.SVG'
          alt='Pallas Systems Logo'
          height='3.5rem'
          width='4rem'
          className='d-inline-block'
        />
      ),
    },
    items: [
      { text: 'Home', path: '' },
      { text: 'Services', path: '/services' },
      { text: 'Team', path: '/team' },
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
    },
  },
};
