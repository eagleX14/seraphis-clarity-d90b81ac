import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "@/assets/contact-office.jpg";
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  company: z.string().trim().min(1, "Organisation name is required").max(100),
  industry: z.string().trim().min(1, "Industry is required"),
  service: z.string().trim().min(1, "Service interest is required"),
  users: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const industries = [
  "Schools & Colleges",
  "Retail & E-commerce",
  "Logistics & Transportation",
  "Manufacturing",
  "Legal, Accounting & Professional Services",
  "Healthcare & Clinics",
  "Construction & Property",
  "Finance, Insurance & Investment",
  "Media & Digital",
  "Other",
];

const services = [
  "Microsoft 365 Licensing",
  "Microsoft 365 Migration",
  "Operational Intelligence Diagnostic",
  "Azure Cloud Solutions",
  "Data Analytics & Dashboards",
  "Cybersecurity Review",
  "Automation / AI Readiness",
  "General Enquiry",
];

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  service: "",
  users: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@seraphis-it.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Website Enquiry - ${form.service}`,
          _template: "table",
          _captcha: "false",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          industry: form.industry,
          service_interest: form.service,
          users: form.users,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Unable to send message right now.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit the form right now.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main>
        <SEO title="Contact Seraphis | Thank You" description="Thank you for contacting Seraphis IT and Data Solutions." />
        <section className="section-padding bg-card">
          <div className="section-container max-w-xl text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h2>Thank you</h2>
            <p className="text-muted-foreground">
              Your enquiry has been submitted. We will review it and respond using the contact details you provided.
            </p>
            <Button variant="hero-outline" onClick={() => setSubmitted(false)}>
              Send Another Enquiry
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SEO
        title="Contact Seraphis IT and Data Solutions"
        description="Contact Seraphis for Microsoft 365 licensing, Azure cloud solutions, operational intelligence, analytics and cybersecurity support."
      />

      <section className="hero-shell">
        <div className="section-container py-16 md:py-20 lg:py-24">
          <SectionHeading
            label="Contact Us"
            title="Start with your business problem"
            description="Call, email or complete the form. We will point you to the right review, quote, diagnostic or cost-benefit conversation."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-10 xl:grid-cols-5">
            <div className="xl:col-span-3">
              <form onSubmit={handleSubmit} className="seraphis-card space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Full Name *</label>
                    <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" />
                    {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Work Email *</label>
                    <Input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@organisation.com" />
                    {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Phone / WhatsApp *</label>
                    <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+27 ..." />
                    {errors.phone && <span className="text-xs text-destructive">{errors.phone}</span>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Organisation Name *</label>
                    <Input value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Organisation name" />
                    {errors.company && <span className="text-xs text-destructive">{errors.company}</span>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Industry *</label>
                    <select
                      value={form.industry}
                      onChange={(e) => handleChange("industry", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    {errors.industry && <span className="text-xs text-destructive">{errors.industry}</span>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Service Interest *</label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select service</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                    {errors.service && <span className="text-xs text-destructive">{errors.service}</span>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-seraphis-heading">Approximate Number of Users (Optional)</label>
                  <Input value={form.users} onChange={(e) => handleChange("users", e.target.value)} placeholder="e.g. 25 users" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-seraphis-heading">Message *</label>
                  <Textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your current situation, the problems you want to solve, or the type of support you need."
                  />
                  {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                </div>

                {submitError && <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">{submitError}</div>}

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" type="submit" disabled={sending}>
                    <Send size={16} /> {sending ? "Sending..." : "Submit Enquiry"}
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="mailto:info@seraphis-it.com">Email Us Directly</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Form submissions are sent to info@seraphis-it.com.</p>
              </form>
            </div>

            <div className="space-y-6 xl:col-span-2">
              <img src={contactImg} alt="Seraphis contact" className="w-full rounded-2xl shadow-lg" />

              <div className="seraphis-card space-y-5">
                <h4 className="text-lg font-semibold">Contact Details</h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:info@seraphis-it.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary shrink-0" /> info@seraphis-it.com
                  </a>
                  <a href="tel:+27670542001" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary shrink-0" /> +27 67 054 2001
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span>9 Orange Street, Sunnyside, Johannesburg, Gauteng, 2092</span>
                  </div>
                </div>
              </div>

              <div className="seraphis-card space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <h4 className="text-lg font-semibold">What to prepare</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  If you want a faster and more useful conversation, tell us your current email or cloud setup, approximate user count, key business problem and what outcome matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
