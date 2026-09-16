import type { CareerRole } from "@/data/careers";

const roleTimelines: Record<string, string> = {
  "senior-ict-project-manager": "6 months",
  "microsoft-teams-ccaas-specialist": "6 months",
  "mimecast-service-delivery-lead": "36 months",
  "mimecast-technical-account-manager": "36 months",
  "mimecast-engineer": "36 months",
  "senior-cybersecurity-architect": "36 months",
  "cybersecurity-engineer": "36 months",
  "iso27001-cobit-grc-specialist": "36 months",
  "dynamics-365-ce-power-platform-specialist": "12 months",
  "dynamics-365-sage-300-integration-specialist": "12 months",
  "dynamics-365-finance-operations-consultant": "12 months",
  "dynamics-365-technical-developer": "12 months",
  "azure-administrator-az104": "12 months",
  "azure-solutions-architect-az305": "12 months",
  "power-platform-developer": "12 months",
  "managed-infrastructure-technical-specialist": "36 months",
  "it-service-manager": "36 months",
};

export const getProjectDuration = (role: CareerRole) =>
  roleTimelines[role.id] ?? role.contractDuration;

export const getPublicOverview = (role: CareerRole) => {
  if (role.id === "senior-ict-project-manager") {
    return "Seraphis IT and Data Solutions is seeking experienced Senior ICT Project Managers for enterprise technology engagements. The role is responsible for delivery planning, governance, stakeholder coordination, risk and change control, and successful transition into operational support.";
  }

  if (role.id === "microsoft-teams-ccaas-specialist") {
    return "Seraphis is seeking Microsoft Teams and cloud contact-centre specialists to implement, configure and support enterprise communications and customer-contact environments.";
  }

  return role.overview
    .replace(/fixed-term/gi, "engagement")
    .replace(/contract period/gi, "engagement period");
};
