import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {ServicesPage} from './Services.components';
import {ServicePageData} from './Services.data';
import {ServiceDevSecOpsData} from './devsecops/index';

import * as BannerNavBar from '../../components/BannerNavBar/BannerNavBar.stories';
import * as Footer from '../../components/Footer/Footer.stories';

export default {
  title: 'Example/ServicesPage',
  component: ServicesPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ServicesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ServicesPage> = (args) => <ServicesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
    serviceProps: ServiceDevSecOpsData,
    footerProps: Footer.Default.args,
    navBarProps: BannerNavBar.Default.args
};

export const Complete = Template.bind({});
Complete.args = {
  serviceProps: ServicePageData,
  footerProps: Footer.Complete.args,
  navBarProps: BannerNavBar.Complete.args
};

