import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-workspace.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => (
  <main>
    {/* Hero */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">About Seraphis</span>
            <h1>Financial Performance Engineering for the Modern Enterprise</h1>
            <p className="text-lg text-muted-foreground">
              Seraphis IT and Data Solutions exists because most businesses lose money they don't know they're
              losing. Not through fraud or negligence — but through structural operational gaps that compound
              silently across supply chains, workflows, and decision systems.
            </p>
          </div>
          <img src={aboutImg} alt="Executive analytics meeting" loading="lazy" width={1280} height={720} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>

    {/* Why We Exist */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-4xl">
        <SectionHeading label="Our Purpose" title="Why Seraphis Exists" />
        <div className="space-y-6 text-muted-foreground">
          <p>
            Every business operates with a gap between its actual financial performance and its economically
            attainable performance. This gap — the sum of all avoidable losses — represents real money that
            flows out of operations every day through inefficiency, poor visibility, weak controls, and
            delayed decisions.
          </p>
          <p>
            Most organizations lack the diagnostic tools, analytical frameworks, and operational systems to
            identify, quantify, and close these gaps. Traditional consulting addresses symptoms.
            Seraphis addresses the architecture of loss.
          </p>
          <div className="bg-accent/50 rounded-xl p-8 border-l-4 border-primary">
            <p className="text-seraphis-heading font-medium italic text-lg">
              "We believe that operational problems are economic problems — and that the value hidden in
              operational gaps can be systematically recovered through rigorous analysis, governed data,
              and intelligent systems."
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What Makes Us Different */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading label="Our Difference" title="What Makes Seraphis Different" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Loss-First Methodology", desc: "We start by measuring what you're losing — not by selling technology. Every engagement begins with a rigorous loss pool assessment." },
            { title: "Recoverable Value Modeling", desc: "We don't estimate savings. We model the recoverable share of each loss pool, factoring in intervention feasibility and realization rates." },
            { title: "Client-Tailored Systems", desc: "No templates. Every data platform, ML model, and workflow integration is built for your specific operational context." },
            { title: "Governed Cloud Architecture", desc: "Enterprise-grade data governance, lineage tracking, and compliance — not ad-hoc analytics on ungoverned data." },
            { title: "Industry Domain Expertise", desc: "Deep knowledge of loss architectures in retail, logistics, manufacturing, and media — not generic consulting." },
            { title: "Sustained Performance Tracking", desc: "We don't leave after implementation. We monitor, recalibrate, and ensure realized gains match projections." },
          ].map((item, i) => (
            <div key={i} className="seraphis-card space-y-3">
              <CheckCircle size={20} className="text-primary" />
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Let's Quantify Your Opportunity</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Discover the gap between your actual performance and your economically attainable performance.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default About;
