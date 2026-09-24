export type CareerQuestion = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export type CareerRole = {
  id: string;
  slug: string;
  title: string;
  practiceArea: string;
  employmentType: "Contract";
  contractDuration: string;
  numberOfPositions?: number | string;
  location: string;
  workArrangement: string;
  experienceLabel: string;
  experienceFilter: "3+ years" | "5+ years" | "7+ years" | "10+ years";
  certificationTags: string[];
  summary: string;
  overview: string;
  responsibilities: string[];
  minimumRequirements: string[];
  preferredRequirements?: string[];
  certifications?: string[];
  technicalSkills?: string[];
  projectEnvironment?: string[];
  candidateProfile?: string[];
  applicationQuestions?: CareerQuestion[];
  active: boolean;
  datePosted: string;
};

export const careerRoles: CareerRole[] = [
  {
    id: "full-stack-web-developer",
    slug: "full-stack-web-developer",
    title: "Full Stack Web Developer",
    practiceArea: "Software Engineering",
    employmentType: "Contract",
    contractDuration: "5 Years",
    location: "Gauteng, South Africa",
    workArrangement: "Hybrid — On-site & Remote",
    experienceLabel: "Approximately 5 years relevant development experience",
    experienceFilter: "5+ years",
    certificationTags: [],
    summary:
      "Design, develop, test, deploy and maintain full-stack web applications, databases, APIs, integrations and Azure-based solutions.",
    overview:
      "The Full Stack Web Developer will be responsible for designing, developing, testing, deploying and maintaining web applications and supporting systems. The role covers front-end and back-end development, databases, APIs, integrations, cloud services, application security and performance optimisation.",
    responsibilities: [
      "Develop and maintain responsive web applications.",
      "Build and maintain APIs and back-end services.",
      "Develop front-end interfaces using modern web technologies.",
      "Design and manage SQL and/or NoSQL databases.",
      "Integrate third-party services and business systems.",
      "Develop secure and scalable application architectures.",
      "Troubleshoot and optimise application performance.",
      "Implement testing and quality-assurance practices.",
      "Use Git and modern software-development workflows.",
      "Participate in code reviews and technical discussions.",
      "Maintain technical documentation and development standards.",
      "Support Azure-based deployments and cloud infrastructure.",
      "Collaborate with stakeholders to understand requirements and deliver technical solutions.",
      "Contribute to the continuous improvement of Seraphis development practices and project delivery."
    ],
    minimumRequirements: [
      "BSc in Computer Science, Information Technology, Engineering, or a related field; or equivalent practical experience.",
      "Approximately 5 years of experience in web application development and/or database-related development.",
      "Strong full-stack development capabilities.",
      "Proficiency in HTML, CSS, JavaScript/TypeScript and responsive web development.",
      "Strong back-end and API development experience.",
      "Solid understanding of application architecture and databases.",
      "Experience with SQL and database administration.",
      "Experience with Git and modern development tools.",
      "Ability to write clean, maintainable and well-tested code.",
      "Strong problem-solving and troubleshooting skills.",
      "Ability to work independently and collaboratively in a hybrid environment."
    ],
    preferredRequirements: [
      "Microsoft Azure experience.",
      "Azure SQL and other Azure database services.",
      "Azure Database Administration certification.",
      "Microsoft SQL Server certification or equivalent experience.",
      "Cloud architecture.",
      "Docker and containerisation.",
      "CI/CD and DevOps practices.",
      "Infrastructure as Code.",
      "AI and machine-learning application integration.",
      "Data engineering and analytics platforms.",
      "Enterprise systems and third-party integrations.",
      "Application security and secure software-development practices."
    ],
    technicalSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Responsive web development",
      "Back-end development",
      "REST APIs",
      "SQL",
      "NoSQL",
      "Database administration",
      "Git",
      "Microsoft Azure",
      "Azure SQL",
      "Docker",
      "CI/CD",
      "DevOps",
      "Application security"
    ],
    projectEnvironment: [
      "Business web applications and portals.",
      "Data management platforms.",
      "API and systems integrations.",
      "Azure cloud solutions.",
      "Business intelligence and analytics platforms.",
      "Database-driven applications.",
      "Business automation solutions.",
      "AI and data-driven applications.",
      "Custom enterprise technology solutions."
    ],
    candidateProfile: [
      "Able to take a business requirement and turn it into a reliable working solution.",
      "Comfortable working across the technology stack and taking ownership of development tasks.",
      "Able to solve problems independently while collaborating effectively with technical and non-technical stakeholders.",
      "Candidates who do not meet every listed qualification but can demonstrate strong practical experience, a solid portfolio and the ability to deliver production-quality solutions are encouraged to apply."
    ],
    active: true,
    datePosted: "2026-09-24"
  },
  {
    id: "technical-project-manager",
    slug: "technical-project-manager",
    title: "Technical Project Manager",
    practiceArea: "Project Delivery",
    employmentType: "Contract",
    contractDuration: "5 Years",
    location: "South Africa",
    workArrangement: "Hybrid / Project Dependent",
    experienceLabel: "Minimum 5 years technical project management",
    experienceFilter: "5+ years",
    certificationTags: ["Project Management"],
    summary:
      "Lead and coordinate long-term technology and digital modernisation initiatives across software, infrastructure, cloud, databases, cybersecurity and systems integration.",
    overview:
      "Seraphis IT & Data Solutions is seeking an experienced Technical Project Manager to lead and coordinate the delivery of long-term technology and digital modernisation projects. The successful candidate will be responsible for managing technical projects involving IT systems, software development, web applications, website modernisation, infrastructure, databases, cloud and hosting environments, systems integration, cybersecurity, and digital transformation. This role requires a Project Manager who is comfortable operating within a technical delivery environment and coordinating developers, designers, infrastructure resources, security specialists, content specialists, clients, and other project stakeholders.",
    responsibilities: [
      "Plan, coordinate, and oversee technical projects from initiation through implementation, operation, and handover.",
      "Develop and maintain project plans, schedules, milestones, dependencies, and delivery priorities.",
      "Coordinate multidisciplinary technical teams across software development, infrastructure, databases, UI/UX, cybersecurity, content, and related disciplines.",
      "Translate client requirements and contractual deliverables into structured technical workstreams.",
      "Monitor and manage project scope, timelines, quality, risks, issues, and dependencies.",
      "Coordinate software development, IT systems, and website modernisation activities.",
      "Manage technical migrations, upgrades, deployments, and transition activities.",
      "Facilitate requirements, planning, progress, and technical review meetings.",
      "Maintain project documentation, action registers, risk registers, change records, and progress reports.",
      "Coordinate testing, acceptance, deployment, and handover activities.",
      "Manage stakeholder communication and ensure relevant stakeholders remain informed of project progress, risks, issues, and decisions.",
      "Identify delivery risks and coordinate appropriate corrective actions.",
      "Ensure technical deliverables remain aligned with contractual requirements and agreed standards.",
      "Coordinate knowledge transfer, technical documentation, and project handover.",
      "Support service-level and operational reporting throughout the project lifecycle.",
      "Work with technical leads to ensure security, performance, reliability, and maintainability requirements are incorporated into project delivery."
    ],
    minimumRequirements: [
      "Professional Project Management Certification — PMP, PRINCE2, or equivalent.",
      "Minimum 5 years’ experience in technical project management.",
      "Demonstrable experience leading IT systems projects, software development projects, migration projects and database management, and/or digital transformation projects.",
      "Experience coordinating multidisciplinary technical teams.",
      "Strong project planning, scheduling, risk management, and stakeholder management capabilities.",
      "Ability to manage technical deliverables, dependencies, and project documentation.",
      "Strong written and verbal communication skills.",
      "Ability to work effectively with both technical and non-technical stakeholders."
    ],
    active: true,
    datePosted: "2026-09-24"
  }
];

export const activeCareerRoles = careerRoles.filter((role) => role.active);
export const practiceAreas = Array.from(new Set(activeCareerRoles.map((role) => role.practiceArea))).sort();
export const contractDurations = Array.from(new Set(activeCareerRoles.map((role) => role.contractDuration))).sort();
export const experienceFilters = ["3+ years", "5+ years", "7+ years", "10+ years"] as const;
export const certificationFilters = ["Microsoft", "Cybersecurity", "ISO / COBIT", "Mimecast", "Project Management"] as const;

export const generalExpertiseAreas = [
  "Software Engineering",
  "Microsoft Business Applications",
  "Azure & Cloud",
  "Cybersecurity",
  "Governance, Risk & Compliance",
  "Microsoft Teams & Communications",
  "Managed Infrastructure",
  "Mimecast",
  "Project Delivery"
];
