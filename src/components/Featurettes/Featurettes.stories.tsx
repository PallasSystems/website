import React from 'react';

import {Featurettes} from './Featurettes.components';

export default {
  component: Featurettes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Featurettes {...args} />;

export const Default = Template.bind({});
Default.args = [];

export const Complete = Template.bind({});
Complete.args = [
    {
        'title':'Agile',
        'byline':'deliver faster',
        'img': {
            'alt':'',
            'src': '/images/services/agile.svg'
        },
        'description':[
            'Pallas Systems will place your vision at the heart of delivery using Agile Scrum to quickly deliver a working product. We will then use your feedback to iteratively tailor the solution to better meet your needs.',
            'We understand your organisation will have its own rules, processes and procedures, so rather than dictate a single Agile Scrum approach we look to define an Agile approach which integrates with your business and mission needs.'
        ]
    },
    {
        'title':'DevSecOps',
        'byline':'enabling agility',
        'img': {
            'alt':'',
            'src': '/images/services/devsecops.svg'
        },
        'description':[
            'Pallas Systems uses DevSecOps to shorten the feedback loop, we use Continuous Integration (CI) & Continuous Deployment (CD) pipelines to automate build and deployment so we are able to quickly implement your ideas. This allows us to better elaborate your problem space and ensure we are focussed on delivering your vision.',
            'We use DevSecOps to ensure our software is produced to a high quality with minimal technical debt. We will use Infrastructure as Code (IaC) to create repeatable deployments which can be audited, CI pipelines to track technical debt and CD to ensure the smooth consistent deployment of your software.'
        ]
    },
    {
        'title':'Digital Transformation',
        'byline':'ensuring the future',
        'img': {
            'alt':'',
            'src': '/images/services/digitaltransformation.svg'
        },
        'description':[
            'Pallas Systems will work with you to understand your current platforms and services, we have experience in migrating legacy software on to a mixture of cloud platforms, allowing you to decommission legacy hardware. We can also provide consultancy on refactoring your software to better fit cloud architectures, providing a range of options from minimal adaptions to complete rewrites to take advantage of the latest cloud services.',
            'We are aware many businesses wish to operate in a hybrid manner, we can work with you to provide a solution that meets your risk appetite.'
        ]
    },
];