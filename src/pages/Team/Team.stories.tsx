import React from 'react';

import {TeamPage} from './Team.components';

export default {
  title: 'Pages/Team Page',
  component: TeamPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template= (args) => <TeamPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = {};

