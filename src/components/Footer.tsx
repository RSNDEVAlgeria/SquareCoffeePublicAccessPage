import logo from "@/assets/IMG-20260108-WA0004.jpg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t} = useTranslation();
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
                {t("Where every cup tells a story")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#menu"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("Menu")}
            </a>
            <a
              href="#gallery"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("Gallery")}
            </a>
            <a
              href="#services"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("Services")}
            </a>
            <a
              href="#contact"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("Contact")}
            </a>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            made by <a href="#" className="hover:text-primary transition-colors">RSN.Dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
