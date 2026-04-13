import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const FormulaCard = ({ title, description, formula }: { title: string; description: string; formula: string }) => (
  <div className="seraphis-card space-y-4">
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
    <div className="bg-accent/50 rounded-lg p-6 overflow-x-auto">
      <BlockMath math={formula} />
    </div>
  </div>
);

const concepts = [
  {
    title: "What Is a Loss Pool?",
    content: "A loss pool is a category of avoidable financial loss arising from a specific operational failure mode. It is not a cost center or an expense line — it is the economic consequence of the gap between actual performance and economically attainable performance. Loss pools are measured across four dimensions: exposure (the total population at risk), incidence rate (the frequency of loss events), unit cost (the economic cost per event), and controllability (the degree to which the loss can be reduced through intervention).",
  },
  {
    title: "Total Loss vs. Avoidable Loss",
    content: "Not all operational losses are avoidable. Some represent structural constraints — physical limits, regulatory requirements, or irreducible variability. The distinction between total loss and avoidable loss is critical: total loss is the full economic gap between actual and theoretical performance. Avoidable loss is the subset that can be reduced through feasible intervention. Seraphis focuses exclusively on avoidable loss — the portion that represents genuine economic recovery opportunity.",
  },
  {
    title: "Why Firms Fail to Measure Losses Properly",
    content: "Most organizations lack visibility into their loss architecture for three reasons: (1) operational data lives in silos that prevent cross-functional loss detection, (2) KPI frameworks mask root causes by reporting aggregated performance metrics rather than individual loss events, and (3) the absence of loss-specific analytical frameworks means that losses are either invisible or misclassified as unavoidable cost.",
  },
  {
    title: "Recoverable Share & Realization Factor",
    content: "The recoverable share (ρ) represents the proportion of avoidable loss that can be addressed by a specific intervention. The realization factor (α) represents the expected effectiveness of that intervention — accounting for implementation quality, adoption rates, and operational constraints. Together, these factors determine the actual financial value that an intervention is expected to deliver.",
  },
  {
    title: "Why Data Quality & Monitoring Matter",
    content: "Decision-grade models require production-grade data. If the underlying data is incomplete, inconsistent, or ungoverned, the models built on it will produce unreliable results — and the interventions derived from those models will underperform. Continuous monitoring is equally critical: models degrade as operational conditions change, and without recalibration, initial gains erode over time.",
  },
  {
    title: "Decision-Grade, Not Magical",
    content: "Seraphis models are designed to be decision-grade — meaning they produce outputs with sufficient precision, reliability, and transparency to support high-stakes business decisions. They are not black boxes. Every model includes documented assumptions, confidence intervals, and sensitivity analyses. We do not promise precision beyond what the data supports.",
  },
];

const Insights = () => (
  <main>
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Methodology & Insights"
          title="The Science of Avoidable Loss Recovery"
          description="Rigorous frameworks, precise notation, and decision-grade analytical models — not guesswork, not estimates, not dashboards."
        />
      </div>
    </section>

    {/* Concepts */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl space-y-8">
        {concepts.map((concept, i) => (
          <div key={i} className="seraphis-card space-y-3">
            <h4 className="text-lg font-semibold">{concept.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{concept.content}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Formulas */}
    <section className="section-padding bg-card">
      <div className="section-container max-w-4xl">
        <SectionHeading
          label="Mathematical Framework"
          title="Loss Pool & Value Recovery Notation"
          description="The Seraphis methodology uses precise mathematical notation to ensure clarity, reproducibility, and decision-grade confidence."
        />
        <div className="space-y-6">
          <FormulaCard
            title="Individual Loss Pool Quantification"
            description="Each loss pool Lᵢ is calculated as the product of exposure (E), incidence rate (r), and unit cost (u) for loss category i."
            formula="L_i = E_i \times r_i \times u_i"
          />
          <FormulaCard
            title="Avoidable Loss Calculation"
            description="The avoidable portion Aᵢ of each loss pool is determined by the recoverable share (ρ) and the realization factor (α) — accounting for intervention feasibility and expected effectiveness."
            formula="A_i = L_i \times \rho_i \times \alpha_i"
          />
          <FormulaCard
            title="Total Avoidable Loss (Aggregated)"
            description="The total avoidable loss across all n loss pools represents the aggregate recovery opportunity."
            formula="A = \sum_{i=1}^{n} \left( L_i \times \rho_i \times \alpha_i \right)"
          />
          <FormulaCard
            title="Annual Value Recovery"
            description="The annual value recovered is the total avoidable loss minus the ongoing cost of running the intervention systems."
            formula="V_{\text{annual}} = A - C_{\text{run}}"
          />
          <FormulaCard
            title="Net Present Value of Recovery Program"
            description="The NPV of the full recovery program accounts for implementation costs, annual recovered value, running costs, and the time value of money over T periods."
            formula="NPV = -C_{\text{impl}} + \sum_{t=1}^{T} \frac{A_t - C_{\text{run},t}}{(1 + d)^t}"
          />
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Apply This Framework to Your Business</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Let Seraphis model your loss pools, quantify the recoverable value, and build the systems to capture it.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Request a Consultation <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Insights;
