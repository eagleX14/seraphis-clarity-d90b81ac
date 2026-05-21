import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import m365Hero from "@/assets/m365-hero.jpg";
import m365Security from "@/assets/m365-security.jpg";
import m365Migration from "@/assets/m365-migration.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import mediaImg from "@/assets/industry-media.jpg";
import platformImg from "@/assets/platform-architecture.jpg";
import {
  Mail, FolderLock, UserX, AlertTriangle, DatabaseBackup, Files, ScrollText, BarChart3,
  ShieldCheck, Cloud, Workflow, Brain, Activity, LineChart, Server, Sparkles, ArrowRight,
  CheckCircle2, BadgeCheck, Building2,
} from "lucide-react";

const problems = [
  { icon: Mail, title: "Weak email control" },
  { icon: FolderLock, title: "Poor document access" },
  { icon: UserX, title: "Account compromise" },
  { icon: AlertTriangle, title: "Fraud exposure" },
  { icon: DatabaseBackup, title: "No backup visibility" },
  { icon: Files, title: "Scattered files" },
  { icon: ScrollText, title: "Compliance pressure" },
  { icon: BarChart3, title: "Poor reporting" },
];

const licences = [
  {
    name: "Microsoft 365 Business Basic",
    bestFor: "Small businesses, startups, admin teams moving from Gmail or scattered files.",
    problem: "Informal email, shared inboxes and no central file storage create confusion and risk.",
    enables: "Business email, Teams, OneDrive, web and mobile Office apps, online meetings.",
    seraphis: "Domain & DNS, mailbox setup, email migration, Teams, OneDrive/SharePoint, basic security.",
  },
  {
    name: "Microsoft 365 Business Standard",
    bestFor: "Growing SMEs, professional services, accounting, legal, consultants, hybrid teams.",
    problem: "Teams need installed Office apps, consistent documents and reliable collaboration.",
    enables: "Desktop Word/Excel/PowerPoint/Outlook, business email, SharePoint, Teams meetings.",
    seraphis: "Licence planning, mailbox migration, Outlook setup, Teams rollout, training, support.",
  },
  {
    name: "Microsoft 365 Business Premium",
    bestFor: "Schools, clinics, financial SMEs, law and accounting firms, remote-laptop teams.",
    problem: "Sensitive data handled on weakly protected accounts and unmanaged devices.",
    enables: "Productivity + advanced identity, device and threat protection in one suite.",
    seraphis: "MFA, security baseline, access review, Defender / Intune setup, onboarding controls.",
  },
  {
    name: "Microsoft 365 F3 Frontline",
    bestFor: "Retail, hospitality, logistics, healthcare frontline, branch and floor teams.",
    problem: "Frontline staff rely on WhatsApp with no controlled communication or file access.",
    enables: "Teams, secure mobile access, shared-device sign-in, controlled file access.",
    seraphis: "Frontline user segmentation, branch licence planning, Teams, shared-device guidance.",
  },
  {
    name: "Microsoft 365 Education A1 / A3 / A5",
    bestFor: "Schools, colleges, TVETs and training providers.",
    problem: "Learner and staff data sit in personal accounts with weak access controls.",
    enables: "Staff/learner email, Teams classrooms, SharePoint, OneDrive, tiered security.",
    seraphis: "Education licence mapping, tenant setup, classroom Teams, security baseline, training.",
  },
  {
    name: "Microsoft 365 E3 / E5 Enterprise",
    bestFor: "300+ user organisations, regulated industries, multi-branch and government units.",
    problem: "Enterprise scale needs governance, identity, compliance and analytics in one model.",
    enables: "Identity & device management, 1–5+ TB storage per user, advanced security & analytics.",
    seraphis: "Licence architecture, tenant assessment, governance, Azure/cloud advisory, managed support.",
  },
  {
    name: "Security Add-ons",
    bestFor: "Firms handling sensitive data, remote teams, schools, healthcare, financial services.",
    problem: "Weak identity control, phishing and unmanaged devices cause account takeover and fraud.",
    enables: "Entra MFA & Conditional Access, Defender, Intune, Purview — Zero Trust controls.",
    seraphis: "Security assessment, MFA rollout, Conditional Access, endpoint policy, ongoing monitoring.",
  },
  {
    name: "Copilot / AI Add-ons",
    bestFor: "Mature M365 organisations, admin-heavy, reporting-heavy and knowledge-worker teams.",
    problem: "Slow drafting, repetitive admin and scattered knowledge waste expensive hours.",
    enables: "AI drafting, meeting summaries, action items, reporting support across M365 apps.",
    seraphis: "Copilot readiness, data access review, governance, use-case mapping, adoption support.",
  },
];

const beyond = [
  { icon: Cloud, title: "Azure Cloud Architecture", desc: "Secure storage, SQL, networking and identity foundations on Azure." },
  { icon: LineChart, title: "Power BI Dashboards", desc: "Live sales, stock, finance and operations dashboards from your data." },
  { icon: Server, title: "Data Analytics Platforms", desc: "Consolidate POS, CRM, finance and operational data into one trusted layer." },
  { icon: Workflow, title: "Power Automate Workflows", desc: "Approvals, notifications, document routing and process automation." },
  { icon: ShieldCheck, title: "Cybersecurity Assessments", desc: "Identity, email, endpoint and access posture reviews with remediation plans." },
  { icon: DatabaseBackup, title: "Backup & Recovery Planning", desc: "Microsoft 365 backup, retention policy and incident recovery readiness." },
  { icon: Activity, title: "Operational Reporting", desc: "Branch, dispatch, project and store-level performance reporting." },
  { icon: Brain, title: "AI & Copilot Readiness", desc: "Governance, data access and licence prerequisites before AI rollout." },
  { icon: Sparkles, title: "Loss-Pool Diagnostics", desc: "Quantify avoidable losses and prioritise recoverable value." },
];

const industries = [
  {
    img: platformImg,
    name: "Schools & Colleges",
    problem: "Learner data, parent communication, staff files and discipline records exposed by weak email and shared passwords.",
    licences: "Education A1 / A3 / A5, Business Premium for admin, Security Add-ons.",
    offer: "School Microsoft 365 Licence Review",
  },
  {
    img: mediaImg,
    name: "Legal, Accounting & Professional Services",
    problem: "Client contracts, tax records and confidential email create compliance and account-compromise risk.",
    licences: "Business Standard, Business Premium, E3/E5, Security Add-ons.",
    offer: "Client Data & Document Control Review",
  },
  {
    img: retailImg,
    name: "Retail & Hospitality",
    problem: "Frontline staff, stock, supplier and branch reporting fragmented across WhatsApp and spreadsheets.",
    licences: "F3 Frontline, Business Basic/Standard, Business Premium for HQ, Power BI.",
    offer: "Retail Communication & Reporting Review",
  },
  {
    img: platformImg,
    name: "Healthcare & Clinics",
    problem: "Patient records, billing and referrals exposed by weak email security and unmanaged backups.",
    licences: "Business Premium, E3/E5, Security Add-ons, Azure backup.",
    offer: "Patient Data & Microsoft 365 Security Review",
  },
  {
    img: manufacturingImg,
    name: "Manufacturing & Logistics",
    problem: "Disconnected office, warehouse, dispatch and field teams cause delays and weak operational control.",
    licences: "F3 for floor, Business Standard for office, Business Premium for managers, Power BI.",
    offer: "Operations Communication & Data Visibility Review",
  },
  {
    img: logisticsImg,
    name: "Construction & Property",
    problem: "Project documents, site reports, tenant and supplier files scattered across email and devices.",
    licences: "Business Standard/Premium, F3 for site teams, Power Automate, Power BI.",
    offer: "Project Document & Reporting Control Review",
  },
  {
    img: mediaImg,
    name: "Finance, Insurance & Investment",
    problem: "Sensitive client data, secure approvals and compliance records exposed by weak identity controls.",
    licences: "Business Premium, E3/E5, Security Add-ons, Power BI, Azure.",
    offer: "Financial Data, Access & Security Review",
  },
];

const beyondImageMap = [
  { img: m365Migration, title: "Microsoft 365 Migration", desc: "Tenant, domain, mailbox migration, Teams/SharePoint/OneDrive rollout and onboarding." },
  { img: m365Security, title: "Microsoft 365 Security Baseline", desc: "MFA, Conditional Access, admin hardening, user permissions and device policy." },
  { img: platformImg, title: "Azure Data Infrastructure", desc: "Azure storage, SQL, Data Factory pipelines and analytics-ready architecture." },
];

const Microsoft365 = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden bg-card">
      <div className="section-container py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Microsoft 365 · Azure · Security
            </span>
            <h1>
              Microsoft 365 Licensing, Migration &{" "}
              <span className="gradient-text">Security For Modern Organisations</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Move from scattered email, weak access control and unmanaged files to a secure Microsoft 365
              environment built for communication, collaboration, data protection and business growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book A Licence Review</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Request A Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#licences">View Licence Options <ArrowRight size={16} /></a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={m365Hero}
              alt="Microsoft 365 productivity environment on a modern workspace"
              width={1600}
              height={1000}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Credibility */}
    <section className="bg-background border-y border-border">
      <div className="section-container py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BadgeCheck, title: "Microsoft Partner Center Approved", desc: "Verified partner with active Microsoft Partner Center status." },
            { icon: ShieldCheck, title: "CSP Indirect Reseller", desc: "Microsoft Cloud Solution Provider for licensing and lifecycle support." },
            { icon: Building2, title: "MPN ID: 7019412", desc: "Identifiable Microsoft Partner Network membership for procurement teams." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 seraphis-card">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-seraphis-heading">{title}</div>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Problems we solve */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Problems We Solve"
          title="The hidden cost of scattered systems"
          description="Many organisations rely on personal email, scattered files, WhatsApp communication, weak backups and unmanaged user access. This creates exposure to data loss, fraud, account compromise, poor collaboration, weak reporting and operational inefficiency."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map(({ icon: Icon, title }) => (
            <div key={title} className="seraphis-card flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <div className="text-sm font-semibold text-seraphis-heading">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Licence categories */}
    <section id="licences" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Licence Categories"
          title="Choose the right Microsoft 365 plan"
          description="Every plan addresses a specific operating reality. Seraphis recommends the right mix after reviewing your users, systems, security needs and migration scope."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {licences.map((l) => (
            <div key={l.name} className="seraphis-card flex flex-col">
              <h4 className="mb-4">{l.name}</h4>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Best for</span>
                  <p className="mt-1 text-muted-foreground">{l.bestFor}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-destructive">Business problem</span>
                  <p className="mt-1 text-muted-foreground">{l.problem}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-seraphis-sky">What it enables</span>
                  <p className="mt-1 text-muted-foreground">{l.enables}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Seraphis support</span>
                  <p className="mt-1 text-muted-foreground">{l.seraphis}</p>
                </div>
              </div>
              <Button variant="hero-outline" size="sm" className="mt-6 self-start" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Not sure which plan fits? Book a licence review and Seraphis will assess your users, current email
          system, security needs and migration scope before issuing a formal quote.
        </p>
      </div>
    </section>

    {/* Migration & setup */}
    <section className="section-padding bg-card">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={m365Migration}
            alt="Cloud migration to Microsoft Azure and Microsoft 365"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Migration & Setup
          </span>
          <h2>Licensing alone does not solve the problem</h2>
          <p className="text-muted-foreground">
            Seraphis handles tenant setup, domain configuration, mailbox migration, Teams, SharePoint,
            OneDrive, security baseline, user onboarding and ongoing support — so your investment in
            Microsoft 365 actually changes how your business operates.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Tenant & domain setup",
              "Mailbox migration",
              "Teams & SharePoint rollout",
              "OneDrive structure",
              "User onboarding",
              "Security baseline",
              "Licence assignment",
              "Ongoing support",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-seraphis-body">
                <CheckCircle2 size={16} className="text-primary shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Cybersecurity */}
    <section className="section-padding bg-background">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:order-2">
          <img
            src={m365Security}
            alt="Cloud cybersecurity, identity and Microsoft 365 protection"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-xl shadow-xl"
          />
        </div>
        <div className="space-y-6 lg:order-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Cybersecurity & Fraud Protection
          </span>
          <h2>Identity is the new perimeter</h2>
          <p className="text-muted-foreground">
            Poor identity control, weak passwords, unmanaged devices and limited email protection create
            direct exposure to fraud, phishing, account takeover and data loss.
          </p>
          <div className="seraphis-card bg-accent/40 border-accent">
            <p className="text-sm text-seraphis-body">
              Microsoft's 2025 Digital Defense Report notes that <strong>97% of identity attacks</strong> were
              password spray attacks — weak or overused passwords remain the dominant attack path. Verizon's
              2026 DBIR continues to attribute breaches to human elements such as phishing, social
              engineering and stolen credentials.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Entra MFA & Conditional Access",
              "Admin access hardening",
              "Defender for email & endpoint",
              "Intune device management",
              "User permission reviews",
              "Incident response planning",
            ].map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-seraphis-body">
                <ShieldCheck size={16} className="text-primary shrink-0" /> {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Beyond licences */}
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Beyond Licences"
          title="Where Seraphis becomes more than a reseller"
          description="Licensing is the foundation. The real value comes from how Microsoft 365, Azure, analytics, automation and security are designed around your operations."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beyond.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="seraphis-card">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <div className="font-semibold text-seraphis-heading mb-1">{title}</div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {beyondImageMap.map(({ img, title, desc }) => (
            <div key={title} className="seraphis-card overflow-hidden p-0">
              <img src={img} alt={title} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-6">
                <div className="font-semibold text-seraphis-heading mb-1">{title}</div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          label="Industry Positioning"
          title="The right licence mix for your sector"
          description="Each industry has a distinct exposure profile. Seraphis aligns Microsoft 365 plans, security and analytics to the way your organisation actually operates."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="seraphis-card overflow-hidden p-0 flex flex-col">
              <img src={ind.img} alt={ind.name} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="mb-3">{ind.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{ind.problem}</p>
                <div className="text-sm mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Recommended</span>
                  <p className="mt-1 text-seraphis-body">{ind.licences}</p>
                </div>
                <div className="mt-auto pt-4">
                  <Button variant="hero-outline" size="sm" asChild>
                    <Link to="/contact">{ind.offer} <ArrowRight size={14} /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Book a Microsoft 365 Licence Review</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Seraphis will assess your users, current email system, security posture, migration scope and
          support requirements — then issue a formal quote tailored to your organisation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Book A Licence Review</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link to="/contact">Request A Quote <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default Microsoft365;
