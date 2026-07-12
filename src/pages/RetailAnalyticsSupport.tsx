import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const RetailAnalyticsSupport = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Seraphis Retail Analytics Support
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Support resources for Seraphis Retail Analytics customers, Microsoft Marketplace
              subscribers, pilot customers, and retail organizations using the platform for
              dashboards, reporting, recommendations, and operational analytics.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Support page for Microsoft Marketplace listing and customer assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <SupportSection title="1. How to contact support">
            <p>
              For support with Seraphis Retail Analytics, contact Seraphis through the channels
              below. Please include your organization name, contact details, Marketplace subscription
              information if applicable, and a clear description of the issue.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <ContactCard
                title="General support"
                lines={[
                  "Email: info@seraphis-it.com",
                  "Use for onboarding, dashboard access, reports, uploads, and general platform questions.",
                ]}
              />
              <ContactCard
                title="Business and account support"
                lines={[
                  "Email: management@seraphis-it.com",
                  "Use for subscriptions, Marketplace activation, customer onboarding, and commercial queries.",
                ]}
              />
            </div>
          </SupportSection>

          <SupportSection title="2. Support hours">
            <p>
              Standard support is available during South African business hours, Monday to Friday,
              excluding public holidays.
            </p>
            <ul>
              <li><strong>Standard support hours:</strong> 09:00 to 17:00 South Africa Standard Time.</li>
              <li><strong>Support language:</strong> English.</li>
              <li><strong>Primary support channel:</strong> email support.</li>
              <li><strong>Remote meetings:</strong> available by appointment for onboarding, diagnostics, and service reviews.</li>
            </ul>
          </SupportSection>

          <SupportSection title="3. What we support">
            <p>Seraphis support covers the following areas:</p>
            <ul>
              <li>Microsoft Marketplace subscription activation and onboarding guidance.</li>
              <li>Retail Analytics tenant setup and access assistance.</li>
              <li>User login, role, and account access support.</li>
              <li>Dashboard availability and navigation support.</li>
              <li>Data upload guidance and file intake support.</li>
              <li>Pipeline status, published results, reports, and recommendation visibility.</li>
              <li>Basic troubleshooting for dashboard errors, missing data, or access issues.</li>
              <li>Escalation of suspected platform availability, security, or data processing issues.</li>
            </ul>
          </SupportSection>

          <SupportSection title="4. What to include in a support request">
            <p>To help us resolve requests faster, include the following information:</p>
            <ul>
              <li>Your organization name.</li>
              <li>Your name, email address, and role.</li>
              <li>Your Microsoft Marketplace subscription name or subscription ID, if applicable.</li>
              <li>The affected tenant, store, dashboard, report, upload, or recommendation.</li>
              <li>The date and time when the issue occurred.</li>
              <li>Screenshots, error messages, or steps to reproduce the issue.</li>
              <li>Whether the issue affects one user, multiple users, or the whole organization.</li>
            </ul>
          </SupportSection>

          <SupportSection title="5. Issue severity guide">
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
                <SeverityCard
                  title="Critical"
                  description="Platform unavailable, major access failure, suspected security incident, or major customer data issue."
                  response="Target initial response: 1 business day or faster where operationally possible."
                />
                <SeverityCard
                  title="High"
                  description="Important dashboard, upload, report, or workflow issue affecting business use."
                  response="Target initial response: 1 to 2 business days."
                />
                <SeverityCard
                  title="Standard"
                  description="General questions, onboarding guidance, feature questions, or minor non-blocking issues."
                  response="Target initial response: 2 to 3 business days."
                />
              </div>
            </div>
            <p>
              Response targets are guidance only unless a separate written service level agreement
              has been signed with the customer.
            </p>
          </SupportSection>

          <SupportSection title="6. Microsoft Marketplace customers">
            <p>
              If you acquired Seraphis Retail Analytics through Microsoft Marketplace, include your
              Marketplace subscription details when contacting support. This helps Seraphis verify
              the subscription, plan, activation status, and related onboarding workflow.
            </p>
            <p>
              Microsoft may separately provide billing, Marketplace account, Azure subscription,
              and procurement support through Microsoft channels. Seraphis support covers the
              Seraphis Retail Analytics application, onboarding, tenant setup, data workflow, and
              service use.
            </p>
          </SupportSection>

          <SupportSection title="7. Data upload and analytics support">
            <p>
              Seraphis Retail Analytics relies on customer-provided retail data. Support can assist
              with file format guidance, required datasets, upload questions, validation issues, and
              the publication of dashboard-ready analytics outputs.
            </p>
            <p>Typical supported data categories include:</p>
            <ul>
              <li>POS and sales exports.</li>
              <li>SKU and product master data.</li>
              <li>Inventory and stock movement data.</li>
              <li>Store master data.</li>
              <li>Supplier invoice or supplier performance data.</li>
              <li>Promotions, markdowns, channel data, and payment settlement exports where applicable.</li>
            </ul>
          </SupportSection>

          <SupportSection title="8. Security and privacy incidents">
            <p>
              If you believe there is a security, privacy, unauthorized access, or data exposure
              issue affecting Seraphis Retail Analytics, contact Seraphis immediately using the
              support contacts on this page.
            </p>
            <p>
              Include the affected organization, user accounts, approximate time of discovery,
              description of the suspected issue, and any supporting evidence. Seraphis will review,
              triage, and escalate suspected security incidents according to the nature and severity
              of the report.
            </p>
          </SupportSection>

          <SupportSection title="9. Documentation and onboarding">
            <p>
              Seraphis provides onboarding guidance for new customers, including tenant setup,
              store profile setup, first data cycle preparation, dashboard walkthroughs, and
              advisory interpretation of analytics outputs.
            </p>
            <p>
              Additional customer documentation, user guides, and data templates may be provided
              directly to customers during onboarding or service delivery.
            </p>
          </SupportSection>

          <SupportSection title="10. Related links">
            <ul>
              <li>
                <Link className="text-primary hover:underline" to="/privacy/retail-analytics">
                  Seraphis Retail Analytics Privacy Policy
                </Link>
              </li>
              <li>
                <a className="text-primary hover:underline" href="mailto:info@seraphis-it.com">
                  Email Seraphis Support
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="mailto:management@seraphis-it.com">
                  Contact Seraphis Management
                </a>
              </li>
            </ul>
          </SupportSection>

          <div className="border-t pt-8">
            <Link className="text-primary hover:underline" to="/">
              ← Back to Seraphis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const SupportSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 text-muted-foreground [&_li]:mb-2 [&_ul]:ml-6 [&_ul]:list-disc">
        {children}
      </div>
    </section>
  );
};

const ContactCard = ({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) => {
  return (
    <div className="rounded-xl border bg-muted/30 p-5">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

const SeverityCard = ({
  title,
  description,
  response,
}: {
  title: string;
  description: string;
  response: string;
}) => {
  return (
    <div className="space-y-3 bg-card p-5">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-sm font-medium text-foreground">{response}</p>
    </div>
  );
};

export default RetailAnalyticsSupport;
