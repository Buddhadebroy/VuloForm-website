import type { Post } from "../types";

const post: Post = {
  slug: "multi-step-form-wordpress",
  title: "How to create a multi-step form in WordPress (free, no add-ons)",
  description:
    "A practical guide to building a multi-step form in WordPress: when to use one, how to plan the steps, and how to set it up free with VuloForm.",
  date: "2026-10-24",
  category: "How-to",
  compare: ["contact-form-7", "wpforms"],
  intro: [
    "A long form feels like a chore. The same questions split into three short steps feel like a conversation. That is the whole case for multi-step forms: they ask for the same information but make the first move easier, and many sites find they help more people reach the end.",
    "This guide covers when a multi-step form is worth it, how to plan one, and how to build it in WordPress without buying a plugin plan or installing add-ons.",
  ],
  sections: [
    {
      h: "When a multi-step form makes sense",
      p: [
        "Not every form needs steps. A name, email and message form is fine on one screen. Steps start to help once you pass roughly six or seven fields, or when your questions fall into natural groups.",
      ],
      list: [
        "Quote and estimate requests, where you ask about the project, then the budget, then contact details",
        "Job applications, with personal details, experience and a CV upload",
        "Booking and enquiry forms with several decisions to make",
        "Onboarding or intake forms for clients, patients or members",
      ],
    },
    {
      h: "Plan the steps before you build",
      p: [
        "Sketch the form on paper first. Group related questions together and give each group a short, plain name. Put the easiest, least personal questions first: people who have answered two simple questions are more likely to carry on than those who meet a phone number field straight away.",
        "Ask for contact details last. By then the visitor has already invested effort, and you can explain exactly why you need their email address. Keep each step to three to five fields, and remove any field you will not actually use.",
      ],
    },
    {
      h: "Why many WordPress plugins make this harder than it should be",
      p: [
        "Multi-step forms are one of the features most often placed behind a paywall. In our October 2026 check, Contact Form 7 relies on a third-party add-on, WPForms, Gravity Forms and Formidable offer it on paid plans, Ninja Forms sells it as an add-on from its Plus plan, and Fluent Forms puts it in Pro.",
        "VuloForm and Forminator include multi-step forms in the free plugin. That matters if you are building several forms or client sites, because it removes a recurring licence from the budget.",
      ],
    },
    {
      h: "Building a multi-step form with VuloForm",
      p: [
        "Install VuloForm from Plugins › Add New, then start from a template or a blank form. The builder has your field types on the left, the form in the middle, and an inspector on the right where you set labels, required fields and rules.",
        "To create steps, add a page break field between groups of questions. Everything above the first break is step one, everything between breaks is the next step, and so on. You can drag fields between steps, or use the buttons and keyboard instead of dragging.",
        "Use the preview to click through the form exactly as visitors will. Nothing you enter in the preview is sent or saved. Changes save as a draft by themselves, so you can leave and come back, and the form goes live only when you publish it.",
      ],
    },
    {
      h: "Combine steps with logic and calculations",
      p: [
        "Steps become much more useful when paired with conditional logic. If someone chooses “Other” as their project type, show a short text box; if they choose “Website”, skip the questions about print. Visitors only see what is relevant, which keeps each step short.",
        "You can also add a calculation field to show a running total or estimate on the final step. Both features are in the same free plugin, and the rules are re-checked on your server, so a hidden or skipped field cannot be forced through by editing the page in the browser.",
      ],
    },
    {
      h: "Publish it where people will see it",
      p: [
        "When the form is ready, publish it and add it to a page with the VuloForm block in the block editor. If you prefer shortcodes, use the form’s ID, like [vuloform id=\"12\"]. There is also a snippet for sites that do not run WordPress, and submissions still arrive in your WordPress dashboard.",
      ],
    },
    {
      h: "Tips for better completion rates",
      p: [
        "A few small decisions make a big difference to how many people finish:",
      ],
      list: [
        "Name the steps clearly, such as “Your project”, “Your budget”, “Your details”",
        "Make only the fields you truly need required",
        "Use the right field types, so mobile keyboards show numbers or email layouts",
        "Tell people what happens next in the confirmation message",
        "Test on a phone before you publish",
      ],
    },
  ],
  outro: [
    "A multi-step form does not need a premium licence. Plan your groups, keep each step short, and use logic to hide what is not needed. If you want to try it, VuloForm is free to install, and every feature mentioned here is included.",
  ],
};

export default post;
