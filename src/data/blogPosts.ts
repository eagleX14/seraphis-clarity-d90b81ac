import heroDashboard from "@/assets/hero-dashboard.jpg";
import platformArchitecture from "@/assets/platform-architecture.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import m365Hero from "@/assets/m365-hero.jpg";
import m365Security from "@/assets/m365-security.jpg";

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "operational-intelligence-and-loss-recovery",
    category: "Operational Intelligence",
    title: "Operational Intelligence And Loss Recovery: Where Businesses Usually Bleed Value",
    excerpt:
      "Operational intelligence starts with business truth. Hidden losses often sit in shrinkage, downtime, poor visibility, weak controls, manual workflows and delayed decisions.",
    image: heroDashboard,
    readTime: "7 min read",
    sections: [
      {
        heading: "Why loss recovery matters",
        paragraphs: [
          "Many businesses do not fail because they have no sales. They struggle because value quietly leaks out of operations. The leakage may sit in stock loss, delayed invoicing, poor route planning, quality failures, slow reporting or weak handovers between teams.",
          "Seraphis positions operational intelligence as the discipline of turning raw operational data into measurable control. Instead of only reporting what happened, the goal is to identify where value is lost, why it is lost, and what practical system changes can recover part of that value.",
        ],
        bullets: [
          "Quantify loss pools instead of guessing.",
          "Separate total loss from realistically recoverable loss.",
          "Prioritise interventions with the strongest financial impact.",
        ],
      },
      {
        heading: "Common symptoms businesses experience",
        paragraphs: [
          "Businesses often describe the problem in non-technical language first. Management feels that money is slipping away, stock movements do not reconcile, routes look inefficient, reports arrive late, teams work hard but decisions still feel reactive, and no one has one version of the truth.",
        ],
        bullets: [
          "Revenue is growing but margins remain weak.",
          "Reports exist, but they do not explain root causes.",
          "Operational issues are repeated because warning signs arrive too late.",
          "Data is scattered across spreadsheets, finance systems, emails and operational platforms.",
        ],
      },
      {
        heading: "What operational intelligence should produce",
        paragraphs: [
          "A mature operational intelligence programme should not end at dashboards. It should give the business a governed data foundation, clearer reporting, a repeatable decision process, and intervention systems that connect insights to action.",
        ],
      },
    ],
  },
  {
    slug: "microsoft-365-licensing-migration-and-security",
    category: "Microsoft 365",
    title: "Microsoft 365 Licensing, Migration And Security: More Than Just Email",
    excerpt:
      "Microsoft 365 is often the first practical step for organisations that need professional email, safer document control, stronger access management and a better digital working environment.",
    image: m365Hero,
    readTime: "6 min read",
    sections: [
      {
        heading: "Why organisations move",
        paragraphs: [
          "Many organisations still rely on personal email accounts, scattered file storage, weak user access control and no clear backup discipline. As the business grows, these weaknesses become operational and security problems.",
          "Microsoft 365 provides the communication and collaboration foundation, but value is unlocked properly when licensing is matched to business need and the environment is migrated and secured correctly.",
        ],
        bullets: [
          "Professional domain email and shared calendars.",
          "Teams, OneDrive and SharePoint for collaboration.",
          "Safer user access and role-based administration.",
          "A cleaner path into security, automation and data governance.",
        ],
      },
      {
        heading: "Why Seraphis matters in the rollout",
        paragraphs: [
          "The licence alone does not solve the business problem. Organisations still need tenant setup, domain changes, mailbox migration, user onboarding, file structure design and a security baseline. Seraphis positions this as the real business service layer around Microsoft licensing.",
        ],
      },
      {
        heading: "Typical outcomes",
        paragraphs: [
          "For schools, the outcome is safer learner and staff data handling. For professional services, it is better control over client documents. For retail or logistics teams, it is stronger communication between frontline and management. For SMEs generally, it is the move from informal tools to a professional work environment.",
        ],
      },
    ],
  },
  {
    slug: "azure-cloud-data-foundations-for-modern-business",
    category: "Azure Cloud",
    title: "Azure Cloud Data Foundations For Modern Business",
    excerpt:
      "Azure cloud architecture becomes valuable when it creates a governed, scalable foundation for reporting, analytics, security, continuity and future AI use cases.",
    image: platformArchitecture,
    readTime: "7 min read",
    sections: [
      {
        heading: "What businesses usually face before Azure",
        paragraphs: [
          "Before modernisation, business data is often fragmented across point solutions, spreadsheets, banking exports, supplier systems, CRMs and line-of-business tools. This slows reporting and makes advanced analytics difficult.",
        ],
        bullets: [
          "No trusted central data layer.",
          "Poor integration between systems.",
          "Inconsistent reporting logic.",
          "Limited governance, security and access visibility.",
        ],
      },
      {
        heading: "What Azure enables",
        paragraphs: [
          "Azure supports the wider Seraphis operating model: ingestion, governed storage, transformation, analytics, reporting, machine learning and security. It is not about moving everything to the cloud for its own sake. It is about creating a better foundation for decisions and control.",
        ],
        bullets: [
          "Secure and scalable storage using Azure data services.",
          "Integrated pipelines for operational and reporting data.",
          "A base for Power BI, forecasting, anomaly detection and automation.",
          "Identity, governance and cost-control aligned to business use.",
        ],
      },
      {
        heading: "What Seraphis delivers",
        paragraphs: [
          "Seraphis supports Azure advisory, architecture, governance, data platform design and implementation. The outcome is a cloud environment that is business-aligned rather than tool-led.",
        ],
      },
    ],
  },
  {
    slug: "retail-analytics-and-hidden-loss-pools",
    category: "Retail Analytics",
    title: "Retail Analytics And Hidden Loss Pools",
    excerpt:
      "Retail businesses often lose value through shrinkage, stockouts, markdowns, slow-moving stock, supplier drift and weak reporting visibility.",
    image: retailImg,
    readTime: "5 min read",
    sections: [
      {
        heading: "Why retail is a strong analytics entry point",
        paragraphs: [
          "Retail generates rich operational data from POS, e-commerce, stock counts, supplier invoices and banking records. That makes it possible to find recoverable losses with relatively practical interventions.",
        ],
      },
      {
        heading: "Typical retail symptoms",
        paragraphs: [
          "A retailer may feel that stock is always a problem, demand is hard to forecast, some products run out too often, cash does not reconcile well, and staff spend too much time manually compiling reports. These are not isolated issues; they point to broken visibility.",
        ],
        bullets: [
          "Shrinkage and stock variance.",
          "Stockouts and lost sales.",
          "Slow-moving inventory and markdown pressure.",
          "Weak visibility by category, product or branch.",
        ],
      },
      {
        heading: "How Seraphis positions the solution",
        paragraphs: [
          "The solution path usually starts with data cleanup and diagnostics, then dashboarding, forecasting, reporting discipline and operational controls. Over time the same environment can extend into Azure data infrastructure, automation and machine learning.",
        ],
      },
    ],
  },
  {
    slug: "logistics-planning-route-efficiency-and-cost-control",
    category: "Logistics",
    title: "Logistics Planning, Route Efficiency And Cost Control",
    excerpt:
      "In logistics, cost leakage often sits in poor route planning, empty return legs, weak dispatch timing, limited visibility and delayed decision-making.",
    image: logisticsImg,
    readTime: "6 min read",
    sections: [
      {
        heading: "Common logistics pain points",
        paragraphs: [
          "Transport businesses often experience high fuel bills, idle time, underutilised trips, late deliveries and weak operational reporting. Teams know there is waste, but they do not always have the data structure or optimisation logic to improve it consistently.",
        ],
      },
      {
        heading: "Where data helps",
        paragraphs: [
          "With route, load, order, dispatch and vehicle information organised properly, businesses can start to identify controllable cost pools. Reporting then becomes a management tool rather than a historical document.",
        ],
        bullets: [
          "Route and trip efficiency.",
          "Empty miles and backhaul opportunities.",
          "Driver time and dispatch discipline.",
          "Delivery performance and customer service impact.",
        ],
      },
      {
        heading: "Longer-term value",
        paragraphs: [
          "A well-structured logistics data platform creates a path into route optimisation, predictive planning, live dashboards and stronger customer visibility. This is where analytics, cloud infrastructure and automation combine.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-controls-against-fraud-and-account-compromise",
    category: "Cybersecurity",
    title: "Cybersecurity Controls Against Fraud And Account Compromise",
    excerpt:
      "Weak identity control, poor email security and unmanaged access permissions expose organisations to fraud, phishing and account compromise.",
    image: m365Security,
    readTime: "5 min read",
    sections: [
      {
        heading: "The business problem",
        paragraphs: [
          "Cybersecurity is not only a technical concern. A compromised mailbox, an unauthorised payment instruction, or weak access to sensitive documents can quickly become a financial and operational problem.",
        ],
      },
      {
        heading: "Where Seraphis helps",
        paragraphs: [
          "Seraphis positions cybersecurity around practical controls: identity protection, MFA, document access, endpoint discipline, user governance and the broader Microsoft and Azure security stack where appropriate.",
        ],
        bullets: [
          "Reduce phishing and account takeover exposure.",
          "Strengthen access control for staff and management.",
          "Protect sensitive business, learner, client or patient information.",
          "Create a stronger platform for compliance and resilience.",
        ],
      },
    ],
  },
];
