const NavBarData = {
    brandName: "Pallas Systems",
    brandImg: { id:"BannerNavBar.Brand.Link.Logo.SVG", src: "images/logos/logo.svg", height:"3.5rem", width:"4rem", className:"d-inline-block" },
    items: [
        {text: "Home", path: ""},
        {text: "Services", path: "/services"},
        {text: "Team", path: "/team"}
    ]
};

const FooterData = {
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
    companyNameLink: "https://www.pallas.uk"
};




const ServicesData = {
    title: "What can we do to help?",
    description: [
                "Pallas Systems combines DevSecOps with Agile Scrum to shorten the feedback loop. We will use Continuous Integration (CI) & Continuous Deployment (CD) pipelines to automate build and deployment so we are able to quickly implement your ideas. This allows us to better elaborate your problem space and ensure we are focussed on delivering your vision.",
                "Pallas Systems has delivered self hosted platform migrations, cloud transformations.",
                "At Pallas Systems we believe your mission should be the priority and will look to deliver to your needs as soon as possible to maximise the impact of our work."
    ],
    items: [
        {
            title: 'Agile',
            img: { id:"BannerNavBar.Brand.Link.Logo.SVG", src: "'./agile/agile_small.svg'", height:"9rem", width:"9rem" },
            link: '/services/agile',
            description:[
                'Pallas Systems will place your vision at the heart of delivery, using Agile Scrum to iterate towards your needs'
            ]   
        },
        {
            'title':'Cloud Development',
            'img': { id:"BannerNavBar.Brand.Link.Logo.SVG", src: './cloud/cloud_small.svg', height:"9rem", width:"9rem" },
            'link': '/services/cloud',
            'description':[
                'Pallas Systems can help you on your journey to the cloud, from simple software migration to a full re-architecture of your software'
            ]
        },
        {
            'title':'DevSecOps',
            'img': { id:"BannerNavBar.Brand.Link.Logo.SVG", src: './devsecops/devsecops_small.svg', height:"9rem", width:"9rem" },
            'link': '/services/devsecops',
            'description':[
                'Pallas Systems uses DevSecOps to enable us to quickly respond to your requests and ensure the integrity of your software and services'
            ]
        },
        {
            'title':'Data Engineering',
            'img': { id:"BannerNavBar.Brand.Link.Logo.SVG", src: './dataeng/dataeng_small.svg', height:"9rem", width:"9rem" },
            'link': '/services/data_engineering',
            'description':[
                'Pallas Systems can provide solutions to process you data efficiently'
            ]
        },
        {
            'title':'Data Analytics',
            'img': { id:"BannerNavBar.Brand.Link.Logo.SVG", src: './analytics/analytic_small.svg', height:"9rem", width:"9rem" },
            'link': '/services/analytics',
            'description':[
                'Pallas Systems cares about your mission and how best to extract knowledge from your data'
            ]
        }
    ]
};


const teamBio =[
    {
        "name": "Matt",
        "title": "Founder",
        "img": {
            "alt":"Matt and his daughter hiking in woods",
            id:"BannerNavBar.Brand.Link.Logo.SVG",
            "src": "/images/team/matt.jpg"
        },
        "link": "/team/matt",
        "description": [
            "Matt has been developing large scale structured data analysis for years. Bringing knowledge on how to secure systems and process vast amounts of data on small budgets while keeping users happy.",
            "He can usually be found hurtling down mountain sides on his mountain bike, or hiking with his wife and daughter."
        ]
    },
    {
        "name": "Steve",
        "title": "Founder",
        "img": {
            "alt":"Steve at the Smithsonian",
            id:"BannerNavBar.Brand.Link.Logo.SVG",
            "src": "/images/team/steve.jpg"
        },
        "link": "/team/steve",
        "facebook": "https://www.facebook.com/groups/350073883439443",
        "github": "https://github.com/stevecrox",
        "twitter": "https://twitter.com/stevecrox0914",
        "description": [
            "Steve has has worked on research prototypes and high availability systems and the challenges of putting Agile/DevSecOps principles into practice. As a result has been brought into several teams to help diagnose issues and help them evolve into high performing Agile DevSecOps teams.",
            "Steve can often be found researching new technologies looking to understand how they can be used to improve existing approaches or enable the processing and analysis of big data. He has a keen interest in solving the problem of processing the ever changing data landscape.",
            "He spends most of his time automating his own home or finding excuses to see steam trains with his son."
        ]
    }
];

export { FooterData, NavBarData, ServicesData, teamBio };