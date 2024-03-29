import mattImg from './matt.jpg';
import steveImg from './steve.jpg';

export const MattBiosData = {
  name: 'Matt',
  title: 'Founder',
  img: {
    alt: 'Matt and his daughter hiking in woods',
    id: 'Team.Img.Matt',
    src: mattImg,
  },
  link: '/team/matt',
  description: [
    'Matt has been developing large scale structured data analysis for years. Bringing knowledge on how to secure systems and process vast amounts of data on small budgets while keeping users happy.',
    'He can usually be found hurtling down mountain sides on his mountain bike, or hiking with his wife and daughter.',
  ],
  socialMedia: {
    linkedin: 'matthew-barrett-48168033',
    twitter: 'mbarrett84',
  },
};

export const SteveBiosData = {
  name: 'Steve',
  title: 'Founder',
  img: {
    alt: 'Steve at the Smithsonian',
    id: 'Team.Img.Steve',
    src: steveImg,
  },
  link: '/team/steve',
  description: [
    'Steve has has worked on research prototypes and high availability systems and the challenges of putting Agile/DevSecOps principles into practice. As a result has been brought into several teams to help diagnose issues and help them evolve into high performing Agile DevSecOps teams.',
    'Steve can often be found researching new technologies looking to understand how they can be used to improve existing approaches or enable the processing and analysis of big data. He has a keen interest in solving the problem of processing the ever changing data landscape.',
    'He spends most of his time automating his own home or finding excuses to see steam trains with his son.',
  ],
  socialMedia: {
    linkedin: 'stephen-crocker-5b214532',
    twitter: 'stevecrox0914',
    scm: {
      project: 'stevecrox',
      repository: '',
    },
  },
};
