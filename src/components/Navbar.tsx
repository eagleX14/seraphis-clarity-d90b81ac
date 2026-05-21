import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import seraphisLogo from "@/assets/seraphis-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Business Solutions", path: "/business-solutions" },
  { label: "Microsoft 365", path: "/microsoft-365" },
  { label: "Azure Cloud", path: "/azure-cloud-solutions" },
  { label: "Industries", path: "/industries" },
  { label: "Diagnostic", path: "/diagnostic-questionnaire" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <nav className="section-container flex items-center justify-between py-3 min-h-[88px]">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={seraphisLogo}
            alt="Seraphis IT and Data Solutions"
            className="h-12 w-12 rounded-lg object-contain md:h-14 md:w-14"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold text-foreground md:text-base">
              Seraphis IT and Data Solutions
            </div>
            <div className="text-[10px] text-muted-foreground md:text-xs">
              Operational Intelligence • Microsoft Cloud • Analytics • Cybersecurity
            </div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-accent text-primary"
                  : "text-seraphis-body hover:bg-accent/60 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <Button variant="hero-outline" size="sm" asChild>
            <Link to="/microsoft-365">View Licence Catalogue</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book A Review</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-seraphis-body hover:text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-card xl:hidden animate-fade-in">
          <div className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-accent text-primary"
                    : "text-seraphis-body hover:bg-accent/50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <Button variant="hero-outline" className="w-full" asChild>
                <Link to="/microsoft-365" onClick={() => setMobileOpen(false)}>
                  View Licence Catalogue
                </Link>
              </Button>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book A Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
