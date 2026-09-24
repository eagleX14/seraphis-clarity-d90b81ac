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
    experienceLabel: "Minimum 5 years relevant development experience",
    experienceFilter: "5+ years",
    certificationTags: [],
    summary:
      "Design, develop, test, deploy and maintain full-stack web applications, databases, APIs, integrations and cloud-based solutions.",
    overview:
      "Design, develop, test, deploy and maintain web applications and supporting systems across front-end development, back-end services, databases, APIs, integrations, cloud services, application security and performance optimisation.",
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
      "Maintain technical documentation and development standards.",
      "Support Azure-based deployments and cloud infrastructure.",
      "Collaborate with technical and non-technical stakeholders to deliver working solutions."
    ],
    minimumRequirements: [
      "BSc in Computer Science, Information Technology, Engineering, or a related field; or equivalent practical experience.",
      "Minimum 5 years of experience in web application development and/or database-related development.",
      "Strong full-stack development capability.",
      "Proficiency in HTML, CSS, JavaScript/TypeScript and responsive web development.",
      "Strong back-end and API development experience.",
      "Solid understanding of application architecture and databases.",
      "Experience with SQL and database administration.",
      "Experience with Git and modern development tools.",
      "Ability to write clean, maintainable and well-tested code.",
      "Strong problem-solving and troubleshooting skills."
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
      "Lead and coordinate technology and digital modernisation delivery across IT systems, software, infrastructure, databases, cloud and cybersecurity.",
    overview:
      "Lead and coordinate long-term technology and digital modernisation delivery across IT systems, software development, web applications, website modernisation, infrastructure, databases, cloud and hosting environments, systems integration, cybersecurity and digital transformation.",
    responsibilities: [
      "Plan, coordinate and oversee technical projects from initiation through implementation and handover.",
      "Develop and maintain project plans, schedules, milestones, dependencies and delivery priorities.",
      "Coordinate multidisciplinary technical teams across software, infrastructure, databases, UI/UX, cybersecurity and content.",
      "Translate client requirements and contractual deliverables into structured technical workstreams.",
      "Manage scope, timelines, quality, risks, issues and dependencies.",
      "Coordinate migrations, upgrades, deployments, testing, acceptance and handover activities.",
      "Maintain project documentation, action registers, risk registers, change records and progress reports.",
      "Manage stakeholder communication and technical delivery reviews.",
      "Coordinate knowledge transfer and technical documentation."
    ],
    minimumRequirements: [
      "Professional Project Management Certification — PMP, PRINCE2, or equivalent.",
      "Minimum 5 years’ experience in technical project management.",
      "Experience leading IT systems, software development, migration, database management and/or digital transformation projects.",
      "Experience coordinating multidisciplinary technical teams.",
      "Strong project planning, scheduling, risk management and stakeholder management capabilities.",
      "Ability to manage technical deliverables, dependencies and project documentation.",
      "Strong written and verbal communication skills.",
      "Ability to work effectively with technical and non-technical stakeholders."
    ],
    active: true,
    datePosted: "2026-09-24"
  },
  {
    id: "senior-content-communications-specialist",
    slug: "senior-content-communications-specialist",
    title: "Senior Content & Communications Specialist",
    practiceArea: "Content & Communications",
    employmentType: "Contract",
    contractDuration: "5 Years",
    location: "South Africa",
    workArrangement: "Hybrid",
    experienceLabel: "Minimum 5 years digital content experience",
    experienceFilter: "5+ years",
    certificationTags: [],
    summary:
      "Develop clear, professional digital content and content strategy for web and digital communication platforms.",
    overview:
      "Develop, structure and maintain high-quality digital content and content strategy across web and digital communication platforms. Work with design, technical and business teams to turn complex information into clear, usable communication.",
    responsibilities: [
      "Develop and maintain digital and website content.",
      "Write and edit website copy, service information and digital communications.",
      "Develop and maintain content strategies.",
      "Review and improve content for clarity, consistency and usability.",
      "Support content migration, restructuring and website modernisation.",
      "Translate technical and business information into clear audience-focused content.",
      "Coordinate content with design and development teams.",
      "Maintain tone, terminology, editorial quality and content standards."
    ],
    minimumRequirements: [
      "B. Degree or National Diploma in Communication, Marketing, Journalism, or equivalent.",
      "Minimum 5 years’ professional experience in digital copywriting and content strategy.",
      "Strong professional writing and editing capability.",
      "Demonstrable experience producing digital or web content.",
      "Ability to structure complex information clearly for different audiences.",
      "Strong attention to detail.",
      "Ability to work effectively with technical, design and business stakeholders."
    ],
    active: true,
    datePosted: "2026-09-24"
  },
  {
    id: "senior-graphic-ui-ux-designer",
    slug: "senior-graphic-ui-ux-designer",
    title: "Senior Graphic & UI/UX Designer",
    practiceArea: "Design & UX",
    employmentType: "Contract",
    contractDuration: "5 Years",
    location: "South Africa",
    workArrangement: "Hybrid",
    experienceLabel: "Minimum 5 years graphic design and UI/UX experience",
    experienceFilter: "5+ years",
    certificationTags: [],
    summary:
      "Create professional graphic design and UI/UX layouts for modern websites, digital platforms and user-facing interfaces.",
    overview:
      "Create and maintain professional visual designs and UI/UX layouts for websites and digital platforms. Work with developers, content specialists and stakeholders to turn requirements into clear, usable and implementation-ready designs.",
    responsibilities: [
      "Design website and digital-platform interfaces.",
      "Develop UI layouts, page structures and reusable visual components.",
      "Create professional graphics and digital communication assets.",
      "Translate requirements into clear visual solutions.",
      "Create responsive designs for desktop, tablet and mobile environments.",
      "Develop wireframes, mock-ups and interface concepts.",
      "Maintain visual consistency across digital products.",
      "Collaborate with developers and content specialists during implementation."
    ],
    minimumRequirements: [
      "B. Degree or National Diploma in Graphic Design, UI/UX Design, or equivalent.",
      "Minimum 5 years’ professional experience in graphic design and UI/UX layouts.",
      "Strong portfolio demonstrating professional graphic design and digital interface work.",
      "Strong understanding of visual hierarchy, typography, layout and interface design.",
      "Experience designing for web and digital environments.",
      "Ability to work effectively with developers, content specialists and other project stakeholders."
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
  "Project Delivery",
  "Content & Communications",
  "Design & UX",
  "Microsoft Business Applications",
  "Azure & Cloud",
  "Cybersecurity",
  "Governance, Risk & Compliance",
  "Microsoft Teams & Communications",
  "Managed Infrastructure",
  "Mimecast"
];
