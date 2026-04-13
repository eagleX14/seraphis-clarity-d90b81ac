import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import manufacturingImg from "@/assets/industry-manufacturing.jpg";
import mediaImg from "@/assets/industry-media.jpg";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    img: retailImg,
    title: "Retail & E-commerce",
    losses: [
      { name: "Shrinkage & Theft", detail: "Inventory shrinkage — from internal theft, vendor fraud, and administrative errors — costs retailers 1.4–2.0% of net sales annually. For a $500M retailer, that's $7–10M per year.", economic: "Every unit lost to shrinkage is revenue forfeited at full margin." },
      { name: "Stockouts & Lost Sales", detail: "Out-of-stock events cost retailers up to 4% of annual revenue. Customers encountering empty shelves switch brands, buy substitutes, or leave — and 21–43% of stockout events result in lost sales entirely.", economic: "Stockouts are not inventory problems. They are demand fulfillment failures with direct revenue impact." },
      { name: "Overstock & Markdowns", detail: "Excess inventory ties up capital and drives markdowns that erode gross margin by 10–25% on affected items.", economic: "Every markdown represents a gap between planned margin and realized margin." },
      { name: "Returns & Reverse Logistics", detail: "E-commerce return rates of 20–30% create reverse logistics costs that consume 59% of the original sale price for many retailers.", economic: "Returns are not a customer service cost — they are a structural margin erosion event." },
    ],
    intervention: "Seraphis deploys demand sensing models, shrinkage detection analytics, dynamic replenishment triggers, and returns pattern classification — quantifying each loss pool and deploying targeted interventions.",
    gains: "Typical recovery: 15–40% reduction in addressable loss pools within 12 months.",
  },
  {
    img: logisticsImg,
    title: "Logistics & Transportation",
    losses: [
      { name: "Empty Miles", detail: "Trucks travel empty 15–25% of total miles. Each empty mile costs $1.50–$2.50 in fuel, depreciation, and driver time with zero revenue contribution.", economic: "Empty movement is pure economic waste — cost incurred with no corresponding value creation." },
      { name: "Route Inefficiency", detail: "Suboptimal routing adds 10–20% to total fleet fuel costs and increases delivery time variability.", economic: "Fuel and time wasted on inefficient routes accumulate into a significant annual loss pool." },
      { name: "Dispatch Timing Failures", detail: "Poor dispatch sequencing creates downstream delays, missed time windows, and penalty charges that cost 3–8% of total transport spend.", economic: "Every late departure compounds through the delivery chain into customer-facing failures." },
      { name: "Asset Underutilization", detail: "Fleet utilization below 70% means capital-intensive assets are generating returns well below their economic potential.", economic: "Underutilized vehicles represent stranded capital with ongoing depreciation and maintenance costs." },
    ],
    intervention: "Seraphis models fleet loss pools, deploys route optimization engines, builds dispatch intelligence systems, and creates utilization dashboards that convert idle capacity into productive movement.",
    gains: "Typical recovery: 10–25% reduction in fleet operating waste within 12 months.",
  },
  {
    img: manufacturingImg,
    title: "Manufacturing",
    losses: [
      { name: "Unplanned Downtime", detail: "Unplanned machine downtime costs manufacturers $50B+ annually across industries. A single hour of downtime on a major production line can cost $100K–$300K.", economic: "Every minute of unplanned downtime is lost production capacity that cannot be recovered." },
      { name: "Scrap & Rework", detail: "Scrap rates of 2–5% and rework rates of 3–10% represent direct material, labor, and energy waste.", economic: "Scrap is not a quality metric — it is a financial loss equal to the full variable cost of production plus opportunity cost." },
      { name: "Bottleneck Blindness", detail: "Unidentified bottlenecks constrain throughput 10–30% below theoretical capacity without triggering alerts.", economic: "Invisible bottlenecks are the most expensive — they constrain output without being recognized as a loss source." },
      { name: "Energy Waste", detail: "Energy costs in manufacturing represent 5–15% of operating costs, with 10–30% of energy consumption being recoverable waste.", economic: "Energy waste is a recurring, compounding loss that scales directly with production volume." },
    ],
    intervention: "Seraphis deploys predictive maintenance models, OEE optimization engines, bottleneck detection analytics, and energy monitoring systems — mapping each manufacturing loss pool and targeting the highest-value recovery opportunities.",
    gains: "Typical recovery: 10–20% improvement in OEE and 15–30% reduction in scrap and rework costs.",
  },
  {
    img: mediaImg,
    title: "Media & Entertainment",
    losses: [
      { name: "Ad Fraud & Invalid Traffic", detail: "Digital ad fraud costs the industry $65–100B annually. Invalid traffic inflates impression counts, drains budgets, and corrupts campaign analytics.", economic: "Every dollar spent on fraudulent impressions is revenue transferred to bad actors with zero marketing value." },
      { name: "Subscriber Churn", detail: "Streaming and subscription services face annual churn rates of 20–40%. Acquiring a new subscriber costs 5–7x more than retaining an existing one.", economic: "Churn is not a retention metric — it is a recurring customer lifetime value destruction event." },
      { name: "Campaign Inefficiency", detail: "20–40% of digital campaign spend reaches audiences with zero conversion potential due to poor targeting and frequency capping failures.", economic: "Wasted impressions are economic losses — media spend with no corresponding business outcome." },
      { name: "Content Performance Blindness", detail: "Without granular content analytics, media companies over-invest in underperforming content and under-invest in high-engagement assets.", economic: "Misallocated content investment creates opportunity costs that compound across production cycles." },
    ],
    intervention: "Seraphis deploys fraud detection models, churn prediction engines, campaign optimization analytics, and content performance scoring systems — each targeted at a quantified loss pool.",
    gains: "Typical recovery: 15–35% reduction in wasted ad spend and 10–20% improvement in subscriber retention.",
  },
];

const Industries = () => (
  <main>
    <section className="section-padding bg-card">
      <div className="section-container">
        <SectionHeading
          label="Industries"
          title="Sector-Specific Loss Intelligence"
          description="Every industry has its own loss architecture — its own patterns of leakage, its own failure modes, its own recovery opportunities. Seraphis models yours."
        />
      </div>
    </section>

    {industries.map((ind, i) => (
      <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
        <div className="section-container space-y-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img src={ind.img} alt={ind.title} loading="lazy" width={1280} height={720} className={`rounded-xl shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`} />
            <div className="space-y-4">
              <h2>{ind.title}</h2>
              <p className="text-muted-foreground">
                The {ind.title.toLowerCase()} sector faces structural loss pools that compound across operations.
                Most organizations address symptoms — Seraphis addresses the economic architecture of loss.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ind.losses.map((loss, j) => (
              <div key={j} className="seraphis-card space-y-3">
                <h4 className="text-lg font-semibold">{loss.name}</h4>
                <p className="text-sm text-muted-foreground">{loss.detail}</p>
                <p className="text-sm font-medium text-primary italic">{loss.economic}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/40 rounded-xl p-8 space-y-4">
            <h4 className="text-lg font-semibold text-primary">Seraphis Intervention</h4>
            <p className="text-sm text-muted-foreground">{ind.intervention}</p>
            <p className="text-sm font-semibold text-seraphis-heading">{ind.gains}</p>
          </div>
        </div>
      </section>
    ))}

    <section className="section-padding bg-primary">
      <div className="section-container text-center space-y-6">
        <h2 className="text-primary-foreground">Which Losses Are Draining Your Industry?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Let Seraphis map the loss architecture specific to your sector and quantify the recoverable value.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/contact">Request a Consultation <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Industries;
