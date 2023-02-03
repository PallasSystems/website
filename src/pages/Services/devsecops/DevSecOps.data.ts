export const ServiceDevSecOpsData = {
    title: "What can we do to help?",
    img: { id:"Container.Description.Row.Col.Img", src: './images/services/devsecops.svg' },
    description: [
                "We use DevSecOps to shorten the feedback loop, to be able to take your idea&apos;s and bring them into production quickly. DevSecOps also provides a bevy of tools to track quality",
                "We have a number of Continuous Integration (CI) pipelines for various software programming languages looking to enable various assurance activities on our software. We look to automate new requirements into existing pipelines to ensure all customers can benefit from the enhancements. We have automated issue tracking, release management, automated testing and code analysis activities for various development stacks and languages.",
                "We have developed various Continuous Deployment (CD) pipelines, we have used Puppet and Ansible to deploy software to physical servers and deployed packages to serverless platforms (e.g. AWS Lambda). While we can provide full automated Ci/CD pipelines we can also create gated processes to allow for assurance review.",
                "Pallas Systems collects metrics from all CI/CD pipelines, this information is used to inform development of the software. Allowing us to focus on issues appropriate for the software development approach."
    ],
    items: [
        {
            title: 'Automation',
            img: { id:"Container.Description.Row.Col.SVG.Automation", height:"9rem", width:"9rem" },
            description:[
                'Your business has processes and rules that need to be followed, we can use automation to ensure your software follows all of them every time'
            ]   
        },
        {
            'title':'Continuous Integration',
            'img': { id:"Container.Description.Row.Col.SVG.CI", height:"9rem", width:"9rem" },
            'description':[
                'We can integrate CI pipelines to ensure code quality, to stop breaking changes and track technical debt'
            ]
        },
        {
            'title':'Continuous Deployment',
            'img': { id:"Container.Description.Row.Col.SVG.CD", height:"9rem", width:"9rem" },
            'description':[
                'We will automate your deployments to reduce the time from merging a change to getting it into production'
            ]
        },
        {
            'title':'Infrastructure As Code',
            'img': { id:"Container.Description.Row.Col.SVG.IaC", height:"9rem", width:"9rem" },
            'description':[
                'We will define your infrastructure through code which allows your design to be audited for security and ensures your production environment can be recreated as needed'
            ]
        },
        {
            'title':'Testing',
            'img': { id:"Container.Description.Row.Col.SVG.Testing", height:"9rem", width:"9rem" },
            'description':[
                'We use a mixture of unit, integration and system testing to ensure software meets your use cases'
            ]
        },
        {
            'title':'Support',
            'img': { id:"Container.Description.Row.Col.SVG.Support", height:"9rem", width:"9rem" },
            'description':[
                'No matter where your software is hosted, we can provide support to ensure high uptime of your production environment'
            ]
        }
    ]
};