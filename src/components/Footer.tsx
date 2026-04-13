import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-seraphis-heading text-secondary">
    <div className="section-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-bold text-primary-foreground">Seraphis</h3>
          <p className="text-sm text-secondary/70 leading-relaxed">
            Operational Intelligence, Avoidable Loss Recovery, and Financial Performance Engineering.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About", path: "/about" },
              { label: "Solutions", path: "/solutions" },
              { label: "Industries", path: "/industries" },
              { label: "How We Work", path: "/how-we-work" },
              { label: "Insights", path: "/insights" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm text-secondary/70 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider">Solutions</h4>
          <div className="flex flex-col gap-2">
            {["Loss Discovery", "Loss Pool Modeling", "Data Platform", "Predictive Analytics", "Workflow Integration", "Monitoring"].map((s) => (
              <Link key={s} to="/solutions" className="text-sm text-secondary/70 hover:text-primary transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary/70">
            <a href="mailto:Info@seraphis-it.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> Info@seraphis-it.com
            </a>
            <a href="tel:+27670542001" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +27 67 054 2001
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>9 Orange Street, Sunnyside, Johannesburg, Gauteng, 2092</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-secondary/50">
          © {new Date().getFullYear()} Seraphis IT and Data Solutions (Pty) Ltd. All rights reserved.
        </p>
        <a href="https://www.seraphis-it.com" className="text-xs text-secondary/50 hover:text-primary transition-colors">
          www.seraphis-it.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
