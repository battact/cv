export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
}

export const educationContent = {
    education: [
        {
            degree: 'High School',
            institution: 'Radnóti Miklós Gimnázium',
            period: '2007 - 2011',
        },
        {
            degree: "Bachelor's degree in Economic Informatics",
            institution: 'University of Szeged',
            period: '2011 - 2017',
        },
    ] as EducationItem[],
} as const;
