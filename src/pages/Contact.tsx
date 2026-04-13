import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "@/assets/contact-office.jpg";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  industry: z.string().optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const industries = ["Retail & E-commerce", "Logistics & Transportation", "Manufacturing", "Media & Entertainment", "Other"];
const services = ["Loss Discovery", "Loss Pool Modeling", "Data Platform", "Predictive Analytics", "Workflow Integration", "Monitoring & Recalibration", "General Enquiry"];

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "", email: "", phone: "", company: "", industry: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main>
        <section className="section-padding bg-card">
          <div className="section-container text-center space-y-6 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center">
              <CheckCircle size={40} className="text-primary" />
            </div>
            <h2>Thank You</h2>
            <p className="text-muted-foreground">
              Your consultation request has been received. Our team will respond within one business day.
            </p>
            <Button variant="hero-outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", industry: "", service: "", message: "" }); }}>
              Send Another Message
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section-padding bg-card">
        <div className="section-container">
          <SectionHeading
            label="Contact Us"
            title="Start the Conversation"
            description="Tell us about your operational challenges. We'll respond within one business day with an initial assessment of how Seraphis can help."
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="seraphis-card space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Full Name *</label>
                    <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Your name" />
                    {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Email *</label>
                    <Input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@company.com" />
                    {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Phone</label>
                    <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+27 ..." />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Company</label>
                    <Input value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company name" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Industry</label>
                    <select
                      value={form.industry}
                      onChange={(e) => handleChange("industry", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-seraphis-heading">Service Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-seraphis-heading">Message *</label>
                  <Textarea rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Describe your operational challenges or questions..." />
                  {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" type="submit">
                    <Send size={16} /> Request Consultation
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="mailto:Info@seraphis-it.com">Email Us Directly</a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">We typically respond within one business day.</p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <img src={contactImg} alt="Professional business meeting" loading="lazy" width={1280} height={720} className="rounded-xl shadow-lg w-full" />
              <div className="seraphis-card space-y-5">
                <h4 className="text-lg font-semibold">Contact Details</h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <a href="mailto:Info@seraphis-it.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail size={18} className="text-primary shrink-0" /> Info@seraphis-it.com
                  </a>
                  <a href="tel:+27670542001" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary shrink-0" /> +27 67 054 2001
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>9 Orange Street, Sunnyside,<br />Johannesburg, Gauteng, 2092</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
