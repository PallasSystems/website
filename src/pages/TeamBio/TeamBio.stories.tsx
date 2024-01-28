import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { TeamBioPage } from './TeamBio.components';
import { SteveBiosData } from './TeamBio.data';

export default {
  title: 'Pages/Team Bio Page',
  component: TeamBioPage,
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
const Template = (args) => <TeamBioPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = SteveBiosData;
