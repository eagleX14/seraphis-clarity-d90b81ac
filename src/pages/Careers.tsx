import { useEffect, useMemo, useState, type ElementType } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Filter,
  MapPin,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { careerCategories, careerRoles, type CareerCategory } from "@/data/careerRoles";

const Careers = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | CareerCategory>("All");
  const initialRole = searchParams.get("role") ?? "";
  const submitted = searchParams.get("submitted") === "1";

  useEffect(() => {
    if (!initialRole) return;
    const timer = window.setTimeout(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [initialRole]);

  const filteredRoles = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return careerRoles.filter((role) => {
      const categoryMatch = category === "All" || role.category === category;
      const textMatch = !needle || [role.title, role.category, role.summary, ...role.requirements]
        .join(" ")
        .toLowerCase()
        .includes(needle);
      return categoryMatch && textMatch;
    });
  }, [category, query]);

  return (
    <main>
      <SEO
        title="Careers at Seraphis | Microsoft, Cloud, Cybersecurity & Enterprise ICT"
        description="Explore project-based, contract and specialist technology opportunities with Seraphis IT and Data Solutions in Microsoft cloud, Dynamics 365, cybersecurity, infrastructure and enterprise technology."
      />

      <section className="hero-shell">
        <div className="section-container py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 xl:grid-cols-[1.1fr,0.9fr] xl:items-center">
            <div className="space-y-7">
              <span className="sales-pill">Careers • Project Delivery • Specialist Resource Pool</span>
              <div className="space-y-5">
                <h1 className="max-w-5xl">Build enterprise technology with Seraphis.</h1>
                <p className="max-w-3xl text-xl">
                  We are expanding our delivery network across Microsoft cloud, business applications, cybersecurity, managed infrastructure and specialist enterprise technology projects in South Africa.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#open-roles">View Open Opportunities</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
                  <a href="#apply">Join Our Resource Pool</a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <HeroPoint icon={BriefcaseBusiness} title="Project-led" text="Contract, project-based and longer-term opportunities." />
                <HeroPoint icon={ShieldCheck} title="Evidence matters" text="We value verifiable certifications and real delivery history." />
                <HeroPoint icon={Users} title="Partner ecosystem" text="Work alongside Seraphis and specialist technology partners." />
              </div>
            </div>

            <div className="glass-card space-y-6 p-7 md:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-seraphis-sky-light">How engagement works</p>
                <h2 className="mt-3 text-3xl">One profile. Multiple project pathways.</h2>
              </div>
              <div className="space-y-5">
                <ProcessStep number="01" title="Apply" text="Choose the role that best matches your strongest delivery capability and upload your CV." />
                <ProcessStep number="02" title="Validate" text="We review experience, certifications, references, availability and project fit." />
                <ProcessStep number="03" title="Match" text="Suitable specialists may be invited into a Seraphis delivery team for a specific client or project." />
                <ProcessStep number="04" title="Authorise" text="We will not present you as a named client or tender resource without appropriate authorisation." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {submitted && (
        <section className="border-b border-primary/15 bg-accent/55">
          <div className="section-container py-5">
            <div className="flex items-start gap-3 text-sm text-seraphis-body">
              <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} />
              <div>
                <p className="font-bold text-seraphis-heading">Application submitted.</p>
                <p className="mt-1 text-muted-foreground">Thank you. Your application has been sent to Seraphis for review.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding section-surface">
        <div className="section-container">
          <SectionHeading
            label="Working With Seraphis"
            title="Specialist capability for real enterprise delivery"
            description="Our opportunities are built around client outcomes and technical delivery. We look for people who can show what they personally delivered, the technologies they used and the results they helped achieve."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <PrincipleCard
              title="Project-based by design"
              text="Many opportunities are contract or project-based and may depend on client requirements or successful project awards. We state this clearly rather than presenting every role as permanent employment."
            />
            <PrincipleCard
              title="Certifications support evidence"
              text="Certifications matter where clients require them, but they are strongest when backed by referenceable implementations, support work and measurable delivery responsibility."
            />
            <PrincipleCard
              title="Clear consent and role ownership"
              text="Your CV may be held in our specialist resource pool, but Seraphis will seek appropriate permission before proposing you as a named delivery resource to a customer or bid."
            />
          </div>
        </div>
      </section>

      <section id="open-roles" className="section-padding bg-card scroll-mt-28">
        <div className="section-container">
          <div className="mb-10 grid gap-6 xl:grid-cols-[1fr,auto] xl:items-end">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">Open Opportunities</span>
              <h2 className="mt-3">Find the role that matches your strongest evidence.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Use the filters below, then open a role to see the detailed capability profile before applying.
              </p>
            </div>
            <div className="text-sm font-semibold text-muted-foreground">{filteredRoles.length} role{filteredRoles.length === 1 ? "" : "s"} shown</div>
          </div>

          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr,360px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles, technologies or certifications"
                className="pl-10"
                aria-label="Search careers"
              />
            </div>
            <div className="relative">
              <Filter className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as "All" | CareerCategory)}
                className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Filter careers by category"
              >
                {careerCategories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
          </div>

          {filteredRoles.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
              {filteredRoles.map((role) => (
                <article key={role.slug} className="seraphis-card flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{role.category}</span>
                    <BriefcaseBusiness className="shrink-0 text-secondary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl">{role.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {role.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {role.engagement}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{role.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <Button variant="hero-outline" size="sm" asChild>
                      <Link to={`/careers/${role.slug}`}>View Role <ArrowRight size={14} /></Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/careers?role=${encodeURIComponent(role.slug)}#apply`}>Apply</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <p className="font-semibold text-seraphis-heading">No roles match that filter.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try a broader search or choose another category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding dark-band">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div>
              <span className="sales-pill">What strengthens an application</span>
              <h2 className="mt-5">Show evidence, not a generic skills list.</h2>
              <p className="mt-4 max-w-3xl text-lg">
                For specialist delivery roles, the strongest CVs make it easy to verify what you did, where you did it and which technology or certification supports the claim.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Client / project and dates",
                "Your personal delivery responsibility",
                "Technology stack and scope",
                "Qualifications and certification IDs",
                "Referenceable outcomes",
                "Current location and availability",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white/85">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="section-container max-w-6xl">
          <CareerApplicationForm initialRole={initialRole} />
        </div>
      </section>
    </main>
  );
};

const HeroPoint = ({ icon: Icon, title, text }: { icon: ElementType; title: string; text: string }) => (
  <div className="glass-card">
    <Icon className="mb-3 text-seraphis-sky-light" size={22} />
    <div className="text-sm font-bold text-secondary">{title}</div>
    <p className="mt-2 text-sm">{text}</p>
  </div>
);

const ProcessStep = ({ number, title, text }: { number: string; title: string; text: string }) => (
  <div className="flex gap-4">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-black text-secondary">{number}</div>
    <div>
      <p className="font-bold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/70">{text}</p>
    </div>
  </div>
);

const PrincipleCard = ({ title, text }: { title: string; text: string }) => (
  <div className="seraphis-card">
    <h3 className="text-xl">{title}</h3>
    <p className="mt-3 text-sm text-muted-foreground">{text}</p>
    <div className="mt-5 accent-line" />
  </div>
);

export default Careers;
