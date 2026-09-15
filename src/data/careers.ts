export type ExperienceBand = "3+ years" | "5+ years" | "7+ years" | "10+ years";

export type PracticeArea =
  | "Microsoft Business Applications"
  | "Azure & Cloud"
  | "Cybersecurity"
  | "Governance, Risk & Compliance"
  | "Microsoft Teams & Communications"
  | "Managed Infrastructure"
  | "Mimecast"
  | "Project Delivery";

export type CertificationFamily =
  | "Microsoft"
  | "Cybersecurity"
  | "ISO / COBIT"
  | "Mimecast"
  | "Project Management";

export type ContractDuration = "6 months" | "12 months" | "36 months" | "Project-based";

export interface ApplicationQuestion {
  id: string;
  label: string;
  required?: boolean;
}

export interface Role {
  id: string;
  slug: string;
  title: string;
  practiceArea: PracticeArea;
  employmentType: "Contract";
  schemaEmploymentType: "CONTRACTOR" | "TEMPORARY";
  contractDuration: ContractDuration;
  numberOfPositions?: number;
  location: string;
  workArrangement: string;
  experience: ExperienceBand;
  certificationFamily?: CertificationFamily;
  summary: string;
  metaDescription: string;
  overview: string[];
  responsibilities: string[];
  minimumRequirements: string[];
  preferredRequirements?: string[];
  certifications?: string[];
  technicalSkills?: string[];
  applicationQuestions?: ApplicationQuestion[];
  active: boolean;
}

const LOCATION = "South Africa";
const HYBRID = "Hybrid / Remote depending on engagement";

export const practiceAreas: PracticeArea[] = [
  "Microsoft Business Applications",
  "Azure & Cloud",
  "Cybersecurity",
  "Governance, Risk & Compliance",
  "Microsoft Teams & Communications",
  "Managed Infrastructure",
  "Mimecast",
  "Project Delivery",
];

export const contractDurations: ContractDuration[] = ["6 months", "12 months", "36 months", "Project-based"];

export const experienceBands: ExperienceBand[] = ["3+ years", "5+ years", "7+ years", "10+ years"];

export const certificationFamilies: CertificationFamily[] = [
  "Microsoft",
  "Cybersecurity",
  "ISO / COBIT",
  "Mimecast",
  "Project Management",
];

export const expertiseAreas: string[] = [
  "Microsoft Business Applications",
  "Azure & Cloud",
  "Cybersecurity",
  "Governance, Risk & Compliance",
  "Microsoft Teams & Communications",
  "Managed Infrastructure",
  "Mimecast",
  "Project Delivery",
  "Data & Analytics",
];

const certificationsQuestion: ApplicationQuestion = {
  id: "certifications_list",
  label: "List relevant certifications",
  required: true,
};

export const roles: Role[] = [
  {
    id: "1",
    slug: "senior-ict-project-manager",
    title: "Senior ICT Project Manager",
    practiceArea: "Project Delivery",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Project Management",
    summary:
      "Lead enterprise technology delivery engagements end to end. Own governance, planning, risk and transition into operational support.",
    metaDescription:
      "Contract Senior ICT Project Manager role at Seraphis IT and Data Solutions, leading enterprise technology delivery engagements in South Africa.",
    overview: [
      "Seraphis IT and Data Solutions is seeking experienced Senior ICT Project Managers to lead enterprise technology delivery engagements.",
      "The role is responsible for overall project governance, delivery planning, stakeholder management, resource coordination, risk management, change control and successful transition from implementation into operational support.",
    ],
    responsibilities: [
      "Develop and maintain project plans, milestones and delivery schedules.",
      "Coordinate technical specialists, vendors and stakeholders.",
      "Manage project risks, issues, dependencies and change requests.",
      "Track delivery against scope, timelines and agreed quality standards.",
      "Manage project governance and stakeholder reporting.",
      "Coordinate implementation, testing, cutover and transition activities.",
      "Maintain project RAID registers.",
      "Manage project documentation and reporting.",
      "Coordinate technical and business workstreams.",
      "Support project closure and operational handover.",
    ],
    minimumRequirements: [
      "Minimum 5 years relevant ICT project-management experience.",
      "Demonstrable experience managing enterprise technology implementations.",
      "Relevant tertiary qualification.",
      "Strong project governance and stakeholder-management capability.",
      "Experience coordinating multidisciplinary technical teams.",
      "Strong written reporting and documentation skills.",
    ],
    certifications: [
      "PMP",
      "PRINCE2",
      "Agile/Scrum certification",
      "Equivalent recognised project-management credential",
    ],
    preferredRequirements: [
      "Experience delivering projects involving Microsoft Azure.",
      "Experience delivering projects involving Microsoft 365.",
      "Experience delivering projects involving Dynamics 365.",
      "Experience delivering projects involving cybersecurity.",
      "Experience delivering projects involving enterprise communications.",
      "Experience delivering projects involving managed infrastructure.",
      "Experience delivering cloud migration projects.",
    ],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "2",
    slug: "microsoft-teams-ccaas-specialist",
    title: "Microsoft Teams & CCaaS Implementation Specialist",
    practiceArea: "Microsoft Teams & Communications",
    employmentType: "Contract",
    schemaEmploymentType: "TEMPORARY",
    contractDuration: "6 months",
    numberOfPositions: 2,
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Implement, configure and support Microsoft Teams Phone and cloud contact-centre environments for enterprise customers.",
    metaDescription:
      "Contract Microsoft Teams Phone and cloud contact-centre implementation role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking experienced Microsoft Teams and cloud contact-centre specialists to implement, configure and support enterprise communications and customer-contact environments.",
    ],
    responsibilities: [
      "Configure Microsoft Teams Phone environments.",
      "Implement enterprise voice functionality.",
      "Configure IVR structures.",
      "Configure call queues.",
      "Configure routing strategies.",
      "Configure agent and supervisor functionality.",
      "Implement call recording and reporting.",
      "Support contact-centre analytics.",
      "Configure presence and availability functionality.",
      "Troubleshoot call routing and voice-quality issues.",
      "Support integration with CRM and enterprise applications.",
      "Support testing, deployment, go-live and stabilisation.",
      "Produce technical documentation and operational handover material.",
    ],
    minimumRequirements: [
      "Minimum 3 years relevant Microsoft Teams and CCaaS implementation experience.",
      "Recognised three-year IT qualification.",
      "Strong practical Microsoft Teams Phone experience.",
      "Experience implementing cloud contact-centre environments.",
      "Strong understanding of enterprise telephony.",
    ],
    preferredRequirements: [
      "5+ years directly relevant experience.",
      "Direct Routing.",
      "Operator Connect.",
      "SIP.",
      "Session Border Controllers.",
      "Microsoft Teams-certified contact-centre platforms.",
      "Enterprise CRM integrations.",
    ],
    certifications: ["Relevant Microsoft certifications are advantageous."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "3",
    slug: "mimecast-service-delivery-lead",
    title: "Mimecast Service Delivery / Project Lead",
    practiceArea: "Mimecast",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Mimecast",
    summary:
      "Lead service delivery and project coordination across an enterprise Mimecast email-security environment.",
    metaDescription:
      "Contract Mimecast service delivery and project lead role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking an experienced Mimecast professional to lead service delivery and project coordination within an enterprise email-security environment.",
    ],
    responsibilities: [
      "Coordinate Mimecast deployment and service-transition activities.",
      "Lead operational service delivery.",
      "Coordinate technical engineering resources.",
      "Manage incidents, escalations and service issues.",
      "Conduct regular service reviews.",
      "Manage SLA performance.",
      "Coordinate service-improvement actions.",
      "Maintain technical and operational documentation.",
      "Coordinate Microsoft 365 email-security integration activities.",
      "Produce management and operational reports.",
    ],
    minimumRequirements: [
      "Demonstrable Mimecast implementation experience.",
      "Mimecast administration experience.",
      "Enterprise email-security experience.",
      "Managed-service or service-delivery experience.",
      "Strong stakeholder-management capability.",
      "Experience working with Microsoft 365 email environments.",
    ],
    preferredRequirements: [
      "Mimecast certifications.",
      "Referenceable enterprise Mimecast implementations.",
      "ITIL/service-management experience.",
    ],
    applicationQuestions: [
      certificationsQuestion,
      {
        id: "mimecast_experience",
        label: "Briefly describe your Mimecast implementation and administration experience",
        required: true,
      },
    ],
    active: true,
  },
  {
    id: "4",
    slug: "mimecast-technical-account-manager",
    title: "Mimecast Technical Account Manager",
    practiceArea: "Mimecast",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Mimecast",
    summary:
      "Manage the technical relationship with email-security stakeholders while coordinating service delivery and escalation.",
    metaDescription:
      "Contract Mimecast Technical Account Manager role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "The Mimecast Technical Account Manager will manage the technical relationship between Seraphis and enterprise email-security stakeholders while coordinating ongoing service delivery and technical escalation.",
    ],
    responsibilities: [
      "Manage technical customer relationships.",
      "Conduct service reviews.",
      "Coordinate technical escalations.",
      "Track incidents and service actions.",
      "Coordinate with Mimecast engineers.",
      "Support technical reporting.",
      "Track recurring service issues.",
      "Support improvement planning.",
      "Maintain stakeholder communication.",
    ],
    minimumRequirements: [
      "Strong knowledge of Mimecast.",
      "Enterprise email-security experience.",
      "Technical account-management or service-management experience.",
      "Understanding of Microsoft 365 mail environments.",
      "Strong communication and reporting capability.",
    ],
    preferredRequirements: ["Mimecast certification.", "Managed security service experience."],
    applicationQuestions: [
      certificationsQuestion,
      {
        id: "mimecast_experience",
        label: "Briefly describe your Mimecast implementation and administration experience",
        required: true,
      },
    ],
    active: true,
  },
  {
    id: "5",
    slug: "mimecast-engineer",
    title: "Mimecast Engineer",
    practiceArea: "Mimecast",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    numberOfPositions: 3,
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Mimecast",
    summary:
      "Hands-on implementation, configuration, administration and support of enterprise email-security environments.",
    metaDescription:
      "Contract Mimecast Engineer role at Seraphis IT and Data Solutions supporting enterprise email security in South Africa.",
    overview: [
      "Seraphis is seeking hands-on Mimecast Engineers to implement, configure, administer and support enterprise email-security environments.",
    ],
    responsibilities: [
      "Configure Mimecast environments.",
      "Maintain email-security policies.",
      "Support Microsoft 365 integration.",
      "Troubleshoot mail-flow issues.",
      "Investigate email-security incidents.",
      "Support phishing and business-email-compromise controls.",
      "Manage users, permissions and policies.",
      "Perform operational monitoring.",
      "Support configuration changes.",
      "Maintain technical documentation.",
    ],
    minimumRequirements: [
      "Demonstrable hands-on Mimecast experience.",
      "Mimecast administration capability.",
      "Strong email-security knowledge.",
      "Microsoft 365 experience.",
      "Strong troubleshooting capability.",
    ],
    preferredRequirements: ["Mimecast certification.", "Enterprise Mimecast deployment experience."],
    applicationQuestions: [
      certificationsQuestion,
      {
        id: "mimecast_experience",
        label: "Briefly describe your Mimecast implementation and administration experience",
        required: true,
      },
    ],
    active: true,
  },
  {
    id: "6",
    slug: "senior-cybersecurity-architect",
    title: "Senior Cybersecurity Architect / Technical Lead",
    practiceArea: "Cybersecurity",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "7+ years",
    certificationFamily: "Cybersecurity",
    summary:
      "Lead enterprise security architecture, technical design and security-engineering delivery across identity, endpoint and monitoring.",
    metaDescription:
      "Contract Senior Cybersecurity Architect role at Seraphis IT and Data Solutions leading enterprise security architecture in South Africa.",
    overview: [
      "Seraphis is seeking a senior cybersecurity professional to lead enterprise security architecture, technical design and security-engineering delivery.",
    ],
    responsibilities: [
      "Develop enterprise security architectures.",
      "Lead security-design reviews.",
      "Provide technical leadership to security engineers.",
      "Review Microsoft 365 security configurations.",
      "Support identity and access-security architecture.",
      "Support endpoint-security architecture.",
      "Support security monitoring and incident-response design.",
      "Review vulnerability-management controls.",
      "Develop security remediation recommendations.",
      "Produce technical architecture documentation.",
      "Support security implementation and improvement programmes.",
    ],
    minimumRequirements: [
      "7+ years relevant cybersecurity experience.",
      "Strong enterprise security-architecture capability.",
      "Microsoft 365 security experience.",
      "Identity-security experience.",
      "Endpoint-security experience.",
      "Security monitoring and incident-response experience.",
      "Technical leadership experience.",
    ],
    certifications: [
      "Candidates should hold at least two relevant recognised cybersecurity certifications.",
      "CISSP",
      "CISM",
      "CISA",
      "CEH",
      "CompTIA Security+",
      "ISO 27001",
      "Relevant Microsoft Security certifications",
    ],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "7",
    slug: "cybersecurity-engineer",
    title: "Cybersecurity Engineer",
    practiceArea: "Cybersecurity",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    numberOfPositions: 2,
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Cybersecurity",
    summary:
      "Implement, operate and support enterprise cybersecurity technologies, endpoint controls and vulnerability management.",
    metaDescription:
      "Contract Cybersecurity Engineer role at Seraphis IT and Data Solutions supporting enterprise security operations in South Africa.",
    overview: [
      "The Cybersecurity Engineer will implement, operate and support enterprise cybersecurity technologies and security controls.",
    ],
    responsibilities: [
      "Support endpoint-security technologies.",
      "Support EDR/XDR platforms.",
      "Perform vulnerability-management activities.",
      "Investigate security alerts.",
      "Support incident response.",
      "Support Microsoft security technologies.",
      "Support identity-security controls.",
      "Assist with remediation.",
      "Maintain security documentation.",
      "Produce technical security reports.",
    ],
    minimumRequirements: [
      "Approximately 5+ years relevant cybersecurity experience preferred.",
      "Enterprise cybersecurity operations.",
      "Endpoint security.",
      "Vulnerability management.",
      "Security monitoring.",
      "Incident investigation.",
      "Microsoft security technologies.",
    ],
    certifications: ["Relevant cybersecurity certifications are strongly preferred."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "8",
    slug: "iso27001-cobit-grc-specialist",
    title: "ISO 27001 & COBIT 2019 GRC Specialist",
    practiceArea: "Governance, Risk & Compliance",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "36 months",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "ISO / COBIT",
    summary:
      "Conduct information-security assessments, ISO 27001 gap analysis and COBIT 2019 governance reviews with clear remediation planning.",
    metaDescription:
      "Contract ISO 27001 and COBIT 2019 governance, risk and compliance specialist role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking an experienced governance, risk and compliance specialist with strong ISO/IEC 27001 and COBIT 2019 capability.",
    ],
    responsibilities: [
      "Conduct information-security assessments.",
      "Perform ISO 27001 gap assessments.",
      "Evaluate control effectiveness.",
      "Conduct governance and maturity assessments.",
      "Perform risk and control reviews.",
      "Analyse evidence.",
      "Document assessment findings.",
      "Develop remediation plans.",
      "Produce management reports.",
      "Support governance improvement programmes.",
    ],
    minimumRequirements: [
      "Minimum 3 years relevant GRC or information-security assessment experience.",
      "Strong ISO/IEC 27001 knowledge.",
      "COBIT 2019 capability.",
      "Strong assessment and report-writing skills.",
    ],
    certifications: [
      "ISO/IEC 27001 Lead Auditor OR Lead Implementer.",
      "COBIT 2019 Design and Implementation knowledge/certification where applicable.",
    ],
    applicationQuestions: [
      { id: "iso_cobit_qualifications", label: "List your ISO 27001 and COBIT qualifications", required: true },
    ],
    active: true,
  },
  {
    id: "9",
    slug: "dynamics-365-ce-power-platform-specialist",
    title: "Microsoft Dynamics 365 CE / Power Platform Specialist",
    practiceArea: "Microsoft Business Applications",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Configure, support and improve Dynamics 365 Customer Engagement and Power Platform environments in production.",
    metaDescription:
      "Contract Dynamics 365 Customer Engagement and Power Platform specialist role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking experienced Microsoft Dynamics 365 Customer Engagement and Power Platform specialists to support, configure and improve enterprise business-application environments.",
    ],
    responsibilities: [
      "Configure Dynamics 365 Customer Engagement.",
      "Support production Dynamics environments.",
      "Manage Dataverse configurations.",
      "Implement business-process improvements.",
      "Configure Power Apps.",
      "Build Power Automate workflows.",
      "Support application incidents.",
      "Perform solution deployment and change management.",
      "Support integrations.",
      "Participate in UAT and release activities.",
      "Produce technical and functional documentation.",
    ],
    minimumRequirements: [
      "Dynamics 365 Customer Engagement / CRM.",
      "Dataverse.",
      "Power Apps.",
      "Power Automate.",
      "Production support.",
      "Solution management.",
    ],
    technicalSkills: ["Dynamics 365 CE", "Dataverse", "Power Apps", "Power Automate", "Solution management"],
    certifications: [
      "Relevant Microsoft Dynamics / Power Platform certification is required or strongly preferred.",
    ],
    preferredRequirements: [
      "Power Pages.",
      "Azure integration.",
      "Azure Blob Storage.",
      "Customer portals.",
      "SMS integration.",
      "Enterprise CRM support.",
    ],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "10",
    slug: "dynamics-365-sage-300-integration-specialist",
    title: "Dynamics 365 & Sage 300 Integration Specialist",
    practiceArea: "Microsoft Business Applications",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Microsoft",
    summary:
      "Specialist integration role for production Dynamics 365 Customer Engagement and Sage 300 environments.",
    metaDescription:
      "Contract Dynamics 365 and Sage 300 integration specialist role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking a specialist with direct experience integrating Microsoft Dynamics 365 Customer Engagement with Sage 300.",
      "This is a specialist integration role and applicants must demonstrate relevant production experience.",
    ],
    responsibilities: [
      "Design and support integrations between Dynamics 365 and Sage 300.",
      "Configure and troubleshoot APIs.",
      "Manage Dataverse integrations.",
      "Investigate failed transactions.",
      "Support data reconciliation.",
      "Maintain integration monitoring.",
      "Support production incidents.",
      "Document integration architecture and technical processes.",
    ],
    minimumRequirements: [
      "Dynamics 365 CE experience.",
      "Sage 300 experience.",
      "Direct D365 / Sage 300 integration experience.",
      "REST API experience.",
      "Dataverse experience.",
      "Integration troubleshooting.",
      "Data reconciliation capability.",
    ],
    preferredRequirements: [
      "Applicants must clearly identify previous projects involving Dynamics 365 and Sage 300.",
    ],
    technicalSkills: ["Dynamics 365 CE", "Sage 300", "REST APIs", "Dataverse", "Data reconciliation"],
    applicationQuestions: [
      {
        id: "d365_sage_experience",
        label: "Briefly describe your Dynamics 365 and Sage 300 integration experience",
        required: true,
      },
      certificationsQuestion,
    ],
    active: true,
  },
  {
    id: "11",
    slug: "dynamics-365-finance-operations-consultant",
    title: "Dynamics 365 Finance & Operations Functional Consultant",
    practiceArea: "Microsoft Business Applications",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Functional ERP consulting across Dynamics 365 Finance & Operations configuration, process analysis and UAT.",
    metaDescription:
      "Contract Dynamics 365 Finance & Operations functional consultant role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking an experienced Dynamics 365 Finance & Operations Functional Consultant for enterprise ERP support and transformation engagements.",
    ],
    responsibilities: [
      "Analyse business processes.",
      "Configure D365 F&O.",
      "Support functional requirements.",
      "Support testing and UAT.",
      "Support data migration.",
      "Resolve functional incidents.",
      "Produce functional documentation.",
      "Support users and business stakeholders.",
    ],
    minimumRequirements: [
      "Minimum 3 years directly relevant Dynamics 365 F&O experience.",
      "Functional configuration experience.",
      "ERP business-process analysis.",
      "Finance and operations process knowledge.",
      "UAT experience.",
      "User-support experience.",
      "Migration or transition experience.",
    ],
    certifications: ["Relevant Microsoft certification preferred."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "12",
    slug: "dynamics-365-technical-developer",
    title: "Dynamics 365 Technical Developer / Integration Consultant",
    practiceArea: "Microsoft Business Applications",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Develop and customise Dynamics 365 solutions, Dataverse integrations and REST API interfaces for enterprise systems.",
    metaDescription:
      "Contract Dynamics 365 technical developer and integration consultant role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking a Dynamics 365 Technical Developer / Integration Consultant to develop, customise and integrate enterprise Dynamics 365 solutions.",
    ],
    responsibilities: [
      "Develop and customise Dynamics 365 solutions.",
      "Build Dataverse integrations.",
      "Develop REST API integrations.",
      "Configure technical solution components.",
      "Support Power Platform integration.",
      "Troubleshoot production issues.",
      "Support deployment and release management.",
      "Produce technical documentation.",
    ],
    minimumRequirements: [
      "Dynamics 365 technical development.",
      "Dataverse.",
      "REST APIs.",
      "System integrations.",
      "Power Platform.",
      "Production troubleshooting.",
    ],
    preferredRequirements: [
      "C#",
      "JavaScript",
      "Azure integration",
      "SMS integrations",
      "External enterprise-system integration",
    ],
    technicalSkills: ["Dynamics 365", "Dataverse", "REST APIs", "Power Platform"],
    certifications: ["Relevant Microsoft certification preferred."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "13",
    slug: "azure-administrator-az104",
    title: "Azure Administrator (AZ-104)",
    practiceArea: "Azure & Cloud",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Administer and support operational Azure environments across compute, networking, storage, identity and monitoring.",
    metaDescription:
      "Contract Azure Administrator (AZ-104 certified) role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking certified Azure Administrators to administer and support operational Azure environments.",
      "Applicants must provide verifiable AZ-104 certification evidence.",
    ],
    responsibilities: [
      "Administer Azure resources.",
      "Manage virtual machines and compute resources.",
      "Configure Azure networking.",
      "Manage Azure storage.",
      "Support Microsoft Entra identity.",
      "Configure monitoring.",
      "Support Log Analytics.",
      "Configure backup and recovery.",
      "Support operational Azure environments.",
      "Troubleshoot Azure infrastructure incidents.",
    ],
    minimumRequirements: [
      "Microsoft Certified: Azure Administrator Associate (AZ-104).",
      "Operational Azure administration experience.",
      "Verifiable certification evidence.",
    ],
    certifications: ["Microsoft Certified Azure Administrator Associate / AZ-104 (required)."],
    applicationQuestions: [
      certificationsQuestion,
      {
        id: "microsoft_certification_evidence",
        label: "Upload or provide evidence of your Microsoft certification",
        required: true,
      },
    ],
    active: true,
  },
  {
    id: "14",
    slug: "azure-solutions-architect-az305",
    title: "Azure Solutions Architect (AZ-305)",
    practiceArea: "Azure & Cloud",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "7+ years",
    certificationFamily: "Microsoft",
    summary:
      "Design Azure solution, identity, networking and resilience architectures for enterprise migration and continuity programmes.",
    metaDescription:
      "Contract Azure Solutions Architect (AZ-305 certified) role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking certified Azure Solutions Architects to design enterprise Azure architectures.",
      "Applicants must provide verifiable certification evidence.",
    ],
    responsibilities: [
      "Design Azure solution architecture.",
      "Design identity and governance architectures.",
      "Design networking.",
      "Design compute and storage architectures.",
      "Design resilience and business-continuity solutions.",
      "Develop migration architectures.",
      "Develop backup and disaster-recovery architectures.",
      "Produce architecture documentation.",
      "Support technical design reviews.",
    ],
    minimumRequirements: [
      "Microsoft Certified: Azure Solutions Architect Expert (AZ-305).",
      "Enterprise Azure architecture experience.",
      "Verifiable certification evidence.",
    ],
    certifications: ["Microsoft Certified Azure Solutions Architect Expert / AZ-305 (required)."],
    applicationQuestions: [
      certificationsQuestion,
      {
        id: "microsoft_certification_evidence",
        label: "Upload or provide evidence of your Microsoft certification",
        required: true,
      },
    ],
    active: true,
  },
  {
    id: "15",
    slug: "power-platform-developer",
    title: "Power Platform Developer",
    practiceArea: "Microsoft Business Applications",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Design and deploy production Power Apps, automation and Dataverse solutions integrated with enterprise systems.",
    metaDescription:
      "Contract Power Platform Developer role at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking Power Platform Developers experienced in designing and deploying production enterprise solutions.",
    ],
    responsibilities: [
      "Develop Power Apps.",
      "Build workflow automation.",
      "Configure Dataverse.",
      "Integrate business systems.",
      "Support deployments.",
      "Troubleshoot production issues.",
      "Maintain technical documentation.",
    ],
    minimumRequirements: [
      "Power Apps.",
      "Power Automate.",
      "Dataverse.",
      "Connectors.",
      "REST APIs.",
      "Dynamics 365 integration.",
      "Solution management.",
      "Enterprise deployment.",
    ],
    technicalSkills: ["Power Apps", "Power Automate", "Dataverse", "REST APIs", "Connectors"],
    certifications: ["Relevant Microsoft Power Platform certification preferred."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "16",
    slug: "managed-infrastructure-technical-specialist",
    title: "Managed Infrastructure Technical Specialist",
    practiceArea: "Managed Infrastructure",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    numberOfPositions: 3,
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "3+ years",
    certificationFamily: "Microsoft",
    summary:
      "Support multidisciplinary enterprise infrastructure environments across cloud, network, virtualisation and security.",
    metaDescription:
      "Contract managed infrastructure technical specialist roles at Seraphis IT and Data Solutions, South Africa.",
    overview: [
      "Seraphis is seeking experienced enterprise infrastructure specialists to support multidisciplinary managed-infrastructure environments.",
      "Candidates are not expected to specialise in every technology. The selected team will collectively cover the required technical domains.",
    ],
    responsibilities: [
      "Support enterprise infrastructure operations.",
      "Support hybrid and cloud infrastructure environments.",
      "Support network, compute and storage platforms.",
      "Support backup, recovery and monitoring.",
      "Troubleshoot infrastructure incidents.",
      "Maintain technical documentation.",
    ],
    minimumRequirements: [
      "Relevant NQF 6 or higher IT qualification.",
      "Minimum 3 years relevant managed-infrastructure experience.",
      "At least one relevant professional certification.",
      "Enterprise infrastructure support experience.",
    ],
    technicalSkills: [
      "Microsoft Azure",
      "Hybrid infrastructure",
      "Virtualisation",
      "Compute",
      "Storage",
      "WAN",
      "LAN",
      "WLAN",
      "Routing and switching",
      "Microsoft 365",
      "Unified communications",
      "Cybersecurity",
      "Firewalls",
      "Backup",
      "Disaster recovery",
      "Infrastructure monitoring",
      "Enterprise infrastructure operations",
    ],
    preferredRequirements: [
      "Candidates with 5+ years experience and multiple relevant certifications are preferred.",
    ],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
  {
    id: "17",
    slug: "it-service-manager",
    title: "IT Service Manager",
    practiceArea: "Managed Infrastructure",
    employmentType: "Contract",
    schemaEmploymentType: "CONTRACTOR",
    contractDuration: "Project-based",
    location: LOCATION,
    workArrangement: HYBRID,
    experience: "5+ years",
    certificationFamily: "Project Management",
    summary:
      "Manage enterprise ICT service delivery, SLA performance, escalations and continuous service improvement.",
    metaDescription:
      "Contract IT Service Manager role at Seraphis IT and Data Solutions managing enterprise ICT service delivery in South Africa.",
    overview: [
      "Seraphis is seeking an experienced IT Service Manager to manage enterprise ICT service delivery.",
    ],
    responsibilities: [
      "Manage service-level agreements.",
      "Coordinate incident management.",
      "Coordinate problem management.",
      "Coordinate change management.",
      "Manage escalations.",
      "Conduct service reviews.",
      "Produce customer reporting.",
      "Track service-performance metrics.",
      "Coordinate technical service teams.",
      "Drive continuous service improvement.",
    ],
    minimumRequirements: [
      "Demonstrable managed ICT service-delivery experience.",
      "Enterprise infrastructure experience.",
      "Strong SLA-management capability.",
      "Strong reporting and stakeholder-management skills.",
    ],
    preferredRequirements: ["ITIL certification.", "Relevant service-management qualification."],
    applicationQuestions: [certificationsQuestion],
    active: true,
  },
];

export const activeRoles = (): Role[] => roles.filter((r) => r.active);

export const getRoleBySlug = (slug?: string): Role | undefined =>
  roles.find((r) => r.slug === slug && r.active);

export const relatedRoles = (role: Role, limit = 3): Role[] =>
  activeRoles()
    .filter((r) => r.slug !== role.slug && r.practiceArea === role.practiceArea)
    .concat(activeRoles().filter((r) => r.slug !== role.slug && r.practiceArea !== role.practiceArea))
    .slice(0, limit);
