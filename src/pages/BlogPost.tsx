import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main>
      <SEO title={`${post.title} | Seraphis Insights`} description={post.excerpt} />

      <section className="hero-shell">
        <div className="section-container py-12 md:py-16">
          <Link to="/insights" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft size={16} /> Back to insights
          </Link>
          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{post.category}</div>
            <h1 className="max-w-5xl text-4xl md:text-5xl">{post.title}</h1>
            <p className="max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="section-container py-10">
          <img src={post.image} alt={post.title} className="max-h-[520px] w-full rounded-2xl object-cover shadow-lg" />
        </div>
      </section>

      <section className="section-padding bg-background pt-0">
        <div className="section-container max-w-4xl space-y-10">
          {post.sections.map((section) => (
            <article key={section.heading} className="seraphis-card space-y-5">
              <h2 className="text-3xl">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="section-container text-center space-y-6">
          <h2 className="text-primary-foreground">Want to apply this in your environment?</h2>
          <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
            Seraphis can translate these general ideas into a practical review of your business systems, technology setup and operational priorities.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Request A Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
