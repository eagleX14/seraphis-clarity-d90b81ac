import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, FileText, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { CareerRole } from "@/data/careers";
import { generalExpertiseAreas } from "@/data/careers";

const MAX_TOTAL_UPLOAD_BYTES = 10 * 1024 * 1024;
const acceptedExtensions = ["pdf", "doc", "docx"];

type CareerApplicationFormProps = {
  role?: CareerRole;
  general?: boolean;
};

const fieldClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CareerApplicationForm = ({ role, general = false }: CareerApplicationFormProps) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const roleTitle = general ? "General Specialist Network Application" : role?.title ?? "Career Application";
  const subject = useMemo(() => `Career Application | ${roleTitle}`, [roleTitle]);

  const validateFile = (file: File | null) => {
    if (!file) return true;
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    return acceptedExtensions.includes(extension);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const cv = formData.get("CV / Resume") as File | null;
    const supporting = formData.get("Supporting Document") as File | null;

    if (!cv || cv.size === 0) {
      setSubmitError("Please attach your CV before submitting.");
      return;
    }

    if (!validateFile(cv) || (supporting && supporting.size > 0 && !validateFile(supporting))) {
      setSubmitError("CV and supporting documents must be PDF, DOC or DOCX files.");
      return;
    }

    const totalBytes = (cv?.size ?? 0) + (supporting?.size ?? 0);
    if (totalBytes > MAX_TOTAL_UPLOAD_BYTES) {
      setSubmitError("Combined uploaded documents must be 10 MB or less.");
      return;
    }

    if (general && selectedExpertise.length === 0) {
      setSubmitError("Please select at least one area of expertise.");
      return;
    }

    setSubmitting(true);
    try {
      const firstName = String(formData.get("First Name") ?? "").trim();
      const lastName = String(formData.get("Last Name") ?? "").trim();

      formData.set("_subject", `${subject} | ${firstName} ${lastName}`.trim());
      formData.set("_template", "table");
      formData.set("_captcha", "false");
      formData.set("Role Applied For", roleTitle);
      if (general) formData.set("Expertise Areas", selectedExpertise.join(", "));

      const response = await fetch("https://formsubmit.co/ajax/info@seraphis-it.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "Unable to submit your application right now.");
      }

      form.reset();
      setSelectedExpertise([]);
      navigate("/careers/application-received", { state: { roleTitle } });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your application right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="seraphis-card space-y-7" id="apply">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Application</span>
        <h2 className="text-3xl">{general ? "Join our specialist network" : "Apply for this role"}</h2>
        <p className="text-sm text-muted-foreground">
          Submit your CV, relevant credentials, availability and contract-rate expectations.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          First Name *
          <Input name="First Name" required autoComplete="given-name" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Last Name *
          <Input name="Last Name" required autoComplete="family-name" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Email Address *
          <Input type="email" name="Email" required autoComplete="email" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Mobile Number *
          <Input name="Mobile Number" required autoComplete="tel" placeholder="+27 ..." />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Province / Current Location *
          <Input name="Current Location" required placeholder="e.g. Gauteng / Johannesburg" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          LinkedIn Profile URL *
          <Input type="url" name="LinkedIn Profile" required placeholder="https://www.linkedin.com/in/..." />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Years of Relevant Experience *
          <Input name="Years of Relevant Experience" required placeholder="e.g. 7 years" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Current Availability *
          <select name="Current Availability" required className={fieldClass} defaultValue="">
            <option value="" disabled>Select availability</option>
            <option>Immediately available</option>
            <option>Available within 1 week</option>
            <option>Available within 2 weeks</option>
            <option>Available within 1 month</option>
            <option>Available in more than 1 month</option>
          </select>
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Notice Period *
          <Input name="Notice Period" required placeholder="e.g. Immediate / 30 days" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Expected Contract Rate *
          <Input name="Expected Contract Rate" required placeholder="Hourly, daily or monthly rate" />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading sm:col-span-2">
          Right to Work in South Africa *
          <select name="Right to Work in South Africa" required className={fieldClass} defaultValue="">
            <option value="" disabled>Select status</option>
            <option>Yes — South African citizen / permanent resident</option>
            <option>Yes — valid work authorisation</option>
            <option>I require work authorisation / sponsorship</option>
            <option>Other — explain in the message below</option>
          </select>
        </label>
      </div>

      {general && (
        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-seraphis-heading">Areas of Expertise *</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {generalExpertiseAreas.map((area) => (
              <label key={area} className="flex items-start gap-3 rounded-xl border border-border bg-background p-3 text-sm text-seraphis-body">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                  checked={selectedExpertise.includes(area)}
                  onChange={(e) => setSelectedExpertise((prev) => e.target.checked ? [...prev, area] : prev.filter((item) => item !== area))}
                />
                <span>{area}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-seraphis-heading">Relevant Certifications</label>
        <Textarea name="Relevant Certifications" rows={3} placeholder="List certification name, issuing body and status where relevant." />
      </div>

      {role?.applicationQuestions?.map((question) => (
        <div key={question.id} className="space-y-1.5">
          <label className="text-sm font-medium text-seraphis-heading">
            {question.label} {question.required ? "*" : ""}
          </label>
          <Textarea name={question.label} rows={4} required={question.required} placeholder={question.placeholder} />
        </div>
      ))}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          Portfolio URL
          <Input type="url" name="Portfolio URL" placeholder="https://..." />
        </label>
        <label className="space-y-1.5 text-sm font-medium text-seraphis-heading">
          GitHub URL
          <Input type="url" name="GitHub URL" placeholder="https://github.com/..." />
        </label>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-seraphis-heading">Additional Message</label>
        <Textarea name="Additional Message" rows={4} placeholder="Add any information relevant to your application." />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="rounded-2xl border border-dashed border-primary/35 bg-accent/25 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-seraphis-heading"><FileText size={18} className="text-primary" /> CV / Resume *</div>
          <input type="file" name="CV / Resume" required accept=".pdf,.doc,.docx" className="block w-full text-sm text-seraphis-body file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-primary/90" />
          <p className="mt-2 text-xs text-muted-foreground">PDF, DOC or DOCX.</p>
        </label>

        <label className="rounded-2xl border border-dashed border-border bg-background p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-seraphis-heading"><FileText size={18} className="text-primary" /> Supporting Document</div>
          <input type="file" name="Supporting Document" accept=".pdf,.doc,.docx" className="block w-full text-sm text-seraphis-body file:mr-4 file:rounded-md file:border-0 file:bg-muted file:px-4 file:py-2 file:font-semibold file:text-seraphis-heading hover:file:bg-accent" />
          <p className="mt-2 text-xs text-muted-foreground">Optional certification evidence or supporting document. Combined uploads must be 10 MB or less.</p>
        </label>
      </div>

      <div className="space-y-4 rounded-2xl border border-border bg-background p-5">
        <label className="flex items-start gap-3 text-sm text-seraphis-body">
          <input type="checkbox" name="Recruitment Consent" value="Confirmed" required className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]" />
          <span>I consent to Seraphis IT and Data Solutions processing the information and documents submitted in this application for recruitment, resource evaluation and potential project engagement purposes.</span>
        </label>
        <label className="flex items-start gap-3 text-sm text-seraphis-body">
          <input type="checkbox" name="Information Accuracy Confirmation" value="Confirmed" required className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]" />
          <span>I confirm that the information supplied in my CV, qualifications and certifications is accurate and may be verified.</span>
        </label>
        <p className="text-xs text-muted-foreground">Seraphis may contact shortlisted applicants to request certification verification, references or additional project information. Applicant information will not be presented externally as a named resource without appropriate engagement and authorisation.</p>
      </div>

      {submitError && (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive" role="alert">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? <><Loader2 className="animate-spin" /> Submitting Application</> : <><Send /> Submit Application</>}
      </Button>
    </form>
  );
};

export default CareerApplicationForm;
