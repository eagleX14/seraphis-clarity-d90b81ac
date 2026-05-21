import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import platformImg from "@/assets/platform-architecture.jpg";
import m365Hero from "@/assets/m365-hero.jpg";
import m365Security from "@/assets/m365-security.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import schoolsImg from "@/assets/ind-schools.jpg";
import professionalImg from "@/assets/ind-professional.jpg";
import financeImg from "@/assets/ind-finance.jpg";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Cloud,
  Database,
  FolderLock,
  LineChart,
  Mail,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const businessQuestions = [
  "Where is the business making most of its revenue, by category, channel and rank?",
  "Where is the business losing value through inefficiency, waste, delays, stock issues, fraud or weak controls?",
  "What is the current revenue baseline and how are sales or marketing channels changing it?",
  "Which operational gaps can be improved, what percentage is realistic and what will it cost?",
  "Which products, services, branches or channels can be scaled profitably?",
  "Which activities waste money, time or capacity, and what should change first?",
];

const services = [
  {
    title: "Operational Intelligence",
    tagline: "Turn business activity into business truth.",
    desc: "Accurate collection, processing and modelling of business data to identify operational inefficiencies, loss pools, bottlenecks, scalable opportunities and revenue-growth strategies.",
    icon: BarChart3,
    link: "/operational-intelligence",
    image: heroDashboard,
  },
  {
    title: "Microsoft 365 Licensing",
    tagline: "Licences, migration, governance and secure collaboration.",
    desc: "Microsoft licences for small businesses, schools, frontline teams and enterprises. We help organisations mature from scattered tools or Google Workspace into Microsoft environments with governance, role-based access control, data-loss prevention, Teams, SharePoint, OneDrive, Azure readiness and security baseline support.",
    icon: Mail,
    link: "/microsoft-365",
    image: m365Hero,
  },
  {
    title: "Azure Cloud Solutions",
    tagline: "A governed cloud foundation for analytics and scale.",
    desc: "Azure architecture, storage, data platforms, governance, backup, monitoring and cost-control foundations for secure growth and better reporting.",
    icon: Cloud,
    link: "/azure-cloud-solutions",
    image: platformImg,
  },
  {
    title: "Cybersecurity & Fraud Control",
    tagline: "Reduce exposure before it becomes damage.",
    desc: "Identity security, MFA, access reviews, endpoint discipline and Microsoft security readiness to reduce fraud, hacking and account-compromise risk.",
    icon: ShieldCheck,
    link: "/microsoft-365",
    image: m365Security,
  },
];

const symptoms = [
  { icon: Database, title: "Inaccurate Decision Infrastructure", desc: "The business makes decisions from scattered, outdated or incomplete information." },
  { icon: BarChart3, title: "Weak Performance Feedback", desc: "Reports exist, but they do not show what is growing, what is leaking and what needs attention." },
  { icon: FolderLock, title: "Poor Information Control", desc: "Files, users, access and records are not governed well enough for modern operations." },
  { icon: Workflow, title: "Manual Operating Drag", desc: "Teams lose time through repetitive admin, handovers, delayed approvals and reporting work." },
  { icon: TrendingUp, title: "Missed Scaling Opportunities", desc: "Profitable products, services or channels are not identified early enough to scale." },
  { icon: ShieldCheck, title: "Security And Fraud Exposure", desc: "Weak accounts, unmanaged devices and loose access expose the organisation to avoidable risk." },
];

const method = [
  { step: "01", title: "Diagnose", desc: "We review your systems, data, users, workflows and operating pain points." },
  { step: "02", title: "Quantify", desc: "We identify efficiency gaps, loss pools, revenue opportunities and cost-benefit priorities." },
  { step: "03", title: "Design", desc: "We recommend the right Microsoft, Azure, analytics, security or operational solution path." },
  { step: "04", title: "Support", desc: "We help implement, monitor and improve the environment over time." },
];

const industries = [
  { name: "Schools", image: schoolsImg, desc: "Learner data, staff email, parent communication and administration control." },
  { name: "Professional Services", image: professionalImg, desc: "Client documents, secure communication, approvals and reporting discipline." },
  { name: "Retail & E-commerce", image: retailImg, desc: "Stock visibility, demand signals, shrinkage, reporting and margin control." },
  { name: "Logistics", image: logisticsImg, desc: "Routes, utilisation, dispatch visibility, fleet reporting and cost leakage." },
  { name: "Manufacturing", image: manufacturingImg, desc: "Downtime, quality, rework, production visibility and operational reporting." },
  { name: "Finance", image: financeImg, desc: "Client data, access control, reporting, approvals and security posture." },
];

const Home = () => (
  <main>
    <SEO
      title="Seraphis IT & Data Solutions | Operational Intelligence, Microsoft 365, Azure & Analytics"
      description="Seraphis helps organisations improve business data, Microsoft 365 licensing, Azure cloud foundations, cybersecurity, operational intelligence, analytics and cost-benefit decision-making."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 xl:grid-cols-[1.05fr,0.95fr] xl:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="sales-pill">Microsoft Cloud • Operational Intelligence • Business Data</span>
              <h1 className="max-w-5xl">
                Build your business on accurate data, secure systems and measurable decisions.
              </h1>
              <p className="max-w-3xl text-xl">
                Seraphis IT and Data Solutions helps organisations collect, structure and use business data properly, modernise with Microsoft 365, build Azure cloud foundations and improve security, reporting and operational performance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book A Diagnostic Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
                <Link to="/diagnostic-questionnaire">Take The Self-Diagnosis</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-card">
                <BadgeCheck className="mb-3 text-seraphis-sky-light" size={22} />
                <div className="text-sm font-bold text-secondary">Microsoft CSP Capability</div>
                <p className="mt-2 text-sm">CSP Indirect Reseller • MPN ID: 7019412</p>
              </div>
              <div className="glass-card">
                <LineChart className="mb-3 text-seraphis-sky-light" size={22} />
                <div className="text-sm font-bold text-secondary">Cost-Benefit Focus</div>
                <p className="mt-2 text-sm">Diagnostics linked to measurable value.</p>
              </div>
              <div className="glass-card">
                <Target className="mb-3 text-seraphis-sky-light" size={22} />
                <div className="text-sm font-bold text-secondary">Your Success Is Our Pride</div>
                <p className="mt-2 text-sm">We win when your operations improve.</p>
              </div>
            </div>
          </div>

          <div className="relative pb-10">
            <div className="image-panel">
              <img src={heroDashboard} alt="Business intelligence dashboard" className="min-h-[460px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-2 left-6 right-6 grid gap-3 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur md:grid-cols-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Measure</div>
                <p className="mt-1 text-xs text-muted-foreground">Revenue, losses, efficiency and risk.</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Secure</div>
                <p className="mt-1 text-xs text-muted-foreground">Email, users, files and cloud access.</p>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Scale</div>
                <p className="mt-1 text-xs text-muted-foreground">Products, channels and operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding section-surface">
      <div className="section-container">
        <SectionHeading
          label="Who We Are"
          title="Seraphis builds decision infrastructure for modern organisations"
          description="We help businesses replace guesswork with accurate operational feedback, governed information and technology systems that support real performance improvement."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="seraphis-card xl:col-span-2 space-y-5">
            <h3 className="text-3xl">Why businesses fail: weak decision infrastructure</h3>
            <p className="text-muted-foreground">
              Most businesses do not fail only because they lack effort or ambition. They fail because their information structure cannot measure performance accurately, reveal market feedback quickly or show what must change.
            </p>
            <p className="text-muted-foreground">
              When decision infrastructure is weak, management ends up gambling: guessing which products to push, which channels to invest in, which costs to cut and which opportunities are worth scaling.
            </p>
            <div className="accent-line" />
            <p className="font-semibold text-seraphis-heading">
              Seraphis helps your business move from gambling to evidence-based strategy.
            </p>
          </div>
          <div className="seraphis-card bg-seraphis-heading text-white">
            <Scale className="mb-4 text-secondary" size={32} />
            <h3 className="text-2xl text-white">Our promise</h3>
            <p className="mt-4 text-white/75">
              We diagnose the business problem, quantify what can improve and recommend the technology path that makes commercial sense.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Business Questions"
          title="The questions your systems must answer"
          description="A business cannot manage what it cannot measure. These questions sit at the centre of operational intelligence, Microsoft cloud adoption and data analytics."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {businessQuestions.map((question, index) => (
            <div key={question} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
              <p className="text-sm font-medium text-seraphis-body">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding section-surface">
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What Seraphis offers"
          description="Each service can stand alone, but together they create a complete pathway from business truth to secure digital operations and scalable improvement."
        />
        <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-slate-200/50">
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-seraphis-heading/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-seraphis-heading shadow-lg">
                  <service.icon size={22} />
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{service.tagline}</p>
                </div>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 hover:text-secondary transition-all">
                  Explore service <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Symptoms"
          title="Signs your business needs stronger decision infrastructure"
          description="These symptoms create efficiency losses, risk exposure and missed growth opportunities across product-based and service-based businesses."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {symptoms.map((item) => (
            <div key={item.title} className="seraphis-card space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding dark-band">
      <div className="section-container">
        <SectionHeading
          label="Our Method"
          title="From diagnostic conversation to cost-benefit report"
          description="Call us, email us or book a diagnostic conversation. We assess your current state, identify improvement opportunities and prepare a practical cost-benefit path forward."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {method.map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 text-sm font-black text-secondary">{item.step}</div>
              <h3 className="text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book A Diagnostic Conversation</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
            <Link to="/diagnostic-questionnaire">Start Self-Diagnosis</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Industries"
          title="Relevant solutions by industry"
          description="Each industry has different data, risk and efficiency problems. Seraphis adapts the diagnosis to your operating environment."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.name} className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <img src={industry.image} alt={industry.name} className="h-56 w-full object-cover" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="hero-outline" asChild>
            <Link to="/industries">View Industry Solutions</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Your success is our pride.</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          Book a diagnostic conversation and let Seraphis help you convert business data into control, efficiency, security and scalable opportunity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Call Or Email Us</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/diagnostic-questionnaire">Take The Questionnaire</Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
