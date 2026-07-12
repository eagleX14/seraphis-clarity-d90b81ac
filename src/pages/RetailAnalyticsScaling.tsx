import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const RetailAnalyticsScaling = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Retail Analytics & Revenue Scaling
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Seraphis Retail Analytics and Scaling
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl">
              An Azure-based retail intelligence platform that helps retailers turn sales, SKU,
              inventory, channel, supplier, promotion, and loss data into decision-ready dashboards,
              forecasts, recommendations, and revenue scaling actions.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <HeroMetric label="Primary outcome" value="Grow revenue" />
              <HeroMetric label="Operational focus" value="Reduce losses" />
              <HeroMetric label="Delivery model" value="Managed analytics" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
                href="mailto:management@seraphis-it.com?subject=Seraphis Retail Analytics enquiry"
              >
                Request a consultation
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold hover:bg-muted"
                to="/support/retail-analytics"
              >
                View support information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <ProductSection title="1. Product overview">
            <p>
              Seraphis Retail Analytics is designed for retailers that need clearer visibility into
              revenue, inventory, demand, store performance, channel performance, operational losses,
              and growth opportunities. The platform helps retail owners, managers, advisors, and
              partners convert operational data into practical commercial intelligence.
            </p>
            <p>
              The product is not positioned as a generic dashboard. It is a managed retail analytics
              and scaling system: Seraphis helps onboard the customer, structure the data workflow,
              process retail data, publish dashboard-ready results, and convert analytics into
              business actions.
            </p>
          </ProductSection>

          <ProductSection title="2. The retail problem we solve">
            <p>
              Many retailers collect data every day but do not turn it into reliable decisions.
              Sales reports, POS exports, supplier invoices, inventory files, bank settlements, and
              promotion records are often disconnected. This makes it difficult for management to
              understand what is driving revenue, where money is leaking, and which actions should
              be prioritized.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Revenue is visible too late"
                body="Owners often see total sales after the fact, but not the SKU, store, channel, category, and promotion patterns that explain why performance changed."
              />
              <InfoCard
                title="Losses are hidden inside operations"
                body="Stockouts, markdowns, dead stock, excess inventory, supplier delays, cashier errors, and settlement gaps quietly reduce profit."
              />
              <InfoCard
                title="Inventory decisions are reactive"
                body="Without demand and velocity analysis, retailers overstock slow movers and understock products customers actually want."
              />
              <InfoCard
                title="Growth decisions lack evidence"
                body="Retailers expand products, stores, channels, and campaigns without a clear data model for what is working and what should be scaled."
              />
            </div>
          </ProductSection>

          <ProductSection title="3. Core value proposition">
            <div className="rounded-2xl border bg-muted/30 p-6">
              <p className="text-lg font-semibold text-foreground">
                Seraphis Retail Analytics helps retailers increase revenue, protect margin, reduce
                avoidable losses, and scale winning retail patterns using evidence from their own
                operational data.
              </p>
            </div>

            <p>
              The platform gives management a structured view of the business: which SKUs are
              producing revenue, which stores are performing, which channels are working, where
              inventory is trapped, where losses are occurring, and which actions should be taken
              next.
            </p>
          </ProductSection>

          <ProductSection title="4. Main product modules">
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Executive dashboard"
                body="A management view of revenue, performance, risks, opportunities, data freshness, and operational priorities."
              />
              <InfoCard
                title="SKU revenue analytics"
                body="Visibility into top products, underperforming products, sales contribution, category trends, and SKU-level revenue movement."
              />
              <InfoCard
                title="Demand and forecasting"
                body="Demand patterns, sales velocity, forecast outputs, and planning support for products, stores, and categories."
              />
              <InfoCard
                title="Inventory health"
                body="Stockouts, dead stock, excess inventory, reorder signals, slow movers, and availability risks."
              />
              <InfoCard
                title="Sales channel analytics"
                body="Performance by store, channel, campaign, payment method, or sales route where data is available."
              />
              <InfoCard
                title="Loss pool analysis"
                body="Identification of avoidable losses from stockouts, markdowns, dead stock, supplier issues, cashier errors, and settlement gaps."
              />
              <InfoCard
                title="Recommendations"
                body="Prioritized operational recommendations based on commercial impact, urgency, and implementation difficulty."
              />
              <InfoCard
                title="Reports and advisory outputs"
                body="Structured reports and decision-support outputs for retail owners, managers, advisors, and partner-led customer reviews."
              />
            </div>
          </ProductSection>

          <ProductSection title="5. Data-based revenue scaling strategy">
            <p>
              Seraphis Retail Analytics is built around a practical revenue scaling model. The goal
              is not only to show charts, but to help retailers understand how to increase profitable
              sales and reduce avoidable losses.
            </p>

            <div className="rounded-2xl border bg-muted/30 p-6">
              <p className="text-lg font-semibold text-foreground">
                Revenue growth = better SKU decisions + stronger inventory availability + improved
                channel performance + reduced operational losses + smarter promotions + repeatable
                store-level execution.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Establish the baseline"
                body="Understand current revenue by store, SKU, category, channel, period, and promotion."
              />
              <InfoCard
                title="Find growth drivers"
                body="Identify products, stores, categories, and channels that are already producing strong performance."
              />
              <InfoCard
                title="Recover leakage"
                body="Quantify losses from stockouts, dead stock, markdown leakage, supplier delays, cashier errors, and settlement gaps."
              />
              <InfoCard
                title="Scale what works"
                body="Replicate winning SKU, inventory, store, promotion, and channel patterns across the wider retail operation."
              />
            </div>
          </ProductSection>

          <ProductSection title="6. Revenue scaling workflow">
            <ol className="ml-6 list-decimal space-y-3">
              <li>
                <strong>Collect retail data:</strong> POS exports, SKU master data, inventory files,
                store data, supplier invoices, promotions, channel data, and settlement data where
                applicable.
              </li>
              <li>
                <strong>Clean and structure the data:</strong> normalize stores, tills, SKUs,
                categories, dates, channels, prices, discounts, returns, and payment methods.
              </li>
              <li>
                <strong>Establish the revenue baseline:</strong> measure current performance by
                store, SKU, category, channel, period, promotion, and operational segment.
              </li>
              <li>
                <strong>Identify revenue opportunities:</strong> find fast-moving SKUs, profitable
                categories, high-potential stores, strong channels, and repeatable growth patterns.
              </li>
              <li>
                <strong>Identify revenue leakage:</strong> quantify operational loss pools including
                stockouts, markdowns, dead stock, excess inventory, supplier delays, cashier errors,
                and payment settlement gaps.
              </li>
              <li>
                <strong>Prioritize actions:</strong> rank recommendations by expected commercial
                impact, urgency, confidence, and execution complexity.
              </li>
              <li>
                <strong>Execute and measure:</strong> apply actions, publish updated dashboards,
                compare the next data cycle, and measure whether revenue, availability, margin, and
                loss metrics improved.
              </li>
            </ol>
          </ProductSection>

          <ProductSection title="7. Loss recovery focus areas">
            <p>
              Seraphis Retail Analytics helps retailers convert hidden operational problems into
              measurable loss pools. This gives management a commercial basis for action.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Stockout losses"
                body="Identify where demand exists but products are unavailable, causing missed sales and weaker customer retention."
              />
              <InfoCard
                title="Markdown leakage"
                body="Track discounting and markdown behavior to understand where revenue and margin are being reduced."
              />
              <InfoCard
                title="Dead stock"
                body="Find slow-moving or non-moving products that trap working capital and reduce inventory productivity."
              />
              <InfoCard
                title="Excess inventory"
                body="Detect overstocked categories and products that increase carrying costs and reduce cash flexibility."
              />
              <InfoCard
                title="Supplier delays"
                body="Connect supplier performance issues with stock availability, replenishment risk, and revenue loss."
              />
              <InfoCard
                title="Cashier and settlement gaps"
                body="Surface operational discrepancies across tills, users, payment methods, and bank/payment settlement records."
              />
            </div>
          </ProductSection>

          <ProductSection title="8. Data handled by the platform">
            <p>
              Seraphis can work with periodic retail data exports. The first production model does
              not require fully automated live ingestion; customers can start with structured,
              periodic data submission and move toward deeper integration later.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard title="Sales and POS data" body="Transaction lines, products, quantities, prices, discounts, returns, payment methods, stores, tills, and timestamps." />
              <InfoCard title="SKU and product master data" body="SKU codes, product names, categories, brands, pack sizes, pricing, and product status." />
              <InfoCard title="Inventory data" body="Stock counts, movement records, opening and closing stock, stock adjustments, and replenishment data." />
              <InfoCard title="Supplier data" body="Supplier invoices, delivery timing, cost changes, supplier performance, and product availability." />
              <InfoCard title="Store and channel data" body="Store profiles, channel definitions, sales routes, promotion channels, and operating regions." />
              <InfoCard title="Settlement and payment data" body="Bank or payment settlement exports where available for reconciliation and gap analysis." />
            </div>
          </ProductSection>

          <ProductSection title="9. How the service works">
            <div className="space-y-4">
              <ProcessStep
                number="01"
                title="Tenant onboarding"
                body="Seraphis creates the customer workspace, configures the tenant, assigns users, and prepares the dashboard environment."
              />
              <ProcessStep
                number="02"
                title="Secure data intake"
                body="The customer provides periodic retail data. Raw files are stored in the customer’s tenant workspace and used for processing."
              />
              <ProcessStep
                number="03"
                title="Data processing and validation"
                body="Seraphis structures the data, validates quality, normalizes fields, reconciles totals, and prepares analytics-ready datasets."
              />
              <ProcessStep
                number="04"
                title="Analytics and advisory review"
                body="Data scientists, analysts, and business advisors review outputs, identify patterns, and prepare practical recommendations."
              />
              <ProcessStep
                number="05"
                title="Dashboard publishing"
                body="Processed results, reports, forecasts, recommendations, and dashboard-ready files are published to the customer’s frontend workspace."
              />
              <ProcessStep
                number="06"
                title="Continuous update cycle"
                body="New data cycles refresh the analysis, track improvements, monitor losses, and support the next management decision cycle."
              />
            </div>
          </ProductSection>

          <ProductSection title="10. Dashboard and management outputs">
            <ul>
              <li>Revenue visibility by store, SKU, category, channel, and period.</li>
              <li>SKU-level sales contribution and underperformance analysis.</li>
              <li>Demand indicators and forecast outputs.</li>
              <li>Store performance comparisons and multi-store aggregation.</li>
              <li>Inventory health, stockout, dead stock, and excess stock views.</li>
              <li>Sales channel and promotion effectiveness analysis.</li>
              <li>Loss pool summaries and financial leakage indicators.</li>
              <li>Actionable recommendations ranked by priority and expected business value.</li>
              <li>Reports for management, advisors, and partner-led customer reviews.</li>
            </ul>
          </ProductSection>

          <ProductSection title="11. Azure-based architecture and security posture">
            <p>
              Seraphis Retail Analytics is designed as an Azure-first SaaS platform. The production
              target architecture is based on tenant-aware application access, secure storage,
              dashboard APIs, monitoring, auditability, and controlled publishing workflows.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                title="Tenant-aware design"
                body="Each customer is treated as a separate tenant with controlled access and tenant-specific data handling."
              />
              <InfoCard
                title="Secure data storage"
                body="Raw and processed data are organized into tenant-specific storage structures for traceability and controlled publishing."
              />
              <InfoCard
                title="Dashboard API layer"
                body="The frontend consumes published analytics data through a controlled API and structured result contracts."
              />
              <InfoCard
                title="Monitoring and audit"
                body="The platform design includes logging, pipeline status, audit events, data freshness indicators, and operational monitoring."
              />
            </div>
          </ProductSection>

          <ProductSection title="12. Ideal customers">
            <ul>
              <li>Independent retailers with growing SKU and inventory complexity.</li>
              <li>Multi-store retail groups that need better store-level and SKU-level visibility.</li>
              <li>Supermarkets, pharmacies, convenience retailers, specialty stores, and e-commerce-enabled retailers.</li>
              <li>Retailers with recurring stockouts, dead stock, markdowns, supplier delays, settlement gaps, or unclear margins.</li>
              <li>Retail owners and managers who want actionable intelligence without hiring a full internal analytics department.</li>
              <li>Partners serving retail customers that need a data-led modernization or operational intelligence solution.</li>
            </ul>
          </ProductSection>

          <ProductSection title="13. Implementation path">
            <div className="grid gap-4 md:grid-cols-3">
              <PhaseCard
                title="Pilot"
                body="Start with a limited number of stores, selected datasets, and focused dashboard outputs to prove business value."
              />
              <PhaseCard
                title="Operational rollout"
                body="Expand to more stores, more data sources, richer reports, recurring recommendations, and management routines."
              />
              <PhaseCard
                title="Scaling"
                body="Use historical data and repeatable patterns to guide SKU expansion, inventory strategy, store growth, and channel optimization."
              />
            </div>
          </ProductSection>

          <ProductSection title="14. Business value for Microsoft and CSP partners">
            <p>
              Seraphis Retail Analytics gives partners a practical retail conversation built around
              revenue, loss recovery, data modernization, and Azure-based operational intelligence.
              The customer outcome is easy to explain: better retail decisions, better inventory
              control, clearer revenue visibility, and a structured path to scale.
            </p>

            <ul>
              <li>Creates Azure consumption through a business-specific retail analytics workload.</li>
              <li>Supports data and AI modernization conversations with retail customers.</li>
              <li>Provides a managed analytics offer that partners can position around business outcomes.</li>
              <li>Fits retail customers that are not ready to build their own analytics team or custom BI stack.</li>
              <li>Creates expansion potential through pilots, multi-store rollout, advisory services, and deeper integration.</li>
            </ul>
          </ProductSection>

          <ProductSection title="15. Related pages">
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
              <li>
                <Link className="text-primary hover:underline" to="/partners/csp-retail-analytics">
                  CSP Partner Marketing Materials
                </Link>
              </li>
            </ul>
          </ProductSection>

          <div className="rounded-2xl border bg-primary/5 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Start with a retail analytics pilot</h2>
            <p className="mt-4 text-muted-foreground">
              Seraphis can begin with a structured pilot using periodic retail data exports, then
              expand into a broader retail intelligence and scaling workflow as data quality,
              reporting needs, and customer value are proven.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
                href="mailto:management@seraphis-it.com?subject=Retail Analytics and Scaling pilot"
              >
                Contact Seraphis
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold hover:bg-muted"
                href="mailto:info@seraphis-it.com?subject=Seraphis Retail Analytics support"
              >
                Email support
              </a>
            </div>
          </div>

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

const ProductSection = ({
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

const HeroMetric = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
    </div>
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

const ProcessStep = ({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) => {
  return (
    <div className="grid gap-4 rounded-xl border bg-muted/30 p-5 md:grid-cols-[80px_1fr]">
      <div className="text-2xl font-bold text-primary">{number}</div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
};

const PhaseCard = ({
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

export default RetailAnalyticsScaling;
