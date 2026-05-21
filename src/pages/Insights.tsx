import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Insights = () => (
  <main>
    <SEO
      title="Insights | Seraphis IT and Data Solutions"
      description="Read Seraphis insights on operational intelligence, Microsoft 365, Azure cloud data infrastructure, analytics, cybersecurity and industry-specific business problems."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <SectionHeading
          label="Insights"
          title="Insights that turn technology into business value"
          description="Short, practical articles on Microsoft 365, Azure, analytics, cybersecurity and operational performance."
        />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span>{post.category}</span>
                <span className="text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-2xl leading-tight">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <Link to={`/insights/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Read article <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Need to apply these ideas to your organisation?</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          The next step is to connect the general logic to your real environment, data situation and business priorities.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Book A Consultation</Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Insights;
