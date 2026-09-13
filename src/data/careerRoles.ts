export type CareerCategory =
  | "Microsoft Business Applications"
  | "Microsoft Cloud & Modern Work"
  | "Cybersecurity & Governance"
  | "Infrastructure & Managed Services"
  | "Training & Specialist Integration";

export interface CareerRole {
  title: string;
  slug: string;
  category: CareerCategory;
  location: string;
  engagement: string;
  summary: string;
  requirements: string[];
  valuableEvidence: string[];
}

export const careerCategories: Array<"All" | CareerCategory> = [
  "All",
  "Microsoft Business Applications",
  "Microsoft Cloud & Modern Work",
  "Cybersecurity & Governance",
  "Infrastructure & Managed Services",
  "Training & Specialist Integration",
];

export const careerRoles: CareerRole[] = [
  {
    title: "Senior Dynamics 365 CE Technical Lead",
    slug: "senior-dynamics-365-ce-technical-lead",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Lead production support, maintenance, technical governance and complex delivery across Microsoft Dynamics 365 Customer Engagement environments.",
    requirements: [
      "Deep hands-on Dynamics 365 Customer Engagement / CRM support and maintenance experience; 10+ years is strongly preferred for senior assignments.",
      "Strong Dataverse, security-role, environment, release, troubleshooting and production-support capability.",
      "Current Microsoft Dynamics 365 certification relevant to the proposed role.",
      "Ability to lead L2/L3 incident resolution, change delivery, upgrades and technical handover.",
    ],
    valuableEvidence: [
      "Referenceable enterprise Dynamics 365 CE support projects.",
      "Power Platform, Power Pages, API or integration delivery experience.",
      "Experience leading multi-disciplinary Microsoft delivery teams.",
    ],
  },
  {
    title: "Dynamics 365 CE Functional Consultant",
    slug: "dynamics-365-ce-functional-consultant",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Translate business requirements into supportable Dynamics 365 CE processes, configuration and user-facing improvements.",
    requirements: [
      "At least 3 years of relevant Dynamics 365 CRM / Customer Engagement experience.",
      "Strong requirements analysis, process mapping, configuration, workflows and UAT support.",
      "Working knowledge of Dataverse, security roles and customer-service or case-management processes.",
      "Relevant Microsoft Dynamics certification is preferred and should be verifiable.",
    ],
    valuableEvidence: [
      "Referenceable functional support or implementation projects.",
      "Experience with production support, service requests and release/change coordination.",
      "Power Platform exposure.",
    ],
  },
  {
    title: "Dynamics 365 Finance & Operations Functional Consultant",
    slug: "dynamics-365-finance-operations-functional-consultant",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Support Dynamics 365 Finance & Operations configuration, process transition and functional delivery across core ERP workstreams.",
    requirements: [
      "At least 3 years of relevant Microsoft Dynamics 365 Finance & Operations experience.",
      "Practical experience in Finance, Procurement and Sourcing, Accounts Receivable and/or Fixed Assets.",
      "Strong fit-gap analysis, functional configuration, troubleshooting and user-support capability.",
      "Relevant Microsoft certification is preferred and should be verifiable.",
    ],
    valuableEvidence: [
      "ERP transition, migration or managed-support project experience.",
      "Integration exposure across Microsoft business applications.",
      "Public-sector or enterprise ERP delivery references.",
    ],
  },
  {
    title: "Dynamics 365 Technical & Power Platform Developer",
    slug: "dynamics-365-technical-power-platform-developer",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Build and support Dynamics 365 customisations, integrations, automations and Power Platform solutions for enterprise environments.",
    requirements: [
      "At least 3 years of Dynamics 365 technical development, customisation or integration experience.",
      "Strong Dataverse, APIs, custom connectors, Power Automate and solution-management capability.",
      "Experience with testing, environment promotion, troubleshooting and controlled release practices.",
      "Relevant Microsoft certification is preferred.",
    ],
    valuableEvidence: [
      "Power Apps and Power Pages delivery.",
      "SMS, WhatsApp or other external API integration experience.",
      "Azure integration services or DevOps exposure.",
    ],
  },
  {
    title: "Dynamics 365 / Sage 300 Integration Specialist",
    slug: "dynamics-365-sage-300-integration-specialist",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Design, troubleshoot and support integrations between Dynamics 365 CE / Dataverse and Sage 300 Finance environments.",
    requirements: [
      "Direct, demonstrable Dynamics 365 CE and Sage 300 Finance integration experience.",
      "Strong API, connector, transaction-tracing, reconciliation and error-handling capability.",
      "Experience supporting production integrations and root-cause investigation.",
      "Relevant Microsoft Dynamics certification is strongly preferred.",
    ],
    valuableEvidence: [
      "Referenceable integration-support projects.",
      "Power Automate or custom connector experience.",
      "Finance-system reconciliation and support experience.",
    ],
  },
  {
    title: "Power Platform / Power Pages / BI Specialist",
    slug: "power-platform-power-pages-bi-specialist",
    category: "Microsoft Business Applications",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Deliver business automation, portals, reporting and low-code solutions across Microsoft Power Platform environments.",
    requirements: [
      "Strong Power Apps, Power Automate, Dataverse and Power Pages capability.",
      "Experience designing production workflows, business rules, connectors and supportable automations.",
      "Business-intelligence or reporting capability, preferably including Power BI.",
      "Relevant Microsoft Power Platform and/or Dynamics certification is preferred.",
    ],
    valuableEvidence: [
      "Customer-portal delivery and support.",
      "Dynamics 365 integration experience.",
      "Enterprise automation and reporting references.",
    ],
  },
  {
    title: "Senior ICT / Microsoft Project Manager",
    slug: "senior-ict-microsoft-project-manager",
    category: "Microsoft Cloud & Modern Work",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Lead enterprise ICT delivery across Microsoft cloud, business applications, cybersecurity and managed-infrastructure projects.",
    requirements: [
      "At least 5 years of project-management experience in an ICT environment.",
      "Recognised three-year / NQF 7 qualification or an appropriate project-management qualification supported by ICT delivery experience.",
      "PMP, PRINCE2, Agile or comparable project-management certification.",
      "Strong delivery governance, RAID management, stakeholder coordination, transition, UAT and go-live experience.",
    ],
    valuableEvidence: [
      "Microsoft cloud, Dynamics 365, cybersecurity or infrastructure project references.",
      "Public-sector or enterprise delivery experience.",
      "Service-transition and SLA governance experience.",
    ],
  },
  {
    title: "Microsoft Teams & CCaaS Implementation Specialist",
    slug: "microsoft-teams-ccaas-implementation-specialist",
    category: "Microsoft Cloud & Modern Work",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Implement Microsoft Teams telephony and cloud contact-centre solutions, including routing, agent operations, reporting and support.",
    requirements: [
      "At least 3 years of Microsoft Teams and CCaaS implementation experience.",
      "Recognised three-year IT qualification.",
      "Strong Teams telephony, IVR, queue, routing, recording, monitoring and agent/supervisor configuration capability.",
      "Experience integrating contact-centre workflows with CRM systems and supporting users after go-live.",
    ],
    valuableEvidence: [
      "Microsoft Teams Phone or contact-centre certification.",
      "Referenceable cloud call-centre implementations.",
      "Direct Routing, Operator Connect or PSTN integration experience.",
    ],
  },
  {
    title: "Azure Administrator / Solutions Architect",
    slug: "azure-administrator-solutions-architect",
    category: "Microsoft Cloud & Modern Work",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Design, administer and support secure Azure environments for migration, managed services, resilience and enterprise workloads.",
    requirements: [
      "Valid AZ-104 and/or AZ-305 certification; candidates holding both are strongly preferred.",
      "Hands-on Azure compute, storage, networking, identity, monitoring, backup and governance experience.",
      "Experience with Azure Monitor, Log Analytics, backup / DR and production troubleshooting.",
      "Ability to document architecture, implementation plans and operational handover.",
    ],
    valuableEvidence: [
      "Azure migration or managed-services references.",
      "Azure SQL, Site Recovery, Defender or landing-zone experience.",
      "Infrastructure-as-Code or automation capability.",
    ],
  },
  {
    title: "Mimecast Service Delivery Lead",
    slug: "mimecast-service-delivery-lead",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Lead Mimecast implementation and operational service delivery, with responsibility for governance, escalation and service performance.",
    requirements: [
      "Demonstrable Mimecast implementation and administration experience.",
      "Experience planning email-security deployments, policies, support operations and customer transition.",
      "Strong SLA, escalation, reporting and service-review capability.",
      "Ability to coordinate engineers, customer stakeholders and OEM escalation channels.",
    ],
    valuableEvidence: [
      "Mimecast certification or partner-delivery experience.",
      "Referenceable enterprise Mimecast projects.",
      "Microsoft 365 email-security integration experience.",
    ],
  },
  {
    title: "Mimecast Technical Account Manager",
    slug: "mimecast-technical-account-manager",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Own the technical customer relationship for Mimecast services, including service reviews, escalations and improvement planning.",
    requirements: [
      "Practical knowledge of Mimecast administration and service operations.",
      "Experience managing customer escalations, SLA reviews, reporting and service-improvement actions.",
      "Ability to translate operational security issues into clear customer actions.",
      "Strong written and verbal stakeholder-management skills.",
    ],
    valuableEvidence: [
      "Mimecast certification or technical account-management experience.",
      "Managed-security service experience.",
      "Referenceable enterprise customer accounts.",
    ],
  },
  {
    title: "Mimecast Engineer",
    slug: "mimecast-engineer",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Implement, administer and support Mimecast email-security environments and related Microsoft 365 integrations.",
    requirements: [
      "Demonstrable hands-on Mimecast implementation and administration experience.",
      "Strong email-security policy, phishing / BEC protection, troubleshooting and incident-support capability.",
      "Experience with Microsoft 365 / Entra ID integration and user or licence administration.",
      "Ability to document changes, incidents and operational procedures.",
    ],
    valuableEvidence: [
      "Mimecast certification.",
      "SIEM integration or security-monitoring experience.",
      "Referenceable Mimecast customer environments.",
    ],
  },
  {
    title: "Senior Microsoft Security Architect / Cybersecurity Technical Lead",
    slug: "senior-microsoft-security-architect-cybersecurity-lead",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Lead security architecture and managed-security delivery across Microsoft 365, identity, endpoint and cloud-security environments.",
    requirements: [
      "At least 7 years of relevant information-security / cybersecurity experience.",
      "Strong Microsoft 365 security-suite, identity, endpoint, incident-response and security-operations capability.",
      "At least two relevant recognised certifications such as CISSP, CISM, CISA, CEH, Security+, ISO 27001 or Microsoft security credentials.",
      "Ability to lead technical design, security governance, incident escalation and managed-service delivery.",
    ],
    valuableEvidence: [
      "Referenceable managed-security or SOC projects.",
      "Microsoft Defender, Sentinel, Entra ID or cloud-security architecture experience.",
      "Experience presenting security posture and remediation priorities to executives.",
    ],
  },
  {
    title: "Cybersecurity Engineer",
    slug: "cybersecurity-engineer",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Operate and support enterprise cybersecurity controls across endpoint, Microsoft 365, vulnerability, monitoring and incident-response domains.",
    requirements: [
      "5+ years of relevant cybersecurity experience is strongly preferred for current enterprise assignments.",
      "Hands-on endpoint security / EDR, Microsoft 365 security, vulnerability management and incident handling experience.",
      "At least two relevant security certifications are strongly preferred.",
      "Strong troubleshooting, operational reporting and customer-support capability.",
    ],
    valuableEvidence: [
      "Microsoft Defender / Sentinel or comparable SOC tooling.",
      "Cloud backup, recovery or security-monitoring experience.",
      "Referenceable managed-security services work.",
    ],
  },
  {
    title: "ISO 27001 & COBIT 2019 GRC Consultant",
    slug: "iso-27001-cobit-2019-grc-consultant",
    category: "Cybersecurity & Governance",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Deliver information-security and IT-governance assessments, maturity reviews, gap analysis and remediation roadmaps.",
    requirements: [
      "At least 3 years of relevant governance, risk, compliance or information-security assessment experience.",
      "ISO/IEC 27001 Lead Auditor or Lead Implementer certification.",
      "COBIT 2019 Design and Implementation certification / demonstrated competency.",
      "Strong assessment, evidence review, maturity scoring, report writing and remediation-planning capability.",
    ],
    valuableEvidence: [
      "ISO 27001:2022 implementation or audit projects.",
      "COBIT maturity or governance-design assignments.",
      "Public-sector or regulated-industry references.",
    ],
  },
  {
    title: "Cloud Infrastructure Architect",
    slug: "cloud-infrastructure-architect",
    category: "Infrastructure & Managed Services",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Design and support cloud / hybrid infrastructure, resilience, virtualisation and managed-platform environments.",
    requirements: [
      "Relevant NQF 6+ IT qualification or equivalent professional background.",
      "At least 3 years of managed-infrastructure experience; 5+ years is preferred for senior assignments.",
      "Strong Azure / hybrid compute, storage, networking, virtualisation, identity, monitoring and backup / DR capability.",
      "At least one relevant industry certification; two or more are preferred.",
    ],
    valuableEvidence: [
      "Large managed-infrastructure or migration references.",
      "Azure, VMware, Hyper-V, backup / DR or data-centre experience.",
      "Architecture documentation and operational-handover experience.",
    ],
  },
  {
    title: "Network & Unified Communications Engineer",
    slug: "network-unified-communications-engineer",
    category: "Infrastructure & Managed Services",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Design and support resilient enterprise connectivity, SD-WAN, network infrastructure and Microsoft voice / video services.",
    requirements: [
      "At least 3 years of relevant managed-network / infrastructure experience.",
      "Strong WAN, LAN, WLAN, routing, switching, firewall and QoS capability.",
      "Experience with Microsoft Teams voice / video, Direct Routing, Operator Connect or related unified communications is valuable.",
      "At least one relevant networking, Microsoft or security certification is preferred.",
    ],
    valuableEvidence: [
      "SD-WAN implementation or managed WAN references.",
      "Carrier, SIP, Teams Phone or contact-centre connectivity experience.",
      "Enterprise monitoring and troubleshooting experience.",
    ],
  },
  {
    title: "IT Service Delivery Manager",
    slug: "it-service-delivery-manager",
    category: "Infrastructure & Managed Services",
    location: "South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Own day-to-day managed-service performance, customer governance, SLA control and multi-vendor service coordination.",
    requirements: [
      "At least 3 years of managed-infrastructure or IT service-delivery experience.",
      "Strong SLA, incident, problem, change, escalation and service-review management capability.",
      "Experience coordinating service desks, technical teams and third-party providers.",
      "ITIL or comparable service-management certification is strongly preferred.",
    ],
    valuableEvidence: [
      "24/7 managed-service or enterprise support experience.",
      "Service reporting, CSI and customer-governance experience.",
      "Referenceable infrastructure / cloud managed-service accounts.",
    ],
  },
  {
    title: "Advanced Microsoft Excel Facilitator",
    slug: "advanced-microsoft-excel-facilitator",
    category: "Training & Specialist Integration",
    location: "Gauteng / South Africa",
    engagement: "Project-based / Contract",
    summary:
      "Deliver practical advanced Excel training focused on data analysis, management reporting, dashboards and workplace productivity.",
    requirements: [
      "Demonstrable experience facilitating advanced Microsoft Excel training in professional environments.",
      "Strong capability in advanced formulas, data analysis, PivotTables, Power Query, dashboards and management reporting.",
      "Ability to prepare structured training material, practical exercises and pre/post assessments.",
      "Relevant facilitator / training accreditation or recognised Microsoft training credentials are strongly preferred.",
    ],
    valuableEvidence: [
      "Corporate or public-sector Excel training references.",
      "Power BI, Power Query or analytics training capability.",
      "Accredited training-provider association or subcontracting availability.",
    ],
  },
  {
    title: "AV / Microsoft Teams Rooms Integration Engineer",
    slug: "av-microsoft-teams-rooms-integration-engineer",
    category: "Training & Specialist Integration",
    location: "Gauteng / South Africa",
    engagement: "Project-based / Subcontract",
    summary:
      "Integrate enterprise boardroom, conferencing and Microsoft Teams Rooms environments across audio, video, control and networked AV systems.",
    requirements: [
      "Demonstrable enterprise AV / video-conferencing installation, programming and integration experience.",
      "Strong Microsoft Teams Rooms, PTZ camera, DSP, microphone, room-control and AV-over-IP capability.",
      "Experience commissioning, testing, training users and supporting production boardroom environments.",
      "Ability to work on-site in Gauteng where required.",
    ],
    valuableEvidence: [
      "Experience with Extron, AMX, Sennheiser, Cisco legacy conferencing or comparable technologies.",
      "Three or more referenceable corporate AV integration projects.",
      "Microsoft Teams Rooms or major AV OEM certification.",
    ],
  },
];
