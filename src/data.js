const carouselData = [
    { 'title': 'Big Data Analysis Made Simple', 'description': 'Looking to bring simplicity and scalability to an ever changing data landscape, ensuring those who need information have it when they need it.'},
    { 'title': 'Secure by default', 'description': 'As a Cheltenham based IT Consultancy we have spent years ensuring software is developed and deployed with layers of security, to ensure your data is safe.'},
    { 'title': 'Your Mission is our Priority', 'description': 'We take pride in learning what your mission is and ensuring our solution is tailored to suit your needs.'}
];

const featuretteData = [
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
    }
];

const teamBio =[
    {
        "name": "Matt",
        "title": "Founder",
        "img": {
            "alt":"Matt and his daughter hiking in woods",
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

export { carouselData, featuretteData, teamBio };