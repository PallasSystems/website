import { ServiceDetailProperties } from './Services.types';
import { ServiceAgileData } from './agile/index';
import { ServiceDataAnalyticsData } from './analytics/index';
import {ServiceCloudData } from './cloud/index';
import { ServiceDataEngData } from './dataeng/index';
import { ServiceDevSecOpsData } from './devsecops/index';

export const ServicePageData: ServiceDetailProperties = {
    title: "What can we do to help?",
    link: "/services",
    description: [
        "Pallas Systems combines DevSecOps with Agile Scrum to shorten the feedback loop. We will use Continuous Integration (CI) & Continuous Deployment (CD) pipelines to automate build and deployment so we are able to quickly implement your ideas. This allows us to better elaborate your problem space and ensure we are focussed on delivering your vision.",
        "Pallas Systems has delivered self hosted platform migrations, cloud transformations.",
        "At Pallas Systems we believe your mission should be the priority and will look to deliver to your needs as soon as possible to maximise the impact of our work."
    ],
    items:[ ServiceAgileData, ServiceCloudData, ServiceDevSecOpsData, ServiceDataEngData, ServiceDataAnalyticsData,   ]
};