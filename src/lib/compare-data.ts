/*
 * Facts checked on 10 October 2026 against each plugin's official pricing page,
 * features page and WordPress.org listing (see `sources` below). Columns describe
 * the FREE version of each plugin; paid cells name the cheapest plan that adds it.
 */

export type Cell =
  | { k: "yes"; note?: string }
  | { k: "paid"; note: string }
  | { k: "addon"; note: string }
  | { k: "no"; note?: string };

export type PluginId = "vulo" | "cf7" | "wpf" | "gf" | "nf" | "frm" | "ff" | "fm";

export const plugins: { id: PluginId; name: string; sub: string }[] = [
  { id: "vulo", name: "VuloForm", sub: "Free" },
  { id: "cf7", name: "Contact Form 7", sub: "Free" },
  { id: "wpf", name: "WPForms", sub: "Lite" },
  { id: "gf", name: "Gravity Forms", sub: "No free version" },
  { id: "nf", name: "Ninja Forms", sub: "Core" },
  { id: "frm", name: "Formidable", sub: "Lite" },
  { id: "ff", name: "Fluent Forms", sub: "Free" },
  { id: "fm", name: "Forminator", sub: "Free" },
];

const Y = (note?: string): Cell => ({ k: "yes", note });
const P = (note: string): Cell => ({ k: "paid", note });
const A = (note: string): Cell => ({ k: "addon", note });
const N = (note?: string): Cell => ({ k: "no", note });

/* cells follow the order of `plugins` */
export const rows: { label: string; hint?: string; cells: Cell[] }[] = [
  {
    label: "Free version",
    cells: [Y(), Y(), Y("Lite"), N("Paid only, from $59/yr"), Y("Core"), Y("Lite"), Y(), Y()],
  },
  {
    label: "Drag-and-drop builder",
    cells: [Y(), N("Tag-based text editor"), Y(), P("Basic"), Y(), Y(), Y(), Y()],
  },
  {
    label: "Submissions saved in your WordPress database",
    cells: [
      Y(),
      N("Emailed only by default"),
      N("Emailed; optional backup to WPForms servers, viewable after upgrading"),
      P("Basic"),
      Y(),
      Y(),
      Y(),
      Y(),
    ],
  },
  {
    label: "Export submissions to CSV",
    cells: [Y(), N(), P("Basic"), P("Basic"), Y(), Y(), Y(), Y()],
  },
  {
    label: "Conditional logic",
    hint: "Show, hide or require fields based on other answers",
    cells: [
      Y("Re-checked on your server"),
      N("Third-party add-on"),
      P("Basic"),
      P("Basic"),
      A("Plus plan"),
      P("Basic"),
      Y(),
      Y(),
    ],
  },
  {
    label: "Multi-step forms",
    cells: [Y(), N("Third-party add-on"), P("Basic"), P("Basic"), A("Plus plan"), P("Basic"), P("Pro"), Y()],
  },
  {
    label: "Calculations",
    cells: [Y("Re-computed on your server"), N(), P("Pro"), P("Basic"), Y(), P("Basic"), P("Pro"), Y()],
  },
  {
    label: "File uploads",
    cells: [Y("Type-checked, random names"), Y(), P("Basic"), P("Basic"), A("Plus plan"), P("Basic"), P("Pro"), Y()],
  },
  {
    label: "Webhooks",
    cells: [
      Y("Signed, retried, logged"),
      N(),
      P("Elite"),
      P("Elite"),
      A("Add-on (in Elite)"),
      P("Business, via API add-on"),
      P("Pro"),
      Y(),
    ],
  },
  {
    label: "Payments",
    cells: [
      N("Not built in"),
      N(),
      Y("Stripe, 3% fee"),
      A("Paid add-ons"),
      A("Paid add-ons"),
      Y("Stripe, fee without Pro"),
      Y("Stripe, 1.9% fee"),
      Y("Stripe & PayPal"),
    ],
  },
];

/* Cheapest single-site plan that includes conditional logic, multi-step forms,
 * calculations, file uploads and webhooks, as shown on each pricing page. */
export const costs: { id: PluginId; name: string; price: number | null; plan: string; detail: string }[] = [
  { id: "vulo", name: "VuloForm", price: 0, plan: "Free plugin", detail: "Everything in the free plugin. No paid tier." },
  { id: "fm", name: "Forminator", price: 0, plan: "Free plugin", detail: "All five are in the free plugin. Pro comes with a WPMU DEV membership." },
  { id: "ff", name: "Fluent Forms", price: 63, plan: "Single Site", detail: "$63/yr shown (listed at $79). Lifetime licence also offered from $279." },
  { id: "frm", name: "Formidable", price: 199.5, plan: "Business", detail: "$199.50/yr. Webhooks come through the Formidable API, which starts at Business." },
  { id: "gf", name: "Gravity Forms", price: 259, plan: "Elite", detail: "$259/yr. The Webhooks add-on needs an Elite licence." },
  { id: "nf", name: "Ninja Forms", price: 299.4, plan: "Elite", detail: "$299.40 first year, $499 at renewal. Elite includes every add-on." },
  { id: "wpf", name: "WPForms", price: 299.5, plan: "Elite", detail: "$299.50 first year, $599 at renewal. Webhooks are Elite-only." },
  { id: "cf7", name: "Contact Form 7", price: null, plan: "Not available", detail: "No built-in conditional logic, steps, calculations or webhooks; needs third-party add-ons." },
];

export const sources: Record<PluginId, [string, string][]> = {
  vulo: [],
  cf7: [["Contact Form 7 on WordPress.org", "https://wordpress.org/plugins/contact-form-7/"]],
  wpf: [
    ["WPForms pricing", "https://wpforms.com/pricing/"],
    ["WPForms Lite on WordPress.org", "https://wordpress.org/plugins/wpforms-lite/"],
    ["WPForms Lite Connect docs", "https://wpforms.com/docs/how-to-use-lite-connect-for-wpforms/"],
  ],
  gf: [
    ["Gravity Forms pricing", "https://www.gravityforms.com/pricing/"],
    ["Gravity Forms features", "https://www.gravityforms.com/features/"],
  ],
  nf: [
    ["Ninja Forms pricing", "https://ninjaforms.com/pricing/"],
    ["Ninja Forms on WordPress.org", "https://wordpress.org/plugins/ninja-forms/"],
  ],
  frm: [
    ["Formidable Forms pricing", "https://formidableforms.com/pricing/"],
    ["Formidable on WordPress.org", "https://wordpress.org/plugins/formidable/"],
  ],
  ff: [
    ["Fluent Forms pricing", "https://fluentforms.com/pricing/"],
    ["Fluent Forms on WordPress.org", "https://wordpress.org/plugins/fluentform/"],
  ],
  fm: [["Forminator on WordPress.org", "https://wordpress.org/plugins/forminator/"]],
};

export const allSources: [string, string][] = Object.values(sources).flat();

export const CHECKED_ON = "10 October 2026";

/* ---------- per-competitor profiles for /compare/[slug] ---------- */

export type Profile = {
  slug: string;
  id: Exclude<PluginId, "vulo">;
  name: string;
  /** one-line positioning used in cards and meta descriptions */
  tagline: string;
  /** short answer shown at the top of the page */
  verdict: string;
  chooseThem: string[];
  chooseVulo: string[];
  /** longer, topic-by-topic write-up */
  sections: { h: string; p: string[] }[];
  /** price line shown in the cost callout */
  pricing: string;
  faqs: [string, string][];
};

export const profiles: Profile[] = [
  {
    slug: "contact-form-7",
    id: "cf7",
    name: "Contact Form 7",
    tagline: "The long-standing free classic, versus a free builder that stores and exports submissions.",
    verdict:
      "Contact Form 7 is free, light and familiar, but it is a tag-based text editor that only emails submissions. VuloForm is also free, and adds a drag-and-drop builder, a submissions inbox, CSV export, conditional logic, multi-step forms, calculations and webhooks without extra plugins.",
    chooseThem: [
      "You are comfortable writing form markup by hand and want the smallest possible tool.",
      "A plain contact form that emails you is all the site needs.",
      "You already run a stack of Contact Form 7 add-ons and want to stay with it.",
    ],
    chooseVulo: [
      "You want to build forms visually instead of editing tags.",
      "You need to keep, search and export what people send, not just email it.",
      "You want conditional logic, steps or calculations without hunting for third-party add-ons.",
    ],
    sections: [
      {
        h: "Building the form",
        p: [
          "Contact Form 7 builds forms in a text editor. You write bracketed tags for each field and lay out the rest in HTML. It is quick once you know it, and it gives developers precise control, but it has a learning curve for everyone else.",
          "VuloForm uses a drag-and-drop builder. You add fields from a palette, reorder them by dragging (or with the keyboard), set labels and rules in an inspector, and preview the form exactly as visitors see it. Changes save as a draft until you hit Publish.",
        ],
      },
      {
        h: "What happens to submissions",
        p: [
          "By default, Contact Form 7 emails each submission and does not keep it in your WordPress database. If the email is filtered as spam or your mail setup fails, the message is gone unless you add a separate plugin to store entries.",
          "VuloForm saves every submission in your own WordPress database. You can search and filter by status and date, mark entries as read, new or spam, export to CSV, and optionally auto-delete old entries after a set number of days. Email notifications are in addition to that, not instead of it.",
        ],
      },
      {
        h: "Logic, steps and calculations",
        p: [
          "In our October 2026 check, Contact Form 7 had no built-in conditional logic or multi-step forms and no calculations; those typically come from third-party add-ons, which you have to find, vet and keep updated.",
          "All three ship inside the VuloForm free plugin. Conditional rules and calculated values are also checked again on your server, so a field hidden by its rules is never stored and a required field cannot be skipped by switching off JavaScript.",
        ],
      },
      {
        h: "Spam and privacy",
        p: [
          "Contact Form 7 can be paired with reCAPTCHA and similar services, which means loading a third party's script and sharing visitor data with it.",
          "VuloForm uses a hidden trap field, a minimum fill time and a per-visitor rate limit, with no CAPTCHA and no third party. It makes no external connections by itself, and visitor IP addresses are not stored unless you switch that on.",
        ],
      },
      {
        h: "Where Contact Form 7 is stronger",
        p: [
          "Contact Form 7 has years of releases, a very large install base and a big ecosystem of tutorials and add-ons. VuloForm is at version 1.0 and has none of that history. If your team already knows Contact Form 7 well and your needs are simple, switching is optional rather than urgent.",
        ],
      },
    ],
    pricing: "Contact Form 7 is free. VuloForm is free. The difference is what you get before you start adding plugins.",
    faqs: [
      ["Does Contact Form 7 save submissions?", "Not by default. It emails them. Storing entries typically needs an additional plugin."],
      ["Is VuloForm a good Contact Form 7 alternative?", "If you want a visual builder and a submissions inbox without leaving the free tier, yes. If you only need a basic emailed contact form and prefer markup, Contact Form 7 remains a fair choice."],
      ["Can I move my Contact Form 7 forms to VuloForm?", "Rebuild them in the VuloForm builder; most contact forms take a few minutes using a template. Keep Contact Form 7 active until the new form is live and tested, then deactivate it."],
    ],
  },
  {
    slug: "wpforms",
    id: "wpf",
    name: "WPForms",
    tagline: "A popular freemium builder, versus a builder where nothing sits behind a paywall.",
    verdict:
      "WPForms Lite is easy to use, and includes Stripe payments. Most of what makes forms powerful (conditional logic, multi-step, calculations, file uploads, webhooks) is paid, and the plan with webhooks is Elite. VuloForm gives you all of those in the free plugin, but it does not take payments.",
    chooseThem: [
      "You need to take payments through a form (Stripe is available in Lite, with a 3% fee).",
      "You want direct CRM and email-marketing integrations from a large, established vendor.",
      "You value a big ecosystem, documentation and support behind a paid plan.",
    ],
    chooseVulo: [
      "You want conditional logic, multi-step forms, calculations, file uploads and webhooks without paying.",
      "You want submissions stored in your own database, not emailed and held elsewhere.",
      "You do not want a renewal price to plan around.",
    ],
    sections: [
      {
        h: "What is free, and what is not",
        p: [
          "WPForms Lite includes the drag-and-drop builder and Stripe payments. In our check, conditional logic, multi-step forms and file uploads start on paid plans, calculations on Pro and webhooks on Elite.",
          "VuloForm includes all of these in the single free plugin. There is no paid tier to upgrade to, so nothing is held back for later.",
        ],
      },
      {
        h: "Where submissions live",
        p: [
          "WPForms Lite emails entries. It offers an optional backup of entries to WPForms servers through Lite Connect, and you can view them in WordPress after upgrading. CSV export is on a paid plan.",
          "VuloForm stores submissions in your WordPress database from the start, with search, status filters and CSV export included.",
        ],
      },
      {
        h: "Cost over time",
        p: [
          "To get conditional logic, multi-step, calculations, file uploads and webhooks together on one site, the cheapest WPForms plan is Elite: $299.50 for the first year and $599 at renewal, as shown on its pricing page in October 2026.",
          "VuloForm costs nothing. If you do need payments, you can run a payments plugin alongside VuloForm, or use WPForms for that specific form.",
        ],
      },
      {
        h: "Where WPForms is stronger",
        p: [
          "WPForms offers built-in payments in its free tier, years of polish, direct integrations with many marketing and CRM tools on paid plans, and a large community. VuloForm offers webhooks for connecting other tools, and is at version 1.0.",
        ],
      },
    ],
    pricing: "WPForms Elite, the cheapest plan with all five essentials, is $299.50 for the first year and $599 at renewal. VuloForm is free.",
    faqs: [
      ["Is WPForms Lite enough?", "For a simple contact form, often yes. For conditional logic, multi-step forms, file uploads or webhooks you will need a paid plan."],
      ["Does VuloForm support payments like WPForms?", "No. VuloForm does not take payments. WPForms Lite includes Stripe with a 3% fee."],
      ["How do I switch from WPForms?", "Recreate the form in VuloForm from a template or from scratch, test it, update the block or shortcode on your page, then deactivate WPForms."],
    ],
  },
  {
    slug: "gravity-forms",
    id: "gf",
    name: "Gravity Forms",
    tagline: "A premium, developer-loved form plugin, versus a free alternative that covers the essentials.",
    verdict:
      "Gravity Forms has no free version; plans start at $59 a year and the webhooks add-on needs Elite at $259 a year. VuloForm is free and includes conditional logic, steps, calculations, uploads and webhooks, though it has far fewer integrations and no payments.",
    chooseThem: [
      "You are building complex, client-facing forms and want a mature, paid, supported product.",
      "You want its add-on ecosystem and developer reputation.",
      "A yearly licence is a normal cost of doing business for you.",
    ],
    chooseVulo: [
      "You want to start free and not manage licence renewals.",
      "Your forms need logic, steps, calculations, uploads or webhooks, not a long list of integrations.",
      "You want submissions and files to stay on your own site with no external connections.",
    ],
    sections: [
      {
        h: "Price and licences",
        p: [
          "Gravity Forms is sold only as a paid product. Plans start from $59 a year. The cheapest plan that includes the Webhooks add-on, together with the other essentials we compared, is Elite at $259 a year per our October 2026 check.",
          "VuloForm is a single free, GPL-licensed plugin. There is nothing to renew and no site count to track.",
        ],
      },
      {
        h: "Features compared",
        p: [
          "Gravity Forms is a deep product with a large catalogue of add-ons. Its paid plans cover conditional logic, multi-step forms, calculations, file uploads and more, with the level of the plan deciding which add-ons you get.",
          "VuloForm covers the same five essentials in one free plugin: conditional logic, multi-step forms, calculations, file uploads and webhooks. It stops there by design. It has no built-in payments, and you connect other tools through webhooks rather than dedicated add-ons.",
        ],
      },
      {
        h: "Data ownership and privacy",
        p: [
          "Both keep entries in your WordPress site. VuloForm goes further on being self-contained: it does not contact any external service on its own, has no telemetry, and does not store visitor IP addresses unless you enable it.",
        ],
      },
      {
        h: "Where Gravity Forms is stronger",
        p: [
          "Gravity Forms has a long track record, a broad add-on catalogue, and strong appeal for agencies and developers who value its extensibility. VuloForm is new, and lacks both the depth of integrations and the years of community knowledge.",
        ],
      },
    ],
    pricing: "Gravity Forms starts at $59/yr and the Elite plan with webhooks is $259/yr. VuloForm is free.",
    faqs: [
      ["Is there a free version of Gravity Forms?", "No. Gravity Forms is paid only, with plans from $59 a year."],
      ["What is the closest free alternative to Gravity Forms?", "VuloForm and Forminator both put conditional logic, multi-step forms, calculations, file uploads and webhooks in a free plugin. VuloForm has no payments; Forminator does."],
      ["Will VuloForm replace Gravity Forms add-ons?", "Not one for one. VuloForm offers webhooks to connect external tools but not the breadth of dedicated add-ons."],
    ],
  },
  {
    slug: "ninja-forms",
    id: "nf",
    name: "Ninja Forms",
    tagline: "A free core with paid add-ons, versus one free plugin with the features built in.",
    verdict:
      "Ninja Forms Core is free and saves submissions, exports CSV and includes calculations. Conditional logic, multi-step forms and file uploads are paid add-ons (Plus plan), and webhooks are an add-on within Elite. VuloForm has all of them in its free plugin.",
    chooseThem: [
      "You like the add-on model and want to buy only the extras you use.",
      "You want its paid payment add-ons.",
      "You already have Ninja Forms forms you do not want to rebuild.",
    ],
    chooseVulo: [
      "You want logic, steps and file uploads without buying add-ons.",
      "You want a single plugin with one set of settings.",
      "You want to avoid a first-year price that rises at renewal.",
    ],
    sections: [
      {
        h: "How the free core compares",
        p: [
          "Ninja Forms Core includes a drag-and-drop builder, saves submissions in WordPress, exports them to CSV and includes calculations. That is a solid base.",
          "VuloForm matches those and adds, in the same free plugin, conditional logic, multi-step forms, file uploads and webhooks.",
        ],
      },
      {
        h: "Add-ons versus built-in",
        p: [
          "In Ninja Forms, conditional logic, multi-step forms and file uploads are add-ons, available from the Plus plan, and webhooks are an add-on included in Elite. Payments are also paid add-ons.",
          "VuloForm does not use add-ons. Everything ships in one plugin, which means fewer things to buy, update and troubleshoot together. The trade-off is that VuloForm has no payment support.",
        ],
      },
      {
        h: "What it costs",
        p: [
          "Ninja Forms Elite includes every add-on. It was listed at $299.40 for the first year and $499 at renewal when we checked in October 2026. VuloForm is free.",
        ],
      },
      {
        h: "Where Ninja Forms is stronger",
        p: [
          "Ninja Forms has a long history, a broad range of add-ons and paid payment options. If you need those, it remains a reasonable choice. VuloForm focuses on the essentials and webhooks.",
        ],
      },
    ],
    pricing: "Ninja Forms Elite is $299.40 for the first year and $499 at renewal. VuloForm is free.",
    faqs: [
      ["Is Ninja Forms free?", "The Core plugin is free. Logic, multi-step forms and file uploads need paid add-ons."],
      ["Does VuloForm have add-ons?", "No. All features ship in the one free plugin."],
      ["Can VuloForm replace Ninja Forms?", "For forms that rely on logic, steps, calculations, uploads and webhooks, yes. For forms that take payments, no."],
    ],
  },
  {
    slug: "formidable-forms",
    id: "frm",
    name: "Formidable Forms",
    tagline: "A powerful forms-and-views toolkit, versus a simpler builder that is entirely free.",
    verdict:
      "Formidable Lite is free and includes Stripe, saved entries and CSV export, but conditional logic, multi-step, calculations and uploads are paid, and webhooks come via the API at Business ($199.50 a year). VuloForm includes them all at no cost, without payments.",
    chooseThem: [
      "You want to build more than forms, such as views that display entries on the front end.",
      "You want Stripe in a free tier.",
      "You are comfortable with a more technical, powerful interface.",
    ],
    chooseVulo: [
      "You want a straightforward form builder and a clear submissions inbox.",
      "You want logic, steps, calculations, uploads and webhooks without a plan.",
      "You prefer a lighter tool you can learn in an afternoon.",
    ],
    sections: [
      {
        h: "Free tier versus paid tiers",
        p: [
          "Formidable Lite includes the builder, saved entries, CSV export and Stripe payments (with a fee when you do not have Pro). In our check, conditional logic, multi-step forms, calculations and file uploads are paid, and webhooks come through the Formidable API, which starts at the Business plan.",
          "VuloForm puts all of those, including signed and retried webhooks, in its free plugin.",
        ],
      },
      {
        h: "Scope",
        p: [
          "Formidable is often used to build applications on top of WordPress, displaying and managing entries in custom views. It is a large toolkit.",
          "VuloForm is deliberately narrower: build a form, publish it, collect submissions, notify people and send data on by webhook. If you need to display entries as directories or listings, Formidable is the better fit.",
        ],
      },
      {
        h: "Cost",
        p: [
          "The cheapest Formidable plan with all five essentials is Business, shown at $199.50 a year in October 2026. VuloForm is free.",
        ],
      },
    ],
    pricing: "Formidable Business, the cheapest plan with all five essentials, is $199.50/yr. VuloForm is free.",
    faqs: [
      ["Is Formidable Forms free?", "There is a free Lite version with a builder, entries and CSV export. Many advanced features are paid."],
      ["Does VuloForm display entries on the front end?", "No. VuloForm stores submissions in the WordPress admin and exports them to CSV; it does not publish them as views."],
      ["Which is easier to learn?", "VuloForm is intentionally narrower, so there is less to learn, but Formidable can do more."],
    ],
  },
  {
    slug: "fluent-forms",
    id: "ff",
    name: "Fluent Forms",
    tagline: "A fast, capable free plugin with a Pro tier, versus a free plugin with no tiers.",
    verdict:
      "Fluent Forms Free is generous: conditional logic, saved entries, CSV export and Stripe are included. Multi-step forms, calculations, file uploads and webhooks need Pro, from $63 a year. VuloForm includes those too, with no payments.",
    chooseThem: [
      "You want built-in Stripe payments (1.9% fee in the free version).",
      "You want direct integrations from a Pro plan.",
      "The low Pro price is acceptable for what you need.",
    ],
    chooseVulo: [
      "You want multi-step forms, calculations, uploads and webhooks free.",
      "You want logic and calculations enforced again on your server.",
      "You want a plugin that makes no external calls by itself.",
    ],
    sections: [
      {
        h: "What is in Fluent Forms Free",
        p: [
          "Fluent Forms Free includes a drag-and-drop builder, conditional logic, saved entries, CSV export and Stripe payments with a 1.9% fee.",
          "Multi-step forms, calculations, file uploads and webhooks are on Pro in our October 2026 check.",
        ],
      },
      {
        h: "Where VuloForm differs",
        p: [
          "VuloForm includes multi-step forms, calculations, file uploads and webhooks in the free plugin. Conditional logic and calculations are verified again on your server, and uploaded files are type-checked and stored under random names in a protected folder.",
          "It does not process payments, which is the most significant gap compared with Fluent Forms.",
        ],
      },
      {
        h: "Price",
        p: [
          "The Single Site plan was shown at $63 a year (listed at $79), with a lifetime licence offered from $279. It is the most affordable paid option in this comparison. VuloForm is free.",
        ],
      },
    ],
    pricing: "Fluent Forms Pro Single Site is $63/yr (lifetime from $279). VuloForm is free.",
    faqs: [
      ["Does Fluent Forms Free include conditional logic?", "Yes, in our October 2026 check. Multi-step forms, calculations, file uploads and webhooks need Pro."],
      ["Does VuloForm take payments?", "No. Fluent Forms includes Stripe in the free version."],
      ["Which is cheaper?", "VuloForm is free. Fluent Forms Pro is the lowest-cost paid option compared here."],
    ],
  },
  {
    slug: "forminator",
    id: "fm",
    name: "Forminator",
    tagline: "The other fully free feature-rich builder, compared honestly with VuloForm.",
    verdict:
      "Forminator is the closest competitor: its free plugin also has conditional logic, multi-step forms, calculations, uploads and webhooks, and it adds Stripe and PayPal payments. Choose Forminator if you need payments; choose VuloForm if you want a lighter, privacy-first plugin with no external ties.",
    chooseThem: [
      "You want payments (Stripe and PayPal) in the free plugin.",
      "You already use other WPMU DEV tools.",
      "You want polls and quizzes alongside forms.",
    ],
    chooseVulo: [
      "You want a plugin that makes no external connections and sends no telemetry.",
      "You want signed, retried, logged webhooks and server-side re-checking of logic.",
      "You prefer a form-only tool with no wider suite attached.",
    ],
    sections: [
      {
        h: "The honest overlap",
        p: [
          "Both plugins put conditional logic, multi-step forms, calculations, file uploads and webhooks in a free download. In terms of features, they are the closest match in this comparison.",
          "The difference is in focus. Forminator is part of the WPMU DEV family and also covers payments. VuloForm focuses on forms, submissions and privacy.",
        ],
      },
      {
        h: "Payments",
        p: [
          "Forminator includes Stripe and PayPal payments. VuloForm does not take payments. If your form needs to charge, that decides it.",
        ],
      },
      {
        h: "Privacy and security design",
        p: [
          "VuloForm does not contact any external service on its own, has no telemetry and stores no visitor IPs by default. Conditional logic and calculations are re-checked on your server, spam protection uses no CAPTCHA, and webhooks are signed, retried twice and logged.",
        ],
      },
      {
        h: "Cost",
        p: [
          "Both are free. Forminator Pro comes with a WPMU DEV membership, whereas VuloForm has no paid tier.",
        ],
      },
    ],
    pricing: "Both plugins are free. Forminator Pro comes with a WPMU DEV membership; VuloForm has no paid tier.",
    faqs: [
      ["Is VuloForm better than Forminator?", "It depends on what you need. Forminator adds payments. VuloForm focuses on privacy, server-side validation and signed webhooks."],
      ["Do both have conditional logic for free?", "Yes. Both include conditional logic, multi-step forms, calculations, file uploads and webhooks in the free plugin."],
      ["Can I run both?", "You can, on different forms, though most sites are simpler with one."],
    ],
  },
];

export const profileBySlug = (slug: string) => profiles.find((p) => p.slug === slug);
