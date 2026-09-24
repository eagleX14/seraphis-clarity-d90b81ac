import { Link } from "react-router-dom";
import { BarChart3, Database, LineChart, Search, Target, Workflow } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import platformArchitecture from "@/assets/platform-architecture.jpg";

const outcomes = [
  {
    icon: Search,
    title: "Find hidden loss pools",
    body: "Identify where revenue, margin, time or capacity is being lost through weak visibility, process gaps, delays, stock issues or poor controls.",
  },
  {
    icon: BarChart3,
    title: "Build decision-grade reporting",
    body: "Turn fragmented operational data into consistent measures, dashboards and management views that explain what is happening and why.",
  },
  {
    icon: Target,
    title: "Prioritise recoverable value",
    body: "Separate total exposure from the portion that can realistically be improved, then focus investment where the expected impact is strongest.",
  },
  {
    icon: Workflow,
    title: "Connect insight to action",
    body: "Move beyond dashboards by linking alerts, recommendations and reporting to practical operating workflows and accountability.",
  },
];

const OperationalIntelligence = () => (
  <main>
    <SEO
      title="Operational Intelligence & Loss Recovery | Seraphis IT"
      description="Seraphis helps South African businesses identify operational losses, improve reporting, structure data and turn analytics into measurable actions."
      canonicalPath="/operational-intelligence"
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
          <div className="space-y-7">
            <span className="sales-pill">Operational Intelligence • Loss Recovery • Analytics</span>
            <h1>Find where the business is losing value - then build the data and controls to improve it.</h1>
            <p className="max-w-3xl text-xl">
              Seraphis combines operational diagnosis, governed data, analytics and practical technology
              implementation to help organisations understand performance, identify recoverable losses and
              improve decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book A Diagnostic Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
                <Link to="/diagnostic-questionnaire">Take The Self-Diagnosis</Link>
              </Button>
            </div>
          </div>
          <img
            src={heroDashboard}
            alt="Operational intelligence dashboard showing business performance"
            width={1600}
            height={1000}
            decoding="async"
            className="min-h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="What It Solves"
          title="Operational problems become measurable when the data is structured properly"
          description="The objective is not more reporting. It is clearer control over where value is created, where it leaks and which interventions deserve attention."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <article key={title} className="seraphis-card space-y-4">
              <Icon className="text-primary" size={24} />
              <h2 className="text-2xl">{title}</h2>
              <p className="text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container grid gap-10 xl:grid-cols-[0.95fr,1.05fr] xl:items-center">
        <img
          src={platformArchitecture}
          alt="Governed data platform architecture for operational analytics"
          loading="lazy"
          decoding="async"
          width={1400}
          height={900}
          className="w-full rounded-2xl shadow-lg"
        />
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How Seraphis Approaches It</span>
          <h2>From diagnosis to a usable operating system for decisions</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We start with the business question: what is underperforming, what is uncertain and what decisions
              are currently being made without reliable evidence?
            </p>
            <p>
              We then identify the data required, quantify the loss or opportunity, establish a trusted reporting
              baseline and design the systems needed to support ongoing action.
            </p>
            <p>
              Depending on the environment, that can include Azure data foundations, dashboards, integrations,
              automation, forecasting, anomaly detection and operational reporting.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-4">
              <Database className="mb-2 text-primary" size={20} />
              <div className="font-semibold">Governed data</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <LineChart className="mb-2 text-primary" size={20} />
              <div className="font-semibold">Measurable insight</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <Workflow className="mb-2 text-primary" size={20} />
              <div className="font-semibold">Action workflows</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Related Capabilities"
          title="Operational intelligence works best when the technology foundation supports it"
          description="Seraphis connects business diagnostics to the cloud, collaboration, security and analytics capabilities required to improve control."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/azure-cloud-solutions" className="seraphis-card block transition hover:-translate-y-1">
            <h2 className="text-xl">Azure Cloud & Data</h2>
            <p className="mt-3 text-sm text-muted-foreground">Governed cloud, data platforms, integration and analytics foundations.</p>
          </Link>
          <Link to="/microsoft-365" className="seraphis-card block transition hover:-translate-y-1">
            <h2 className="text-xl">Microsoft 365</h2>
            <p className="mt-3 text-sm text-muted-foreground">Secure collaboration, identity, document control and productivity environments.</p>
          </Link>
          <Link to="/retail-analytics" className="seraphis-card block transition hover:-translate-y-1">
            <h2 className="text-xl">Retail Analytics</h2>
            <p className="mt-3 text-sm text-muted-foreground">SKU, inventory, demand, channel and loss analysis for retail operations.</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Start with the business problem, not the software.</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          We can review the operational problem, the available data and the likely value of improving visibility before defining the technology response.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Request A Consultation</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default OperationalIntelligence;
