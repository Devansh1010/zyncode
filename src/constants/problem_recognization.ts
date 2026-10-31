export const problems = [
{
number: "01",
category: "POSITIONING",
title: "Customers don't see what makes you different.",
description:
"Your business offers something worth choosing, but your website looks and sounds like many others. Visitors may leave without understanding why they should choose you.",
takeaway: "LET THEM SEE YOUR VALUE",
visual: "positioning",
},
{
number: "02",
category: "CONVERSIONS",
title: "Your website isn't turning interest into enquiries.",
description:
"Visitors may be interested in your services but struggle to find the information they need, build confidence in your business, or figure out what to do next.",
takeaway: "MAKE IT EASY TO SAY YES",
visual: "conversion",
},
{
number: "03",
category: "DIGITAL PRESENCE",
title: "Your online presence no longer reflects your business.",
description:
"Your services, experience, or ambitions have moved forward, but your website still tells an older story. Your digital presence should reflect the business you've built today.",
takeaway: "SHOW HOW FAR YOU'VE COME",
visual: "growth",
},
{
number: "04",
category: "WORKFLOW & OPERATIONS",
title: "Everyday work is harder than it needs to be.",
description:
"Information is scattered across spreadsheets, messages, and disconnected tools. A tailored digital application could bring the right parts of your workflow together.",
takeaway: "STREAMLINE YOUR OPERATIONS",
visual: "workflow",
},
] as const;

export type ProblemVisualType = (typeof problems)[number]["visual"];
