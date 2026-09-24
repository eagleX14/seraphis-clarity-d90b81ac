import { Link, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const CareerApplicationReceived = () => {
  const location = useLocation();
  const roleTitle = (location.state as { roleTitle?: string } | null)?.roleTitle;

  return (
    <main>
      <SEO title="Application Received | Careers | Seraphis IT and Data Solutions" description="Your application to Seraphis IT and Data Solutions has been received." robots="noindex,follow" canonicalPath="/careers/application-received" />
      <section className="section-padding section-surface min-h-[62vh] flex items-center">
        <div className="section-container max-w-2xl text-center">
          <div className="seraphis-card space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent">
              <CheckCircle2 className="text-primary" size={42} />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Application received</span>
              <h1 className="text-4xl md:text-5xl">Thank you for your interest in Seraphis.</h1>
              <p className="text-lg text-muted-foreground">
                {roleTitle ? `Your application for ${roleTitle} has been submitted successfully.` : "Your application has been submitted successfully."} If your experience matches a current requirement, our team will contact you regarding the next stage.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="hero" asChild><Link to="/careers">View Open Roles</Link></Button>
              <Button variant="outline" asChild><Link to="/">Return Home</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerApplicationReceived;
