import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, Database, Brain, Workflow, Monitor, ArrowRight } from "lucide-react";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Loss Discovery",
    explanation: "We begin by mapping your operational landscape to identify where value leaks. This is not a technology assessment — it is an economic diagnostic.",
    why: "You cannot recover what you cannot see. Most organizations underestimate their loss exposure because they lack the diagnostic frameworks to detect structural inefficiency.",
    value: "A complete inventory of loss events, their frequency, severity, and structural causes — ranked by financial impact.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Loss Pool Modeling",
    explanation: "We decompose each loss category into its economic components: exposure, incidence rate, unit cost, recoverable share, and realization factor.",
    why: "Not all losses are avoidable. Without rigorous modeling, organizations over-invest in low-value interventions or under-invest in high-value ones.",
    value: "Decision-grade financial models with quantified recovery potential, investment requirements, and expected ROI.",
  },
  {
    icon: Database,
    step: "03",
    title: "Platform Foundation",
    explanation: "We design and deploy the governed data infrastructure needed to support reliable, scalable analytical workloads — with proper lineage, security, and quality controls.",
    why: "Analytics built on ungoverned data produce unreliable results. Decision-grade intelligence requires a production-grade data foundation.",
    value: "A cloud data platform that serves as the single source of truth for operational intelligence.",
  },
  {
    icon: Brain,
    step: "04",
    title: "Model Deployment",
    explanation: "We build and deploy machine learning models tailored to your specific loss pools — demand forecasting, anomaly detection, predictive maintenance, or churn prediction.",
    why: "Generic models produce generic results. Loss pool-specific models, trained on your operational data, deliver the precision needed for high-confidence decisions.",
    value: "Predictive and prescriptive models that enable proactive intervention before losses materialize.",
  },
  {
    icon: Workflow,
    step: "05",
    title: "Workflow Integration",
    explanation: "We integrate analytical outputs into your operational workflows — alerts, action queues, approval chains, and automated responses.",
    why: "Insights that remain in dashboards don't change outcomes. Operational integration ensures that analytical intelligence drives measurable action.",
    value: "Systems where the right insight reaches the right person at the right time with the right action options.",
  },
  {
    icon: Monitor,
    step: "06",
    title: "Monitoring & Recalibration",
    explanation: "We continuously monitor model performance, track realized gains against projections, and recalibrate systems as operational conditions evolve.",
    why: "Models degrade. Markets shift. Without ongoing monitoring and recalibration, initial gains erode and organizations revert to prior performance levels.",
    value: "Sustained financial performance improvement with transparent, auditable tracking of realized value.",
  },
];

const HowWeWork = () => (
  <main>
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="How We Work"
          title="The Seraphis Six-Phase Framework"
          description="A disciplined methodology that moves from operational diagnosis to sustained financial performance improvement — with measurable outcomes at every stage."
        />
      </div>
    </section>

    <section className="bg-background">
      <div className="section-container py-8">
        {phases.map((phase, i) => (
          <div key={i} className={`py-12 ${i < phases.length - 1 ? "border-b border-border" : ""}`}>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-1 flex lg:flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <phase.icon size={24} className="text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Phase {phase.step}</span>
              </div>
              <div className="lg:col-span-11 space-y-6">
                <h3>{phase.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-seraphis-muted">What We Do</span>
                    <p className="text-sm text-muted-foreground">{phase.explanation}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-seraphis-muted">Why It Matters</span>
                    <p className="text-sm text-muted-foreground">{phase.why}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">Client Value</span>
                    <p className="text-sm text-muted-foreground">{phase.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Start Your Loss Recovery Journey</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Every phase builds on the last. The result is a sustained, measurable improvement in financial performance.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Request a Consultation <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default HowWeWork;
