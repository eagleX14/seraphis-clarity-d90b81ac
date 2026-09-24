import { promises as fs } from "node:fs";
import path from "node:path";

const ORIGIN = "https://seraphis-it.com";
const distDir = path.resolve("dist");
const publicDir = path.resolve("public");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const jobPages = {
  "/careers/full-stack-web-developer": {
    title: "Full Stack Web Developer | Careers | Seraphis IT and Data Solutions",
    description:
      "Design, develop, test, deploy and maintain full-stack web applications, databases, APIs, integrations and cloud-based solutions.",
    roleTitle: "Full Stack Web Developer",
    id: "full-stack-web-developer",
    location: "Gauteng",
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
    requirements: [
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
    ]
  },
  "/careers/technical-project-manager": {
    title: "Technical Project Manager | Careers | Seraphis IT and Data Solutions",
    description:
      "Lead and coordinate technology and digital modernisation delivery across IT systems, software, infrastructure, databases, cloud and cybersecurity.",
    roleTitle: "Technical Project Manager",
    id: "technical-project-manager",
    location: "South Africa",
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
    requirements: [
      "Professional Project Management Certification — PMP, PRINCE2, or equivalent.",
      "Minimum 5 years’ experience in technical project management.",
      "Experience leading IT systems, software development, migration, database management and/or digital transformation projects.",
      "Experience coordinating multidisciplinary technical teams.",
      "Strong project planning, scheduling, risk management and stakeholder management capabilities.",
      "Ability to manage technical deliverables, dependencies and project documentation.",
      "Strong written and verbal communication skills.",
      "Ability to work effectively with technical and non-technical stakeholders."
    ]
  },
  "/careers/senior-content-communications-specialist": {
    title: "Senior Content & Communications Specialist | Careers | Seraphis IT",
    description:
      "Develop clear, professional digital content and content strategy for web and digital communication platforms.",
    roleTitle: "Senior Content & Communications Specialist",
    id: "senior-content-communications-specialist",
    location: "South Africa",
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
    requirements: [
      "B. Degree or National Diploma in Communication, Marketing, Journalism, or equivalent.",
      "Minimum 5 years’ professional experience in digital copywriting and content strategy.",
      "Strong professional writing and editing capability.",
      "Demonstrable experience producing digital or web content.",
      "Ability to structure complex information clearly for different audiences.",
      "Strong attention to detail.",
      "Ability to work effectively with technical, design and business stakeholders."
    ]
  },
  "/careers/senior-graphic-ui-ux-designer": {
    title: "Senior Graphic & UI/UX Designer | Careers | Seraphis IT",
    description:
      "Create professional graphic design and UI/UX layouts for modern websites, digital platforms and user-facing interfaces.",
    roleTitle: "Senior Graphic & UI/UX Designer",
    id: "senior-graphic-ui-ux-designer",
    location: "South Africa",
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
    requirements: [
      "B. Degree or National Diploma in Graphic Design, UI/UX Design, or equivalent.",
      "Minimum 5 years’ professional experience in graphic design and UI/UX layouts.",
      "Strong portfolio demonstrating professional graphic design and digital interface work.",
      "Strong understanding of visual hierarchy, typography, layout and interface design.",
      "Experience designing for web and digital environments.",
      "Ability to work effectively with developers, content specialists and other project stakeholders."
    ]
  }
};

const generalMeta = {
  "/careers": {
    title: "Careers | Seraphis IT and Data Solutions",
    description: "Explore current career opportunities at Seraphis IT and Data Solutions."
  },
  "/about": {
    title: "About Seraphis IT & Data Solutions | South Africa",
    description: "Learn how Seraphis combines operational intelligence, governed data, Microsoft cloud and analytics to improve business visibility and performance."
  },
  "/business-solutions": {
    title: "Business Solutions & Operational Intelligence | Seraphis IT and Data Solutions",
    description: "Seraphis helps organisations improve data infrastructure, identify efficiency gaps, quantify cost-benefit and discover scalable opportunities."
  },
  "/operational-intelligence": {
    title: "Operational Intelligence & Loss Recovery | Seraphis IT",
    description: "Seraphis helps South African businesses identify operational losses, improve reporting, structure data and turn analytics into measurable actions."
  },
  "/microsoft-365": {
    title: "Microsoft 365 Licensing, Migration & Security | Seraphis IT",
    description: "Microsoft 365 licence guidance, tenant setup, mailbox migration, Teams, SharePoint, OneDrive, security baselines and support."
  },
  "/azure-cloud-solutions": {
    title: "Azure Cloud Solutions | Seraphis IT and Data Solutions",
    description: "Azure cloud advisory, architecture, data platform design, governance, analytics and automation foundations."
  },
  "/industries": {
    title: "Industry Solutions | Seraphis IT and Data Solutions",
    description: "Technology and data solutions for South African schools, retail, logistics, manufacturing, professional services, healthcare, finance and more."
  },
  "/how-we-work": {
    title: "How We Work | Operational Intelligence Framework | Seraphis",
    description: "See how Seraphis moves from loss discovery and value modelling to governed data, analytics, workflow integration and performance monitoring."
  },
  "/diagnostic-questionnaire": {
    title: "Business Self-Diagnosis Questionnaire | Seraphis IT and Data Solutions",
    description: "Identify gaps in business data, Microsoft 365, Azure cloud, analytics, operations, cybersecurity and reporting."
  },
  "/insights": {
    title: "Insights | Seraphis IT and Data Solutions",
    description: "Practical Seraphis insights on Microsoft 365, Azure, operational intelligence, retail analytics, cybersecurity and business data."
  },
  "/retail-analytics": {
    title: "Retail Analytics & Revenue Scaling | Seraphis IT",
    description: "Turn sales, SKU, inventory, supplier and channel data into dashboards, forecasts, loss analysis and revenue actions."
  },
  "/contact": {
    title: "Contact Seraphis IT and Data Solutions",
    description: "Contact Seraphis for Microsoft 365 licensing, Azure cloud solutions, operational intelligence, analytics and cybersecurity support."
  }
};

const setMeta = (html, route, meta) => {
  const canonical = `${ORIGIN}${route === "/" ? "" : route}`;
  let out = html
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta?.title || "Seraphis IT and Data Solutions")}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(meta?.description || "Seraphis IT and Data Solutions")}" />`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonical}" />`);

  if (meta?.title) {
    out = out.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  }
  if (meta?.description) {
    out = out.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  }
  return out;
};

const jobStaticMarkup = (route, job) => {
  const canonical = `${ORIGIN}${route}`;
  const descriptionHtml = [
    `<p>${escapeHtml(job.overview)}</p>`,
    "<p>Core responsibilities:</p>",
    `<ul>${job.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`,
    "<p>Minimum requirements:</p>",
    `<ul>${job.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
  ].join("");

  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.roleTitle,
    description: descriptionHtml,
    identifier: {
      "@type": "PropertyValue",
      name: "Seraphis IT and Data Solutions (Pty) Ltd",
      value: job.id
    },
    datePosted: "2026-09-24",
    employmentType: "CONTRACTOR",
    url: canonical,
    hiringOrganization: {
      "@type": "Organization",
      name: "Seraphis IT and Data Solutions (Pty) Ltd",
      sameAs: ORIGIN,
      logo: `${ORIGIN}/assets/seraphis-logo-optimized.webp`
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...(job.location === "Gauteng" ? { addressRegion: "Gauteng" } : {}),
        addressCountry: "ZA"
      }
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "South Africa"
    },
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: 60
    },
    directApply: true
  };

  return {
    schema: `<script id="job-posting-${job.id}" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
    body: `<main><h1>${escapeHtml(job.roleTitle)}</h1><p>${escapeHtml(job.overview)}</p><h2>Core responsibilities</h2><ul>${job.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><h2>Minimum requirements</h2><ul>${job.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></main>`
  };
};

const baseHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
const sitemap = await fs.readFile(path.join(publicDir, "sitemap.xml"), "utf8");
const routes = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname.replace(/\/$/, "") || "/")
);

[
  "/careers/general-application",
  "/careers/application-received",
  "/privacy/retail-analytics",
  "/support",
  "/support/retail-analytics",
  "/partners/csp-retail-analytics"
].forEach((route) => routes.add(route));

for (const route of routes) {
  if (route === "/") continue;

  const job = jobPages[route];
  const meta = job || generalMeta[route] || {
    title: "Seraphis IT and Data Solutions",
    description: "Seraphis IT and Data Solutions."
  };

  let html = setMeta(baseHtml, route, meta);

  if (route === "/careers/general-application" || route === "/careers/application-received") {
    html = html.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      '<meta name="robots" content="noindex,follow" />'
    );
  }

  if (job) {
    const staticJob = jobStaticMarkup(route, job);
    html = html.replace("</head>", `  ${staticJob.schema}\n  </head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${staticJob.body}</div>`);
  }

  const relative = route.replace(/^\//, "");
  const dirPath = path.join(distDir, relative);
  const htmlPath = path.join(distDir, `${relative}.html`);

  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(path.join(dirPath, "index.html"), html);
  await fs.mkdir(path.dirname(htmlPath), { recursive: true });
  await fs.writeFile(htmlPath, html);
}

console.log(`Generated static entry files for ${routes.size - 1} routes.`);
