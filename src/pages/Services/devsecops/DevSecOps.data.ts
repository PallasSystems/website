import { ServiceAutomationData, ServiceIaaCData, ServiceSupportData} from '../cloud/index'

export const ServiceCIData = {
    title: "Continuous Integration",
    link: "/services/agile",
    thumbnail: { id:"Container.Description.Row.Col.Img", src: "Fail Fast", height:"9rem", width:"9rem" },
    description: ["We can integrate CI pipelines to ensure code quality, to stop breaking changes and track technical debt"]
};

export const ServiceCDData = {
    title: "Continuous Deployment",
    link: "/services/agile",
    thumbnail: { id:"Container.Description.Row.Col.Img", src: "Fail Fast", height:"9rem", width:"9rem" },
    description: ["We will automate your deployments to reduce the time from merging a change to getting it into production"]
};

export const ServiceTestingData = {
    title: "Testing",
    link: "/services/agile",
    thumbnail: { id:"Container.Description.Row.Col.Img", src: "Fail Fast", height:"9rem", width:"9rem" },
    description: ["We use a mixture of unit, integration and system testing to ensure software meets your use cases"]
};


export const ServiceDevSecOpsData = {
    title: "What can we do to help?",
    link: "/services/devsecops",
    img: { id:"Container.Description.Row.Col.Img", src: './images/services/devsecops.svg' },
    description: [
                "We use DevSecOps to shorten the feedback loop, to be able to take your idea&apos;s and bring them into production quickly. DevSecOps also provides a bevy of tools to track quality",
                "We have a number of Continuous Integration (CI) pipelines for various software programming languages looking to enable various assurance activities on our software. We look to automate new requirements into existing pipelines to ensure all customers can benefit from the enhancements. We have automated issue tracking, release management, automated testing and code analysis activities for various development stacks and languages.",
                "We have developed various Continuous Deployment (CD) pipelines, we have used Puppet and Ansible to deploy software to physical servers and deployed packages to serverless platforms (e.g. AWS Lambda). While we can provide full automated Ci/CD pipelines we can also create gated processes to allow for assurance review.",
                "Pallas Systems collects metrics from all CI/CD pipelines, this information is used to inform development of the software. Allowing us to focus on issues appropriate for the software development approach."
    ],
    thumbnail: {
        title:'DevSecOps',
        img: { id:"BannerNavBar.Brand.Link.Logo.SVG", src: './cloud/cloud_small.svg', height:"9rem", width:"9rem" },
        link: '/services/devsecops',
        description:[
                'Pallas Systems uses DevSecOps to enable us to quickly respond to your requests and ensure the integrity of your software and services'
        ]
    },
    items: [ ServiceAutomationData, ServiceCIData, ServiceCDData, ServiceIaaCData, ServiceSupportData, ServiceTestingData ]
};