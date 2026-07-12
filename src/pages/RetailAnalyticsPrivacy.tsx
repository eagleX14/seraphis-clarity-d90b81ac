import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const RetailAnalyticsPrivacy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Privacy Policy
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Seraphis Retail Analytics Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              This Privacy Policy applies to Seraphis Retail Analytics, an Azure-based retail
              intelligence platform provided by Seraphis IT and Data Solutions (Pty) Ltd.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Effective date: 12 July 2026
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <PolicySection title="1. Introduction">
            <p>
              Seraphis IT and Data Solutions (Pty) Ltd (“Seraphis”, “we”, “our”, or “us”)
              provides Seraphis Retail Analytics, an Azure-based retail intelligence platform
              that helps retail organizations process operational data and publish dashboards,
              reports, forecasts, recommendations, and decision-support outputs.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, protect, retain, and disclose
              information when customers access or use Seraphis Retail Analytics, including when
              the service is acquired or accessed through Microsoft Marketplace.
            </p>
          </PolicySection>

          <PolicySection title="2. Information we collect">
            <p>We may collect and process the following categories of information:</p>
            <ul>
              <li>
                <strong>Account and user information:</strong> names, business email addresses,
                job titles, organization names, user roles, authentication identifiers, and
                contact details.
              </li>
              <li>
                <strong>Organization and tenant information:</strong> company name, retail
                business type, number of stores, preferred region, subscription details,
                onboarding information, and tenant configuration details.
              </li>
              <li>
                <strong>Retail operational data:</strong> sales/POS data, SKU/product master
                data, inventory data, store data, supplier invoices, promotions, channel data,
                returns data, bank/payment settlement exports, and related business records.
              </li>
              <li>
                <strong>Uploaded files and analytics outputs:</strong> raw data, validated data,
                processed datasets, reports, dashboards, forecasts, recommendations, and model
                outputs.
              </li>
              <li>
                <strong>Technical and usage information:</strong> IP address, browser type,
                device information, login events, page activity, API requests, error logs,
                performance data, security logs, and audit events.
              </li>
              <li>
                <strong>Support and communication data:</strong> support requests, emails,
                meeting notes, issue descriptions, diagnostic information, and related
                correspondence.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How we use information">
            <p>We use information to:</p>
            <ul>
              <li>Provision and manage customer tenant workspaces.</li>
              <li>Authenticate users and control access.</li>
              <li>Receive, validate, store, and process retail data.</li>
              <li>
                Generate dashboards, reports, forecasts, recommendations, and business insights.
              </li>
              <li>Monitor system health, security, performance, and reliability.</li>
              <li>Provide support, troubleshooting, onboarding, and advisory services.</li>
              <li>Improve the platform and customer experience.</li>
              <li>Manage subscriptions, billing, and Marketplace-related administration.</li>
              <li>Comply with legal, regulatory, contractual, and security obligations.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Customer data ownership">
            <p>
              Customers retain ownership of the business data they provide to Seraphis Retail
              Analytics. Seraphis processes customer data only to provide, secure, support, and
              improve the service, or as otherwise agreed with the customer.
            </p>
            <p>Seraphis does not sell customer business data.</p>
          </PolicySection>

          <PolicySection title="5. Data hosting and Microsoft Azure">
            <p>
              Seraphis Retail Analytics is hosted using Microsoft Azure services. Customer data
              may be stored and processed in Azure regions selected based on service configuration,
              customer requirements, technical availability, and operational needs.
            </p>
            <p>
              Microsoft may process certain Marketplace, billing, subscription, and identity-related
              information as part of Microsoft Marketplace and Azure services.
            </p>
          </PolicySection>

          <PolicySection title="6. Sharing of information">
            <p>We may share information only where necessary with:</p>
            <ul>
              <li>
                Microsoft, where required for Marketplace transactions, Azure hosting, identity,
                billing, support, or subscription lifecycle operations.
              </li>
              <li>
                Authorized Seraphis personnel, analysts, engineers, and support staff who require
                access to provide the service.
              </li>
              <li>
                Approved service providers or subcontractors who support hosting, security,
                support, or business operations.
              </li>
              <li>Legal, regulatory, or government authorities where required by law.</li>
              <li>
                Professional advisors where necessary for legal, accounting, audit, compliance,
                or risk management purposes.
              </li>
            </ul>
            <p>
              We do not disclose customer retail data to unrelated third parties for advertising
              or resale.
            </p>
          </PolicySection>

          <PolicySection title="7. Security">
            <p>
              We use administrative, technical, and organizational controls designed to protect
              customer data. These may include tenant-aware access controls, authentication,
              role-based permissions, encryption in transit, secure Azure storage, monitoring,
              logging, audit trails, vulnerability management, and operational security procedures.
            </p>
            <p>
              No system can be guaranteed to be completely secure, but Seraphis works to maintain
              appropriate safeguards for the nature of the data processed.
            </p>
          </PolicySection>

          <PolicySection title="8. Data retention">
            <p>
              We retain customer information for as long as necessary to provide the service,
              comply with legal or contractual obligations, resolve disputes, maintain audit
              records, and support business operations.
            </p>
            <p>
              When a subscription ends, customer data may be deleted, returned, archived, or
              retained for a limited period according to the applicable contract, legal requirements,
              and operational retention policies.
            </p>
          </PolicySection>

          <PolicySection title="9. International data transfers">
            <p>
              Depending on the customer’s location, selected Azure region, support requirements,
              and service configuration, information may be processed outside the customer’s country.
              Where required, Seraphis will apply appropriate safeguards for cross-border processing.
            </p>
          </PolicySection>

          <PolicySection title="10. Customer and user rights">
            <p>
              Depending on applicable law, users and customers may have rights to access, correct,
              update, delete, restrict, or object to certain processing of personal information.
            </p>
            <p>
              Requests can be sent to Seraphis using the contact details below. We may need to
              verify the request before acting on it.
            </p>
          </PolicySection>

          <PolicySection title="11. Compliance">
            <p>
              Seraphis aims to process personal information in accordance with applicable privacy
              and data protection laws, including South Africa’s Protection of Personal Information
              Act where applicable, and other applicable data protection requirements depending on
              the customer’s jurisdiction.
            </p>
            <p>
              Customers are responsible for ensuring they have the necessary rights, permissions,
              notices, and legal basis to provide retail and business data to Seraphis for processing.
            </p>
          </PolicySection>

          <PolicySection title="12. Changes to this Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              posted on our website with a revised effective date.
            </p>
          </PolicySection>

          <PolicySection title="13. Contact">
            <p>For privacy, data protection, or support questions, contact:</p>

            <div className="rounded-xl border bg-muted/30 p-6">
              <p className="font-semibold">Seraphis IT and Data Solutions (Pty) Ltd</p>
              <p>
                Email:{" "}
                <a className="text-primary hover:underline" href="mailto:info@seraphis-it.com">
                  info@seraphis-it.com
                </a>
              </p>
              <p>
                Business contact:{" "}
                <a className="text-primary hover:underline" href="mailto:management@seraphis-it.com">
                  management@seraphis-it.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a className="text-primary hover:underline" href="https://www.seraphis-it.com">
                  https://www.seraphis-it.com
                </a>
              </p>
            </div>
          </PolicySection>

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

const PolicySection = ({
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

export default RetailAnalyticsPrivacy;
