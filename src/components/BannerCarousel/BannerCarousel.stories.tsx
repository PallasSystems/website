import React from 'react';

import {BannerCarousel} from './BannerCarousel.components';

export default { component: BannerCarousel };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerCarousel {...args} />;

export const Default = Template.bind({});
Default.args = [];

export const Complete = Template.bind({});
Complete.args = [
        { title: 'Big Data Analysis Made Simple', description: 'Looking to bring simplicity and scalability to an ever changing data landscape, ensuring those who need information have it when they need it.'},
        { title: 'Secure by default', description: 'As a Cheltenham based IT Consultancy we have spent years ensuring software is developed and deployed with layers of security, to ensure your data is safe.'},
        { title: 'Your Mission is our Priority', description: 'We take pride in learning what your mission is and ensuring our solution is tailored to suit your needs.'},
];