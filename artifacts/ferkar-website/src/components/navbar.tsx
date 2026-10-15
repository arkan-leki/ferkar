import React from "react";
import { Link, useLocation } from "wouter";
import { useI18n } from "@/lib/i18n";
import { Globe2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only pages that actually exist. `/portfolio`, `/blog` and `/careers` are declared in the
  // locales and have API routes + DB tables behind them, but no page components were ever
  // built — those routes are commented out in App.tsx, so linking them lands on NotFound.
  // Add them back here the moment the pages exist.
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 relative transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b shadow-md py-3"
          : "bg-background/70 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center gap-1" aria-label="Language selection">
          <Globe2 className="mr-1 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          {[
            { code: 'en', label: 'EN' },
            { code: 'ku', label: 'KU' },
            { code: 'ar', label: 'AR' },
          ].map((language) => (
            <Button
              key={language.code}
              variant={lang === language.code ? "default" : "ghost"}
              size="sm"
              className="h-8 px-2 text-xs"
              onClick={() => setLang(language.code as 'en' | 'ku' | 'ar')}
              aria-pressed={lang === language.code}
            >
              {language.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between">

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 lg:pl-36">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* The Admin button was removed: /admin is not routed (App.tsx has the admin
              routes commented out), so it only ever rendered the 404 page. */}

          {/* Mobile menu toggle */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                      location === link.href ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t flex items-center justify-between">
                <div className="flex gap-2">
                  <Button size="sm" variant={lang === 'en' ? 'default' : 'outline'} onClick={() => setLang('en')}>EN</Button>
                  <Button size="sm" variant={lang === 'ku' ? 'default' : 'outline'} onClick={() => setLang('ku')}>KU</Button>
                  <Button size="sm" variant={lang === 'ar' ? 'default' : 'outline'} onClick={() => setLang('ar')}>AR</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};