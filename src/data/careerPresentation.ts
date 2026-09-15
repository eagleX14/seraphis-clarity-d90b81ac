import type { CareerRole } from "@/data/careers";

/**
 * Public-facing presentation metadata for careers.
 *
 * Roles can be reused across multiple Seraphis Microsoft and infrastructure projects,
 * so the careers site presents them as project-based opportunities rather than as
 * guaranteed fixed-term employment contracts. Project-duration labels reflect the
 * current project scopes that originally drove each specialist requirement.
 */
const projectDurations: Record<string, string> = {
  "senior-ict-project-manager": "6 months to multi-year, depending on project",
  "microsoft-teams-ccaas-specialist": "6 months",
  "mimecast-service-delivery-lead": "36 months",
  "mimecast-technical-account-manager": "36 months",
  "mimecast-engineer": "36 months",
  "senior-cybersecurity-architect": "36 months",
  "cybersecurity-engineer": "36 months",
  "iso27001-cobit-grc-specialist": "36 months",
  "dynamics-365-ce-power-platform-specialist": "12–36 months, depending on project",
  "dynamics-365-sage-300-integration-specialist": "12 months",
  "dynamics-365-finance-operations-consultant": "12 months",
  "dynamics-365-technical-developer": "12 months",
  "azure-administrator-az104": "12 months",
  "azure-solutions-architect-az305": "12 months",
  "power-platform-developer": "12 months",
  "managed-infrastructure-technical-specialist": "Multi-year project scope",
  "it-service-manager": "Multi-year project scope",
};

export const publicEngagementLabel = "Project-based";

export const getProjectDuration = (role: CareerRole) =>
  projectDurations[role.id] ?? "Duration confirmed per project assignment";

export const getPublicOverview = (role: CareerRole) => {
  if (role.id === "senior-ict-project-manager") {
    return "Seraphis IT and Data Solutions is seeking experienced Senior ICT Project Managers for enterprise technology projects. The role is responsible for delivery planning, governance, stakeholder coordination, risk and change control, and successful transition into operational support. Suitable specialists may be engaged across multiple projects where their experience remains relevant.";
  }

  if (role.id === "microsoft-teams-ccaas-specialist") {
    return "Seraphis is seeking Microsoft Teams and cloud contact-centre specialists to implement, configure and support enterprise communications and customer-contact environments. The current project scope runs for six months, while suitable specialists may also be considered for subsequent Microsoft communications projects.";
  }

  return role.overview
    .replace(/fixed-term/gi, "project-based")
    .replace(/contract period/gi, "project period");
};
