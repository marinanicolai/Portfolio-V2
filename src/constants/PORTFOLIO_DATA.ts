import CampWatPaImage from "@assets/images/CampWatPa.png";

export type Portfolio = {
  fullName: string;
  role: string;
  catchPhrase: string;
  socials?: {
    email?: string;
    linkedInUrl?: string;
    githubUrl?: string;
  };

  experience: Experience;
  projects: Projects;
};

export type Experience = {
  dateFrom: string;
  dateTo: string;
  position: string;
  companyName: string;
  description: string;
  tags: string[];
  url?: string;
}[];

export type Projects = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}[];

const PORTFOLIO_DATA: Portfolio = {
  fullName: "Marina Nicolai",
  role: "Frontend Engineer at USPS",
  catchPhrase: "I build captivating user interfaces that engage and delight.",
  socials: {
    email: "nicolaimarina@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/marinanicolaidev/",
    githubUrl: "https://github.com/marinanicolai",
  },
  experience: [
    {
      dateFrom: "2022",
      dateTo: "PRESENT",
      position: "Frontend Engineer",
      companyName: "USPS",
      url: "https://www.usps.com/",
      description:
        "Coordinated and led three Frontend teams to developer 'USPS' Web App, a unified platform merging three products. Provided technical support and expertise across various engineering teams to expedite project development, troubleshoot issues, and implement bug fixes.",
      tags: ["TypeScript", "React", "Redux", "HTML", "SCSS","Jest"],
    },
    {
      dateFrom: "2022",
      dateTo: "PRESENT",
      position: "Frontend Engineer",
      companyName: "Contract (M3-Technology)",
      description:
        "Took a pivotal role in end-to-end development of innovative features, from conceptualization to implementation. Led Design System management, streamlining design process with Figma for application consistency.",
      tags: ["TypeScript", "React", "Redux", "HTML", "SCSS", "Figma"],
    }
  ],
  projects: [
    {
      title: "Camp Wat Pa",
      description:
        "Volunteered as a Frontend Developer for Camp Wat Pa, a youth leadership program in La Puente, California. Proud to contribute to empowering the next generation of leaders through this transformative summer camp.",
      link: "https://campwatpa.org/",
      tags: ["TypeScript", "React", "HTML", "CSS"],
      imageSrc: CampWatPaImage,
    }
  ],
};

export default PORTFOLIO_DATA;
