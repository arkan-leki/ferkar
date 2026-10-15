const phoneDigits = "9647769112025";

export const publicContact = {
  phoneDisplay: "+964 776 911 2025",
  phoneHref: `+${phoneDigits}`,
  whatsappHref: `https://wa.me/${phoneDigits}`,
};

// The developer's own direct line, shown beside the company contact so a client can reach
// the person who actually builds the product. Name and role come from the locales
// (t.about.arkanName / t.about.arkanRole) so they translate with the page.
// Arkan's personal alternate is arkan.leki@gmail.com (not shown on the site).
const developerDigits = "9647706947874";

export const companyEmail = "info@ferga.app";

export const developerContact = {
  email: "dev@ferga.app",
  alternateEmail: "arkan.leki@gmail.com",
  phoneDisplay: "+964 770 694 7874",
  phoneHref: `+${developerDigits}`,
  whatsappHref: `https://wa.me/${developerDigits}`,
};