import React from 'react';

import { MissingPage } from './Missing.components';
import { PallasSVG } from '@pallassystems/website-core';

export default {
  title: 'Pages/404 Missing',
  component: MissingPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MissingPage {...args} />;

export const Default = Template.bind({});
Default.args = {
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
