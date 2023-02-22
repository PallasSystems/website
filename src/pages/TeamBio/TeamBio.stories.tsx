import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TeamBioPage} from './TeamBio.components';
import {SteveBiosData} from './TeamBio.data';

export default {
  title: 'Example/TeamBioPage',
  component: TeamBioPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TeamBioPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamBioPage> = (args) => <TeamBioPage {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Complete = Template.bind({});
Complete.args = SteveBiosData;

