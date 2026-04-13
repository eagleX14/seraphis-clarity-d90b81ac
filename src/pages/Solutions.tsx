import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, Database, Brain, Workflow, Monitor, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Loss Discovery & Diagnostic Intelligence",
    problem: "Most businesses cannot see where they lose money. Operational data exists in silos, KPIs mask root causes, and decision-makers rely on lagging indicators that reveal problems too late.",
    intervention: "Seraphis deploys diagnostic intelligence across your operational data — mapping loss events, quantifying their frequency and severity, and surfacing the structural causes behind each loss category.",
    outcome: "A complete loss architecture map with quantified loss pools, ranked by recoverable value and intervention feasibility.",
  },
  {
    icon: BarChart3,
    title: "Loss Pool Modeling",
    problem: "Even when losses are identified, organizations struggle to distinguish total loss from avoidable loss. Without rigorous modeling, investment decisions are based on estimates rather than decision-grade analysis.",
    intervention: "Seraphis builds loss pool models that decompose each loss category into its economic components — exposure, incidence rate, unit cost, recoverable share, and realization factor.",
    outcome: "Decision-grade financial models that quantify exactly how much value can be recovered, at what cost, and with what confidence level.",
  },
  {
    icon: Database,
    title: "Data Platform Foundation",
    problem: "Ungoverned data leads to unreliable analytics. Many organizations build analytics on fragmented, poorly documented data sources — producing insights that cannot be trusted for high-stakes decisions.",
    intervention: "Seraphis designs and deploys governed cloud data platforms on Azure — with proper data lineage, quality controls, security, and compliance built into every layer.",
    outcome: "A production-grade data foundation that supports reliable, auditable, and scalable analytical workloads.",
  },
  {
    icon: Brain,
    title: "Predictive Analytics & Machine Learning",
    problem: "Reactive decision-making means losses have already occurred by the time they are detected. Without predictive capability, businesses are always responding rather than preventing.",
    intervention: "Seraphis deploys machine learning models tailored to your loss pools — demand forecasting, anomaly detection, predictive maintenance, churn prediction, and fraud scoring.",
    outcome: "Early warning systems that shift decision-making from reactive to proactive, preventing losses before they materialize.",
  },
  {
    icon: Workflow,
    title: "Workflow Integration & Operationalization",
    problem: "Analytics that exist only in dashboards don't change outcomes. Insights must reach the right people at the right time with the right action options.",
    intervention: "Seraphis integrates analytical outputs into operational workflows — alerts, action queues, approval chains, and automated responses — ensuring insights drive measurable action.",
    outcome: "Operational systems where analytical intelligence directly triggers corrective and preventive action.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Recalibration",
    problem: "Models degrade. Operational conditions change. Without continuous monitoring, initial gains erode and organizations revert to prior performance levels.",
    intervention: "Seraphis provides ongoing monitoring, model recalibration, and performance tracking — ensuring that realized gains sustain over time.",
    outcome: "Sustained financial performance improvement with transparent tracking of realized value against projections.",
  },
];

const Solutions = () => (
  <main>
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Our Solutions"
          title="Interventions Against Measurable Loss Pools"
          description="Every Seraphis solution addresses a specific failure mode in how organizations detect, measure, and respond to operational losses."
        />
      </div>
    </section>

    <section className="bg-background">
      <div className="section-container py-8">
        {solutions.map((sol, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center py-16 ${i < solutions.length - 1 ? "border-b border-border" : ""}`}>
            <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <sol.icon size={28} className="text-primary" />
              </div>
              <h3>{sol.title}</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-destructive">The Problem</span>
                  <p className="mt-1 text-sm text-muted-foreground">{sol.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Seraphis Intervention</span>
                  <p className="mt-1 text-sm text-muted-foreground">{sol.intervention}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-seraphis-sky">Expected Outcome</span>
                  <p className="mt-1 text-sm text-muted-foreground">{sol.outcome}</p>
                </div>
              </div>
            </div>
            <div className={`bg-accent/30 rounded-xl p-8 flex items-center justify-center min-h-[280px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <sol.icon size={120} className="text-primary/20" />
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Which Loss Pools Are Costing Your Business?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Let Seraphis map your operational loss architecture and model the recoverable value.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/industries">View Industries <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Solutions;
