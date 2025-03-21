import environment from "./environment.png"
import logo from "./logo.png"
interface AssetsType {
    [key: string]: string;
}

export const assets:AssetsType ={
    environment,
}

export interface CardType {
    logo: string;  // Since images resolve to strings
    title: string;
    description: string;
}

// Sample data for Profile Page
export const cardData : CardType[]= [
    {
        logo: logo,
        title: 'Automated Data Collection',
        description:"Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting."
    },
    {
        logo: logo,
        title: 'Monitoring & Reporting',
        description:"Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
    },
    {
        logo: logo,
        title: 'Monitoring & Reporting',
        description:"Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting."
    },
    
    {
        logo: logo,
        title: 'Simplified Certification Process',
        description:"Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance."
    },
    {
        logo: logo,
        title: 'AI-Driven Insights',
        description:"Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
    },
    {
        logo: logo,
        title: 'AI-Driven Insights',
        description:"Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making."
    },
]