import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import schoolsImg from "@/assets/ind-schools.jpg";
import professionalImg from "@/assets/ind-professional.jpg";
import healthcareImg from "@/assets/ind-healthcare.jpg";
import constructionImg from "@/assets/ind-construction.jpg";
import financeImg from "@/assets/ind-finance.jpg";
import { ArrowRight, CheckCircle2, ClipboardCheck } from "lucide-react";

const generalQuestions = [
  "Can you rank your revenue by product, service, branch, channel or client segment?",
  "Can you see where money, time, stock or capacity is being lost?",
  "Can your reports show the current revenue baseline and what changed it?",
  "Can you identify which losses are recoverable and what recovery would cost?",
  "Can you see which products, services or channels can scale profitably?",
  "Can you explain which activities waste money and what should change first?",
  "Are email, documents, users and permissions properly controlled?",
  "Do your systems support fast decisions or force management to guess?",
];

const industryQuestionnaires = [
  {
    title: "Schools & Colleges",
    image: schoolsImg,
    questions: [
      "Are staff email, learner records and parent communication managed in a controlled environment?",
      "Can you quickly remove or adjust access when staff members leave or change roles?",
      "Are documents, policies, reports and learner information stored with clear permissions?",
      "Do administrators have a reliable system for collaboration, meetings and file sharing?",
    ],
  },
  {
    title: "Retail & E-commerce",
    image: retailImg,
    questions: [
      "Can you see top-performing products, slow-moving products and margin pressure clearly?",
      "Can you detect stockouts, shrinkage, overstock and demand changes early?",
      "Can you compare sales by category, channel, branch or campaign?",
      "Can you forecast stock and sales from existing POS or e-commerce data?",
    ],
  },
  {
    title: "Logistics & Transportation",
    image: logisticsImg,
    questions: [
      "Can you measure route efficiency, empty miles, delays and vehicle utilisation?",
      "Can you link fuel, driver time, maintenance and delivery performance to actual routes?",
      "Can dispatch teams see the right operational data at the right time?",
      "Can you identify which routes, clients or trips are profitable?",
    ],
  },
  {
    title: "Manufacturing & Operations",
    image: manufacturingImg,
    questions: [
      "Can you measure downtime, quality issues, scrap, rework and production bottlenecks?",
      "Can managers see production performance before problems become expensive?",
      "Can you connect machine, labour, inventory and quality data into useful reports?",
      "Can you identify which process improvements have the best cost-benefit case?",
    ],
  },
  {
    title: "Professional Services",
    image: professionalImg,
    questions: [
      "Are client documents, approvals, emails and project records properly controlled?",
      "Can staff collaborate without losing version control or exposing confidential information?",
      "Can management see workload, client value, revenue and delivery performance clearly?",
      "Are backups, permissions and user access good enough for client trust?",
    ],
  },
  {
    title: "Healthcare & Clinics",
    image: healthcareImg,
    questions: [
      "Are patient-related files, staff access and communication channels properly controlled?",
      "Can you protect sensitive records while keeping daily operations efficient?",
      "Can you report on operational performance, appointments, billing or service bottlenecks?",
      "Do your systems reduce risk, admin drag and avoidable delays?",
    ],
  },
  {
    title: "Construction & Property",
    image: constructionImg,
    questions: [
      "Are project documents, site reports, approvals and supplier records properly organised?",
      "Can teams access the correct version of files without confusion?",
      "Can management see project status, delays, cost leakage and accountability clearly?",
      "Can you automate repeat approvals, reminders and document workflows?",
    ],
  },
  {
    title: "Finance, Insurance & Investment",
    image: financeImg,
    questions: [
      "Are client data, approvals, permissions and sensitive documents tightly controlled?",
      "Can you detect reporting delays, operational bottlenecks and access risk?",
      "Can leadership trust the data used for performance, risk and client reporting?",
      "Do your Microsoft and cloud systems support governance, security and audit readiness?",
    ],
  },
];

const DiagnosticQuestionnaire = () => (
  <main>
    <SEO
      title="Business Self-Diagnosis Questionnaire | Seraphis IT and Data Solutions"
      description="Use the Seraphis self-diagnosis questionnaire to identify gaps in business data, Microsoft 365, Azure cloud, analytics, operations, cybersecurity and reporting."
    />

    <section className="hero-shell">
      <div className="section-container py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl space-y-6">
          <span className="sales-pill">Self-Diagnosis</span>
          <h1>Find the gaps before they become expensive.</h1>
          <p className="text-xl">
            Use these questions to check whether your organisation has the data, systems, security and reporting needed to make accurate decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Send Us Your Answers</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-seraphis-heading" asChild>
              <a href="mailto:info@seraphis-it.com">Email info@seraphis-it.com</a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding section-surface">
      <div className="section-container">
        <SectionHeading
          label="General Business Diagnostic"
          title="Start with these core questions"
          description="Answer honestly. Any “no” or “not sure” is a signal that Seraphis can help you investigate the gap."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {generalQuestions.map((question, index) => (
            <div key={question} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
              <p className="text-sm font-medium text-seraphis-body">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Industry Questionnaires"
          title="Choose the section closest to your organisation"
          description="These questions help expose operational, data, Microsoft 365, security and reporting gaps by industry."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {industryQuestionnaires.map((industry) => (
            <div key={industry.title} className="overflow-hidden rounded-3xl border border-border bg-background shadow-lg">
              <div className="grid md:grid-cols-[0.45fr,0.55fr]">
                <img src={industry.image} alt={industry.title} className="h-full min-h-[260px] w-full object-cover" />
                <div className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="text-primary" size={24} />
                    <h3 className="text-2xl">{industry.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {industry.questions.map((question) => (
                      <div key={question} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                        <span>{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Turn your answers into a cost-benefit conversation.</h2>
        <p className="mx-auto max-w-3xl text-lg text-primary-foreground/85">
          Send us your answers or book a diagnostic conversation. Seraphis will help identify the practical next step: Microsoft 365, Azure cloud, operational intelligence, analytics, cybersecurity or automation.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Book A Diagnostic Conversation <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default DiagnosticQuestionnaire;
