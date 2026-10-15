import React from "react";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { useGetCompanyInfo, useSubmitContact } from "@workspace/api-client-react";
import { publicContact, developerContact, companyEmail } from "@/lib/contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useI18n();
  const { data: companyInfo } = useGetCompanyInfo();
  const submitContact = useSubmitContact();
  const { toast } = useToast();
  const contactSchema = React.useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contact.form.nameError),
        email: z.string().email(t.contact.form.emailError),
        phone: z.string().optional(),
        subject: z.string().min(2, t.contact.form.subjectError),
        message: z.string().min(10, t.contact.form.messageError),
      }),
    [t],
  );

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const whatsappWindow = window.open("about:blank", "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    const whatsappMessage = [
      t.contact.form.whatsappIntro,
      `${t.contact.form.name}: ${data.name}`,
      `${t.contact.form.email}: ${data.email}`,
      `${t.contact.form.phone}: ${data.phone || t.contact.form.phoneNotProvided}`,
      `${t.contact.form.subject}: ${data.subject}`,
      `${t.contact.form.message}: ${data.message}`,
    ].join("\n");
    const whatsappUrl = `${publicContact.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;

    // Storing the inquiry in the database is a bonus, not the delivery channel — WhatsApp is.
    // On a static host (GitHub Pages) there is no API to POST to at all, so a failed save must
    // still hand the visitor a pre-filled WhatsApp message instead of an error and a dead form.
    let saved = false;
    try {
      await submitContact.mutateAsync({ data });
      saved = true;
    } catch {
      saved = false;
    }

    toast(
      saved
        ? { title: t.contact.form.successTitle, description: t.contact.form.success }
        : { title: t.contact.form.successTitle, description: t.contact.form.whatsappFollowUp },
    );
    if (saved) reset();

    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <section className="py-20 text-center container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.contact.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t.contact.subtitle}
            </p>
          </ScrollReveal>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              
              {/* Contact Info */}
              <ScrollReveal direction="right" className="lg:col-span-1 space-y-8">
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-8">{t.contact.info.title}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t.contact.info.address}</h4>
                        <p className="text-muted-foreground">{companyInfo?.address || "Kurdistan Region, Iraq"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t.contact.info.phone}</h4>
                        <a href={`tel:${publicContact.phoneHref}`} className="text-muted-foreground hover:text-primary transition-colors block" dir="ltr">
                          {publicContact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t.contact.info.whatsapp}</h4>
                        <a href={publicContact.whatsappHref} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                          {publicContact.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{t.contact.info.email}</h4>
                        <a href={`mailto:${companyEmail}`} className="text-muted-foreground hover:text-primary transition-colors block" dir="ltr">
                          {companyEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developer direct contact */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">{t.contact.info.developer}</h3>
                  <p className="text-muted-foreground mb-1">{t.about.arkanName}</p>
                  <p className="text-sm text-muted-foreground mb-6">{t.about.arkanRole}</p>
                  <div className="space-y-4">
                    <a href={developerContact.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                      <span dir="ltr">{developerContact.phoneDisplay}</span>
                    </a>
                    <a href={`mailto:${developerContact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <span dir="ltr">{developerContact.email}</span>
                    </a>
                    <a href={`mailto:${developerContact.alternateEmail}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <span dir="ltr">{developerContact.alternateEmail}</span>
                    </a>
                  </div>
                </div>

                <div className="bg-muted rounded-3xl h-64 overflow-hidden border border-border shadow-inner">
                  {/* Real map, driven by the company address from the API */}
                  <iframe
                    title="FERKAR office location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      companyInfo?.address || "Kalar Mall, Kalar, Sulaymaniyah Governorate, Iraq",
                    )}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="left" className="lg:col-span-2">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm h-full">
                  <h3 className="text-3xl font-bold mb-8">{t.contact.info.sendMessage}</h3>
                  <p className="text-sm text-muted-foreground -mt-5 mb-6">
                    {t.contact.form.whatsappFollowUp}
                  </p>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input id="name" {...register("name")} className={errors.name ? "border-destructive" : ""} />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input id="email" type="email" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.phone}</Label>
                        <Input id="phone" {...register("phone")} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t.contact.form.subject}</Label>
                        <Input id="subject" {...register("subject")} className={errors.subject ? "border-destructive" : ""} />
                        {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea 
                        id="message" 
                        {...register("message")} 
                        className={`min-h-[150px] resize-y ${errors.message ? "border-destructive" : ""}`} 
                      />
                      {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8" disabled={isSubmitting}>
                      {isSubmitting ? t.contact.info.sending : t.contact.form.submit}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
