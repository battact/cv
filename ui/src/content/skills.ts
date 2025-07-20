export interface SkillItem {
    name: string;
    category: string;
}

export const skillsContent = {
    skills: [
        // Programming Languages & Runtime (ordered by experience)
        { name: 'Node.js', category: 'Language' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Python', category: 'Language' },

        // Frontend
        { name: 'GraphQL', category: 'Frontend' },
        { name: 'React', category: 'Frontend' },

        // Cloud & AWS Services
        { name: 'AWS', category: 'Cloud' },
        { name: 'CDK', category: 'Cloud' },
        { name: 'SNS', category: 'Cloud' },
        { name: 'SQS', category: 'Cloud' },
        { name: 'S3', category: 'Cloud' },
        { name: 'Lambda', category: 'Cloud' },
        { name: 'ECS', category: 'Cloud' },
        { name: 'EKS', category: 'Cloud' },
        { name: 'RDS', category: 'Cloud' },

        // Database
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'DynamoDB', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },

        // Architecture & Infrastructure
        { name: 'Apache Kafka', category: 'Infrastructure' },
        { name: 'Docker', category: 'Infrastructure' },
        { name: 'GitLab CI/CD', category: 'Infrastructure' },

        // Development Practices
        { name: 'Agile', category: 'Practices' },
        { name: 'Jira', category: 'Practices' },
        { name: 'Grafana', category: 'Monitoring' },
        { name: 'Datadog', category: 'Monitoring' },
    ] as SkillItem[],
} as const;
