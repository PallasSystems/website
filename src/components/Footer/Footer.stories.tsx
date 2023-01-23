import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer.components';

export default {
  title: 'Example/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    contact: {
        email: "info@pallas.uk",
        mobile: "+44 7861 530488",
    },
    socialMedia: {
        facebook:  "350073883439443",
        linkedin:  "pallas-systems-ltd",
        twitter:  "PallasUK",
        scm: {
            project: "PallasSystems",
            repository: "react-common",
            type: "github"
        }
    },
    companyName: "Pallas Systems",
};

export const Complete = Template.bind({});
Complete.args = {
    contact: {
        address: {
            line1: "1 Business Street",
            line2: "Business Park",
            city: "A City",
            county: "LocationShire",
            country: "ComputerLand",
            postCode: "PL5T EST"
        },
        email: "info@pallas.uk",
        fax: "01234 789543",
        mobile: "+44 7861 530488",
        landline: "01234 567890"
    },
    socialMedia: {
        facebook: "12345",
        instagram: "6789",
        linkedin: "abcdef",
        twitter: "zyxwv",
        scm: {
            endpoint: "http://localhost/",
            project: "proj",
            repository: "repo",
            type: "git"
        }
    },
    companyName: "Boring Company",
};