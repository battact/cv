export interface SkillItem {
    name: string;
    category: string;
}

export const skillsContent = {
    skills: [
        // Programming Languages & Runtime (ordered by experience)
        { name: 'Node.js', category: 'Backend' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Python', category: 'Language' },

        // Frontend
        { name: 'GraphQL', category: 'Backend' },
        { name: 'React', category: 'Frontend' },
        { name: 'HTML5', category: 'Frontend' },
        { name: 'CSS3', category: 'Frontend' },

        // Cloud & AWS Services
        { name: 'AWS', category: 'Cloud' },
        { name: 'CDK', category: 'Cloud' },
        { name: 'DynamoDB', category: 'Cloud' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },

        // Architecture & Infrastructure
        { name: 'Apache Kafka', category: 'Architecture' },
        { name: 'Docker', category: 'Infrastructure' },
        { name: 'GitLab CI/CD', category: 'Infrastructure' },

        // Development Practices
        { name: 'Agile', category: 'Practices' },
        { name: 'Jira', category: 'Practices' },
        { name: 'Grafana', category: 'Monitoring' },
        { name: 'Datadog', category: 'Monitoring' },
    ] as SkillItem[],
} as const;
