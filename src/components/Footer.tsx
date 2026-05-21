import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden bg-black text-slate-200 font-body">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(14,165,233,0.14),transparent_24rem),radial-gradient(circle_at_90%_10%,rgba(249,115,22,0.12),transparent_22rem)]" />

    <div className="section-container relative py-16">
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">
            Seraphis IT and Data Solutions
          </h3>

          <p className="text-[15px] leading-7 text-slate-300">
            Business data, Microsoft cloud, operational intelligence, cybersecurity and analytics for organisations that want accurate decisions, efficient operations and scalable growth.
          </p>

          <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
            Microsoft Partner Center Approved • CSP Indirect Reseller • MPN ID: 7019412
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>

          <div className="flex flex-col gap-2">
            {[
              { label: "Business Solutions", path: "/business-solutions" },
              { label: "Microsoft 365 Licensing", path: "/microsoft-365" },
              { label: "Azure Cloud Solutions", path: "/azure-cloud-solutions" },
              { label: "Industry Solutions", path: "/industries" },
              { label: "Self-Diagnosis", path: "/diagnostic-questionnaire" },
              { label: "Insights", path: "/insights" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[15px] leading-6 text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            What We Help Improve
          </h4>

          <ul className="space-y-2 text-[15px] leading-6 text-slate-300">
            <li>Business data and performance visibility</li>
            <li>Microsoft 365 licensing and migration</li>
            <li>Azure cloud and data foundations</li>
            <li>Cybersecurity, access control and fraud exposure</li>
            <li>Efficiency, cost-benefit and scalable opportunities</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>

          <div className="space-y-3 text-[15px] leading-6 text-slate-300">
            <a
              href="mailto:info@seraphis-it.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={16} className="shrink-0 text-sky-400" />
              info@seraphis-it.com
            </a>

            <a
              href="tel:+27670542001"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={16} className="shrink-0 text-sky-400" />
              +27 67 054 2001
            </a>
            <a
              href="https://wa.me/message/J2TBIHOFWLLKH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MessageCircle size={16} className="shrink-0 text-green-400" />
              WhatsApp Seraphis
            </a>


            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
              <span>9 Orange Street, Sunnyside, Johannesburg, Gauteng, 2092</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-sky-100"
          >
            Book A Diagnostic Conversation
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Seraphis IT and Data Solutions (Pty) Ltd. Your success is our pride.
        </p>

        <a
          href="https://www.seraphis-it.com"
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          www.seraphis-it.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;