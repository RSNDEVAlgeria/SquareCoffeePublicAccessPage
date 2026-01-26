// made by leyn.cx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-tight section-padding !py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Square Coffee" className="h-10 w-10 invert" />
            <div>
              <span className="font-display text-lg font-semibold">
                Square Coffee
              </span>
              <p className="text-sm text-primary-foreground/60">
                Where every cup tells a story
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#menu"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#services"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            made by <a href="#" className="hover:text-primary transition-colors">RSN.Dev</a>
            <span className="mx-2">•</span>
            <Link to="/login" className="hover:text-primary transition-colors">Admin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
