export default {
  sidebar: {
    education: {
      university: 'University of Waterloo',
      duration: '2018-2023',
      degree: 'BASc, Mechatronics Engineering',
      courses: [
        'MTE 140 Data Structures & Algorithms (<b>C++</b>)',
        'MTE 241 Introduction to Computer Structures & Real-Time Systems (<b>C</b>)',
        'MTE 325 Microprocessor Systems and Interfacing',
      ],
    },
    languages: [
      {
        name: 'JavaScript',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'C#',
      },
      {
        name: 'C++',
      },
      {
        name: 'Python',
      },
      {
        name: 'HTML/CSS',
      },
    ],
    about:
      'I love software development and have a soft spot for the end-user. I\'m a quick learner and enjoy wearing multiple hats. Specializing in web/game development, I\'m eager to apply my skills and be impactful!',
    technologies: [
      'React',
      'React Native',
      'Unity',
      'Flask',
      'MobX',
      'Firebase',
      'Git',
      'Jenkins',
      'Figma',
      'AutoCAD',
      'Android Studio',
    ],
    interests: [
      'House plant <b>caretaker</b>.',
      'Stardew Valley and tetris <b>gamer</b>.',
      'Newbie indoor <b>rock climber</b>.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'janele913@gmail.com',
        link: 'mailto:janele913@gmail.com',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/jane-le',
        link: 'https://github.com/jane-le',
      },
      {
        name: 'LinkedIn',
        faClass: 'fa fa-linkedin',
        display: 'linkedin.com/in/janelamle/',
        link: 'https://www.linkedin.com/in/janelamle/',
      },
    ],
  },
  footer: 'Last updated 2021/05/14',
  footerLinks: [
    /*
    {
      name: 'Website',
      faClass: 'fa fa-leaf',
      display: 'https://janele.ca/',
      link: 'https://janele.ca/',
    },
    */
  ],
  main: {
    firstName: 'Jane',
    lastName: 'Le',
    title: 'Software Developer',
    website: {
      name: 'https://janele.ca/',
      link: 'https://janele.ca/',
    },
    companies: [
      {
        name: 'Bunch',
        title: 'Game Developer Intern',
        color: '#815ACD',
        date: 'Jan 2021 – Apr 2021',
        location: 'Toronto, ON (Remote)',
        achievements: [
          'Released <b><a href="https://apps.apple.com/gb/app/mars-dash-battle-running-game/id1549911883">Mars Dash: Battle Running Game v1.0</a></b> within a fast-paced timeline of 3 months by developing gameplay features from beginning to end using <b>Unity (C#)</b>.',
          'Built a new multiplayer Mars Dash game mode during a 36 hour company wide hackathon, which led to product implementation.',
          'Accelerated project development by integrating <b>Firebase</b> database and analytics systems into Mars Dash two weeks ahead of schedule. ',
          'Promoted positive company culture by formalizing a pixel art club to encourage design growth and fun.',
        ],
      },
      {
        name: 'Zynga',
        title: 'Software Engineering Intern',
        color: '#815ACD',
        date: 'May 2020 – Aug 2020',
        location: 'Toronto, ON (Remote)',
        achievements: [
          'Submitted 3000+ lines of <b>Typescript</b>, <b>MobX</b>, and <b>React Native</b> code to the Words with Friends 2 mobile app with over 5 million daily users, correcting defects and adding new features.',
          'Shipped a key social feature independently that encourages players to connect to Facebook by using incentives, <b>increasing overall engagement by 22%.</b>',
          'Collaborated with product teams to analyze trends for an in-game player retention feature and updated it accordingly, <b>increasing game creations through the feature by 31%.</b>',
        ],
      },
      {
        name: 'Climax Media',
        title: 'Frontend Developer',
        color: '#815ACD',
        date: 'Sep 2019 – Dec 2019',
        location: 'Toronto, ON',
        achievements: [
          'Developed new UI features and bug fixes for the company\'s largest client MVC application using <b>React</b>, <b>Angular</b>, and <b>C#</b> in a three-week release cycle.',
          'Made major contributions to the release of Honda\'s CO2 emissions display by implementing reusable UI components which boosted environmentally-friendly sales.',
          'Integrated a custom <b>Google Tag Manager</b> data layer across all of Honda\'s React apps to enable sufficient data tracking for the client.',
        ],
      },
      {
        name: 'Siemens Healthineers',
        title: 'Software QA Specialist',
        color: '#815ACD',
        date: 'Jan 2019 – Apr 2019',
        location: 'Ottawa, ON',
        achievements: [
          'Pioneered a mobile test suite for epoc® software using <b>Pytest</b> framework and <b>Appium API</b> to eliminate the need for manual testing.'
        ],
      },
    ],
    projects: [
      {
        name: 'Lumi',
        type: 'SlackBot',
        tools: ['SlackAPI', 'Flask', 'Ngrok'],
        achievements: [
          'Programmed a slackbot to automate sending random conversation-starters daily.',
        ],
      },
      {
        name: 'TeaBuddy',
        type: 'Android App',
        tools: ['Kotlin', 'Firebase', 'Realm'],
        achievements: [
          'Published an Android application that enables tea-lovers to connect socially, obtain tea information, and time their brews.',
          'Implemented an interface that consumes the mediawiki api to display relevant tea details.',
        ],
      },
      {
        name: 'Guidin’ George',
        type: 'Submission for EngHack2019',
        tools: ['Google Maps Api', 'Django', 'Twilio SMS API'],
        achievements: [
          'Created an SMS application during a 36 hour hackathon that provides Wifi-less users with geographic directions.',
        ],
      },
    ],
  },
};
