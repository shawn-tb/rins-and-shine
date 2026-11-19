/**
 * Everything you are likely to want to change lives in this one file.
 */
export const site = {
  name: "Rins & Shine",
  tagline: "Premium Paddle Care System",
  description:
    "A premium paddle care system for pickleball players. Removes sweat, oils, dust and airborne residue from the paddle face without altering its manufactured texture. 100 mL spray plus microfiber cloth.",

  // Where the site will live. Update once your domain is pointed at Vercel.
  url: "https://www.rinsnshine.com",

  // The address every "Enquire" button writes to.
  email: "hello@rinsnshine.com",

  // Pricing
  price: "S$39",
  priceNote: "per kit — 100 mL spray + microfiber cloth",
  tradeNote: "Distributor, club and bulk pricing on enquiry.",

  // Optional: add a URL to switch the social links on. Leave empty to hide.
  instagram: "",
  whatsapp: "", // e.g. "https://wa.me/6591234567"

  origin: "Formulated and Designed in Singapore",
  made: "Made in China",
  company: "Rins & Shine Pte. Ltd. (Singapore)",
} as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
