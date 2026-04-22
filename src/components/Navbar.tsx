import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import seraphisLogo from "@/assets/seraphis-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Industries", path: "/industries" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="section-container flex items-center justify-between py-3 min-h-[84px] md:min-h-[96px]">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={seraphisLogo}
            alt="Seraphis IT and Data Solutions"
            className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain shrink-0"
          />

          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground">
              Seraphis IT and Data Solutions
            </span>
            <span className="mt-0.5 text-[9px] sm:text-[10px] md:text-[11px] italic text-muted-foreground">
              Using tech to solve Modern Business problems
            </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-accent"
                  : "text-seraphis-body hover:text-primary hover:bg-accent/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book a Consultation</Link>
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
        <div className="xl:hidden bg-card border-b border-border animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-seraphis-body hover:text-primary hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book a Consultation
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