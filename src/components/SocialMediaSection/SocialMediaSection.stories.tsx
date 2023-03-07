import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialMediaSection from './SocialMediaSection.components';

export default {
  title: 'Example/SocialMediaSection',
  component: SocialMediaSection,
} as ComponentMeta<typeof SocialMediaSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialMediaSection> = (args) => <SocialMediaSection {...args} />;

export const Default = Template.bind({});
Default.args = {

};

export const Complete = Template.bind({});
Complete.args = {
    facebook: "12345",
    instagram: "6789",
    linkedin: "abcdef",
    twitter: "zyxwv",
    scm: {
        project: "test",
        repository: "repo",
        type: "GitHub"
    }
};
