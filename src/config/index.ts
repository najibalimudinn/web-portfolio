import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Najib Alimudin Fajri — DevOps, Software, and Data Engineer",
  author: "Najib Alimudin Fajri",
  description:
    "Fresh Graduated Bachelor of Applied Computer Science, passionate about DevOps and Web Development.",
  lang: "en",
  siteLogo: "/najib-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/najibalimudin/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/najib-alimudin-fajri-25a614191" },
    { text: "Github", href: "https://github.com/najibalimudinn" },
  ],
  socialImage: "/profile.png",
  canonicalURL: "https://ghujinstudio.my.id",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Najib Alimudin Fajri",
    specialty: "DevOps, Software, and Data Engineer",
    summary:
      "Fresh Graduated Bachelor of Applied Computer Science, passionate about DevOps and Web Development.",
    email: "najibaf147@gmail.com",
  },
  experience: [
    {
      company: "Padepokan Tujuh Sembilan",
      position: "DevOps Engineer Intern",
      startDate: "Jun 2025",
      endDate: "Oct 2025",
      summary: [
        "Managed the deployment ecosystem for enterprise applications and a distributed data processing cluster running across multiple virtual machines (VMs).",
        "Stabilized continuous delivery pipelines by troubleshooting front-end and back-end container deployment failures in Argo CD, improving overall system reliability.",
        "Led a cross-functional team as Team/Tech Lead through the end-to-end development of a Learning Management System (LMS), including the integration of an AI-based evaluation feature via API.",
        "Improved company profile website performance by resolving asynchronous API bottlenecks and implementing code splitting, lazy loading, and Progressive Web App (PWA) support.",
        "Strengthened security and operational efficiency through server hardening, vulnerability testing, load testing, and backend workflow automation.",
        "Standardized system architecture documentation (Software Design Document) by reverse engineering the running system.",
      ],
    },
    {
      company: "Politeknik Negeri Bandung",
      position: "Research Assistant",
      startDate: "Apr 2025",
      endDate: "Sep 2025",
      summary: [
        "Designed and developed a dummy web application end to end as the medium for fault seeding, supporting a software testing learning module.",
        "Authored a comprehensive Software Requirements Specification (SRS) covering functional requirements analysis, sequence diagram modeling, and operation contracts.",
        "Designed interface mockups and interactive prototypes in Figma, then implemented them as a working application using Express.js (backend) and React (frontend).",
        "Configured application deployment to the server using Docker containerization and the Nginx web server.",
      ],
    },
    {
      company: "Politeknik Negeri Bandung",
      position: "Research Member",
      startDate: "Apr 2023",
      endDate: "Sep 2023",
      summary: [
        "Built and configured an automated testing environment for web applications from the ground up.",
        "Integrated Selenium, Cucumber, and TestNG to design and execute reliable functional testing scenarios.",
        "Gained practical, in-depth understanding of software quality assurance (QA) and the software testing lifecycle.",
      ]
    },
  ],
  projects: [
    {
      name: "Next.js Dashboard",
      summary: "A full-stack Next.js dashboard deployed on a custom homelab infrastructure utilizing Docker, Jenkins CI, and Cloudflare Tunnels.",
      linkPreview: "https://nextjs-dashboard.ghujinstudio.my.id",
      linkSource: "https://github.com/najibalimudinn/nextjs-dashboard",
      image: "/nextjs-dashboard.png",
    },
  ],
  about: {
    description: `
      Applied Bachelor graduate in Informatics Engineering from Politeknik Negeri Bandung (GPA 3.60/4.00, cum laude) with a strong hands-on foundation in full-stack development and DevOps operations. 
      Experienced in managing enterprise application deployments across multiple virtual machines, stabilizing continuous delivery pipelines in Argo CD, and leading cross-functional teams through end-to-end system development. A research background in data classification and text processing has built a strong interest in data engineering. Open to roles as a Software Engineer, DevOps Engineer, or Data Engineer.
    `,
    image: "/najib-big.jpg",
  },
};

// #5755ff
