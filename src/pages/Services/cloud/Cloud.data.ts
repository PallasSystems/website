export const ServiceCloudData = {
    title: "What can we do to help?",
    img: { id:"Container.Description.Row.Col.Img", src: './images/services/digitaltransformation.svg' },
    description: [
                "Pallas Systems will work with you to understand your current platforms and services, we have experience in migrating legacy software on to a mixture of cloud platforms, allowing you to decommission legacy hardware. We can also provide consultancy on refactoring your software to better fit cloud architectures, providing a range of options from minimal adaptions to complete rewrites to take advantage of the latest cloud services.",
                "We are aware many businesses wish to operate in a hybrid manner, we can work with you to provide a solution that meets your risk appetite."
    ],
    items: [
        {
            title: 'Asses',
            img: { id:"Container.Description.Row.Col.SVG.Asses", src: "./agile/agile_small.svg", height:"9rem", width:"9rem" },
            description:[
                'Understand the current system and the use of it within your business before planning you next step. Does self hosted, cloud, hybrid and serverless make sense for you?'
            ]   
        },
        {
            'title':'Automation',
            'img': { id:"Container.Description.Row.Col.SVG.Automation", src: './agile/kanban.svg', height:"9rem", width:"9rem" },
            'description':[
                'Your business has processes and rules that need to be followed, we can use automation to ensure your software follows all of them every time.'
            ]
        },
        {
            'title':'Infrastructure As Code',
            'img': { id:"Container.Description.Row.Col.SVG.IaC", src: './agile/mvp.svg', height:"9rem", width:"9rem" },
            'description':[
                'We will define your infrastructure through code which allows your design to be audited for security and ensures your production environment can be recreated as needed.'
            ]
        },
        {
            'title':'Support',
            'img': { id:"Container.Description.Row.Col.SVG.Support", src: './agile/scrum.svg', height:"9rem", width:"9rem" },
            'link': '/services/data_engineering',
            'description':[
                'No matter where your software is hosted, we can provide support to ensure high uptime of your production environment.'
            ]
        }
    ]
};