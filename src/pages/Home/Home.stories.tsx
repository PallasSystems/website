import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {HomePage} from './Home.components';


import * as BannerCarousel from '../../components/BannerCarousel/BannerCarousel.stories';
import * as BannerNavBar from '../../components/BannerNavBar/BannerNavBar.stories';
import * as Featurettes from '../../components/Featurettes/Featurettes.stories';
import * as Footer from '../../components/Footer/Footer.stories';

export default {
  title: 'Example/HomePage',
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
    carouselProps: BannerCarousel.Default.args,
    featuretteProps: Featurettes.Default.args,
    footerProps: Footer.Default.args,
    navBarProps: BannerNavBar.Default.args
};

export const Complete = Template.bind({});
Complete.args = {
  carouselProps: BannerCarousel.Complete.args,
  featuretteProps: Featurettes.Complete.args,
  footerProps: Footer.Complete.args,
  navBarProps: BannerNavBar.Complete.args
};

