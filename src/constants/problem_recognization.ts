export const problems = [
  {
    number: "01",
    category: "FIRST IMPRESSIONS",
    title: "People find you online. But do they see why they should choose you?",
    description:
      "You know what makes your business worth choosing. But a new customer hasn't experienced it yet. If your website looks and sounds like everyone else's, your best qualities can go unnoticed.",
    takeaway: "Your value deserves to be understood before the first conversation.",
    visual: "positioning",
  },
  {
    number: "02",
    category: "LOST OPPORTUNITIES",
    title: "Interested customers shouldn't have to work hard to choose you.",
    description:
      "Someone visits your website looking for your services, pricing, or process. If the answers aren't clear and the next step isn't obvious, they may leave without contacting you.",
    takeaway: "Make it easier for the right customers to take the next step.",
    visual: "conversion",
  },
  {
    number: "03",
    category: "BUSINESS GROWTH",
    title: "Your business has grown. Has your website kept up?",
    description:
      "Your services have expanded, your standards have improved, or you're ready for a different kind of customer. But your website still reflects the business you were building years ago.",
    takeaway: "Your online presence should reflect the business you're building today.",
    visual: "growth",
  },
  {
    number: "04",
    category: "EVERYDAY OPERATIONS",
    title: "You're running a business. You shouldn't have to fight your own systems.",
    description:
      "Customer details in spreadsheets. Updates buried in WhatsApp messages. Payments tracked in one place and daily work in another. Disconnected tools make simple tasks harder than they need to be.",
    takeaway:
      "The right digital tools can bring your workflows together and give you more control over your day.",
    visual: "workflow",
  },
] as const;

export type ProblemVisualType = (typeof problems)[number]["visual"];