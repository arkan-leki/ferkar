import React from "react";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import { useListServices } from "@workspace/api-client-react";
import { 
  Globe, Smartphone, Brain, Briefcase, 
  Palette, PenTool, Share2, TrendingUp, 
  Printer, Cpu
} from "lucide-react";

export default function Services() {
  const { t } = useI18n();
  const { data: services, isLoading } = useListServices();

  const getIcon = (name: string): React.ReactElement<{ className?: string }> => {
    // Basic mapping based on our initial 10 services
    const icons: Record<string, React.ElementType> = {
      'globe': Globe,
      'smartphone': Smartphone,
      'brain': Brain,
      'briefcase': Briefcase,
      'palette': Palette,
      'pentool': PenTool,
      'share2': Share2,
      'trendingup': TrendingUp,
      'printer': Printer,
      'cpu': Cpu,
    };
    
    // Attempt to match from DB icon string, fallback to Cpu
    const IconComponent = icons[name.toLowerCase()] || Cpu;
    return <IconComponent className="w-8 h-8 text-primary" />;
  };

  // Fallback data if API is empty
  const fallbackServices = [
    { name: t.services.items.web, description: "Custom, responsive, and high-performance websites tailored to your brand.", icon: "globe" },
    { name: t.services.items.app, description: "Native and cross-platform mobile applications for iOS and Android.", icon: "smartphone" },
    { name: t.services.items.ai, description: "Cutting-edge artificial intelligence and machine learning solutions.", icon: "brain" },
    { name: t.services.items.consulting, description: "Strategic guidance to navigate digital transformation and business growth.", icon: "briefcase" },
    { name: t.services.items.brand, description: "Comprehensive brand strategy, logo design, and visual identity.", icon: "palette" },
    { name: t.services.items.graphic, description: "Beautiful and effective marketing collateral, UI/UX, and illustrations.", icon: "pentool" },
    { name: t.services.items.social, description: "Engaging content and community management across all platforms.", icon: "share2" },
    { name: t.services.items.marketing, description: "Data-driven campaigns, SEO, and paid advertising to reach your audience.", icon: "trendingup" },
    { name: t.services.items.print, description: "High-quality physical promotional materials and corporate stationary.", icon: "printer" },
    { name: t.services.items.tech, description: "End-to-end IT infrastructure and enterprise software solutions.", icon: "cpu" },
  ];

  const displayServices = services && services.length > 0 ? services : fallbackServices;

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <section className="py-20 text-center container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.services.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t.services.subtitle}
            </p>
          </ScrollReveal>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {displayServices.map((service, idx) => (
                <ScrollReveal key={idx} delay={(idx % 3) * 0.1}>
                  <div className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      {React.cloneElement(getIcon(service.icon) as React.ReactElement<{ className?: string }>, {
                        className: "w-8 h-8 group-hover:text-primary-foreground transition-colors"
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
