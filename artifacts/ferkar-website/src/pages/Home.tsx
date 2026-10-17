import React from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronRight, Play, ExternalLink, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useListFeaturedProjects, useGetSiteStats } from "@workspace/api-client-react";
import { localizeProject, projectImageUrl } from "@/lib/project-localization";
import { publicContact } from "@/lib/contact";
import clients from "@/data/clients.json";

import { 
  Globe, Smartphone, Brain, Briefcase, 
  Palette, PenTool, Share2, TrendingUp, 
  Printer, Cpu, Users, HeartHandshake, Sparkles, Lightbulb
} from "lucide-react";

export default function Home() {
  const { t, isRtl } = useI18n();
  const { data: featuredProjects } = useListFeaturedProjects();
  const { data: stats } = useGetSiteStats();
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 700], [0, 110]);
  const heroBackgroundY = useTransform(scrollY, [0, 700], [0, -90]);

  const getServiceIcon = (name: string): React.ReactElement<{ className?: string }> => {
    const icons: Record<string, React.ElementType> = {
      'web': Globe,
      'app': Smartphone,
      'ai': Brain,
      'consulting': Briefcase,
      'brand': Palette,
      'graphic': PenTool,
      'social': Share2,
      'marketing': TrendingUp,
      'print': Printer,
      'tech': Cpu,
    };
    const Icon = icons[name] || Globe;
    return <Icon className="w-8 h-8 text-primary" />;
  };

  const serviceKeys = ['web', 'app', 'ai', 'consulting', 'brand', 'graphic', 'social', 'marketing', 'print', 'tech'];

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
            style={prefersReducedMotion ? undefined : { y: heroBackgroundY }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          </motion.div>
          
          <motion.div
            className="container relative z-10 mx-auto px-4 pt-24 pb-12 text-center max-w-4xl"
            style={prefersReducedMotion ? undefined : { y: heroContentY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Stacked lockup from the ferkar project (1345x1082, crisp) on tablet/desktop.
                  On phones that lockup is ~150px wide and its bottom strapline is unreadable,
                  so phones get the big F mark on its own (674x682) — which also avoids the
                  "FERKAR / IDEAS TO REALITY" in the lockup repeating the heading below it.
                  Both are sized by viewport HEIGHT so the hero always fits the screen. */}
              <img
                src={`${import.meta.env.BASE_URL}ferkar-logo-stacked.png`}
                alt="FERKAR"
                className="mx-auto mb-5 hidden h-[clamp(8rem,22vh,16rem)] w-auto object-contain sm:block sm:mb-8 lg:mb-10"
              />
              <img
                src={`${import.meta.env.BASE_URL}ferkar-mark.png`}
                alt="FERKAR"
                className="mx-auto mb-4 h-[clamp(5rem,13vh,7rem)] w-auto object-contain sm:hidden"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-5 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-semibold">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link href="/projects">
                  <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 group">
                    {t.hero.exploreProjects}
                    {isRtl ? (
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 border-2">
                    {t.hero.contactUs}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-card relative">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
                  <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
                </div>
                <Link href="/projects">
                  <Button variant="ghost" className="group">
                    {t.projects.viewAll} 
                    {isRtl ? <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects?.slice(0,3).map((project, idx) => {
                const localizedProject = localizeProject(project, t.projects);
                return (
                <ScrollReveal key={project.id} delay={idx * 0.1} className="h-full">
                  <div className="group relative rounded-2xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                      {projectImageUrl(localizedProject) ? (
                        <img src={projectImageUrl(localizedProject)!} alt={localizedProject.name} className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ${localizedProject.name === "Poshya" ? "object-top" : ""}`} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground font-mono">
                          [Project Image]
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium border border-border">
                          {localizedProject.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{localizedProject.name}</h3>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-1 rounded-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
                          {t.projects.status[project.status as keyof typeof t.projects.status]}
                        </span>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">{localizedProject.description}</p>

                      <div className="mt-auto pt-4">
                        {(project as typeof project & { websiteUrl?: string | null }).websiteUrl ? (
                          <a
                            href={(project as typeof project & { websiteUrl?: string | null }).websiteUrl as string}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                          >
                            {t.projects.visitSite}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <a
                            href={`${publicContact.whatsappHref}?text=${encodeURIComponent(
                              `${t.projects.demoMessage} ${localizedProject.name}`,
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                          >
                            {t.projects.requestDemo}
                            <MessageCircle className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
                <p className="text-xl text-muted-foreground">{t.services.subtitle}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceKeys.slice(0, 8).map((key, idx) => (
                <ScrollReveal key={key} delay={idx * 0.05}>
                  <Link href="/services">
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {React.cloneElement(getServiceIcon(key) as React.ReactElement<{ className?: string }>, {
                          className: "w-7 h-7 group-hover:text-primary-foreground transition-colors"
                        })}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{t.services.items[key as keyof typeof t.services.items]}</h3>
                      <div className="flex items-center text-sm font-medium text-primary mt-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Explore <ArrowRight className={`w-4 h-4 ${isRtl ? "mr-1 rotate-180" : "ml-1"}`} />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.whyUs.title}</h2>
                <p className="text-xl text-primary-foreground/80">{t.whyUs.subtitle}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Lightbulb, key: 'innovation' },
                { icon: Users, key: 'team' },
                { icon: Cpu, key: 'tech' },
                { icon: Brain, key: 'ai' },
                { icon: HeartHandshake, key: 'support' },
                { icon: Sparkles, key: 'creative' }
              ].map((item, idx) => (
                <ScrollReveal key={item.key} delay={idx * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t.whyUs.items[item.key as keyof typeof t.whyUs.items]}</h3>
                      <p className="text-primary-foreground/70 text-sm">
                        Building solutions that stand the test of time, backed by modern infrastructure and thoughtful design.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-border">
              <ScrollReveal delay={0.1}>
                <div>
                  <div className="text-4xl md:text-6xl font-black text-primary mb-2" dir="ltr">
                    {stats?.projectCount ? stats.projectCount + 10 : 25}+
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.stats.projects}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="text-4xl md:text-6xl font-black text-primary mb-2" dir="ltr">40+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.stats.clients}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3} className="hidden md:block">
                <div>
                  <div className="text-4xl md:text-6xl font-black text-primary mb-2" dir="ltr">5+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.stats.years}</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trusted by — client logos */}
        <section className="py-20 bg-background border-y border-border">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {t.clients.kicker}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t.clients.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.clients.subtitle}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {clients.map((client, idx) => (
                <ScrollReveal key={client.name} delay={(idx % 5) * 0.05} className="h-full">
                  {/* Logo + name. These are local businesses, not global brands, so the mark
                      alone is not recognisable at this size — the label is what makes the strip
                      mean something to a visitor who has never been to Kalar. */}
                  <div className="group flex h-full min-h-[7.5rem] flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-4 transition-all hover:border-primary/40 hover:shadow-md">
                    <img
                      src={`${import.meta.env.BASE_URL}client-logos/${client.logo}`}
                      alt={client.name}
                      title={client.name}
                      loading="lazy"
                      className="max-h-12 w-auto max-w-full object-contain opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="text-center text-[11px] font-semibold uppercase leading-tight tracking-wider text-muted-foreground">
                      {client.name}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center mt-10">
                <Link href="/projects">
                  <Button variant="ghost" className="group">
                    {t.clients.seeAll}
                    {isRtl ? (
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to bring your idea to reality?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how FERKAR can help you build the next big thing. Our team is ready to start.
              </p>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 text-lg">
                  {t.hero.contactUs}
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
