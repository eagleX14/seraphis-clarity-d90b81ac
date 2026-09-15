import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";

const CareerGeneralApplication = () => (
  <main>
    <SEO
      title="Join Our Specialist Network | Careers | Seraphis IT and Data Solutions"
      description="Submit your specialist technology profile for future Seraphis project opportunities across cloud, cybersecurity, business applications and managed infrastructure."
    />
    <section className="hero-shell">
      <div className="section-container py-14 md:py-16 lg:py-20">
        <Link to="/careers" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
        <div className="max-w-4xl space-y-5">
          <span className="sales-pill">Specialist Network</span>
          <h1>Submit your profile for future specialist engagements.</h1>
          <p className="max-w-3xl text-xl">If there is no current role that matches your expertise, you can still submit your profile for future cloud, cybersecurity, Microsoft business applications and enterprise technology opportunities.</p>
        </div>
      </div>
    </section>
    <section className="section-padding section-surface">
      <div className="section-container max-w-5xl">
        <CareerApplicationForm general />
      </div>
    </section>
  </main>
);

export default CareerGeneralApplication;
