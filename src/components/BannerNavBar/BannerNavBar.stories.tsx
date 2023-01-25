import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {BannerNavBar} from './BannerNavBar.components';

export default {
  title: 'Example/BannerNavBar',
  component: BannerNavBar,
} as ComponentMeta<typeof BannerNavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BannerNavBar> = (args) => <BannerNavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    brandName: "Pallas Systems",
    items: [],
};

export const Complete = Template.bind({});
Complete.args = {
  brandName: "Pallas Systems",
  items: [
      {text: "Home", path: ""},
      {text: "Services", path: "/services"},
      {text: "Team", path: "/team"}
  ]
};