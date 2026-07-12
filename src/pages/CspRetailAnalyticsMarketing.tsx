import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const CspRetailAnalyticsMarketing = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              CSP Partner Marketing Materials
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Seraphis Retail Analytics Partner Marketing Materials
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Marketing, sales, and channel enablement resources for Cloud Solution Provider
              partners who want to position, market, and resell Seraphis Retail Analytics through
              Microsoft Marketplace.
            </p>

            <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Channel contact</p>
              <p className="mt-2 text-muted-foreground">
                Email:{" "}
                <a className="text-primary hover:underline" href="mailto:management@seraphis-it.com">
                  management@seraphis-it.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Support:{" "}
                <a className="text-primary hover:underline" href="mailto:info@seraphis-it.com">
                  info@seraphis-it.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <PartnerSection title="1. Offer overview">
            <p>
              Seraphis Retail Analytics is an Azure-based retail intelligence platform that helps
              retail organizations convert sales, SKU, inventory, channel, supplier, and loss data
              into dashboards, reports, forecasts, recommendations, and decision-support outputs.
            </p>
            <p>
              The solution is designed for retailers that need practical operational intelligence
              without building a full internal analytics department. Seraphis combines secure Azure
              hosting, managed data workflows, dashboard publishing, and advisory interpretation.
            </p>
          </PartnerSection>

          <PartnerSection title="2. Partner positioning statement">
            <div className="rounded-xl border bg-muted/30 p-5">
              <p className="font-medium text-foreground">
                Seraphis Retail Analytics helps retailers find revenue opportunities, reduce
                operational losses, improve SKU and inventory decisions, and turn fragmented retail
                data into decision-ready management intelligence.
              </p>
            </div>
          </PartnerSection>

          <PartnerSection title="3. Ideal customer profile">
            <p>Good-fit customers include:</p>
            <ul>
              <li>Independent retailers with growing data complexity.</li>
              <li>Multi-store retail groups that need better store and SKU visibility.</li>
              <li>Supermarkets, pharmacies, convenience retailers, specialty stores, and e-commerce-enabled retailers.</li>
              <li>Retail businesses struggling with stockouts, dead stock, excess inventory, markdown leakage, supplier delays, cashier errors, or payment settlement gaps.</li>
              <li>Retail owners and managers who want analytics without hiring a full internal analytics team.</li>
            </ul>
          </PartnerSection>

          <PartnerSection title="4. Business pains addressed">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Revenue visibility"
                body="Retailers often know total sales but cannot clearly see which SKUs, stores, channels, and promotions are driving or destroying margin."
              />
              <InfoCard
                title="Inventory leakage"
                body="Stockouts, excess stock, dead stock, and poor reorder timing can quietly reduce cash flow and customer retention."
              />
              <InfoCard
                title="Fragmented data"
                body="POS exports, inventory files, supplier invoices, and settlement reports often sit in disconnected spreadsheets."
              />
              <InfoCard
                title="Slow decision-making"
                body="Owners and managers need concise dashboards and practical recommendations rather than raw data dumps."
              />
            </div>
          </PartnerSection>

          <PartnerSection title="5. Core capabilities">
            <ul>
              <li>Executive retail performance dashboard.</li>
              <li>Store and multi-store performance visibility.</li>
              <li>SKU revenue and demand analytics.</li>
              <li>Sales channel performance analysis.</li>
              <li>Inventory health monitoring.</li>
              <li>Forecasting and demand planning outputs.</li>
              <li>Loss pool identification, including stockouts, markdowns, dead stock, supplier delays, cashier errors, and settlement gaps.</li>
              <li>Operational recommendations and reporting.</li>
              <li>Secure Azure-based data storage and analytics publishing workflow.</li>
            </ul>
          </PartnerSection>

          <PartnerSection title="6. Sales talk track">
            <p>
              Retail margins are often lost through poor visibility rather than poor effort.
              Seraphis Retail Analytics gives retailers a structured way to understand what is
              selling, what is not selling, where inventory is trapped, where losses are happening,
              and which operational actions can improve performance.
            </p>
            <p>
              Instead of asking the customer to hire analysts, build infrastructure, and manually
              reconcile spreadsheets, Seraphis provides a managed analytics workflow and dashboard
              experience built for retail decision-making.
            </p>
          </PartnerSection>

          <PartnerSection title="7. Discovery questions for partners">
            <ul>
              <li>How many stores does the customer operate?</li>
              <li>Which POS, inventory, accounting, or payment systems do they use?</li>
              <li>Can they export sales, SKU, inventory, supplier, promotion, and settlement data?</li>
              <li>Do they know which products generate the most revenue and margin?</li>
              <li>Are stockouts, dead stock, markdowns, or supplier delays affecting cash flow?</li>
              <li>Do managers currently rely on spreadsheets or manual reports?</li>
              <li>Does the customer need a pilot before a broader rollout?</li>
            </ul>
          </PartnerSection>

          <PartnerSection title="8. Partner qualification guide">
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
                <QualificationCard
                  title="Strong fit"
                  points={[
                    "Retail customer has usable data exports.",
                    "Multiple stores or growing SKU complexity.",
                    "Clear revenue, loss, or inventory pain.",
                    "Management wants better reporting.",
                  ]}
                />
                <QualificationCard
                  title="Moderate fit"
                  points={[
                    "Single-store retailer with manual reporting.",
                    "Data exists but quality is inconsistent.",
                    "Customer needs a guided diagnostic first.",
                    "Budget depends on pilot value proof.",
                  ]}
                />
                <QualificationCard
                  title="Weak fit"
                  points={[
                    "No usable retail data available.",
                    "No clear operational pain.",
                    "Customer only wants generic BI tools.",
                    "No decision-maker access.",
                  ]}
                />
              </div>
            </div>
          </PartnerSection>

          <PartnerSection title="9. Marketing copy partners may use">
            <div className="space-y-4 rounded-xl border bg-muted/30 p-5">
              <div>
                <p className="font-semibold text-foreground">Short copy</p>
                <p>
                  Seraphis Retail Analytics helps retailers turn sales, inventory, SKU, channel,
                  supplier, and loss data into dashboards, reports, forecasts, and practical
                  recommendations.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Customer-facing copy</p>
                <p>
                  Stop running retail decisions from disconnected spreadsheets. Seraphis Retail
                  Analytics gives your management team visibility into revenue drivers, SKU demand,
                  inventory health, sales channels, and operational losses so you can act faster and
                  protect margin.
                </p>
              </div>
            </div>
          </PartnerSection>

          <PartnerSection title="10. Partner sales motion">
            <ol className="ml-6 list-decimal space-y-2">
              <li>Identify retailers with data, inventory, revenue, or reporting pain.</li>
              <li>Confirm business fit using the discovery questions above.</li>
              <li>Introduce Seraphis Retail Analytics as a managed retail intelligence solution.</li>
              <li>Request a Seraphis partner consultation or pilot discussion.</li>
              <li>Align on pilot scope, stores, data sources, expected outputs, and commercial path.</li>
              <li>Support the customer through Microsoft Marketplace procurement where applicable.</li>
            </ol>
          </PartnerSection>

          <PartnerSection title="11. Available marketing materials">
            <p>
              Partners may request current Seraphis Retail Analytics collateral, including product
              summaries, customer-facing one-page overviews, demo briefing notes, discovery
              questionnaires, solution architecture summaries, and pilot scoping material.
            </p>
            <p>
              To request the latest partner pack, email{" "}
              <a className="text-primary hover:underline" href="mailto:management@seraphis-it.com">
                management@seraphis-it.com
              </a>{" "}
              with your organization name, Microsoft Partner ID if available, target customer
              segment, and intended use.
            </p>
          </PartnerSection>

          <PartnerSection title="12. Channel and partner contact">
            <div className="rounded-xl border bg-muted/30 p-6">
              <p className="font-semibold text-foreground">Seraphis IT and Data Solutions (Pty) Ltd</p>
              <p>
                Channel and partner contact:{" "}
                <a className="text-primary hover:underline" href="mailto:management@seraphis-it.com">
                  management@seraphis-it.com
                </a>
              </p>
              <p>
                General support:{" "}
                <a className="text-primary hover:underline" href="mailto:info@seraphis-it.com">
                  info@seraphis-it.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a className="text-primary hover:underline" href="https://seraphis-it.com">
                  https://seraphis-it.com
                </a>
              </p>
            </div>
          </PartnerSection>

          <PartnerSection title="13. Related links">
            <ul>
              <li>
                <Link className="text-primary hover:underline" to="/privacy/retail-analytics">
                  Seraphis Retail Analytics Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-primary hover:underline" to="/support/retail-analytics">
                  Seraphis Retail Analytics Support
                </Link>
              </li>
            </ul>
          </PartnerSection>

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

const PartnerSection = ({
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

const InfoCard = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  return (
    <div className="rounded-xl border bg-muted/30 p-5">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
};

const QualificationCard = ({
  title,
  points,
}: {
  title: string;
  points: string[];
}) => {
  return (
    <div className="space-y-3 bg-card p-5">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default CspRetailAnalyticsMarketing;
