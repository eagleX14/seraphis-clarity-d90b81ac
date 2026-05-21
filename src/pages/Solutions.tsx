import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import platformImg from "@/assets/platform-architecture.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import { ArrowRight, Search, BarChart3, Database, Brain, Workflow, Monitor, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Loss Discovery & Diagnostic Intelligence",
    problem: "Many organisations know performance is below potential but cannot pinpoint where value is leaking. The problem feels broad: weak visibility, unexplained cost pressure, recurring operational issues and decisions that rely on partial information.",
    intervention: "Seraphis starts by identifying the real operating symptoms, mapping them to underlying loss categories and quantifying where the business is most exposed.",
    outcome: "A clearer picture of where losses sit, how they happen and which areas deserve immediate attention.",
  },
  {
    icon: BarChart3,
    title: "Loss Pool Modelling & Decision Support",
    problem: "Not every loss is equally important, and not every loss is realistically recoverable. Without disciplined modelling, teams chase activity rather than economic impact.",
    intervention: "We structure the economic case: total loss, avoidable share, likely recovery potential, cost of intervention and expected business value.",
    outcome: "A more confident basis for deciding what to fix first and where to invest time or money.",
  },
  {
    icon: Database,
    title: "Data Foundations & Visibility",
    problem: "Information is spread across spreadsheets, operational systems, finance files and disconnected tools. Reporting becomes slow, inconsistent and hard to trust.",
    intervention: "Seraphis helps build a more structured data environment so reporting and analytics are based on cleaner, more governable information.",
    outcome: "A better foundation for dashboards, operational visibility, automation and long-term decision support.",
  },
  {
    icon: Brain,
    title: "Analytics, Forecasting & Predictive Use Cases",
    problem: "Reactive management means the business sees issues after the damage is already done. This affects demand planning, stock control, maintenance and general performance management.",
    intervention: "We support analytical models and forecasting approaches that help the business move from after-the-fact reporting toward forward-looking control.",
    outcome: "Stronger forecasting, earlier warning signals and more proactive decision-making.",
  },
  {
    icon: Workflow,
    title: "Workflow Integration & Actionability",
    problem: "Dashboards alone do not change outcomes. When insights do not reach the right people or trigger action, the business still suffers the same operational problems.",
    intervention: "Seraphis focuses on making insights usable inside business operations through alerts, workflows, routing and process alignment.",
    outcome: "A clearer path from insight to action rather than insight sitting unused in reports.",
  },
  {
    icon: Monitor,
    title: "Monitoring, Recalibration & Sustained Improvement",
    problem: "Initial improvements fade if the business does not monitor whether the intervention is holding. Conditions change, teams change and models drift.",
    intervention: "We encourage ongoing monitoring, recalibration and value tracking so improvements remain tied to the real operating environment.",
    outcome: "Sustained business control rather than one-off project excitement followed by regression.",
  },
];

const industrySnapshots = [
  {
    image: retailImg,
    title: "Retail & E-commerce",
    text: "Typical performance gaps include shrinkage, stockouts, weak demand visibility, markdown pressure, slow-moving stock and fragmented reporting across store, stock and finance data.",
  },
  {
    image: logisticsImg,
    title: "Logistics & Transportation",
    text: "Typical performance gaps include poor route planning, empty miles, low load utilisation, dispatch inefficiency, fuel waste and weak operational visibility.",
  },
  {
    image: manufacturingImg,
    title: "Manufacturing & Operations",
    text: "Typical performance gaps include downtime, quality failures, scrap, rework, maintenance visibility gaps and delayed management information.",
  },
];

const Solutions = () => (
  <main>
    <SEO
      title="Business Solutions & Operational Intelligence | Seraphis IT and Data Solutions"
      description="Seraphis helps organisations answer critical business questions, improve data infrastructure, identify efficiency gaps, quantify cost-benefit and discover scalable opportunities."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
          <div className="space-y-6">
            <span className="sales-pill">
              Business Solutions & Operational Intelligence
            </span>
            <h1>Answer the questions that decide whether the business grows, leaks value or stays blind.</h1>
            <p className="text-lg text-muted-foreground">
              Most businesses fail or operate while losing value because their internal business data infrastructure cannot answer critical questions accurately. Seraphis collects, structures and models business data so leaders can see revenue, loss pools, efficiency gaps, scalable opportunities and cost-benefit clearly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request A Diagnostic</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/industries">View Industry Use Cases</Link>
              </Button>
            </div>
          </div>
          <img src={heroDashboard} alt="Operational intelligence dashboard" className="min-h-[420px] rounded-2xl object-cover shadow-xl" />
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="What This Means In Practice"
          title="Business truth before technology"
          description="We start with the business questions, diagnose the data gap and build the right system response."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="seraphis-card space-y-4">
            <h3 className="text-2xl">Recognise the symptoms</h3>
            <p className="text-sm text-muted-foreground">Low visibility, delayed decisions, recurring inefficiency, cost pressure and weak control are signs that decision infrastructure is not strong enough.</p>
          </div>
          <div className="seraphis-card space-y-4">
            <h3 className="text-2xl">Quantify the opportunity</h3>
            <p className="text-sm text-muted-foreground">Seraphis focuses on decision-grade thinking: what is working, what is leaking, what can scale, what can be recovered and what should be prioritised first.</p>
          </div>
          <div className="seraphis-card space-y-4">
            <h3 className="text-2xl">Build control systems</h3>
            <p className="text-sm text-muted-foreground">The longer-term result is better data infrastructure, better reporting, more actionability and a stronger operating model.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Critical Business Questions"
          title="The questions Seraphis helps your business answer"
          description="When these answers are unclear, management is forced to guess. When they are measured accurately, the business can act with confidence."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Where is revenue being generated by product, service, channel, client or location?",
            "Where is the business losing money, time or capacity, and what are the loss pools?",
            "What is the revenue baseline and what is changing it?",
            "Which loss pools can be recovered, what percentage is realistic and at what cost?",
            "Which revenue-generating products, services or channels can be scaled profitably?",
            "Which activities waste money, time or capacity, and what should be done?",
          ].map((question, index) => (
            <div key={question} className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 text-sm font-black text-primary">0{index + 1}</div>
              <p className="text-sm font-medium text-seraphis-body">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="hero-shell">
      <div className="section-container py-8">
        {solutions.map((sol, i) => (
          <div key={sol.title} className={`grid gap-10 py-14 lg:grid-cols-[0.9fr,1.1fr] lg:items-start ${i < solutions.length - 1 ? "border-b border-border" : ""}`}>
            <div className="rounded-2xl bg-accent/40 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background">
                <sol.icon size={26} className="text-primary" />
              </div>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Business Solution Capability</div>
              <h3 className="mt-3 text-2xl">{sol.title}</h3>
            </div>
            <div className="space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-destructive">Typical Problem</span>
                <p className="mt-2 text-sm text-muted-foreground">{sol.problem}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Seraphis Solution</span>
                <p className="mt-2 text-sm text-muted-foreground">{sol.intervention}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-seraphis-sky">Expected Outcome</span>
                <p className="mt-2 text-sm text-muted-foreground">{sol.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
        <div className="space-y-6">
          <SectionHeading
            label="Connected Capability"
            title="Why operational intelligence connects naturally to Azure, Microsoft 365 and analytics"
            description="Once hidden losses and visibility gaps are identified, the next question is often what systems are needed to improve control."
          />
          <div className="space-y-3">
            {[
              "Microsoft 365 often strengthens communication, document control, identity and user management.",
              "Azure provides the cloud and data foundation for reporting, analytics and automation.",
              "Operational intelligence provides the business logic for where to focus those efforts first.",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={platformImg} alt="Data platform and business control" className="rounded-2xl shadow-lg" />
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Examples By Sector"
          title="Different industries, different performance gaps"
          description="Operational intelligence remains consistent in logic, but the efficiency gaps, scalable opportunities, risk patterns and decision contexts differ by industry."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {industrySnapshots.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-background">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="space-y-3 p-6">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Need clearer control over operations?</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          Seraphis helps businesses frame operational pain correctly, quantify improvement opportunities and build more structured decision environments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book A Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/insights/operational-intelligence-and-loss-recovery">Read Related Insight <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Solutions;
