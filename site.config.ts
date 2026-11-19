/**
 * Everything you are likely to want to change lives in this one file.
 */
export const site = {
  name: "Rins & Shine",
  tagline: "Premium Paddle Care System",
  description:
    "A non-abrasive paddle care system for modern paddle faces. Removes dirt, sweat, oils and debris that interfere with paddle feel and consistency. 100 mL spray plus microfibre cloth.",

  // Where the site will live. Update once your domain is pointed at Vercel.
  url: "https://rinsandshine.com",

  // The address every "Enquire" button writes to.
  email: "hello@rinsandshine.com",

  // Pricing
  price: "S$39",
  priceNote: "per kit — 100 mL spray + microfibre cloth",
  tradeNote: "Distributor, club and bulk pricing on enquiry.",

  // Optional: add a URL to switch the social links on. Leave empty to hide.
  instagram: "",
  whatsapp: "", // e.g. "https://wa.me/6591234567"

  origin: "Formulated and Designed in Singapore",
  made: "Made in China",
} as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
