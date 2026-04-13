import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import mediaImg from "@/assets/industry-media.jpg";
import platformImg from "@/assets/platform-architecture.jpg";
import {
  Search, BarChart3, Database, Brain, Workflow, Monitor,
  TrendingDown, ArrowRight, Shield, Target, Cpu, Building2
} from "lucide-react";

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden bg-card">
      <div className="section-container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Financial Performance Engineering
              </span>
              <h1 className="mb-6">
                Identify Hidden Operational Losses.{" "}
                <span className="gradient-text">Recover Measurable Financial Value.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Seraphis helps businesses discover, quantify, and eliminate avoidable losses hidden in
                operations, decision-making, and control systems — turning operational gaps into recovered revenue.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroDashboard}
              alt="Enterprise analytics dashboard showing financial performance metrics"
              width={1920}
              height={1080}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Value Props */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Why Seraphis"
          title="Engineered for Financial Performance"
          description="We don't sell dashboards. We identify where your business loses money — and build the systems to stop it."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Loss Pool Identification", desc: "Systematic discovery of revenue leakage across operations, supply chain, and decision workflows." },
            { icon: Shield, title: "Governed Data & AI", desc: "Enterprise-grade cloud data platforms with lineage, security, and compliance built in." },
            { icon: BarChart3, title: "Measurable Value Recovery", desc: "Every intervention is modeled against recoverable value — not theoretical savings." },
            { icon: Building2, title: "Industry-Specific Intelligence", desc: "Deep domain models for retail, logistics, manufacturing, and media." },
          ].map((item, i) => (
            <div key={i} className="seraphis-card space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Loss Framing */}
    <section className="section-padding bg-accent/30">
      <div className="section-container">
        <SectionHeading
          label="The Hidden Cost"
          title="Where Businesses Lose Money Without Knowing It"
          description="Operational inefficiencies compound silently. Most organizations underestimate the gap between actual and economically attainable performance."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Shrinkage & theft", "Stockouts & lost sales", "Empty miles in logistics",
            "Route inefficiency", "Unplanned downtime", "Quality failures & rework",
            "Ad fraud & invalid traffic", "Customer churn", "Labor misallocation",
            "Delayed decision-making", "Demand distortion", "Weak dispatch timing",
          ].map((loss, i) => (
            <div key={i} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
              <TrendingDown size={18} className="text-destructive shrink-0" />
              <span className="text-sm font-medium text-seraphis-body">{loss}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Preview */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Industries"
          title="Sector-Specific Loss Intelligence"
          description="Every industry has its own loss architecture. We model yours."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { img: retailImg, title: "Retail & E-commerce", problem: "Shrinkage, stockouts, and demand distortion erode 2–4% of revenue annually.", link: "/industries" },
            { img: logisticsImg, title: "Logistics & Transportation", problem: "Empty miles and poor dispatch timing waste 15–25% of fleet operating costs.", link: "/industries" },
            { img: manufacturingImg, title: "Manufacturing", problem: "Unplanned downtime and scrap losses cost manufacturers 5–20% of production value.", link: "/industries" },
            { img: mediaImg, title: "Media & Entertainment", problem: "Ad fraud and subscriber churn drain 10–30% of digital revenue.", link: "/industries" },
          ].map((ind, i) => (
            <div key={i} className="seraphis-card p-0 overflow-hidden">
              <img src={ind.img} alt={ind.title} loading="lazy" width={1280} height={720} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <h4 className="text-lg font-semibold">{ind.title}</h4>
                <p className="text-sm text-muted-foreground">{ind.problem}</p>
                <Link to={ind.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Framework */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Our Framework"
          title="From Loss Discovery to Realized Gains"
          description="A disciplined, six-phase methodology that moves from diagnosis to measurable financial impact."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Search, step: "01", title: "Measure Loss", desc: "Identify and quantify loss pools across operations." },
            { icon: BarChart3, step: "02", title: "Model Recoverable Value", desc: "Determine what share of loss is avoidable and economically recoverable." },
            { icon: Cpu, step: "03", title: "Build Intervention Systems", desc: "Deploy data platforms, ML models, and workflow integrations." },
            { icon: Monitor, step: "04", title: "Track Realized Gains", desc: "Monitor, recalibrate, and sustain performance improvements." },
          ].map((phase, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center">
                <phase.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {phase.step}</span>
              <h4 className="text-lg font-semibold">{phase.title}</h4>
              <p className="text-sm text-muted-foreground">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Platform */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Technology Platform
            </span>
            <h2>Built on Enterprise-Grade Cloud Infrastructure</h2>
            <p className="text-muted-foreground">
              Seraphis deploys on governed Azure cloud architecture — ensuring data lineage, security, and
              compliance at every layer. Our platform integrates seamlessly with your existing systems.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Azure Data Factory", "Microsoft Fabric", "Azure Data Lake", "Microsoft Purview",
                "Power BI", "Azure ML", "Event Ingestion", "Custom Applications"].map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-sm text-seraphis-body">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {tech}
                </div>
              ))}
            </div>
            <Button variant="hero-outline" asChild>
              <Link to="/solutions">View Solutions</Link>
            </Button>
          </div>
          <img
            src={platformImg}
            alt="Cloud data platform architecture"
            loading="lazy"
            width={1280}
            height={720}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Ready to Recover Hidden Value?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Every month of unaddressed operational loss is money permanently foregone.
          Let's quantify what your business can recover.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Home;
