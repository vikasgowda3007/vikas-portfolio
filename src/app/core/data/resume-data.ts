import { Resume } from '../models/resume/resume.module';

export const RESUME: Resume = {
  name: 'Vikas Keshavamurthy',
  role: 'Software engineer with 6 years across data security and telecommunications',
  location: 'Tempe, AZ',
  summary:
    'Experienced engineer intentionally pursuing internships and adjacent product engineering roles while completing an M.S. in Computer Science at Arizona State University. Strongest in Angular-first full-stack delivery with Java or Node.js, with hands-on experience in secure product design, release leadership, and AI-assisted workflow tooling.',
  profileStatement:
    'Currently completing an M.S. in Computer Science at Arizona State University, serving as a Teaching Assistant / Grader for Software Security, and looking for opportunities where secure systems and thoughtful product experience intersect.',
  portrait: {
    src: 'assets/portraits/vikas-hero-1120.jpg',
    srcSet: 'assets/portraits/vikas-hero-760.jpg 760w, assets/portraits/vikas-hero-1120.jpg 1120w',
    avifSrcSet: 'assets/portraits/vikas-hero-760.avif 760w, assets/portraits/vikas-hero-1120.avif 1120w',
    alt: 'Portrait of Vikas Keshavamurthy smiling in a warm indoor setting',
    width: 1120,
    height: 1382,
    objectPosition: 'center 16%'
  },
  metrics: [
    {
      value: '6',
      label: 'years shipped',
      detail: 'Enterprise data security and telecom platforms'
    },
    {
      value: '30%',
      label: 'bug backlog reduction',
      detail: 'Driven through Angular UI modernization'
    },
    {
      value: '20%',
      label: 'faster testing',
      detail: 'Component tests and release workflow improvements'
    }
  ],
  coursework: [
    'Software and Network Security',
    'Distributed Database Systems',
    'AI',
    'Knowledge Representation',
    'Software Design'
  ],
  currentFocus: [
    'M.S. in Computer Science at Arizona State University',
    'Teaching Assistant / Grader for Software Security',
    'Angular + Java / Node.js product engineering',
    'Python automation and AI-assisted development workflows'
  ],
  links: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vikas-keshavamurthy-b027b1165',
      external: true
    },
    {
      label: 'GitHub',
      href: 'https://github.com/vikasgowda3007',
      external: true
    },
    {
      label: 'Resume PDF',
      href: 'assets/Vikas-Keshavamurthy-Software-Developer-Intern.pdf',
      external: false
    }
  ],
  experience: [
    {
      company: 'Delphix by Perforce',
      role: 'Senior Software Development Engineer',
      period: 'Jul 2021 – May 2025',
      location: 'India',
      description:
        'Owned full-stack delivery for the Masking Engine, translating security-heavy workflows into cleaner Angular experiences backed by Java services and reliable release operations.',
      impact:
        'Reduced bug backlog by 30%, improved customer satisfaction by 15%, and cut testing time by 20% through UI modernization and release discipline.',
      highlights: [
        'Built and maintained RESTful integrations between the Angular frontend and Java backend services for an enterprise data security platform.',
        'Led end-to-end release cycles, coordinating QA signoffs and deployments across two parallel development teams.',
        'Performed systematic debugging and performance work across Java, JavaScript, Docker, PostgreSQL, and internal automation scripts.'
      ],
      technologies: ['Angular', 'Java', 'JavaScript', 'Python', 'Docker', 'PostgreSQL', 'Jenkins']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Senior Software Developer',
      period: 'Aug 2019 – Jul 2021',
      location: 'India',
      description:
        'Built telecom messaging infrastructure across SMS, MMS, and USSD, combining high-throughput backend services with pricing and operations tooling.',
      impact:
        'Grew into the team’s SMSC subject matter expert while helping ship routing, firewall, and pricing workflows for telecom clients.',
      highlights: [
        'Designed and developed the UNO messaging platform for 4G traffic using GoLang, MySQL, Oracle DB, and Redis.',
        'Implemented time and volume restrictions for SMS traffic plus an Opt-In / Opt-Out Do Not Disturb workflow using Java and MySQL.',
        'Automated supplier price ingestion and cost application using Node.js, React.js, and Oracle DB.'
      ],
      technologies: ['GoLang', 'Java', 'Node.js', 'React.js', 'MySQL', 'Oracle DB', 'Redis', 'Linux/Unix']
    },
    {
      company: 'Comviva, A Tech Mahindra Company',
      role: 'Software Engineering Intern',
      period: 'Jan 2019 – May 2019',
      location: 'India',
      description:
        'Focused on observability and search-driven traceability for production systems during an early engineering internship.',
      highlights: [
        'Designed Elasticsearch-based activity logging to capture and query user actions in real time.',
        'Integrated Lucene search capabilities to improve retrieval speed and platform traceability.'
      ],
      technologies: ['Elasticsearch', 'Lucene', 'Java']
    }
  ],
  projects: [
    {
      name: 'AI Resume Generator',
      type: 'Personal Project',
      tagline: 'Grounded document generation with structured profile context.',
      description:
        'Built an AI-powered resume and cover letter generator using Python, Groq LLM APIs, and python-docx, with a master-profile architecture that keeps generated application materials aligned to real experience.',
      period: 'Mar 2026',
      technologies: ['Python', 'Groq LLM API', 'python-docx', 'Prompt Engineering']
    },
    {
      name: 'Self-Tracking Telescope',
      type: 'Class Project',
      tagline: 'Autonomous celestial tracking through sensors and control loops.',
      description:
        'Designed and developed a self-tracking telescope that combines sensing, actuation, and control logic to automatically follow celestial objects and maintain focus.',
      period: 'Sep 2025',
      technologies: ['Embedded Systems', 'Real-time Computing', 'Sensors & Actuators']
    },
    {
      name: 'Kavach Webpage',
      type: 'Personal Project',
      tagline: 'Public-facing onboarding and publishing experience for Kavach.',
      description:
        'Developed an Angular-based webpage for onboarding and publishing information around the open-source Kavach authentication library.',
      period: 'Summer 2020',
      technologies: ['Angular', 'HTML', 'CSS', 'JavaScript']
    }
  ],
  skills: [
    {
      category: 'Frontend & Product',
      items: ['Angular', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Interface modernization']
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Node.js', 'RESTful APIs', 'LLM APIs', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Languages',
      items: ['Java', 'Python', 'C++', 'JavaScript', 'GoLang', 'Bash']
    },
    {
      category: 'Data, DevOps & Tooling',
      items: ['PostgreSQL', 'MySQL', 'Oracle DB', 'MS SQL', 'Docker', 'Jenkins', 'GitHub Copilot']
    },
    {
      category: 'Recognition',
      items: [
        'Engineering Excellence Award (2024)',
        'Best Talent Award (FY20-21)',
        'Heroes of MBS Award'
      ]
    },
    {
      category: 'Certifications',
      items: [
        'The Complete Node.js Developer Course (Udemy)',
        'GoLang (Udemy)',
        'React.js (Udemy)',
        'SIP (Udemy)'
      ]
    }
  ],
  education: [
    {
      school: 'Arizona State University',
      degree: 'M.S. in Computer Science',
      period: 'Aug 2025 – May 2027',
      location: 'Tempe, AZ',
      gpa: '3.67',
      highlights: [
        'Teaching Assistant / Grader for Software Security',
        'Coursework: Software and Network Security, Distributed Database Systems, AI, Knowledge Representation, Software Design'
      ]
    },
    {
      school: 'R.V. College of Engineering',
      degree: 'B.E. in Computer Science',
      period: 'Aug 2015 – May 2019',
      location: 'Bangalore, India',
      gpa: '3.33'
    }
  ],
  contact: {
    email: 'vkeshav5@asu.edu',
    phone: '623-274-7294',
    location: 'Tempe, AZ',
    availability:
      'Open to software engineering internships and adjacent product development roles while completing an M.S. in Computer Science.',
    authorization: 'F-1 student on CPT'
  }
};
