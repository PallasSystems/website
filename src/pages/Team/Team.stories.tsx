import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TeamPage} from './Team.components';

export default {
  title: 'Example/TeamPage',
  component: TeamPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TeamPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamPage> = (args) => <TeamPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Complete = Template.bind({});
Complete.args = {};

