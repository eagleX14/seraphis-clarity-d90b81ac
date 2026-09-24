import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Award, CheckCircle2, Clock3, MapPin, Users } from "lucide-react";
import SEO from "@/components/SEO";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import CareerRoleCard from "@/components/careers/CareerRoleCard";
import { Button } from "@/components/ui/button";
import { activeCareerRoles } from "@/data/careers";
import { getProjectDuration, getPublicOverview } from "@/data/careerPresentation";
import seraphisLogo from "@/assets/seraphis-logo-optimized.webp";

const CareerDetail = () => {
  const { slug } = useParams();
  const role = activeCareerRoles.find((item) => item.slug === slug);

  useEffect(() => {
    if (!role) return;
    const scriptId = `job-posting-${role.slug}`;
    const existing = document.getElementById(scriptId);
    existing?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const description = [
      `<p>${escapeHtml(getPublicOverview(role))}</p>`,
      "<p>Core responsibilities:</p>",
      `<ul>${role.responsibilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`,
      "<p>Minimum requirements:</p>",
      `<ul>${role.minimumRequirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`,
    ].join("");

    const canonicalUrl = `https://seraphis-it.com/careers/${role.slug}`;
    const logoUrl = new URL(seraphisLogo, "https://seraphis-it.com").href;
    const jobLocation =
      role.location.includes("Gauteng")
        ? {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
          }
        : {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "ZA",
            },
          };

    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: role.title,
      description,
      identifier: {
        "@type": "PropertyValue",
        name: "Seraphis IT and Data Solutions (Pty) Ltd",
        value: role.id,
      },
      datePosted: role.datePosted,
      employmentType: "CONTRACTOR",
      url: canonicalUrl,
      hiringOrganization: {
        "@type": "Organization",
        name: "Seraphis IT and Data Solutions (Pty) Ltd",
        sameAs: "https://seraphis-it.com",
        logo: logoUrl,
      },
      jobLocation,
      applicantLocationRequirements: {
        "@type": "Country",
        name: "South Africa",
      },
      experienceRequirements: {
        "@type": "OccupationalExperienceRequirements",
        monthsOfExperience: 60,
      },
      directApply: true,
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [role]);

  if (!role) return <Navigate to="/careers" replace />;

  const related = activeCareerRoles.filter((item) => item.id !== role.id && item.practiceArea === role.practiceArea).slice(0, 3);
  const scrollToApplication = () => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main>
      <SEO
        title={`${role.title} | Careers | Seraphis IT and Data Solutions`}
        description={role.summary}
        canonicalPath={`/careers/${role.slug}`}
      />

      <section className="hero-shell">
        <div className="section-container py-12 md:py-16 lg:py-20">
          <Link to="/careers" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
            <ArrowLeft size={16} /> Back to all roles
          </Link>
          <div className="grid gap-10 xl:grid-cols-[1.15fr,0.85fr] xl:items-end">
            <div className="space-y-6">
              <span className="sales-pill">{role.practiceArea}</span>
              <h1 className="max-w-5xl">{role.title}</h1>
              <p className="max-w-3xl text-xl">{role.summary}</p>
              <Button variant="hero" size="lg" onClick={scrollToApplication}>Apply for this role</Button>
            </div>
            <div className="glass-card grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3"><Clock3 className="mt-0.5 text-seraphis-sky-light" size={19} /><div><div className="text-xs uppercase tracking-wider text-white/55">Timeline</div><div className="mt-1 font-semibold text-white">{getProjectDuration(role)}</div></div></div>
              <div className="flex gap-3"><MapPin className="mt-0.5 text-seraphis-sky-light" size={19} /><div><div className="text-xs uppercase tracking-wider text-white/55">Location</div><div className="mt-1 font-semibold text-white">{role.location}</div></div></div>
              {role.numberOfPositions && (
                <div className="flex gap-3"><Users className="mt-0.5 text-seraphis-sky-light" size={19} /><div><div className="text-xs uppercase tracking-wider text-white/55">Positions</div><div className="mt-1 font-semibold text-white">{role.numberOfPositions}</div></div></div>
              )}
              <div className="sm:col-span-2 border-t border-white/10 pt-4"><div className="text-xs uppercase tracking-wider text-white/55">Work arrangement</div><div className="mt-1 font-semibold text-white">{role.workArrangement}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr),360px]">
            <div className="space-y-10">
              <section className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Role Overview</span>
                <h2 className="text-3xl">The role</h2>
                <p className="text-lg text-muted-foreground">{getPublicOverview(role)}</p>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl">Core responsibilities</h2>
                <div className="grid gap-3">
                  {role.responsibilities.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="text-3xl">Minimum requirements</h2>
                <div className="space-y-3">
                  {role.minimumRequirements.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {role.preferredRequirements && role.preferredRequirements.length > 0 && (
                <section className="space-y-5">
                  <h2 className="text-3xl">Preferred experience</h2>
                  <div className="space-y-3">
                    {role.preferredRequirements.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-secondary" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {role.projectEnvironment && role.projectEnvironment.length > 0 && (
                <section className="space-y-5">
                  <h2 className="text-3xl">Project environment</h2>
                  <div className="grid gap-3 md:grid-cols-2">
                    {role.projectEnvironment.map((item) => (
                      <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {role.candidateProfile && role.candidateProfile.length > 0 && (
                <section className="space-y-5">
                  <h2 className="text-3xl">Who we're looking for</h2>
                  <div className="space-y-3">
                    {role.candidateProfile.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-primary" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {role.certifications && role.certifications.length > 0 && (
                <section className="space-y-5">
                  <h2 className="text-3xl">Certifications</h2>
                  <div className="grid gap-3 md:grid-cols-2">
                    {role.certifications.map((item) => (
                      <div key={item} className="flex gap-3 rounded-xl border border-border bg-accent/25 p-4">
                        <Award size={18} className="mt-0.5 shrink-0 text-primary" />
                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {role.technicalSkills && role.technicalSkills.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-3xl">Technical competencies</h2>
                  <div className="flex flex-wrap gap-2">
                    {role.technicalSkills.map((skill) => <span key={skill} className="rounded-full border border-primary/20 bg-accent/40 px-3 py-1.5 text-sm font-semibold text-primary">{skill}</span>)}
                  </div>
                </section>
              )}
            </div>

            <aside className="xl:sticky xl:top-28 xl:self-start">
              <div className="seraphis-card space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Application readiness</div>
                  <h3 className="mt-2 text-2xl">Prepare your evidence</h3>
                </div>
                <p className="text-sm text-muted-foreground">Please ensure your CV clearly shows the relevant projects, technologies, dates and responsibilities you personally performed.</p>
                <div className="space-y-3 text-sm text-seraphis-body">
                  <div className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-primary" />Detailed CV</div>
                  <div className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-primary" />Relevant certification evidence</div>
                  <div className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-primary" />Availability and notice period</div>
                  <div className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 text-primary" />Expected rate / compensation</div>
                </div>
                <Button variant="hero" className="w-full" onClick={scrollToApplication}>Apply Now</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface scroll-mt-28">
        <div className="section-container max-w-5xl">
          <CareerApplicationForm role={role} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-card">
          <div className="section-container">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Related Opportunities</span>
                <h2 className="mt-2">More roles in {role.practiceArea}</h2>
              </div>
              <Button variant="outline" asChild><Link to="/careers">View all roles</Link></Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {related.map((item) => <CareerRoleCard key={item.id} role={item} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CareerDetail;
