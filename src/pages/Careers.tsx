import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CareerRoleCard from "@/components/careers/CareerRoleCard";
import { Button } from "@/components/ui/button";
import { activeCareerRoles, certificationFilters, experienceFilters, practiceAreas } from "@/data/careers";

const selectClass = "h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

const Careers = () => {
  const [query, setQuery] = useState("");
  const [practiceArea, setPracticeArea] = useState("All");
  const [experience, setExperience] = useState("All");
  const [certification, setCertification] = useState("All");

  const filteredRoles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return activeCareerRoles.filter((role) => {
      const text = [role.title, role.practiceArea, role.summary, ...(role.technicalSkills ?? [])].join(" ").toLowerCase();
      const queryMatch = !normalizedQuery || text.includes(normalizedQuery);
      const practiceMatch = practiceArea === "All" || role.practiceArea === practiceArea;
      const experienceMatch = experience === "All" || role.experienceFilter === experience;
      const certificationMatch = certification === "All" || role.certificationTags.includes(certification);
      return queryMatch && practiceMatch && experienceMatch && certificationMatch;
    });
  }, [query, practiceArea, experience, certification]);

  const resetFilters = () => {
    setQuery("");
    setPracticeArea("All");
    setExperience("All");
    setCertification("All");
  };

  return (
    <main>
      <SEO
        title="Careers | Seraphis IT and Data Solutions"
        description="Explore specialist opportunities with Seraphis across Microsoft cloud, Dynamics 365, cybersecurity, managed infrastructure, Mimecast and enterprise technology delivery."
      />

      <section id="open-roles" className="section-padding bg-card scroll-mt-28">
        <div className="section-container">
          <SectionHeading
            label="Open Roles"
            title="Current specialist opportunities"
            description="Search by practice area, experience or certification. Open a role to view the exact timeline and requirements before applying."
          />

          <div className="mb-10 rounded-2xl border border-border bg-background p-5 shadow-sm md:p-6">
            <div className="grid gap-4 xl:grid-cols-[1.6fr,1fr,1fr,1fr]">
              <label className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search roles or skills"
                  className="h-11 w-full rounded-md border border-input bg-card pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <select value={practiceArea} onChange={(e) => setPracticeArea(e.target.value)} className={selectClass} aria-label="Filter by practice area">
                <option>All</option>
                {practiceAreas.map((value) => <option key={value}>{value}</option>)}
              </select>
              <select value={experience} onChange={(e) => setExperience(e.target.value)} className={selectClass} aria-label="Filter by experience">
                <option>All</option>
                {experienceFilters.map((value) => <option key={value}>{value}</option>)}
              </select>
              <select value={certification} onChange={(e) => setCertification(e.target.value)} className={selectClass} aria-label="Filter by certification">
                <option>All</option>
                {certificationFilters.map((value) => <option key={value}>{value}</option>)}
              </select>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Showing {filteredRoles.length} of {activeCareerRoles.length} active roles</span>
              <button onClick={resetFilters} className="font-semibold text-primary hover:underline">Reset filters</button>
            </div>
          </div>

          {filteredRoles.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {filteredRoles.map((role) => <CareerRoleCard key={role.id} role={role} />)}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-background p-10 text-center">
              <h3 className="text-2xl">No roles match those filters</h3>
              <p className="mt-3 text-muted-foreground">Reset the filters or submit a general specialist profile for future consideration.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
                <Button variant="hero" asChild><Link to="/careers/general-application">Join Specialist Network</Link></Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="dark-band section-padding">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <span className="sales-pill">Specialist Network</span>
              <h2>Don't see the right role?</h2>
              <p className="text-lg">Experienced specialists may submit a profile for future cloud, cybersecurity, Microsoft business applications and enterprise technology engagements.</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers/general-application">Join Specialist Network <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
