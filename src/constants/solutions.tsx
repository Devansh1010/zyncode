export const solutions = [
  {
    number: "01",
    category: "BUSINESS WEBSITES",
    title: "Give customers a reason to choose you.",
    description:
      "Your website should communicate what makes your business different, demonstrate the value you provide, and give potential customers the confidence to take the next step.",
    outcomes: [
      "Explain your services and value clearly",
      "Build trust with relevant, meaningful content",
      "Guide potential customers towards an enquiry",
    ],
    linkLabel: "Explore business websites",
    href: "/business-websites",
    visual: "clarity",
  },
  {
    number: "02",
    category: "WEBSITE IMPROVEMENTS",
    title: "Turn more website visits into meaningful enquiries.",
    description:
      "Sometimes the right solution isn't rebuilding everything. We identify friction in your existing website and improve the content, navigation, and customer journey where it matters most.",
    outcomes: [
      "Make important information easier to find",
      "Clarify calls to action and enquiry paths",
      "Address usability issues across devices",
    ],
    linkLabel: "Explore website improvements",
    href: "/website-redesign#website-improvements",
    visual: "journey",
  },
  {
    number: "03",
    category: "WEBSITE REDESIGN",
    title: "Make your website reflect the business you've become.",
    description:
      "When your website no longer represents your quality, services, or ambitions, a thoughtful redesign can bring its presentation, structure, and user experience up to date.",
    outcomes: [
      "Replace outdated visual presentation",
      "Restructure pages around customer needs",
      "Create a more consistent mobile experience",
    ],
    linkLabel: "Explore website redesign",
    href: "/website-redesign",
    visual: "redesign",
  },
  {
    number: "04",
    category: "CUSTOM WEB APPLICATIONS",
    title: "Make complicated work simpler.",
    description:
      "When spreadsheets, disconnected tools, and repetitive tasks slow your business down, a custom application can bring important information and workflows into one connected system.",
    outcomes: [
      "Build workflows around your operations",
      "Connect related information in one system",
      "Reduce repetitive work where automation helps",
    ],
    linkLabel: "Explore custom applications",
    href: "/custom-web-application-development",
    visual: "workflow",
  },
] as const;

export type Solution = (typeof solutions)[number];

export type SolutionVisualType = Solution["visual"];