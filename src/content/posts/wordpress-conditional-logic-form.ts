import type { Post } from "../types";

const post: Post = {
  slug: "wordpress-conditional-logic-form",
  title: "WordPress conditional logic forms: how to show the right fields to the right people",
  description:
    "Learn how conditional logic works in WordPress forms, with real examples, common mistakes, and why server-side checking matters.",
  date: "2026-10-22",
  category: "How-to",
  compare: ["contact-form-7", "gravity-forms"],
  intro: [
    "Conditional logic means a form changes based on what someone has already told it. Choose “Other” from a dropdown and a text box appears. Say you are an existing customer and the “How did you hear about us?” question disappears. The visitor sees a shorter, more relevant form, and you receive cleaner data.",
    "It is also one of the features WordPress form plugins like to charge for. This guide explains how conditional logic works, shows practical examples, and covers a subtle problem most tutorials skip: what happens on the server.",
  ],
  sections: [
    {
      h: "How conditional logic works",
      p: [
        "Every rule has the same three parts: a condition, an operator and an action. The condition looks at a field, such as “Project type”. The operator compares it, for example “is equal to” or “is not empty”. The action decides what happens, such as showing, hiding or requiring another field.",
        "Put together, a rule reads like a sentence: if Project type is “Website redesign”, then show “Current website address” and make it required. You can usually combine several conditions and decide whether any or all of them must match.",
      ],
    },
    {
      h: "Five practical examples",
      p: ["These patterns cover most real-world forms:"],
      list: [
        "Show an “Other, please specify” field only when “Other” is selected",
        "Ask for a company name only when the visitor says they are enquiring for a business",
        "Reveal a file upload only for people applying for a role that needs a portfolio",
        "Require a phone number only when the visitor picks “Call me” as their preferred contact method",
        "Show different final questions for new customers and existing ones",
      ],
    },
    {
      h: "Keep it simple",
      p: [
        "It is tempting to make every field conditional. Resist that. Forms with long chains of rules are hard to test, and a mistake can hide a required field from everyone. Start with the obvious cases, test each path, and stop when the form feels short.",
        "Always test both directions. Fill in the form so a field appears, then change your answer and check that it disappears and no stale value is submitted.",
      ],
    },
    {
      h: "The problem with browser-only logic",
      p: [
        "Most form logic runs in the visitor’s browser using JavaScript. That is fine for convenience, but it is not security. Anyone can turn off JavaScript, edit the page or send data directly to your site. If your server trusts whatever arrives, a required field can be skipped and a field that should have been hidden can be submitted with unexpected content.",
        "Good practice is to evaluate the rules again on the server. VuloForm does exactly that: the rules are checked again on your site, a field hidden by its rules is never stored, and a required field cannot be skipped by turning off JavaScript. The same applies to calculations, which are re-computed on the server.",
      ],
    },
    {
      h: "What other plugins charge for it",
      p: [
        "In our check on 10 October 2026, Contact Form 7 needed a third-party add-on for conditional logic. WPForms, Gravity Forms and Formidable included it on paid plans, and Ninja Forms offered it as an add-on from its Plus plan. Fluent Forms, Forminator and VuloForm include it in the free plugin.",
        "If you are building a form that depends on logic, check the plan you would actually need, not just the headline price.",
      ],
    },
    {
      h: "Setting up a rule in VuloForm",
      p: [
        "In the builder, select the field you want to control. In the inspector on the right, open its conditional logic settings, choose the field to watch, the operator and the value, and pick whether to show or hide. Use the preview to try each path; nothing you enter there is sent or saved.",
        "When you publish, the same rules are enforced on submission, so what you tested in the preview matches what is stored.",
      ],
    },
    {
      h: "Common mistakes to avoid",
      p: ["A short checklist before you publish:"],
      list: [
        "Do not make a field required and hidden at the same time without a rule that reveals it",
        "Avoid circular rules, where two fields depend on each other",
        "Use clear option labels, since rules often match on them",
        "Test with keyboard only and on a phone",
        "Re-test after you rename a field or option",
      ],
    },
    {
      h: "Questions people ask",
      p: [
        "Can conditional logic slow a form down? Not noticeably. The rules are small, and the browser evaluates them instantly as someone fills in the form. The page weight matters more, and VuloForm’s public form ships no React and no jQuery.",
        "What if a visitor has JavaScript turned off? On your own WordPress site the form still works without JavaScript, and because the rules are checked again on the server, nothing can slip through that should not.",
      ],
    },
  ],
  outro: [
    "Conditional logic makes forms shorter, friendlier and more accurate, and it should not cost a licence. VuloForm includes it in the free plugin, with rules enforced on your server as well as in the browser.",
  ],
};

export default post;
