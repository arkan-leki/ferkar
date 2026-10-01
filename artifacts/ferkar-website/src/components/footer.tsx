import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { Facebook, Instagram, Linkedin, MapPin, Phone, MessageCircle } from "lucide-react";
import { useGetCompanyInfo } from "@workspace/api-client-react";
import { publicContact } from "@/lib/contact";

export const Footer = () => {
  const { t } = useI18n();
  const { data: companyInfo } = useGetCompanyInfo();

  return (
    <footer className="bg-card border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img
                src={`${import.meta.env.BASE_URL}ferkar-footer-logo.png`}
                alt="FERKAR"
                className="h-28 w-48 object-contain object-left cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {companyInfo?.description || t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={companyInfo?.facebook || "#"} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={companyInfo?.instagram || "#"} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={companyInfo?.linkedin || "#"} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: t.nav.about },
                { href: "/projects", label: t.nav.projects },
                { href: "/portfolio", label: t.nav.portfolio },
                { href: "/blog", label: t.nav.blog },
                { href: "/careers", label: t.nav.careers },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">{t.nav.services}</h3>
            <ul className="space-y-3">
              {[
                t.services.items.web,
                t.services.items.app,
                t.services.items.ai,
                t.services.items.consulting,
                t.services.items.brand
              ].map((service, i) => (
                <li key={i}>
                  <Link href="/services">
                    <span className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{companyInfo?.address || "Kurdistan Region, Iraq"}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${publicContact.phoneHref}`} className="hover:text-primary transition-colors" dir="ltr">
                  {publicContact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                <a href={publicContact.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                  {t.contact.info.whatsapp}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.rights}
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/admin"><span className="hover:text-primary cursor-pointer">Admin Login</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};