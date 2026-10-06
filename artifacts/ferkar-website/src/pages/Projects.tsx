import React from "react";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import { useListProjects } from "@workspace/api-client-react";
import { Badge } from "@/components/ui/badge";
import { localizeProject } from "@/lib/project-localization";

export default function Projects() {
  const { t } = useI18n();
  const { data: projects, isLoading } = useListProjects();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case 'in_progress': return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case 'coming_soon': return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Ensure realistic thumbnails
  const fallbackImages: Record<string, string> = {
    'Hawkar AI': '/attached_assets/generated_images/project-hawkar.jpg',
    'Darmannas': '/attached_assets/generated_images/project-darmannas.jpg',
    'Dalak': '/attached_assets/generated_images/project-dalak.jpg',
    'Gashtyar': '/attached_assets/generated_images/project-travel.jpg',
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <section className="py-20 text-center container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.projects.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t.projects.subtitle}
            </p>
          </ScrollReveal>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-20 text-muted-foreground">{t.common.loading}</div>
            ) : projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project, idx) => {
                  const localizedProject = localizeProject(project, t.projects);
                  return (
                  <ScrollReveal key={project.id} delay={(idx % 2) * 0.1}>
                    <div className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        {(localizedProject.imageUrl || fallbackImages[project.name]) ? (
                          <img 
                            src={localizedProject.imageUrl || fallbackImages[project.name]}
                            alt={localizedProject.name}
                            className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ${localizedProject.name === "Poshya" ? "object-top" : ""}`}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                            No Image
                          </div>
                        )}
                        <div className="absolute top-6 left-6 flex gap-2">
                          <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur bg-background/80">
                            {localizedProject.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{localizedProject.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
                            {t.projects.status[project.status as keyof typeof t.projects.status] || project.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                          {localizedProject.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground border rounded-2xl border-dashed">
                {t.common.noData}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
