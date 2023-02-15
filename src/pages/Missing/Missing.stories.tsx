import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {MissingPage} from './Missing.components';

import * as BannerNavBar from '../../components/BannerNavBar/BannerNavBar.stories';
import * as Footer from '../../components/Footer/Footer.stories';

export default {
  title: 'Example/MissingPage',
  component: MissingPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MissingPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MissingPage> = (args) => <MissingPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    footerProps: Footer.Default.args,
    navBarProps: BannerNavBar.Default.args
};

export const Complete = Template.bind({});
Complete.args = {
  footerProps: Footer.Complete.args,
  navBarProps: BannerNavBar.Complete.args
};
