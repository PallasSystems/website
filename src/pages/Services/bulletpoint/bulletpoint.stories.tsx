import React from 'react';

import { ServiceBulletPointSection } from './bulletpoint.components';
import { ServicePageData } from '../Services.data';
import { ServiceDevSecOpsData } from '../devsecops/index';
import { HashRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Pages/Services Bullet Points',
  component: ServiceBulletPointSection,
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
const Template = (args) => <ServiceBulletPointSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '',
  link: '',
  description: []
};

export const DevSecOpsExample = Template.bind({});
DevSecOpsExample.args = ServiceDevSecOpsData;

export const CompleteExample = Template.bind({});
CompleteExample.args = ServicePageData;