import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import CareerRoleCard from "@/components/careers/CareerRoleCard";
import { Button } from "@/components/ui/button";
import { activeCareerRoles } from "@/data/careers";

const Careers = () => {
  return (
    <main>
      <SEO
        title="Careers | Seraphis IT and Data Solutions"
        description="Explore current career opportunities at Seraphis IT and Data Solutions."
      />

      <section id="open-roles" className="section-padding bg-card scroll-mt-28">
        <div className="section-container">
          <SectionHeading
            label="Careers"
            level="h1"
            title="Current opportunities"
            description="Explore our current roles and open a position to review the complete responsibilities, requirements and application details."
          />

          {activeCareerRoles.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {activeCareerRoles.map((role) => (
                <CareerRoleCard key={role.id} role={role} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-background p-10 text-center shadow-sm md:p-14">
              <h3 className="text-2xl">No current openings</h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                There are currently no published vacancies. Please check this page again for newly published roles.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="dark-band section-padding">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <span className="sales-pill">Specialist Network</span>
              <h2>Interested in future opportunities?</h2>
              <p className="text-lg">
                Experienced technology specialists may submit a profile for future consideration.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers/general-application">
                Join Specialist Network <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
