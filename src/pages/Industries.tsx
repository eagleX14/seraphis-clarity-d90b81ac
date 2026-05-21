import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import schoolsImg from "@/assets/ind-schools.jpg";
import professionalImg from "@/assets/ind-professional.jpg";
import healthcareImg from "@/assets/ind-healthcare.jpg";
import constructionImg from "@/assets/ind-construction.jpg";
import financeImg from "@/assets/ind-finance.jpg";
import mediaImg from "@/assets/industry-media.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const industries = [
  {
    title: "Schools & Colleges",
    image: schoolsImg,
    overview:
      "Schools need more than email. They need safer handling of learner and staff information, better collaboration between administration and academics, and more structured control over communication and documents.",
    symptoms: [
      "Staff rely on personal or loosely controlled email and file storage.",
      "Learner, staff and governance records are difficult to secure and organise consistently.",
      "Communication with parents, educators and administration is fragmented.",
    ],
    support:
      "Seraphis helps schools with Microsoft 365 licensing, collaboration setup, security baselines, document control and the wider cloud and reporting foundation needed for a more modern environment.",
    offerings: "Microsoft 365 Education, Business Premium for administration, cybersecurity controls, Azure advisory and structured collaboration environments.",
  },
  {
    title: "Legal, Accounting & Professional Services",
    image: professionalImg,
    overview:
      "Professional services businesses depend heavily on trusted communication, document accuracy, client confidentiality and consistent internal coordination.",
    symptoms: [
      "Client documents sit across email inboxes, shared folders and personal devices.",
      "Sensitive records are exposed to weak access control or inconsistent file practices.",
      "Reporting, review and approvals depend too much on manual coordination.",
    ],
    support:
      "Seraphis helps professional firms strengthen Microsoft 365 foundations, document control, cloud structure, reporting visibility and security posture.",
    offerings: "Business Standard or Premium, security add-ons, Azure cloud support, reporting and analytics improvements.",
  },
  {
    title: "Retail & E-commerce",
    image: retailImg,
    overview:
      "Retail businesses generate valuable operating data but often struggle to convert it into clear decisions. Stock, sales, purchasing and finance information usually remain fragmented.",
    symptoms: [
      "Stockouts, slow-moving stock, shrinkage and demand uncertainty.",
      "Management cannot easily see where value is lost across products, stores or channels.",
      "Reporting depends on spreadsheets and manual reconciliations.",
    ],
    support:
      "Seraphis helps retailers structure data, improve reporting, support dashboards, identify loss pools and strengthen the digital tools around communication and operations.",
    offerings: "Operational diagnostics, Microsoft 365 for office and frontline teams, Azure data foundations, dashboards and analytical models.",
  },
  {
    title: "Healthcare & Clinics",
    image: healthcareImg,
    overview:
      "Healthcare environments need disciplined handling of patient-related information, secure communication and structured access control, while still keeping teams productive.",
    symptoms: [
      "Patient or operational information is passed through weakly controlled channels.",
      "Email, document and user access security is not strong enough for the sensitivity of the work.",
      "Reporting across operations or administration is slow and fragmented.",
    ],
    support:
      "Seraphis helps clinics and healthcare organisations build more secure communication and information environments, with Microsoft 365, cloud guidance and reporting support.",
    offerings: "Business Premium, enterprise security controls, Microsoft cloud support, analytics and operational visibility improvements.",
  },
  {
    title: "Logistics & Transportation",
    image: logisticsImg,
    overview:
      "Logistics businesses are strongly affected by route efficiency, utilisation, dispatch timing, reporting discipline and visibility across moving operations.",
    symptoms: [
      "Fuel costs are high, trips are underutilised and route planning is inconsistent.",
      "Operations teams lack a clean, timely view of loads, routes and service performance.",
      "Communication between office, dispatch and field operations is fragmented.",
    ],
    support:
      "Seraphis helps logistics businesses improve reporting, planning visibility, communication structure and the cloud/data foundations needed for route and performance analysis.",
    offerings: "Operational intelligence, frontline Microsoft 365 capability, Azure data platforms, dashboards and planning-oriented analytics.",
  },
  {
    title: "Manufacturing & Operations",
    image: manufacturingImg,
    overview:
      "Manufacturing performance depends on process discipline, data visibility, coordination and reliable reporting on downtime, throughput, quality and exceptions.",
    symptoms: [
      "Recurring downtime or quality issues are known but not diagnosed properly.",
      "Data from production, quality and operations is not consolidated for management use.",
      "Teams spend effort reporting, but root causes remain unclear.",
    ],
    support:
      "Seraphis helps manufacturers build operational visibility, structured reporting and cloud foundations that support analytics, automation and continuous improvement.",
    offerings: "Operational intelligence, Azure cloud architecture, dashboards, data integration and Microsoft 365 collaboration environments.",
  },
  {
    title: "Construction & Property",
    image: constructionImg,
    overview:
      "Construction and property organisations need stronger control over project communication, document versioning, approvals and site-level coordination.",
    symptoms: [
      "Project files, site reports, supplier records and tenant or client documents are scattered.",
      "Approvals and communication chains are slow and inconsistently documented.",
      "Management visibility over project information is weaker than required.",
    ],
    support:
      "Seraphis helps construction and property teams improve communication, document management, security, reporting and operational coordination.",
    offerings: "Microsoft 365, SharePoint/Teams enablement, Azure advisory, workflow support and reporting solutions.",
  },
  {
    title: "Finance, Insurance & Investment",
    image: financeImg,
    overview:
      "Financial and advisory environments rely on trusted data, strong access control, careful communication and a high degree of governance discipline.",
    symptoms: [
      "Sensitive client information requires stronger identity and access controls.",
      "Reporting and approvals must be consistent, auditable and timely.",
      "The organisation needs productivity gains without weakening control.",
    ],
    support:
      "Seraphis helps financial organisations strengthen Microsoft environments, cloud foundations, reporting visibility and cybersecurity posture.",
    offerings: "Microsoft 365 Business Premium or E3/E5, security controls, Azure cloud advisory, operational dashboards and governance support.",
  },
  {
    title: "Media, Digital & Content Businesses",
    image: mediaImg,
    overview:
      "Digital businesses often move quickly, but the speed can hide weak controls around workflows, campaign visibility, content operations and data use.",
    symptoms: [
      "Digital operations depend on fast collaboration but information remains fragmented.",
      "Management lacks enough visibility over campaign, subscriber or operational performance.",
      "The business wants more automation and data insight but lacks the foundation.",
    ],
    support:
      "Seraphis helps digital businesses improve work environments, reporting structures, security and the cloud/data base needed for ongoing analytics and growth.",
    offerings: "Microsoft 365 collaboration, Azure cloud services, dashboards, analytics and workflow improvements.",
  },
];

const Industries = () => (
  <main>
    <SEO
      title="Industry Solutions | Seraphis IT and Data Solutions"
      description="See how Seraphis applies operational intelligence, Microsoft 365, Azure cloud solutions and analytics across schools, retail, logistics, manufacturing, finance and more."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <SectionHeading
          label="Industries"
          title="Industry-specific problems need industry-aware solutions"
          description="Each sector has different data, risks, users and performance gaps. Seraphis adapts the offer to the operating reality."
        />
      </div>
    </section>

    {industries.map((industry, index) => (
      <section key={industry.title} className={index % 2 === 0 ? "section-padding bg-background" : "section-padding bg-card"}>
        <div className="section-container space-y-10">
          <div className="grid gap-10 xl:grid-cols-[0.95fr,1.05fr] xl:items-center">
            <img
              src={industry.image}
              alt={industry.title}
              className={`w-full rounded-2xl shadow-lg ${index % 2 === 1 ? "xl:order-2" : ""}`}
            />
            <div className={`space-y-5 ${index % 2 === 1 ? "xl:order-1" : ""}`}>
              <h2>{industry.title}</h2>
              <p className="text-muted-foreground">{industry.overview}</p>
              <div className="rounded-xl border border-border bg-background/70 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How Seraphis Helps</div>
                <p className="mt-3 text-sm text-muted-foreground">{industry.support}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="seraphis-card space-y-4">
              <h3 className="text-xl">Typical Symptoms In This Industry</h3>
              <div className="space-y-3">
                {industry.symptoms.map((symptom) => (
                  <div key={symptom} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="seraphis-card space-y-4">
              <h3 className="text-xl">Relevant Offerings</h3>
              <p className="text-sm text-muted-foreground">{industry.offerings}</p>
              <div className="pt-2">
                <Button variant="hero-outline" asChild>
                  <Link to="/contact">Discuss This Industry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Need an industry-specific conversation?</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          We can discuss your environment from the perspective of its actual operational problems, technology gaps and business outcomes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Request A Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/microsoft-365">View Microsoft 365 Solutions <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Industries;
