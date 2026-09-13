import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import { Button } from "@/components/ui/button";
import { careerRoles } from "@/data/careerRoles";

const CareerRole = () => {
  const { slug = "" } = useParams();
  const role = careerRoles.find((item) => item.slug === slug);

  if (!role) {
    return (
      <main className="section-padding bg-background">
        <div className="section-container max-w-3xl text-center">
          <h1>Role not found</h1>
          <p className="mt-4 text-muted-foreground">This opportunity may have moved or is no longer listed.</p>
          <Button variant="hero-outline" className="mt-6" asChild>
            <Link to="/careers">View Careers</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <SEO
        title={`${role.title} | Careers at Seraphis`}
        description={`${role.summary} Apply to join the Seraphis project-delivery resource pool in South Africa.`}
      />

      <section className="hero-shell">
        <div className="section-container py-14 md:py-18 lg:py-20">
          <Link to="/careers" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white">
            <ArrowLeft size={16} /> Back to Careers
          </Link>

          <div className="grid gap-10 xl:grid-cols-[1fr,0.72fr] xl:items-end">
            <div className="space-y-6">
              <span className="sales-pill">{role.category}</span>
              <div>
                <h1 className="max-w-5xl">{role.title}</h1>
                <p className="mt-5 max-w-3xl text-xl">{role.summary}</p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/80">
                <span className="inline-flex items-center gap-2"><MapPin size={17} className="text-seraphis-sky-light" /> {role.location}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={17} className="text-seraphis-sky-light" /> {role.engagement}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#apply">Apply for this role</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
                  <Link to="/careers">View all opportunities</Link>
                </Button>
              </div>
            </div>

            <div className="glass-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-seraphis-heading">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-seraphis-sky-light">Engagement note</p>
                  <p className="mt-2 text-sm text-white/75">
                    This opportunity may support current or upcoming Seraphis client projects. Project-based assignments can depend on client requirements, technical validation and successful project awards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="section-container max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="seraphis-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <CheckCircle2 size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Core profile</p>
                  <h2 className="text-2xl">What we are looking for</h2>
                </div>
              </div>
              <ul className="space-y-4">
                {role.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-seraphis-body">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="seraphis-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Evidence</p>
                  <h2 className="text-2xl">What strengthens your application</h2>
                </div>
              </div>
              <ul className="space-y-4">
                {role.valuableEvidence.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-seraphis-body">
                    <ArrowRight className="mt-0.5 shrink-0 text-secondary" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-sm font-bold text-seraphis-heading">How to present your project history</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Use your CV to show client or project name, dates, technology, your personal responsibility, what you delivered and the outcome. Where certifications are important, include the certification title and verification details where available.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="section-container max-w-6xl">
          <CareerApplicationForm initialRole={role.slug} compactHeading />
        </div>
      </section>
    </main>
  );
};

export default CareerRole;
