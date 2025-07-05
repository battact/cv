export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
    achievements?: string[];
    technologies?: string[];
}

export const experienceContent = {
    experiences: [
        {
            title: 'Senior Software Engineer',
            company: 'Joyn GmbH',
            period: '2021 - Present',
            technologies: ['Python', 'Node.js', 'AWS', 'Kafka', 'SQS', 'SNS', 'CDK', 'Microservices', 'Docker', 'Jira', 'Scrum'],
            description: [
                'Designed and architected event-driven microservices using AWS services (Lambda, SQS, SNS, DynamoDB, RDS) and Apache Kafka with Python and Node.js',
                'Led cross-team communication and coordination for microservices integration and deployment',
                'Implemented CI/CD pipelines using GitLab for automated deployment and microservices orchestration',
                'Pioneered AWS CDK (Infrastructure as Code) adoption for the team, standardizing infrastructure deployment and management',
                'Conducted technical design reviews and mentored team members on AWS best practices and microservices patterns',
                'Convert business requirements into detailed Jira tickets and design technical architectures for new features',
            ],
            achievements: [
                'Lead and maintain 30+ microservices across production environment',
                'Implemented new license management tool achieving 4x faster processing speed and 40% reduction in bugs',
                'Optimized asset delivery workflow: reduced processing time from 1500 seconds to 150 seconds for 1000 assets (90% improvement)',
                'Reduced infrastructure costs by 50% through workflow optimization',
                'Eliminated daily bugs and achieved zero incidents for 1+ years through workflow improvements',
            ],
        },
        {
            title: 'Associate Lead Software Engineer',
            company: 'Mentor Graphics (Siemens Business)',
            period: '2019 - 2021',
            technologies: ['AWS', 'Node.js', 'React', 'Docker', 'Java', 'Microservices', 'Cloud Migration', 'SVG'],
            description: [
                'Led technology evaluation and architecture decisions for global development teams, recommending modern cloud-native solutions',
                'Designed and implemented microservices architecture using AWS ECS, Docker containers, and Node.js for scalable applications',
                'Developed React-based SVG asset management application handling 10,000+ complex vector graphics with real-time preview',
                'Architected and executed cloud migration strategy for legacy Java monolith, transitioning to AWS microservices',
                'Established CI/CD pipelines and deployment strategies for containerized applications across multiple environments',
            ],
            achievements: [
                'Successfully migrated 100% of legacy Java application to AWS cloud infrastructure',
                'Reduced infrastructure costs by 30% through cloud optimization',
                'Improved application performance by 50% through microservices architecture',
            ],
        },
        {
            title: 'Senior Software Engineer',
            company: 'EPAM Systems',
            period: '2018 - 2019',
            technologies: [
                'AWS',
                'Node.js',
                'Lambda',
                'SAM',
                'Microservices',
                'Authentication',
                'Authorization',
                'Warehouse Systems',
                'Scrum',
            ],
            description: [
                'Designed and developed 10+ AWS microservices for warehouse management system using Node.js and serverless architecture',
                'Built custom AWS Lambda authorizer for comprehensive user authentication and authorization across all microservices',
                'Implemented Infrastructure as Code using AWS SAM (Serverless Application Model) for automated deployments',
                'Mentored junior developers on AWS best practices, serverless patterns, and microservices development',
            ],
            achievements: [
                'Created 10+ AWS microservices for warehouse management system with serverless architecture',
                'Developed custom authorizer handling full user authorization responsibility across all services',
                'Mentored 3+ junior developers and improved team code quality standards',
            ],
        },
        {
            title: 'Junior to Lead Software Engineer',
            company: 'Gremon Systems Zrt.',
            period: '2016 - 2018',
            technologies: [
                'Java',
                'PHP',
                'React',
                'AWS',
                'Agricultural Systems',
                'IoT',
                'Irrigation Systems',
                'Data Processing',
                'Team Leadership',
            ],
            description: [
                'Developed comprehensive employee management system for greenhouse operations including job allocation, payroll processing, and workforce optimization',
                'Built intelligent plant monitoring and irrigation system with complex data processing algorithms to determine optimal watering requirements',
                'Implemented real-time IoT sensors and data analytics for plant health monitoring and automated irrigation decision-making',
                'Led and coordinated development team including 2 junior developers and outsourced senior developer across multiple projects',
                'Designed scalable architecture for agricultural IoT systems using AWS cloud services and modern web technologies',
            ],
            achievements: [
                'Developed 2 production applications: employee management system and intelligent plant monitoring system',
                'Implemented complex data processing algorithms for automated plant watering decisions with 95% accuracy',
                'Led and mentored 2 junior developers while coordinating outsourced senior developer across projects',
                'Improved agricultural system efficiency by 35% through IoT integration and automated processes',
            ],
        },
    ] as ExperienceItem[],
} as const;
