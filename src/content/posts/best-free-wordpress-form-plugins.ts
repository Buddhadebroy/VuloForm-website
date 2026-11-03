import type { Post } from "../types";

const post: Post = {
  slug: "best-free-wordpress-form-plugins",
  title: "The best free WordPress form plugins in 2026 (and what they really include)",
  description:
    "Compare the free versions of VuloForm, Contact Form 7, WPForms, Ninja Forms, Formidable, Fluent Forms and Forminator, and see which features sit behind a paywall.",
  date: "2026-10-26",
  category: "Comparisons",
  compare: ["wpforms", "forminator", "fluent-forms"],
  intro: [
    "Almost every WordPress form plugin has a free version, but “free” means very different things. Some give you a full builder with logic and file uploads. Others give you a contact form and a banner pointing to the pricing page. If you are choosing a plugin for a client site or your own business, the useful question is not which one is free, but which one is free for the things you actually need.",
    "We compared the free versions of seven popular plugins against their own pricing pages and WordPress.org listings, checked on 10 October 2026. Here is what we found, and how to choose.",
  ],
  sections: [
    {
      h: "What to look for in a free form plugin",
      p: [
        "Before comparing names, write down what your form needs to do. A simple “contact us” form needs very little. A quote request, a job application or a booking enquiry usually needs more: fields that appear depending on earlier answers, several steps, a file upload, or a calculated total.",
        "These are the features most often held back for paid plans, so they make a good checklist:",
      ],
      list: [
        "A drag-and-drop builder, so you are not editing tags by hand",
        "Submissions saved in your own WordPress database, with CSV export",
        "Conditional logic, to show or hide fields based on answers",
        "Multi-step forms, for longer forms that feel shorter",
        "Calculations, for quotes and totals",
        "File uploads",
        "Webhooks, to send data to other tools",
        "Payments, if you need to take money",
      ],
    },
    {
      h: "How the free versions compare",
      p: [
        "Contact Form 7 is free and very light, but it is built around a text editor with bracketed tags. By default it emails submissions without saving them, and conditional logic and multi-step forms come from third-party add-ons.",
        "WPForms Lite has a friendly builder and includes Stripe payments, but in our check conditional logic, multi-step forms and file uploads were paid, calculations needed Pro and webhooks needed Elite. Gravity Forms has no free version at all; it starts at $59 a year.",
        "Ninja Forms Core saves submissions, exports CSV and includes calculations, while logic, steps and uploads are paid add-ons. Formidable Lite saves entries and includes Stripe, with most advanced features paid. Fluent Forms Free includes conditional logic, and moves multi-step, calculations, uploads and webhooks to Pro.",
        "VuloForm and Forminator are the two that put conditional logic, multi-step forms, calculations, file uploads and webhooks in the free plugin. Forminator also includes Stripe and PayPal. VuloForm does not take payments, but it is entirely free, with no paid tier at all.",
      ],
    },
    {
      h: "What it costs to get the essentials elsewhere",
      p: [
        "If you need logic, steps, calculations, uploads and webhooks together, the cheapest single-site plan that includes all five varies a lot. We found Fluent Forms at $63 a year, Formidable at $199.50, Gravity Forms at $259, Ninja Forms at $299.40 for the first year (then $499), and WPForms at $299.50 for the first year (then $599). Contact Form 7 does not offer them as built-in features.",
        "Those are not unreasonable prices for a business that earns from its forms. But for a small site, a charity or a side project, paying hundreds of dollars a year for a form is hard to justify when free options exist.",
      ],
    },
    {
      h: "Where your data ends up",
      p: [
        "Features are only half the picture. Where submissions are stored matters just as much. A plugin that only emails entries can lose them to a spam filter. A plugin that backs entries up to its own servers means a third party holds your visitors’ data.",
        "VuloForm stores entries in your own database, makes no external connections on its own, includes no telemetry, and does not store visitor IP addresses unless you switch that on. That makes privacy reviews simpler, especially for sites that must justify every data processor they use.",
      ],
    },
    {
      h: "Which one should you choose?",
      p: [
        "There is no single winner, so here is a quick way to decide:",
      ],
      list: [
        "You only need a basic emailed contact form and like editing markup: Contact Form 7.",
        "You need payments in a free plugin: Forminator, Fluent Forms, WPForms Lite or Formidable Lite.",
        "You want the most features free, with nothing to upgrade and no external services: VuloForm.",
        "You are an agency that wants a mature paid ecosystem and add-ons: Gravity Forms.",
      ],
    },
    {
      h: "A note on honesty",
      p: [
        "We make VuloForm, so we have an obvious interest. We have tried to represent every plugin by what its maker states on its own pages, and to say where others are stronger: payments, direct integrations, years of community knowledge and specialist add-ons. VuloForm is at version 1.0, and that is a real trade-off against plugins with a decade of history.",
        "Plans and prices change, so confirm anything important on the vendor’s site before you buy.",
      ],
    },
  ],
  outro: [
    "If you want to see the full table, we publish a feature-by-feature comparison and a separate head-to-head page for every plugin above. When you are ready to try a form yourself, VuloForm installs from Plugins › Add New, and you can have a first form published in a couple of minutes.",
  ],
};

export default post;
