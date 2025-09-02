// PathPilot JavaScript - Complete functionality

// Career data with detailed information
const careerData = {
    'product-manager': {
        title: 'Product Manager',
        icon: 'fas fa-briefcase',
        description: 'Lead product development and strategy, working with cross-functional teams to deliver user-centric solutions.',
        overview: {
            summary: 'Product Managers bridge the gap between business goals and user needs, leading product development from conception to launch.',
            dailyLife: 'Meetings with stakeholders, user research, roadmap planning, and team coordination.',
            responsibilities: 'Define product vision, prioritize features, analyze user data, and ensure successful product launches.',
            workCulture: 'Collaborative, fast-paced environment with emphasis on communication and strategic thinking.',
            salaryRange: '₹8-25 LPA (Entry to Senior)',
            growthOpportunities: 'Senior PM, Director of Product, VP of Product, Chief Product Officer'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Product thinking', 'User research basics', 'Agile methodologies'],
                tools: ['Figma', 'Jira', 'Google Analytics'],
                timeline: '6 months'
            },
            {
                phase: 'Growth (6-18 months)',
                skills: ['Data analysis', 'Stakeholder management', 'A/B testing'],
                tools: ['Mixpanel', 'Amplitude', 'SQL basics'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['Product strategy', 'Team leadership', 'Business metrics'],
                tools: ['Advanced analytics', 'Product roadmap tools', 'Presentation skills'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Product Strategy', completed: false },
            { name: 'User Research', completed: false },
            { name: 'Data Analysis', completed: false },
            { name: 'Stakeholder Management', completed: false },
            { name: 'Agile Methodologies', completed: false },
            { name: 'A/B Testing', completed: false },
            { name: 'Roadmap Planning', completed: false },
            { name: 'Team Leadership', completed: false }
        ],
        resources: [
            {
                title: 'HelloPM - Product Management Channel',
                type: 'YouTube',
                url: 'https://www.youtube.com/@hellopm',
                level: 'beginner',
                tags: ['free', 'mentor-picked'],
                description: 'Comprehensive product management tutorials and insights'
            },
            {
                title: 'How to Crack Product Manager Interviews',
                type: 'Blog',
                url: 'https://www.preplaced.in/blog/how-to-crack-product-manager-interviews',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Step-by-step guide on cracking PM interviews with expert insights'
            },
            {
                title: 'Introduction to Product Management',
                type: 'Course',
                url: 'https://www.upgrad.com/free-courses/it-technology/introduction-to-product-management-free-course/',
                level: 'beginner',
                tags: ['free', 'mentor-picked'],
                description: 'Comprehensive introduction to product management fundamentals from upGrad'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹8-25 LPA with excellent growth potential',
                examples: 'Google, Amazon, Microsoft, startups',
                stability: 'High demand, recession-resistant role',
                growth: 'Clear path to senior leadership positions'
            },
            hi: {
                earning: '₹8-25 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'Google, Amazon, Microsoft, स्टार्टअप्स',
                stability: 'उच्च मांग, मंदी प्रतिरोधी भूमिका',
                growth: 'वरिष्ठ नेतृत्व पदों तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Spotify Recommendation System',
                description: 'Built a music recommendation engine using user behavior data',
                impact: 'Improved user engagement by 40%',
                skills: ['Data Analysis', 'A/B Testing', 'User Research']
            },
            {
                title: 'Uber Driver App Redesign',
                description: 'Redesigned the driver app to improve usability and safety',
                impact: 'Reduced driver churn by 25%',
                skills: ['UX Design', 'User Research', 'Prototyping']
            },
            {
                title: 'Netflix Content Strategy',
                description: 'Developed content recommendation and personalization strategy',
                impact: 'Increased viewing time by 30%',
                skills: ['Product Strategy', 'Data Analysis', 'User Research']
            }
        ]
    },
    'software-developer': {
        title: 'Software Developer',
        icon: 'fas fa-code',
        description: 'Build and maintain software applications, websites, and systems using programming languages and frameworks.',
        overview: {
            summary: 'Software Developers create digital solutions that solve real-world problems through coding and system design.',
            dailyLife: 'Writing code, debugging, code reviews, and collaborating with team members.',
            responsibilities: 'Develop software, fix bugs, optimize performance, and maintain code quality.',
            workCulture: 'Technical, collaborative environment with focus on continuous learning and innovation.',
            salaryRange: '₹6-20 LPA (Entry to Senior)',
            growthOpportunities: 'Senior Developer, Tech Lead, Software Architect, CTO'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Programming fundamentals', 'Version control', 'Basic algorithms'],
                tools: ['Git', 'VS Code', 'Command line'],
                timeline: '6 months'
            },
            {
                phase: 'Specialization (6-18 months)',
                skills: ['Web development', 'Database design', 'API development'],
                tools: ['React/Angular', 'Node.js', 'PostgreSQL'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['System design', 'Cloud platforms', 'DevOps'],
                tools: ['AWS/Azure', 'Docker', 'Kubernetes'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Programming Fundamentals', completed: false },
            { name: 'Web Development', completed: false },
            { name: 'Database Design', completed: false },
            { name: 'API Development', completed: false },
            { name: 'Version Control', completed: false },
            { name: 'Testing & Debugging', completed: false },
            { name: 'System Design', completed: false },
            { name: 'Cloud Platforms', completed: false }
        ],
        resources: [
            {
                title: 'Complete Web Development Bootcamp',
                type: 'Course',
                url: 'https://www.udemy.com/topic/web-development/free/?srsltid=AfmBOorY1P2m0yoeGOq1A2WmX1FJxVNg_3fOrBcTUBVc06QFutNZ3HkG',
                level: 'beginner',
                tags: ['free'],
                description: 'Learn HTML, CSS, JavaScript from scratch'
            },
            {
                title: 'React Fundamentals',
                type: 'YouTube',
                url: 'https://youtu.be/SqcY0GlETPk?si=cmr7w0DSk-Ue3arp',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Master React.js for modern web development'
            },
            {
                title: 'System Design Interview',
                type: 'Blog',
                url: 'https://medium.com/@sentalkssane/a-beginners-guide-to-system-design-76d64689788b',
                level: 'advanced',
                tags: ['free'],
                description: 'Prepare for system design interviews'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹6-20 LPA with excellent growth potential',
                examples: 'Tech companies, startups, consulting firms',
                stability: 'High demand, remote work opportunities',
                growth: 'Clear path to senior technical roles'
            },
            hi: {
                earning: '₹6-20 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'टेक कंपनियां, स्टार्टअप्स, कंसल्टिंग फर्म्स',
                stability: 'उच्च मांग, रिमोट वर्क अवसर',
                growth: 'वरिष्ठ तकनीकी भूमिकाओं तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Instagram Feed Algorithm',
                description: 'Developed the core algorithm that powers Instagram\'s personalized feed',
                impact: 'Serves 1 billion+ users daily',
                skills: ['Python', 'Machine Learning', 'System Design']
            },
            {
                title: 'WhatsApp End-to-End Encryption',
                description: 'Implemented secure messaging protocol for WhatsApp',
                impact: 'Protected 2 billion+ users\' privacy',
                skills: ['Cryptography', 'C++', 'Security']
            },
            {
                title: 'Google Maps Navigation',
                description: 'Built real-time navigation and traffic prediction system',
                impact: 'Used by 1 billion+ users monthly',
                skills: ['Java', 'Algorithms', 'Real-time Systems']
            }
        ]
    },
    'data-scientist': {
        title: 'Data Scientist',
        icon: 'fas fa-chart-bar',
        description: 'Analyze complex data to extract insights and build predictive models for business decisions.',
        overview: {
            summary: 'Data Scientists transform raw data into actionable insights using statistical analysis and machine learning.',
            dailyLife: 'Data cleaning, model building, statistical analysis, and presenting findings.',
            responsibilities: 'Analyze data, build ML models, create visualizations, and communicate insights.',
            workCulture: 'Analytical, research-focused environment with emphasis on data-driven decisions.',
            salaryRange: '₹8-25 LPA (Entry to Senior)',
            growthOpportunities: 'Senior Data Scientist, ML Engineer, Data Science Manager, Chief Data Officer'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Statistics', 'Python programming', 'Data manipulation'],
                tools: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
                timeline: '6 months'
            },
            {
                phase: 'ML & Analytics (6-18 months)',
                skills: ['Machine learning', 'Data visualization', 'SQL'],
                tools: ['Scikit-learn', 'Matplotlib', 'PostgreSQL'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['Deep learning', 'Big data', 'MLOps'],
                tools: ['TensorFlow', 'Spark', 'Docker'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Statistics & Mathematics', completed: false },
            { name: 'Python Programming', completed: false },
            { name: 'Machine Learning', completed: false },
            { name: 'Data Visualization', completed: false },
            { name: 'SQL & Databases', completed: false },
            { name: 'Deep Learning', completed: false },
            { name: 'Big Data Tools', completed: false },
            { name: 'MLOps', completed: false }
        ],
        resources: [
            {
                title: 'Python for Data Science',
                type: 'YouTube',
                url: 'https://youtu.be/mkv5mxYu0Wk?si=x7HZ2T0NTMk8hSdU',
                level: 'beginner',
                tags: ['free'],
                description: 'Learn Python fundamentals for data analysis'
            },
            {
                title: 'Machine Learning',
                type: 'YouTube',
                url: 'https://youtu.be/JxgmHe2NyeY?si=HWDvtM3UEFKurbQU',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Complete machine learning course'
            },
            {
                title: 'Deep Learning Specialization',
                type: 'Course',
                url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
                level: 'advanced',
                tags: ['free'],
                description: 'Advanced neural networks and deep learning'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹8-25 LPA with excellent growth potential',
                examples: 'Tech companies, consulting firms, research labs',
                stability: 'High demand, AI/ML focus',
                growth: 'Clear path to senior data roles'
            },
            hi: {
                earning: '₹8-25 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'टेक कंपनियां, कंसल्टिंग फर्म्स, रिसर्च लैब्स',
                stability: 'उच्च मांग, AI/ML फोकस',
                growth: 'वरिष्ठ डेटा भूमिकाओं तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Netflix Recommendation Engine',
                description: 'Built AI-powered content recommendation system',
                impact: 'Saves Netflix $1 billion annually',
                skills: ['Python', 'Machine Learning', 'Big Data']
            },
            {
                title: 'Tesla Autopilot System',
                description: 'Developed computer vision models for autonomous driving',
                impact: 'Processes 2,000+ frames per second',
                skills: ['Deep Learning', 'Computer Vision', 'Python']
            },
            {
                title: 'Amazon Product Recommendations',
                description: 'Created personalized product suggestion algorithm',
                impact: 'Drives 35% of Amazon\'s revenue',
                skills: ['Recommendation Systems', 'A/B Testing', 'SQL']
            }
        ]
    },
    'ux-designer': {
        title: 'UX/UI Designer',
        icon: 'fas fa-palette',
        description: 'Create user-centered digital experiences through research, design, and prototyping.',
        overview: {
            summary: 'UX/UI Designers create intuitive and beautiful digital experiences that users love to interact with.',
            dailyLife: 'User research, wireframing, prototyping, and collaborating with developers.',
            responsibilities: 'Conduct user research, create wireframes, design interfaces, and test usability.',
            workCulture: 'Creative, collaborative environment with focus on user empathy and design thinking.',
            salaryRange: '₹5-18 LPA (Entry to Senior)',
            growthOpportunities: 'Senior Designer, Design Lead, UX Manager, Chief Design Officer'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Design principles', 'User research', 'Wireframing'],
                tools: ['Figma', 'Sketch', 'Adobe XD'],
                timeline: '6 months'
            },
            {
                phase: 'Specialization (6-18 months)',
                skills: ['Prototyping', 'Usability testing', 'Design systems'],
                tools: ['Framer', 'InVision', 'Design tokens'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['Design strategy', 'Team leadership', 'Design operations'],
                tools: ['Advanced prototyping', 'Design analytics', 'Design systems'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Design Principles', completed: false },
            { name: 'User Research', completed: false },
            { name: 'Wireframing', completed: false },
            { name: 'Prototyping', completed: false },
            { name: 'Usability Testing', completed: false },
            { name: 'Design Systems', completed: false },
            { name: 'Design Strategy', completed: false },
            { name: 'Design Leadership', completed: false }
        ],
        resources: [
            {
                title: 'UX Design Fundamentals Course',
                type: 'Course',
                url: 'https://www.springboard.com/resources/learning-paths/user-experience-design/',
                level: 'beginner',
                tags: ['free'],
                description: 'Learn the basics of user experience design from Springboard'
            },
            {
                title: 'Figma Masterclass',
                type: 'YouTube',
                url: 'https://youtu.be/PithB36un3w?si=oziEnXXVsQXXNJho',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Master Figma for UI/UX design'
            },
            {
                title: 'Design System Guide',
                type: 'Blog',
                url: 'https://www.untitledui.com/blog/what-is-a-design-system',
                level: 'advanced',
                tags: ['free'],
                description: 'Build scalable design systems'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹5-18 LPA with excellent growth potential',
                examples: 'Tech companies, design agencies, startups',
                stability: 'High demand, creative work',
                growth: 'Clear path to senior design roles'
            },
            hi: {
                earning: '₹5-18 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'टेक कंपनियां, डिज़ाइन एजेंसियां, स्टार्टअप्स',
                stability: 'उच्च मांग, रचनात्मक कार्य',
                growth: 'वरिष्ठ डिज़ाइन भूमिकाओं तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Apple iOS Design System',
                description: 'Designed the Human Interface Guidelines for iOS',
                impact: 'Used by 1.5 billion+ devices worldwide',
                skills: ['Design Systems', 'Prototyping', 'User Research']
            },
            {
                title: 'Airbnb Booking Experience',
                description: 'Redesigned the entire booking and search experience',
                impact: 'Increased bookings by 50%',
                skills: ['UX Research', 'Prototyping', 'User Testing']
            },
            {
                title: 'Spotify Mobile App Redesign',
                description: 'Completely redesigned the mobile app interface',
                impact: 'Improved user retention by 30%',
                skills: ['Mobile Design', 'User Research', 'Visual Design']
            }
        ]
    },
    'devops-architect': {
        title: 'DevOps Architect',
        icon: 'fas fa-server',
        description: 'Design and implement automated infrastructure and deployment pipelines for scalable applications.',
        overview: {
            summary: 'DevOps Architects bridge development and operations, creating efficient CI/CD pipelines and infrastructure automation.',
            dailyLife: 'Infrastructure design, automation scripting, monitoring setup, and team collaboration.',
            responsibilities: 'Design cloud architecture, automate deployments, manage infrastructure, and optimize performance.',
            workCulture: 'Technical, collaborative environment with focus on automation and efficiency.',
            salaryRange: '₹12-35 LPA (Mid to Senior)',
            growthOpportunities: 'Senior DevOps Engineer, Cloud Architect, Infrastructure Manager, CTO'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Linux administration', 'Scripting languages', 'Version control'],
                tools: ['Bash', 'Python', 'Git', 'Docker'],
                timeline: '6 months'
            },
            {
                phase: 'Cloud & Automation (6-18 months)',
                skills: ['Cloud platforms', 'Infrastructure as Code', 'CI/CD pipelines'],
                tools: ['AWS/Azure', 'Terraform', 'Jenkins', 'Kubernetes'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['Microservices architecture', 'Security practices', 'Performance optimization'],
                tools: ['Advanced cloud services', 'Security tools', 'Monitoring platforms'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Linux Administration', completed: false },
            { name: 'Cloud Platforms', completed: false },
            { name: 'Infrastructure as Code', completed: false },
            { name: 'CI/CD Pipelines', completed: false },
            { name: 'Container Orchestration', completed: false },
            { name: 'Monitoring & Logging', completed: false },
            { name: 'Security Practices', completed: false },
            { name: 'Performance Optimization', completed: false }
        ],
        resources: [
            {
                title: 'DevOps Fundamentals',
                type: 'Course',
                url: 'https://aws.amazon.com/training/learn-about/devops/?trk=cd0e962f-7a6e-499a-b161-007a2362b83d&sc_channel=ps&ef_id=Cj0KCQjwzOvEBhDVARIsADHfJJQy3zDwDznJqn6NsP-_tc2y9KDE88wz4s4ea6SWp6Q5PHqAttLsIjkaAmA5EALw_wcB:G:s&s_kwcid=AL!4422!3!472839475608!p!!g!!devops%20training!11363780094!110903189946&gclid=Cj0KCQjwzOvEBhDVARIsADHfJJQy3zDwDznJqn6NsP-_tc2y9KDE88wz4s4ea6SWp6Q5PHqAttLsIjkaAmA5EALw_wcB',
                level: 'beginner',
                tags: ['free'],
                description: 'Learn the basics of DevOps practices'
            },
            {
                title: 'AWS Cloud Practitioner',
                type: 'YouTube',
                url: 'https://www.youtube.com/live/WkJ0xB1dPwM?si=Giw2ABhxREmjMLCV',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Master AWS cloud services'
            },
            {
                title: 'Kubernetes Deep Dive',
                type: 'Blog',
                url: 'https://umbrellacost.com/blog/kubernetes-deep-dive/',
                level: 'advanced',
                tags: ['free'],
                description: 'Advanced container orchestration'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹12-35 LPA with excellent growth potential',
                examples: 'Tech companies, cloud providers, consulting firms',
                stability: 'High demand, cloud-focused role',
                growth: 'Clear path to senior technical leadership'
            },
            hi: {
                earning: '₹12-35 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'टेक कंपनियां, क्लाउड प्रोवाइडर्स, कंसल्टिंग फर्म्स',
                stability: 'उच्च मांग, क्लाउड-फोकस्ड भूमिका',
                growth: 'वरिष्ठ तकनीकी नेतृत्व तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Netflix Microservices Architecture',
                description: 'Designed scalable microservices infrastructure for Netflix',
                impact: 'Handles 1 billion+ API calls daily',
                skills: ['Microservices', 'Cloud Architecture', 'Automation']
            },
            {
                title: 'Uber Infrastructure Automation',
                description: 'Built automated deployment pipeline for Uber services',
                impact: 'Deploys 1000+ services daily',
                skills: ['CI/CD', 'Automation', 'Cloud Platforms']
            },
            {
                title: 'Spotify Container Orchestration',
                description: 'Implemented Kubernetes-based infrastructure for Spotify',
                impact: 'Manages 1000+ microservices',
                skills: ['Kubernetes', 'Containerization', 'Orchestration']
            }
        ]
    },
    'cybersecurity-architect': {
        title: 'Cybersecurity Architect',
        icon: 'fas fa-shield-alt',
        description: 'Design and implement comprehensive security solutions to protect organizations from cyber threats.',
        overview: {
            summary: 'Cybersecurity Architects create robust security frameworks and protect digital assets from evolving threats.',
            dailyLife: 'Security assessment, threat modeling, policy development, and incident response planning.',
            responsibilities: 'Design security architecture, implement controls, conduct audits, and manage security incidents.',
            workCulture: 'Analytical, detail-oriented environment with emphasis on security and compliance.',
            salaryRange: '₹15-40 LPA (Mid to Senior)',
            growthOpportunities: 'Senior Security Architect, CISO, Security Consultant, Chief Security Officer'
        },
        roadmap: [
            {
                phase: 'Foundation (0-6 months)',
                skills: ['Network security', 'Security fundamentals', 'Basic cryptography'],
                tools: ['Wireshark', 'Nmap', 'Metasploit', 'Linux'],
                timeline: '6 months'
            },
            {
                phase: 'Specialization (6-18 months)',
                skills: ['Penetration testing', 'Security architecture', 'Compliance frameworks'],
                tools: ['Burp Suite', 'Nessus', 'SIEM tools', 'Cloud security'],
                timeline: '12 months'
            },
            {
                phase: 'Advanced (18+ months)',
                skills: ['Threat intelligence', 'Incident response', 'Security strategy'],
                tools: ['Advanced security tools', 'Threat hunting', 'Security automation'],
                timeline: 'Ongoing'
            }
        ],
        skills: [
            { name: 'Network Security', completed: false },
            { name: 'Penetration Testing', completed: false },
            { name: 'Security Architecture', completed: false },
            { name: 'Incident Response', completed: false },
            { name: 'Threat Intelligence', completed: false },
            { name: 'Compliance Frameworks', completed: false },
            { name: 'Security Automation', completed: false },
            { name: 'Risk Assessment', completed: false }
        ],
        resources: [
            {
                title: 'Cybersecurity Fundamentals',
                type: 'Course',
                url: 'https://www.coursera.org/learn/cybersecurity-for-everyone',
                level: 'beginner',
                tags: ['free'],
                description: 'Learn cybersecurity fundamentals from University of Maryland'
            },
            {
                title: 'Ethical Hacking Course',
                type: 'YouTube',
                url: 'https://youtu.be/dz7Ntp7KQGA?si=kmIxYgUrG-lxo4uE',
                level: 'intermediate',
                tags: ['free', 'mentor-picked'],
                description: 'Master penetration testing techniques'
            },
            {
                title: 'Security Architecture Design',
                type: 'Blog',
                url: 'https://www.future-processing.com/blog/security-architecture-101-understanding-the-basics/',
                level: 'advanced',
                tags: ['free'],
                description: 'Design enterprise security solutions'
            }
        ],
        parentSummary: {
            en: {
                earning: '₹15-40 LPA with excellent growth potential',
                examples: 'Financial institutions, tech companies, government agencies',
                stability: 'High demand, recession-resistant role',
                growth: 'Clear path to senior security leadership'
            },
            hi: {
                earning: '₹15-40 लाख प्रति वर्ष, उत्कृष्ट विकास क्षमता के साथ',
                examples: 'वित्तीय संस्थान, टेक कंपनियां, सरकारी एजेंसियां',
                stability: 'उच्च मांग, मंदी प्रतिरोधी भूमिका',
                growth: 'वरिष्ठ सुरक्षा नेतृत्व तक स्पष्ट मार्ग'
            }
        },
        famousProjects: [
            {
                title: 'Google Zero Trust Security',
                description: 'Implemented zero-trust security model for Google infrastructure',
                impact: 'Protects 100,000+ employees globally',
                skills: ['Zero Trust', 'Identity Management', 'Access Control']
            },
            {
                title: 'Microsoft Security Response',
                description: 'Built automated threat detection and response system',
                impact: 'Detects 1 million+ threats daily',
                skills: ['Threat Detection', 'Automation', 'Incident Response']
            },
            {
                title: 'Amazon Security Architecture',
                description: 'Designed comprehensive security framework for AWS',
                impact: 'Secures 200+ AWS services',
                skills: ['Cloud Security', 'Compliance', 'Risk Management']
            }
        ]
    }
};

// Career comparison data
const careerComparisonData = {
    'ux-designer': {
        salaryRanges: {
            'entry': { 'US': '$45,000 - $65,000', 'UK': '£25,000 - £35,000', 'India': '₹4,00,000 - ₹6,00,000' },
            'mid': { 'US': '$65,000 - $95,000', 'UK': '£35,000 - £55,000', 'India': '₹6,00,000 - ₹12,00,000' },
            'senior': { 'US': '$95,000 - $130,000', 'UK': '£55,000 - £80,000', 'India': '₹12,00,000 - ₹20,00,000' }
        },
        jobMarketDemand: { level: 'High', trend: 'Growing', score: 9 },
        workLifeBalance: { score: 8, description: 'Flexible hours, remote work common' },
        skillRequirements: { technical: 6, soft: 8, creative: 9 },
        educationNeeded: { level: 'Bachelor\'s', field: 'Design/Arts/CS', years: 4 },
        growthOpportunities: { score: 8, paths: ['Senior Designer', 'Design Lead', 'UX Director'] },
        automationRisk: { level: 'Low', score: 2, reason: 'Creative and human-centered work' }
    },
    'software-developer': {
        salaryRanges: {
            'entry': { 'US': '$55,000 - $75,000', 'UK': '£30,000 - £45,000', 'India': '₹5,00,000 - ₹8,00,000' },
            'mid': { 'US': '$75,000 - $110,000', 'UK': '£45,000 - £70,000', 'India': '₹8,00,000 - ₹18,00,000' },
            'senior': { 'US': '$110,000 - $150,000', 'UK': '£70,000 - £100,000', 'India': '₹18,00,000 - ₹35,00,000' }
        },
        jobMarketDemand: { level: 'Very High', trend: 'Rapidly Growing', score: 10 },
        workLifeBalance: { score: 7, description: 'Good balance, some overtime during releases' },
        skillRequirements: { technical: 9, soft: 6, creative: 5 },
        educationNeeded: { level: 'Bachelor\'s', field: 'Computer Science/Engineering', years: 4 },
        growthOpportunities: { score: 9, paths: ['Senior Developer', 'Tech Lead', 'Engineering Manager'] },
        automationRisk: { level: 'Medium', score: 5, reason: 'Some coding tasks can be automated' }
    },
    'product-manager': {
        salaryRanges: {
            'entry': { 'US': '$60,000 - $85,000', 'UK': '£35,000 - £50,000', 'India': '₹6,00,000 - ₹10,00,000' },
            'mid': { 'US': '$85,000 - $120,000', 'UK': '£50,000 - £75,000', 'India': '₹10,00,000 - ₹20,00,000' },
            'senior': { 'US': '$120,000 - $160,000', 'UK': '£75,000 - £110,000', 'India': '₹20,00,000 - ₹40,00,000' }
        },
        jobMarketDemand: { level: 'High', trend: 'Growing', score: 8 },
        workLifeBalance: { score: 6, description: 'Moderate balance, meetings-heavy schedule' },
        skillRequirements: { technical: 5, soft: 9, creative: 6 },
        educationNeeded: { level: 'Bachelor\'s', field: 'Business/Engineering/Any', years: 4 },
        growthOpportunities: { score: 9, paths: ['Senior PM', 'Product Director', 'VP Product'] },
        automationRisk: { level: 'Low', score: 3, reason: 'Strategic and leadership-focused role' }
    },
    'data-scientist': {
        salaryRanges: {
            'entry': { 'US': '$65,000 - $90,000', 'UK': '£35,000 - £55,000', 'India': '₹6,00,000 - ₹10,00,000' },
            'mid': { 'US': '$90,000 - $130,000', 'UK': '£55,000 - £85,000', 'India': '₹10,00,000 - ₹22,00,000' },
            'senior': { 'US': '$130,000 - $180,000', 'UK': '£85,000 - £120,000', 'India': '₹22,00,000 - ₹45,00,000' }
        },
        jobMarketDemand: { level: 'Very High', trend: 'Rapidly Growing', score: 10 },
        workLifeBalance: { score: 7, description: 'Good balance, some crunch during analysis' },
        skillRequirements: { technical: 9, soft: 6, creative: 4 },
        educationNeeded: { level: 'Master\'s', field: 'Statistics/CS/Mathematics', years: 6 },
        growthOpportunities: { score: 8, paths: ['Senior Data Scientist', 'Lead DS', 'Chief Data Officer'] },
        automationRisk: { level: 'Medium', score: 6, reason: 'Some analysis tasks can be automated' }
    },
    'devops-architect': {
        salaryRanges: {
            'entry': { 'US': '$70,000 - $95,000', 'UK': '£40,000 - £60,000', 'India': '₹8,00,000 - ₹12,00,000' },
            'mid': { 'US': '$95,000 - $140,000', 'UK': '£60,000 - £90,000', 'India': '₹12,00,000 - ₹25,00,000' },
            'senior': { 'US': '$140,000 - $190,000', 'UK': '£90,000 - £130,000', 'India': '₹25,00,000 - ₹50,00,000' }
        },
        jobMarketDemand: { level: 'Very High', trend: 'Rapidly Growing', score: 10 },
        workLifeBalance: { score: 6, description: 'Good balance, some on-call responsibilities' },
        skillRequirements: { technical: 9, soft: 7, creative: 4 },
        educationNeeded: { level: 'Bachelor\'s', field: 'Computer Science/IT/Engineering', years: 4 },
        growthOpportunities: { score: 9, paths: ['Senior DevOps', 'DevOps Lead', 'Infrastructure Architect'] },
        automationRisk: { level: 'Medium', score: 4, reason: 'Infrastructure automation reduces manual work' }
    },
    'cybersecurity-architect': {
        salaryRanges: {
            'entry': { 'US': '$75,000 - $100,000', 'UK': '£45,000 - £65,000', 'India': '₹9,00,000 - ₹15,00,000' },
            'mid': { 'US': '$100,000 - $150,000', 'UK': '£65,000 - £95,000', 'India': '₹15,00,000 - ₹30,00,000' },
            'senior': { 'US': '$150,000 - $200,000', 'UK': '£95,000 - £140,000', 'India': '₹30,00,000 - ₹60,00,000' }
        },
        jobMarketDemand: { level: 'Very High', trend: 'Rapidly Growing', score: 10 },
        workLifeBalance: { score: 7, description: 'Good balance, some emergency response work' },
        skillRequirements: { technical: 9, soft: 6, creative: 3 },
        educationNeeded: { level: 'Bachelor\'s', field: 'Computer Science/Cybersecurity/IT', years: 4 },
        growthOpportunities: { score: 9, paths: ['Senior Security Architect', 'Security Lead', 'CISO'] },
        automationRisk: { level: 'Low', score: 3, reason: 'Security expertise requires human judgment' }
    }
};

// New quiz scoring system
const careerMapping = {
    'ux-designer': { score: 0, label: 'UI/UX Designer' },
    'software-developer': { score: 0, label: 'Software Developer' },
    'product-manager': { score: 0, label: 'Product Manager' },
    'data-scientist': { score: 0, label: 'Data Scientist' }
};

// Question mapping for the new scoring system
const questionMapping = {
    1: { 'A': 'ux-designer', 'B': 'software-developer', 'C': 'product-manager', 'D': 'data-scientist' },
    2: { 'A': 'ux-designer', 'B': 'software-developer', 'C': 'data-scientist', 'D': 'product-manager' },
    3: { 'A': 'data-scientist', 'B': 'ux-designer', 'C': 'software-developer', 'D': 'product-manager' },
    4: { 'A': 'product-manager', 'B': 'software-developer', 'C': 'ux-designer', 'D': 'data-scientist' },
    5: { 'A': 'ux-designer', 'B': 'software-developer', 'C': 'data-scientist', 'D': 'product-manager' },
    6: { 'A': 'ux-designer', 'B': 'software-developer', 'C': 'product-manager', 'D': 'data-scientist' },
    7: { 'A': 'product-manager', 'B': 'ux-designer', 'C': 'software-developer', 'D': 'data-scientist' },
    8: { 'A': 'ux-designer', 'B': 'product-manager', 'C': 'software-developer', 'D': 'data-scientist' }
};

// Global variables
let currentQuestion = 1;
let quizAnswers = {};
let selectedCareer = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        initializeHomepage();
    } else if (currentPage === 'quiz.html') {
        initializeQuiz();
    } else if (currentPage === 'result.html') {
        initializeResult();
    } else if (currentPage === 'career-explore.html') {
        initializeCareerExplore();
        initializeComparisonTool();
    }
}

// Homepage functionality
function initializeHomepage() {
    // Initialize FAQ functionality
    initializeFAQ();
    
    // Initialize mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize career explore cards functionality
    initializeCareerExploreCards();
}

// Initialize career explore cards on homepage
function initializeCareerExploreCards() {
    const careerCards = document.querySelectorAll('.career-explore-card');
    
    careerCards.forEach(card => {
        card.addEventListener('click', function() {
            const role = this.dataset.role;
            if (role) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                
                // Store the selected career role
                localStorage.setItem('selected_career_role', role);
                
                // Small delay for visual feedback, then redirect
                setTimeout(() => {
                    window.location.href = 'career-explore.html';
                }, 150);
            }
        });
    });
}

// Career explore page functionality
function initializeCareerExplore() {
    const aspireButtons = document.querySelectorAll('.aspire-role-btn');
    const backButton = document.getElementById('back-to-selection');
    const saveButton = document.getElementById('save-career');
    
    aspireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.dataset.role;
            showCareerDetails(role);
        });
    });
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            hideCareerDetails();
        });
    }
    
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const currentRole = localStorage.getItem('current_exploring_role');
            if (currentRole) {
                const savedCareers = JSON.parse(localStorage.getItem('saved_careers') || '[]');
                if (!savedCareers.includes(currentRole)) {
                    savedCareers.push(currentRole);
                    localStorage.setItem('saved_careers', JSON.stringify(savedCareers));
                    showNotification('Career saved to your favorites!', 'success');
                } else {
                    showNotification('This career is already saved!', 'info');
                }
            }
        });
    }
    
    // Check if a career role was selected from homepage
    const selectedRole = localStorage.getItem('selected_career_role');
    if (selectedRole) {
        // Clear the stored role
        localStorage.removeItem('selected_career_role');
        
        // Automatically show the career details
        showCareerDetails(selectedRole);
    }
}

function showCareerDetails(role) {
    const career = careerData[role];
    if (!career) return;
    
    // Store current role
    localStorage.setItem('current_exploring_role', role);
    
    // Update title and description
    document.getElementById('career-title').textContent = career.title;
    document.getElementById('career-description').textContent = career.description;
    
    // Update skills grid
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = career.skills.map(skill => `
        <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <i class="fas fa-check-circle text-green-600 mr-3"></i>
            <span class="text-gray-700 font-medium">${skill.name}</span>
        </div>
    `).join('');
    
    // Update learning path
    const learningPath = document.getElementById('learning-path');
    learningPath.innerHTML = career.roadmap.map((phase, index) => `
        <div class="bg-white border border-gray-200 p-4 rounded-lg">
            <div class="flex items-center mb-3">
                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">${index + 1}</span>
                </div>
                <h4 class="font-semibold text-gray-800">${phase.phase}</h4>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <h5 class="font-medium text-gray-700 mb-2">Skills to Learn:</h5>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${phase.skills.map(skill => `<li>• ${skill}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5 class="font-medium text-gray-700 mb-2">Tools to Master:</h5>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${phase.tools.map(tool => `<li>• ${tool}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="mt-3 text-sm text-gray-500">
                <i class="fas fa-clock mr-1"></i>Timeline: ${phase.timeline}
            </div>
        </div>
    `).join('');
    
    // Update career overview
    const overviewDetails = document.getElementById('career-overview-details');
    overviewDetails.innerHTML = `
        <div class="space-y-3">
            <div>
                <h4 class="font-semibold text-gray-800">Daily Life:</h4>
                <p class="text-sm text-gray-600">${career.overview.dailyLife}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800">Responsibilities:</h4>
                <p class="text-sm text-gray-600">${career.overview.responsibilities}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800">Work Culture:</h4>
                <p class="text-sm text-gray-600">${career.overview.workCulture}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800">Salary Range:</h4>
                <p class="text-sm text-gray-600">${career.overview.salaryRange}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800">Growth Opportunities:</h4>
                <p class="text-sm text-gray-600">${career.overview.growthOpportunities}</p>
            </div>
        </div>
    `;
    
    // Update top resources
    const topResources = document.getElementById('top-resources');
    topResources.innerHTML = career.resources.map(resource => `
        <div class="bg-white p-3 rounded-lg border">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-medium text-gray-500">${resource.type}</span>
                <div class="flex space-x-1">
                    ${resource.tags.map(tag => `
                        <span class="resource-tag tag-${tag}">#${tag}</span>
                    `).join('')}
                </div>
            </div>
            <h5 class="font-semibold text-gray-800 text-sm mb-1">${resource.title}</h5>
            <p class="text-xs text-gray-600 mb-2">${resource.description}</p>
            <a href="${resource.url}" target="_blank" class="text-blue-600 hover:text-blue-800 text-xs font-medium">
                <i class="fas fa-external-link-alt mr-1"></i>Visit Resource
            </a>
        </div>
    `).join('');
    
    // Update famous projects sidebar
    const famousProjectsSidebar = document.getElementById('famous-projects-sidebar');
    famousProjectsSidebar.innerHTML = career.famousProjects.map(project => `
        <div class="bg-white p-3 rounded-lg border">
            <h5 class="font-semibold text-gray-800 text-sm mb-1">${project.title}</h5>
            <p class="text-xs text-gray-600 mb-2">${project.description}</p>
            <div class="text-xs text-green-600 font-medium mb-2">${project.impact}</div>
            <div class="flex flex-wrap gap-1">
                ${project.skills.slice(0, 2).map(skill => `
                    <span class="bg-blue-600 text-white px-1 py-0.5 rounded text-xs">${skill}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    // Show the details section
    document.getElementById('career-details').classList.remove('hidden');
    
    // Scroll to the details section
    document.getElementById('career-details').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function hideCareerDetails() {
    document.getElementById('career-details').classList.add('hidden');
    localStorage.removeItem('current_exploring_role');
}

function showCareerModal(role) {
    const career = careerData[role];
    if (!career) return;
    
    // Create modal content
    const modalContent = `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">${career.title}</h2>
                        <button class="close-modal text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                    </div>
                    
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Role Overview</h3>
                            <p class="text-gray-600">${career.description}</p>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Key Skills Required</h3>
                            <div class="grid grid-cols-2 gap-2">
                                ${career.skills.slice(0, 6).map(skill => `
                                    <div class="flex items-center">
                                        <i class="fas fa-check-circle text-green-600 mr-2"></i>
                                        <span class="text-gray-700">${skill.name}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Salary Range</h3>
                            <p class="text-gray-600">${career.overview.salaryRange}</p>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Growth Opportunities</h3>
                            <p class="text-gray-600">${career.overview.growthOpportunities}</p>
                        </div>
                    </div>
                    
                    <div class="mt-8 flex space-x-4">
                        <a href="quiz.html" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                            Take Career Quiz
                        </a>
                        <button class="close-modal bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalContent);
    
    // Add close functionality
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = document.querySelector('.fixed.inset-0');
            if (modal) {
                modal.remove();
            }
        });
    });
    
    // Close modal when clicking outside
    const modal = document.querySelector('.fixed.inset-0');
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
}

// Quiz functionality
function initializeQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Load saved answers
    loadQuizAnswers();

    // Update progress
    updateProgress();

    // Option selection
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionNumber = parseInt(this.closest('.question-slide').dataset.question);
            const value = this.dataset.value;
            
            // Remove previous selection for this question
            const currentSlide = this.closest('.question-slide');
            currentSlide.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select current option
            this.classList.add('selected');
            
            // Save answer
            quizAnswers[questionNumber] = value;
            saveQuizAnswers();
        });
    });

    // Navigation
    nextBtn.addEventListener('click', function() {
        // Check if current question is answered
        if (!quizAnswers[currentQuestion]) {
            showNotification('Please select an answer before continuing.', 'error');
            return;
        }
        
        if (currentQuestion < 8) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateProgress();
        } else {
            // Submit quiz
            submitQuiz();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 1) {
            currentQuestion--;
            showQuestion(currentQuestion);
            updateProgress();
        }
    });

    // Show first question
    showQuestion(1);
}

function showQuestion(questionNumber) {
    // Hide all questions
    document.querySelectorAll('.question-slide').forEach(slide => {
        slide.classList.add('hidden');
    });
    
    // Show current question
    const currentSlide = document.querySelector(`[data-question="${questionNumber}"]`);
    currentSlide.classList.remove('hidden');
    
    // Update navigation buttons
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    if (questionNumber === 1) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    if (questionNumber === 8) {
        nextBtn.innerHTML = 'Submit Quiz<i class="fas fa-check ml-2"></i>';
    } else {
        nextBtn.innerHTML = 'Next<i class="fas fa-arrow-right ml-2"></i>';
    }
    
    // Restore previous selection
    const selectedValue = quizAnswers[questionNumber];
    if (selectedValue) {
        const selectedOption = currentSlide.querySelector(`[data-value="${selectedValue}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progress = (currentQuestion / 8) * 100;
    
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestion} of 8`;
}

function submitQuiz() {
    // Calculate career recommendation
    const result = calculateCareerRecommendation();
    
    // Save result
    localStorage.setItem('pathpilot_result', JSON.stringify(result));
    localStorage.setItem('pathpilot_answers', JSON.stringify(quizAnswers));
    
    // Redirect to result page
    window.location.href = 'result.html';
}

function calculateCareerRecommendation() {
    // Reset scores
    Object.keys(careerMapping).forEach(career => {
        careerMapping[career].score = 0;
    });
    
    // Calculate scores based on answers using the new mapping
    Object.entries(quizAnswers).forEach(([questionNumber, answer]) => {
        const questionNum = parseInt(questionNumber);
        if (questionMapping[questionNum] && questionMapping[questionNum][answer]) {
            const career = questionMapping[questionNum][answer];
                careerMapping[career].score++;
            }
    });
    
    // Find career with highest score
    let bestCareer = 'software-developer';
    let highestScore = careerMapping[bestCareer].score;
    
    Object.keys(careerMapping).forEach(career => {
        if (careerMapping[career].score > highestScore) {
            highestScore = careerMapping[career].score;
            bestCareer = career;
        }
    });
    
    // Check for ties
    const tiedCareers = [];
    Object.keys(careerMapping).forEach(career => {
        if (careerMapping[career].score === highestScore) {
            tiedCareers.push(career);
        }
    });
    
    // If there's a tie, return both careers
    if (tiedCareers.length > 1) {
        return { type: 'tie', careers: tiedCareers };
    }
    
    return { type: 'single', career: bestCareer };
}

// Result page functionality
function initializeResult() {
    const savedResult = localStorage.getItem('pathpilot_result');
    if (!savedResult) {
        window.location.href = 'quiz.html';
        return;
    }
    
    try {
        const result = JSON.parse(savedResult);
        
        if (result.type === 'tie') {
            // Handle multiple careers
            displayTieResult(result.careers);
            
            // Initialize event listeners for multiple careers
            initializeEventListeners();
            
            // Trigger confetti animation
            setTimeout(() => {
                triggerConfetti();
            }, 1000);
        } else {
            // Handle single career result
            selectedCareer = result.career;
    const career = careerData[selectedCareer];
    
    if (!career) {
        window.location.href = 'quiz.html';
        return;
    }
    
    // Display result with animation
    displayCareerResult(career);
    
    // Initialize all sections
    initializeCareerOverview(career);
    initializeRoadmap(career);
    initializeSkillBuilder(career);
    initializeFamousProjects(career);
    initializeResources(career);
    initializeParentSummary(career);
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Trigger confetti animation
    setTimeout(() => {
        triggerConfetti();
    }, 1000);
        }
    } catch (error) {
        console.error('Error parsing result:', error);
        window.location.href = 'quiz.html';
    }
}

function displayCareerResult(career) {
    const titleElement = document.getElementById('career-title');
    const descriptionElement = document.getElementById('career-description');
    const iconElement = document.getElementById('career-icon');
    
    // Animate the result display
    titleElement.textContent = career.title;
    descriptionElement.textContent = career.description;
    iconElement.className = career.icon + ' text-6xl text-blue-600 mb-4';
    
    // Add success animation
    const resultContainer = document.getElementById('career-result');
    resultContainer.classList.add('success-animation');
}

function displayTieResult(careers) {
    // Hide single career result
    const careerResult = document.getElementById('career-result');
    if (careerResult) {
        careerResult.style.display = 'none';
    }

    // Show multiple careers section
    const multipleCareersSection = document.getElementById('multiple-careers-section');
    const multipleCareersDescription = document.getElementById('multiple-careers-description');
    const multipleCareersCards = document.getElementById('multiple-careers-cards');
    
    if (multipleCareersSection && multipleCareersDescription && multipleCareersCards) {
        // Update description with trait explanation
        const traitDescription = getTieDescription(careers);
        multipleCareersDescription.textContent = `You have a unique combination of ${traitDescription} that makes you well-suited for different career paths. Explore each option below to find your perfect fit.`;
        
        // Generate career cards
        const cardsHTML = careers.map(career => {
            const careerInfo = careerData[career];
            return `
                <div class="career-match-card bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105" data-career="${career}">
                    <div class="text-center mb-6">
                        <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="${careerInfo.icon} text-white text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">${careerInfo.title}</h3>
                        <p class="text-gray-600">${careerInfo.description}</p>
                    </div>
                    <button class="explore-career-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105 font-medium" data-career="${career}">
                        <i class="fas fa-arrow-right mr-2"></i>Explore More
                    </button>
                </div>
            `;
        }).join('');
        
        multipleCareersCards.innerHTML = cardsHTML;
        multipleCareersSection.classList.remove('hidden');
        
        // Add event listeners to explore buttons
        const exploreButtons = document.querySelectorAll('.explore-career-btn');
        exploreButtons.forEach(button => {
            button.addEventListener('click', function() {
                const careerKey = this.dataset.career;
                showDetailedCareerView(careerKey);
            });
        });
    }
    
    // Hide detailed sections initially
    hideDetailedSections();
}

function getTieDescription(careers) {
    const descriptions = {
        'ux-designer': 'design',
        'software-developer': 'logic',
        'product-manager': 'leadership',
        'data-scientist': 'data'
    };
    
    const traits = careers.map(career => descriptions[career]);
    
    // Create more descriptive combinations
    const combinationDescriptions = {
        'design,logic': 'design and technical logic',
        'design,leadership': 'design and leadership',
        'design,data': 'design and data analysis',
        'logic,leadership': 'technical logic and leadership',
        'logic,data': 'technical logic and data analysis',
        'leadership,data': 'leadership and data analysis'
    };
    
    const key = traits.join(',');
    return combinationDescriptions[key] || `${traits[0]} and ${traits[1]}`;
}

function initializeCareerOverview(career) {
    const overviewContainer = document.getElementById('career-overview');
    const overview = career.overview;
    
    const cards = [
        {
            title: 'Role Summary',
            content: overview.summary,
            icon: 'fas fa-info-circle',
            color: 'blue'
        },
        {
            title: 'Daily Life',
            content: overview.dailyLife,
            icon: 'fas fa-clock',
            color: 'green'
        },
        {
            title: 'Responsibilities',
            content: overview.responsibilities,
            icon: 'fas fa-tasks',
            color: 'purple'
        },
        {
            title: 'Work Culture',
            content: overview.workCulture,
            icon: 'fas fa-users',
            color: 'orange'
        },
        {
            title: 'Salary Range',
            content: overview.salaryRange,
            icon: 'fas fa-money-bill-wave',
            color: 'green'
        },
        {
            title: 'Growth Opportunities',
            content: overview.growthOpportunities,
            icon: 'fas fa-chart-line',
            color: 'blue'
        }
    ];
    
    overviewContainer.innerHTML = cards.map(card => `
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-${card.color}-600 rounded-lg flex items-center justify-center mr-3">
                    <i class="${card.icon} text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">${card.title}</h3>
            </div>
            <p class="text-gray-600">${card.content}</p>
        </div>
    `).join('');
}

function initializeRoadmap(career) {
    const roadmapContainer = document.getElementById('roadmap-container');
    
    roadmapContainer.innerHTML = career.roadmap.map((phase, index) => `
        <div class="roadmap-step">
            <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">${phase.phase}</h3>
                <div class="grid md:grid-cols-3 gap-4">
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2">Skills to Learn</h4>
                        <ul class="space-y-1">
                            ${phase.skills.map(skill => `<li class="text-gray-600">• ${skill}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2">Tools to Master</h4>
                        <ul class="space-y-1">
                            ${phase.tools.map(tool => `<li class="text-gray-600">• ${tool}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2">Timeline</h4>
                        <p class="text-gray-600">${phase.timeline}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeSkillBuilder(career) {
    const skillBuilder = document.getElementById('skill-builder');
    
    skillBuilder.innerHTML = career.skills.map((skill, index) => `
        <div class="skill-item bg-gray-50 border-2 border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div class="flex items-center">
                <div class="skill-checkbox w-5 h-5 border-2 border-gray-300 rounded mr-3 cursor-pointer flex items-center justify-center">
                    <i class="fas fa-check text-white text-xs hidden"></i>
                </div>
                <span class="skill-text font-medium text-gray-700">${skill.name}</span>
            </div>
            <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn</button>
        </div>
    `).join('');
    
    // Add click handlers for skill checkboxes
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        const checkbox = item.querySelector('.skill-checkbox');
        const skillText = item.querySelector('.skill-text');
        
        checkbox.addEventListener('click', function() {
            const isCompleted = item.classList.contains('completed');
            if (isCompleted) {
                item.classList.remove('completed');
                checkbox.classList.remove('bg-green-600');
                checkbox.classList.add('border-gray-300');
                skillText.classList.remove('line-through', 'text-gray-500');
                checkbox.querySelector('i').classList.add('hidden');
            } else {
                item.classList.add('completed');
                checkbox.classList.add('bg-green-600');
                checkbox.classList.remove('border-gray-300');
                skillText.classList.add('line-through', 'text-gray-500');
                checkbox.querySelector('i').classList.remove('hidden');
            }
            updateProgressBar();
        });
    });
}

function updateProgressBar() {
    const totalSkills = document.querySelectorAll('.skill-item').length;
    const completedSkills = document.querySelectorAll('.skill-item.completed').length;
    const percentage = Math.round((completedSkills / totalSkills) * 100);
    
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    progressFill.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;
}

function initializeResources(career) {
    const resourcesContainer = document.getElementById('resources-container');
    
    resourcesContainer.innerHTML = career.resources.map(resource => `
        <div class="resource-card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-medium text-gray-500">${resource.type}</span>
                <div class="flex space-x-1">
                    ${resource.tags.map(tag => `
                        <span class="resource-tag tag-${tag}">#${tag}</span>
                    `).join('')}
                </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">${resource.title}</h3>
            <p class="text-gray-600 text-sm mb-4">${resource.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-xs font-medium text-gray-500 uppercase">${resource.level}</span>
                <a href="${resource.url}" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    <i class="fas fa-external-link-alt mr-1"></i>Visit
                </a>
            </div>
        </div>
    `).join('');
}

function initializeFamousProjects(career) {
    const famousProjectsContainer = document.getElementById('famous-projects');
    
    famousProjectsContainer.innerHTML = career.famousProjects.map(project => `
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-star text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">${project.title}</h3>
            </div>
            <p class="text-gray-600 text-sm mb-4">${project.description}</p>
            <div class="bg-white rounded-lg p-3 mb-4">
                <h4 class="font-semibold text-gray-800 text-sm mb-2">Impact:</h4>
                <p class="text-green-600 text-sm font-medium">${project.impact}</p>
            </div>
            <div>
                <h4 class="font-semibold text-gray-800 text-sm mb-2">Key Skills Used:</h4>
                <div class="flex flex-wrap gap-1">
                    ${project.skills.map(skill => `
                        <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs">${skill}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function initializeParentSummary(career) {
    const summaryEn = document.getElementById('parent-summary-en');
    const summaryHi = document.getElementById('parent-summary-hi');
    
    const en = career.parentSummary.en;
    const hi = career.parentSummary.hi;
    
    summaryEn.innerHTML = `
        <p><strong>Earning Potential:</strong> ${en.earning}</p>
        <p><strong>Top Companies:</strong> ${en.examples}</p>
        <p><strong>Job Stability:</strong> ${en.stability}</p>
        <p><strong>Career Growth:</strong> ${en.growth}</p>
    `;
    
    summaryHi.innerHTML = `
        <p><strong>कमाई की क्षमता:</strong> ${hi.earning}</p>
        <p><strong>शीर्ष कंपनियां:</strong> ${hi.examples}</p>
        <p><strong>नौकरी की स्थिरता:</strong> ${hi.stability}</p>
        <p><strong>करियर विकास:</strong> ${hi.growth}</p>
    `;
}

function initializeTieCareerCards(careers) {
    // Hide all the detailed sections for tie cases
    hideDetailedSections();
    
    // Show tie-specific content
    showTieContent(careers);
}

function hideDetailedSections() {
    // Hide sections that are specific to single career results
    const sectionsToHide = [
        'roadmap-container',
        'skill-builder',
        'famous-projects',
        'resources-container',
        'parent-summary-en',
        'parent-summary-hi'
    ];
    
    sectionsToHide.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const parentSection = section.closest('.bg-white');
            if (parentSection) {
                parentSection.style.display = 'none';
            }
        }
    });
    
    // Also hide the "Explore Other Careers" section for tie cases
    const exploreSection = document.querySelector('.bg-white.rounded-xl.shadow-xl.p-8.mb-8');
    if (exploreSection && exploreSection.querySelector('h2') && exploreSection.querySelector('h2').textContent.includes('Explore Other Career Paths')) {
        exploreSection.style.display = 'none';
    }
}

function showTieContent(careers) {
    // Replace the career overview section with simple career name options
    const overviewContainer = document.getElementById('career-overview');
    if (!overviewContainer) return;
    
    const careersData = careers.map(career => careerData[career]);
    
    overviewContainer.innerHTML = `
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Your Perfect Career Matches</h2>
            <p class="text-gray-600">You're someone who balances both ${getTieDescription(careers)} — choose a career below to explore in detail.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            ${careersData.map((career, index) => `
                <div class="career-option-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer text-center" data-career="${careers[index]}">
                    <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="${career.icon} text-white text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-3">${career.title}</h3>
                    <p class="text-gray-600 mb-6">${career.description}</p>
                    <button class="career-select-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                        <i class="fas fa-arrow-right mr-2"></i>Explore This Career
                    </button>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add click event listeners to career option cards
    const careerCards = document.querySelectorAll('.career-option-card');
    careerCards.forEach(card => {
        card.addEventListener('click', function() {
            const careerKey = this.dataset.career;
            showDetailedCareerView(careerKey);
        });
    });
    
    // Also add click listeners to the buttons specifically
    const selectButtons = document.querySelectorAll('.career-select-btn');
    selectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent double triggering
            const careerKey = this.closest('.career-option-card').dataset.career;
            showDetailedCareerView(careerKey);
        });
    });
}

function showDetailedCareerView(careerKey) {
    const career = careerData[careerKey];
    if (!career) return;

    // Hide multiple careers section
    const multipleCareersSection = document.getElementById('multiple-careers-section');
    if (multipleCareersSection) {
        multipleCareersSection.style.display = 'none';
    }

    // Show single career result section
    const careerResult = document.getElementById('career-result');
    if (careerResult) {
        careerResult.style.display = 'block';
        
        // Update with selected career info
        const titleElement = document.getElementById('career-title');
        const descriptionElement = document.getElementById('career-description');
        const iconElement = document.getElementById('career-icon');
        
        titleElement.textContent = career.title;
        descriptionElement.textContent = career.description;
        iconElement.className = `${career.icon} text-6xl text-blue-600 mb-4`;
        
        // Add success animation
        careerResult.classList.add('success-animation');
    }

    // Show detailed sections
    showDetailedSections();
    
    // Initialize all sections with the selected career
    initializeCareerOverview(career);
    initializeRoadmap(career);
    initializeSkillBuilder(career);
    initializeFamousProjects(career);
    initializeResources(career);
    initializeParentSummary(career);
    
    // Add back to multiple careers button
    addBackToMultipleCareersButton(careerKey);
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Trigger confetti animation
    setTimeout(() => {
        triggerConfetti();
    }, 500);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addBackToMultipleCareersButton(selectedCareer) {
    const careerResult = document.getElementById('career-result');
    if (!careerResult) return;
    
    // Remove existing back button if any
    const existingBackBtn = document.getElementById('back-to-multiple-btn');
    if (existingBackBtn) {
        existingBackBtn.remove();
    }
    
    // Add back button
    const backButton = document.createElement('button');
    backButton.id = 'back-to-multiple-btn';
    backButton.className = 'bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors mt-4';
    backButton.innerHTML = '<i class="fas fa-arrow-left mr-2"></i>Back to All Careers';
    backButton.addEventListener('click', function() {
        backToMultipleCareers();
    });
    
    careerResult.appendChild(backButton);
}

function backToMultipleCareers() {
    // Hide single career result
    const careerResult = document.getElementById('career-result');
    if (careerResult) {
        careerResult.style.display = 'none';
    }
    
    // Show multiple careers section
    const multipleCareersSection = document.getElementById('multiple-careers-section');
    if (multipleCareersSection) {
        multipleCareersSection.style.display = 'block';
    }
    
    // Hide detailed sections
    hideDetailedSections();
    
    // Smooth scroll to multiple careers section
    multipleCareersSection.scrollIntoView({ behavior: 'smooth' });
}

function showDetailedSections() {
    // Show sections that were hidden for tie cases
    const sectionsToShow = [
        'roadmap-container',
        'skill-builder',
        'famous-projects',
        'resources-container',
        'parent-summary-en',
        'parent-summary-hi'
    ];
    
    sectionsToShow.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const parentSection = section.closest('.bg-white');
            if (parentSection) {
                parentSection.style.display = 'block';
            }
        }
    });
    
    // Also show the "Explore Other Careers" section
    const exploreSection = document.querySelector('.bg-white.rounded-xl.shadow-xl.p-8.mb-8');
    if (exploreSection && exploreSection.querySelector('h2') && exploreSection.querySelector('h2').textContent.includes('Explore Other Career Paths')) {
        exploreSection.style.display = 'block';
    }
}

function initializeEventListeners() {
    // Share button
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
    shareBtn.addEventListener('click', function() {
            const savedResult = localStorage.getItem('pathpilot_result');
            const result = JSON.parse(savedResult);
            
            let shareText;
            if (result.type === 'tie') {
                const careerLabels = result.careers.map(career => careerMapping[career].label);
                shareText = `I just discovered I'm a perfect match for multiple careers: ${careerLabels.join(' and ')}! Take the quiz at PathPilot to find yours.`;
            } else {
                const career = careerData[result.career];
                shareText = `I just discovered my perfect career path: ${career.title}! Take the quiz at PathPilot to find yours.`;
            }
        
        if (navigator.share) {
            navigator.share({
                title: 'My Career Path - PathPilot',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                showNotification('Result copied to clipboard!', 'success');
            });
        }
    });
    }
    
    // Team contact form
    const teamContactForm = document.getElementById('team-contact-form');
    if (teamContactForm) {
        // Populate hidden fields with career data
        const careerResultHidden = document.getElementById('career-result-hidden');
        const quizAnswersHidden = document.getElementById('quiz-answers-hidden');
        
        if (careerResultHidden) {
            const savedResult = localStorage.getItem('pathpilot_result');
            const result = JSON.parse(savedResult);
            if (result.type === 'tie') {
                careerResultHidden.value = `Tie between: ${result.careers.join(', ')}`;
            } else {
                careerResultHidden.value = result.career || 'Not taken quiz';
            }
        }
        
        if (quizAnswersHidden) {
            const savedAnswers = localStorage.getItem('pathpilot_answers');
            quizAnswersHidden.value = savedAnswers || 'No quiz answers';
        }
        
        teamContactForm.addEventListener('submit', function(e) {
            // Let the form submit normally to FormSubmit.co
            // FormSubmit will handle sending the email to your address
            
            // Show success message after a short delay
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
            }, 1000);
        });
    }
}

function triggerConfetti() {
    // Use canvas-confetti library
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// LocalStorage functions
function saveQuizAnswers() {
    localStorage.setItem('pathpilot_quiz_answers', JSON.stringify(quizAnswers));
}

function loadQuizAnswers() {
    const saved = localStorage.getItem('pathpilot_quiz_answers');
    if (saved) {
        quizAnswers = JSON.parse(saved);
    }
}

// Comparison tool functions
function initializeComparisonTool() {
    const comparisonSection = document.getElementById('comparison-tool-container');
    if (!comparisonSection) {
        console.log('Comparison tool container not found');
        return;
    }
    
    try {
        comparisonSection.innerHTML = `
            <div class="bg-white rounded-xl shadow-xl p-8">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Career Comparison Tool</h2>
                    <p class="text-gray-600">Select careers to compare side-by-side and make informed decisions.</p>
                </div>
                
                <!-- Career Selection -->
                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Select Careers to Compare</h3>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        ${Object.entries(careerData).map(([key, career]) => `
                            <label class="career-checkbox-label flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                                <input type="checkbox" class="career-checkbox mr-3" value="${key}" data-career="${key}">
                                <div class="flex items-center">
                                    <i class="${career.icon} text-blue-600 mr-2"></i>
                                    <span class="font-medium">${career.title}</span>
                                </div>
                            </label>
                        `).join('')}
                    </div>
                    <div class="mt-4 flex justify-center">
                        <button id="compare-careers-btn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                            <i class="fas fa-chart-bar mr-2"></i>Compare Selected Careers
                        </button>
                    </div>
                </div>
                
                <!-- Comparison Results -->
                <div id="comparison-results" class="hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-semibold text-gray-800">Comparison Results</h3>
                        <button id="save-comparison-btn" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                            <i class="fas fa-save mr-2"></i>Save Comparison
                        </button>
                    </div>
                    <div id="comparison-table-container" class="overflow-x-auto">
                        <!-- Comparison table will be generated here -->
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        initializeComparisonEventListeners();
    } catch (error) {
        console.error('Error initializing comparison tool:', error);
    }
}

function initializeComparisonEventListeners() {
    const checkboxes = document.querySelectorAll('.career-checkbox');
    const compareBtn = document.getElementById('compare-careers-btn');
    const saveBtn = document.getElementById('save-comparison-btn');
    
    // Update compare button state
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const selectedCareers = document.querySelectorAll('.career-checkbox:checked');
            if (compareBtn) {
                compareBtn.disabled = selectedCareers.length < 2;
                compareBtn.textContent = `Compare ${selectedCareers.length} Career${selectedCareers.length !== 1 ? 's' : ''}`;
            }
        });
    });
    
    // Compare careers
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            const selectedCareers = Array.from(document.querySelectorAll('.career-checkbox:checked')).map(cb => cb.value);
            if (selectedCareers.length >= 2) {
                generateComparisonTable(selectedCareers);
            }
        });
    }
    
    // Save comparison
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            saveComparison();
        });
    }
}

function generateComparisonTable(careers) {
    const container = document.getElementById('comparison-table-container');
    const resultsDiv = document.getElementById('comparison-results');
    
    if (!container || !resultsDiv) {
        console.error('Comparison table elements not found');
        return;
    }
    
    try {
        const tableHTML = `
            <table class="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Metric</th>
                        ${careers.map(career => `
                            <th class="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b">
                                <div class="flex items-center justify-center">
                                    <i class="${careerData[career].icon} text-blue-600 mr-2"></i>
                                    ${careerData[career].title}
                                </div>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <!-- Salary Ranges -->
                    <tr class="bg-blue-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-dollar-sign mr-2"></i>Salary Ranges (Entry Level)
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">US</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].salaryRanges.entry.US}
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">UK</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].salaryRanges.entry.UK}
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">India</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].salaryRanges.entry.India}
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Job Market Demand -->
                    <tr class="bg-green-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-chart-line mr-2"></i>Job Market Demand
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Demand Level</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(careerComparisonData[career].jobMarketDemand.score)}">
                                    ${careerComparisonData[career].jobMarketDemand.level}
                                </span>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Trend</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].jobMarketDemand.trend}
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Work-Life Balance -->
                    <tr class="bg-purple-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-balance-scale mr-2"></i>Work-Life Balance
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Score (1-10)</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <span class="text-lg font-bold ${getBalanceColor(careerComparisonData[career].workLifeBalance.score)}">
                                        ${careerComparisonData[career].workLifeBalance.score}/10
                                    </span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Description</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].workLifeBalance.description}
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Skill Requirements -->
                    <tr class="bg-yellow-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-tools mr-2"></i>Skill Requirements (1-10)
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Technical Skills</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                        <div class="bg-blue-600 h-2 rounded-full" style="width: ${careerComparisonData[career].skillRequirements.technical * 10}%"></div>
                                    </div>
                                    <span class="text-sm font-medium">${careerComparisonData[career].skillRequirements.technical}/10</span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Soft Skills</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                        <div class="bg-green-600 h-2 rounded-full" style="width: ${careerComparisonData[career].skillRequirements.soft * 10}%"></div>
                                    </div>
                                    <span class="text-sm font-medium">${careerComparisonData[career].skillRequirements.soft}/10</span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Creative Skills</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                        <div class="bg-purple-600 h-2 rounded-full" style="width: ${careerComparisonData[career].skillRequirements.creative * 10}%"></div>
                                    </div>
                                    <span class="text-sm font-medium">${careerComparisonData[career].skillRequirements.creative}/10</span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Education -->
                    <tr class="bg-indigo-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-graduation-cap mr-2"></i>Education Requirements
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Degree Level</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].educationNeeded.level}
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Field of Study</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].educationNeeded.field}
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Years of Education</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].educationNeeded.years} years
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Growth Opportunities -->
                    <tr class="bg-teal-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-chart-line mr-2"></i>Career Growth Opportunities
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Growth Score (1-10)</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <span class="text-lg font-bold text-green-600">
                                        ${careerComparisonData[career].growthOpportunities.score}/10
                                    </span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Career Paths</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="space-y-1">
                                    ${careerComparisonData[career].growthOpportunities.paths.map(path => `
                                        <div class="text-xs bg-gray-100 px-2 py-1 rounded">${path}</div>
                                    `).join('')}
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    
                    <!-- Automation Risk -->
                    <tr class="bg-red-50">
                        <td class="px-6 py-4 text-sm font-semibold text-gray-700 border-b" colspan="${careers.length + 1}">
                            <i class="fas fa-robot mr-2"></i>Automation Risk
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Risk Level</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(careerComparisonData[career].automationRisk.score)}">
                                    ${careerComparisonData[career].automationRisk.level}
                                </span>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Risk Score (1-10)</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                <div class="flex items-center justify-center">
                                    <span class="text-lg font-bold ${getRiskScoreColor(careerComparisonData[career].automationRisk.score)}">
                                        ${careerComparisonData[career].automationRisk.score}/10
                                    </span>
                                </div>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td class="px-6 py-3 text-sm text-gray-600 border-b">Reason</td>
                        ${careers.map(career => `
                            <td class="px-6 py-3 text-sm text-gray-700 border-b text-center">
                                ${careerComparisonData[career].automationRisk.reason}
                            </td>
                        `).join('')}
                    </tr>
                </tbody>
            </table>
        `;
        
        container.innerHTML = tableHTML;
        resultsDiv.classList.remove('hidden');
        
        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error generating comparison table:', error);
    }
}

// Helper functions for styling
function getDemandColor(score) {
    if (score >= 9) return 'bg-green-100 text-green-800';
    if (score >= 7) return 'bg-blue-100 text-blue-800';
    if (score >= 5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
}

function getBalanceColor(score) {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-blue-600';
    if (score >= 4) return 'text-yellow-600';
    return 'text-red-600';
}

function getRiskColor(score) {
    if (score <= 3) return 'bg-green-100 text-green-800';
    if (score <= 5) return 'bg-yellow-100 text-yellow-800';
    if (score <= 7) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
}

function getRiskScoreColor(score) {
    if (score <= 3) return 'text-green-600';
    if (score <= 5) return 'text-yellow-600';
    if (score <= 7) return 'text-orange-600';
    return 'text-red-600';
}

function saveComparison() {
    const selectedCareers = Array.from(document.querySelectorAll('.career-checkbox:checked')).map(cb => cb.value);
    const comparisonData = {
        careers: selectedCareers,
        timestamp: new Date().toISOString(),
        data: selectedCareers.map(career => ({
            career: career,
            title: careerData[career].title,
            comparison: careerComparisonData[career]
        }))
    };
    
    // Save to localStorage
    const savedComparisons = JSON.parse(localStorage.getItem('pathpilot_comparisons') || '[]');
    savedComparisons.push(comparisonData);
    localStorage.setItem('pathpilot_comparisons', JSON.stringify(savedComparisons));
    
    showNotification('Comparison saved successfully!', 'success');
}

// Utility functions
function getRandomColor() {
    const colors = ['#fbbf24', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 

// Add test function for tie case (for demonstration purposes)
function testTieCase() {
    // Simulate a tie between Product Manager and Data Scientist
    const testResult = {
        type: 'tie',
        careers: ['product-manager', 'data-scientist']
    };
    
    localStorage.setItem('pathpilot_result', JSON.stringify(testResult));
    window.location.href = 'result.html';
}

function testTieCase2() {
    // Simulate a tie between UX Designer and Software Developer
    const testResult = {
        type: 'tie',
        careers: ['ux-designer', 'software-developer']
    };
    
    localStorage.setItem('pathpilot_result', JSON.stringify(testResult));
    window.location.href = 'result.html';
}

// Add this to the global scope for testing
window.testTieCase = testTieCase;
window.testTieCase2 = testTieCase2; 

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active state
            this.classList.toggle('active');
            
            // Toggle answer visibility
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            } else {
                answer.classList.add('show');
            }
        });
    });
} 