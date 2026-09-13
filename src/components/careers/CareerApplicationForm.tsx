import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { FileText, Send, ShieldCheck, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { careerRoles } from "@/data/careerRoles";

const MAX_TOTAL_FILE_BYTES = 10 * 1024 * 1024;
const allowedExtensions = ["pdf", "doc", "docx"];

interface CareerApplicationFormProps {
  initialRole?: string;
  compactHeading?: boolean;
}

const CareerApplicationForm = ({ initialRole = "", compactHeading = false }: CareerApplicationFormProps) => {
  const initialTitle = useMemo(
    () => careerRoles.find((role) => role.slug === initialRole)?.title ?? initialRole,
    [initialRole],
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [primaryRole, setPrimaryRole] = useState(initialTitle);
  const [fileError, setFileError] = useState("");

  useEffect(() => {
    if (initialTitle) setPrimaryRole(initialTitle);
  }, [initialTitle]);

  const validateFiles = (form: HTMLFormElement) => {
    const fileInputs = Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"]'));
    const files = fileInputs.flatMap((input) => Array.from(input.files ?? []));
    const total = files.reduce((sum, file) => sum + file.size, 0);

    if (total > MAX_TOTAL_FILE_BYTES) {
      setFileError("The combined size of your uploaded files must be 10 MB or less.");
      return false;
    }

    const invalid = files.find((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
      return !allowedExtensions.includes(extension);
    });

    if (invalid) {
      setFileError("Please upload PDF, DOC or DOCX files only.");
      return false;
    }

    setFileError("");
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!validateFiles(event.currentTarget)) {
      event.preventDefault();
    }
  };

  const subjectRole = primaryRole || "Resource Pool Application";

  return (
    <div id="apply" className="scroll-mt-32">
      {!compactHeading && (
        <div className="mb-8 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">Apply to Seraphis</span>
          <h2 className="mt-3">Submit your profile once. Build with us when the right project matches.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Applications are used for current opportunities and our specialist project-resource pool. Project assignments may depend on client requirements or successful project awards.
          </p>
        </div>
      )}

      <form
        action="https://formsubmit.co/info@seraphis-it.com"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="seraphis-card space-y-6"
      >
        <input type="hidden" name="_subject" value={`CAREERS | ${subjectRole} | ${name || "New Applicant"}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://www.seraphis-it.com/careers?submitted=1" />
        <input type="hidden" name="_url" value="https://www.seraphis-it.com/careers" />
        <input type="hidden" name="_replyto" value={email} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name *">
            <Input name="full_name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={120} placeholder="Your full name" />
          </Field>
          <Field label="Email address *">
            <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} placeholder="you@example.com" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone / WhatsApp *">
            <Input name="phone" required maxLength={40} placeholder="+27 ..." />
          </Field>
          <Field label="Current city / province *">
            <Input name="location" required maxLength={120} placeholder="e.g. Johannesburg, Gauteng" />
          </Field>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Field label="Primary role *">
            <select
              name="primary_role"
              value={primaryRole}
              onChange={(e) => setPrimaryRole(e.target.value)}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select a role</option>
              {careerRoles.map((role) => (
                <option key={role.slug} value={role.title}>{role.title}</option>
              ))}
              <option value="General specialist resource pool">General specialist resource pool</option>
            </select>
          </Field>
          <Field label="Other roles you can support (optional)">
            <Input name="additional_roles" maxLength={300} placeholder="List any other relevant roles" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Years of relevant experience *">
            <Input name="years_experience" required maxLength={40} placeholder="e.g. 7 years" />
          </Field>
          <Field label="Availability *">
            <Input name="availability" required maxLength={100} placeholder="e.g. Immediate / 2 weeks" />
          </Field>
          <Field label="Engagement preference *">
            <select name="engagement_preference" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="">Select</option>
              <option>Project-based</option>
              <option>Contract</option>
              <option>Permanent</option>
              <option>Subcontract / consulting</option>
              <option>Open to any</option>
            </select>
          </Field>
          <Field label="SA work eligibility *">
            <select name="sa_work_eligibility" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Requires explanation</option>
            </select>
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Current / most recent job title">
            <Input name="current_title" maxLength={160} placeholder="Your current or most recent role" />
          </Field>
          <Field label="Day / hourly rate (optional)">
            <Input name="rate" maxLength={80} placeholder="Optional — include currency and basis" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="LinkedIn profile (optional)">
            <Input name="linkedin" type="url" maxLength={500} placeholder="https://linkedin.com/in/..." />
          </Field>
          <Field label="Portfolio / GitHub / certification profile (optional)">
            <Input name="portfolio" type="url" maxLength={500} placeholder="https://..." />
          </Field>
        </div>

        <Field label="Certifications and qualifications *">
          <Textarea name="certifications" required rows={4} maxLength={2500} placeholder="List relevant certifications and qualifications, including certification IDs or verification links where available." />
        </Field>

        <Field label="Professional summary *">
          <Textarea name="professional_summary" required rows={5} maxLength={3000} placeholder="Summarise the specialist capability you would bring to Seraphis projects." />
        </Field>

        <Field label="Relevant project experience *">
          <Textarea
            name="project_experience"
            required
            rows={7}
            maxLength={6000}
            placeholder="For your strongest projects, include client / project, dates, technology, your personal role, what you delivered and the outcome."
          />
        </Field>

        <div className="grid gap-5 lg:grid-cols-2">
          <UploadField
            name="cv_attachment"
            label="CV / résumé *"
            required
            helper="PDF, DOC or DOCX. Keep the combined upload size at 10 MB or less."
          />
          <UploadField
            name="supporting_documents"
            label="Qualifications / certifications (optional)"
            helper="Combine supporting certificates into one file where possible."
          />
        </div>

        {fileError && (
          <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-4 text-sm font-medium text-destructive" role="alert">
            {fileError}
          </div>
        )}

        <label className="flex items-start gap-3 rounded-xl border border-border bg-muted/35 p-4 text-sm text-seraphis-body">
          <input type="checkbox" name="applicant_consent" value="I consent" required className="mt-1 h-4 w-4 rounded border-input accent-primary" />
          <span>
            I consent to Seraphis IT and Data Solutions processing the information I submit for recruitment, contractor selection and project resourcing. I understand that Seraphis will not present me to a client or tender as a named resource without appropriate authorisation.
          </span>
        </label>

        <div className="rounded-2xl border border-primary/15 bg-accent/35 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-primary" size={20} />
            <div>
              <p className="font-semibold text-seraphis-heading">Application handling</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your application is emailed to Seraphis through the same form-delivery service used by our website contact form. You can request correction or removal of your application data by emailing info@seraphis-it.com.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="hero" size="lg" type="submit">
            <Send size={16} /> Submit Application
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileText size={15} /> Applications go directly to info@seraphis-it.com
          </div>
        </div>
      </form>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-seraphis-heading">{label}</label>
    {children}
  </div>
);

const UploadField = ({ name, label, helper, required = false }: { name: string; label: string; helper: string; required?: boolean }) => (
  <div className="rounded-2xl border border-dashed border-primary/30 bg-background p-5">
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
        <Upload size={19} />
      </div>
      <div>
        <label htmlFor={name} className="text-sm font-semibold text-seraphis-heading">{label}</label>
        <p className="text-xs text-muted-foreground">{helper}</p>
      </div>
    </div>
    <Input
      id={name}
      name={name}
      type="file"
      required={required}
      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      className="cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-accent file:px-3 file:py-1 file:text-xs file:font-semibold file:text-primary"
    />
  </div>
);

export default CareerApplicationForm;
