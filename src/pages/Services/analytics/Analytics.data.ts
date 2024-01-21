import { ServiceDetailProperties } from "../Services.types";

export const ServiceDataAnalyticsData: ServiceDetailProperties = {
    title: "What can we do to help?",
    link: "/services/analytics",
    description: [
                "Pallas is able to build analytics and federation services to meet the needs of your business. We don&apos;t assume Machine Learning is the answer but instead look to understand your data and specific ask and present an approach we think best suits your needs.",
                "We combine data engineering expertise with our analytic writing, this means we will look to hold your source data within a data lake and setup scalable Extract Load Transform architectures to feed the analytics we develop. This ensure you analytics can be quickly adapted as your data evolves."
    ],
    thumbnail: { 
        title:'Data Analytics',
        img: { id:"Services.Link.Anaytics.SVG", src: './analytics/analytic_small.svg', height:"9rem", width:"9rem" },
        link: '/services/analytics',
        description:[
            'Pallas Systems cares about your mission and how best to extract knowledge from your data'
        ]
    },
    items: [ ]
};