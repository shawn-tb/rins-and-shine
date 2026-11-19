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

  // Shown in the contact block. Leave a value empty and its row disappears.
  whatsapp: "", // e.g. "+65 9123 4567"
  instagram: "",

  // How quickly the confirmation message promises a reply.
  responseTime: "one business day",

  // Leave empty and the enquiry form opens the visitor's mail client with
  // every field already filled in. Set it to a URL that accepts a JSON POST
  // and the form submits there instead.
  formEndpoint: "",

  origin: "Formulated and Designed in Singapore",
  made: "Made in China",
  company: "Rins & Shine Pte. Ltd. (Singapore)",
} as const;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
