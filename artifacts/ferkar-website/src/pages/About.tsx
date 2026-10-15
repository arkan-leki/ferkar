import React from "react";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import { useGetCompanyInfo } from "@workspace/api-client-react";

export default function About() {
  const { t } = useI18n();
  const { data: companyInfo } = useGetCompanyInfo();

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
          <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.about.title}</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
                {t.about.subtitle}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="right">
                <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative border border-border shadow-xl">
                  {/* Since we don't have a specific image generated for About yet, we'll use a placeholder or stylized div */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 opacity-20"></div>
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-muted-foreground/30">
                    FERKAR
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <h2 className="text-3xl font-bold mb-6">{t.about.storyTitle}</h2>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-4">
                    {t.about.storyParagraph1}
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    {t.about.storyParagraph2}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t.about.storyParagraph3}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScrollReveal delay={0.1} className="h-full">
                <div className="p-10 rounded-3xl bg-background border border-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-2xl font-black text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.about.mission}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {companyInfo?.missionStatement || t.about.missionText}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="p-10 rounded-3xl bg-background border border-border shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-2xl font-black text-primary">02</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.about.vision}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {companyInfo?.visionStatement || t.about.visionText}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Team */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  {t.about.teamKicker}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.about.teamTitle}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.about.teamSubtitle}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScrollReveal delay={0.1}>
                <div className="p-10 rounded-3xl bg-card border border-border shadow-sm h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black mb-6">
                    A
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.about.arkanName}</h3>
                  <div className="text-primary font-semibold mb-5">{t.about.arkanRole}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t.about.arkanBio}</p>
                  <div className="mt-auto">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {t.about.teamSkills}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Python", "Django", "FastAPI", "Vue / Quasar", "Next.js", "Flutter", "PostgreSQL", "RTL"].map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-10 rounded-3xl bg-card border border-border shadow-sm h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black mb-6">
                    H
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t.about.hazharName}</h3>
                  <div className="text-primary font-semibold mb-5">{t.about.hazharRole}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t.about.hazharBio}</p>
                  <div className="mt-auto">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {t.about.teamBusiness}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        t.services.items.consulting,
                        t.services.items.brand,
                        t.services.items.marketing,
                        t.services.items.social,
                      ].map((chip) => (
                        <span key={chip} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
