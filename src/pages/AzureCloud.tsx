import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import platformImg from "@/assets/platform-architecture.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import aboutImg from "@/assets/about-workspace.jpg";
import { ArrowRight, Cloud, Database, ShieldCheck, BarChart3, Workflow, Brain, CheckCircle2 } from "lucide-react";

const solutionCards = [
  {
    icon: Cloud,
    title: "Azure Architecture & Advisory",
    description: "Design business-aligned Azure foundations across storage, networking, identity, continuity and cost control.",
  },
  {
    icon: Database,
    title: "Data Platform Foundations",
    description: "Build trusted storage and data pipelines so reporting, analytics and machine learning sit on structured foundations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Turn fragmented operational data into dashboards, reporting packs and clearer management information.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Security",
    description: "Strengthen role-based access, governance discipline, backup, monitoring and risk control across cloud environments.",
  },
  {
    icon: Workflow,
    title: "Automation Readiness",
    description: "Create a cloud environment ready for workflows, alerts, approvals and future automation use cases.",
  },
  {
    icon: Brain,
    title: "AI & Advanced Use Cases",
    description: "Prepare clean, governed data foundations for forecasting, anomaly detection, Copilot readiness and decision support.",
  },
];

const businessProblems = [
  "Reporting is slow because operational data must be pulled manually from different systems.",
  "Teams do not trust the data because logic changes between spreadsheets, departments or reports.",
  "Storage and access are not structured for growth, governance or auditability.",
  "The business wants analytics or AI but does not yet have a reliable cloud data foundation.",
];

const AzureCloud = () => (
  <main>
    <SEO
      title="Azure Cloud Solutions | Seraphis IT and Data Solutions"
      description="Azure cloud advisory, architecture, data platform design, governance, analytics and automation foundations from Seraphis IT and Data Solutions."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
          <div className="space-y-6">
            <span className="sales-pill">
              Azure Cloud Solutions
            </span>
            <h1>Build a stronger cloud and data foundation before complexity builds around you.</h1>
            <p className="text-lg text-muted-foreground">
              Seraphis helps organisations design Azure environments that support secure storage, governed data, analytics, automation and long-term digital growth.
              The goal is not to move to cloud for appearance. The goal is to improve control, reporting and future capability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book An Azure Review</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/operational-intelligence">See Operational Intelligence</Link>
              </Button>
            </div>
          </div>
          <img src={platformImg} alt="Azure cloud architecture" className="min-h-[420px] w-full rounded-2xl object-cover shadow-xl" />
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Business Problems"
          title="Signs your data environment needs cloud structure"
          description="Slow reports, fragmented data and weak governance become expensive as the organisation grows."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {businessProblems.map((problem) => (
            <div key={problem} className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
              {problem}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="What We Deliver"
          title="Azure cloud capability tied to business use"
          description="The point of the Azure environment is to support business reporting, governed information, automation and operational decision-making."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutionCards.map((item) => (
            <div key={item.title} className="seraphis-card space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 xl:grid-cols-2 xl:items-center">
        <img src={heroDashboard} alt="Data analytics dashboard" className="rounded-2xl shadow-lg" />
        <div className="space-y-6">
          <h2>How Azure fits the wider Seraphis model</h2>
          <p className="text-muted-foreground">
            Azure cloud solutions are not separate from the rest of the Seraphis offering. They support operational intelligence, data analytics, reporting, security and future AI use cases.
            A stronger Azure foundation helps ensure that dashboards, forecasts and business applications sit on governed infrastructure rather than fragmented workarounds.
          </p>
          <div className="space-y-3">
            {[
              "Collect and store data in a more structured way.",
              "Create a better base for Power BI, dashboards and analytical models.",
              "Support governance, access control, backup and resilience.",
              "Prepare the business for automation, AI and scalable reporting.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container grid gap-12 xl:grid-cols-2 xl:items-center">
        <div className="space-y-5">
          <h2>Typical outcomes for clients</h2>
          <p className="text-muted-foreground">
            The immediate outcome is usually cleaner reporting, more reliable access to information and a more professional cloud environment.
            Over time, that same environment creates room for advanced analytics, automation, risk control and stronger operational visibility.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Faster, cleaner reporting",
              "Structured data foundations",
              "Better governance and access control",
              "A scalable platform for analytics and AI",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-seraphis-body">{item}</div>
            ))}
          </div>
        </div>
        <img src={aboutImg} alt="Cloud planning workshop" className="rounded-2xl shadow-lg" />
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Need Azure guidance with business context?</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          Seraphis helps businesses align Azure cloud decisions with operational needs, reporting priorities and long-term information control.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Request A Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/insights/azure-cloud-data-foundations-for-modern-business">Read Related Insight <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default AzureCloud;
