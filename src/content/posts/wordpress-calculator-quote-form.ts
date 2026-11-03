import type { Post } from "../types";

const post: Post = {
  slug: "wordpress-calculator-quote-form",
  title: "How to build a quote calculator form in WordPress",
  description:
    "Build a WordPress form that calculates prices live: plan your formula, use calculation fields, and make sure totals can’t be tampered with.",
  date: "2026-10-12",
  category: "How-to",
  compare: ["wpforms", "ninja-forms"],
  intro: [
    "Visitors want a price before they want a conversation. A quote calculator gives them one: choose a few options, see an estimate, send the request. For you, it filters out poor-fit enquiries and gives you structured information instead of a vague message.",
    "This guide shows how to plan and build one in WordPress, and how to avoid the biggest weakness of calculators: totals that can be changed by the visitor.",
  ],
  sections: [
    {
      h: "What a quote calculator is good for",
      p: [
        "Calculators work best when your pricing follows a pattern you can express as a formula. Think of printing jobs, cleaning services, event hire, translation, design packages, or delivery quotes.",
      ],
      list: [
        "A base price plus options, such as a package with optional extras",
        "A rate multiplied by a quantity, such as price per page or per hour",
        "Tiered pricing, where larger quantities get a different rate",
        "Discounts or surcharges that depend on a choice",
      ],
    },
    {
      h: "Write the formula on paper first",
      p: [
        "Before you open the builder, write the calculation in plain words. For a design quote it might be: base package price, plus the number of extra pages times the per-page price, plus 20 percent if the visitor wants a rush delivery.",
        "List every input and decide what type of field it needs: a dropdown for packages, a number for quantity, a checkbox for rush delivery. Having this written down makes the form far quicker to build and test.",
      ],
    },
    {
      h: "Paid in most plugins, free in a few",
      p: [
        "Calculations are another feature often held back. In our October 2026 check, Contact Form 7 had none. WPForms and Fluent Forms need Pro, Gravity Forms and Formidable need a paid plan, while Ninja Forms Core, Forminator and VuloForm include calculations in the free plugin.",
      ],
    },
    {
      h: "Building it in VuloForm",
      p: [
        "Start a new form and add the inputs from your plan: a dropdown for the package, a number field for the quantity and any checkboxes or radio buttons for options. Then add a calculation field, which VuloForm lists among its 21 field types as “Calc”.",
        "In the calculation settings, build the formula using your fields. As the visitor changes their choices, the total updates on screen. Add helpful labels, such as “Estimated total”, and make clear that it is an estimate if your final quote may differ.",
        "Combine this with conditional logic if some options only matter in certain cases, and with multi-step layout if the form is long, for example options on step one and contact details on step two.",
      ],
    },
    {
      h: "Why the server must recalculate",
      p: [
        "A calculator that runs only in the browser can be tampered with. Someone could edit the page, change the displayed total to zero and send it. If you rely on the number you receive, that is a real problem.",
        "VuloForm re-computes calculations on your server when a form is submitted, so the stored total comes from your formula and the submitted answers, not from whatever the browser claims. The same server-side checking applies to conditional logic.",
      ],
    },
    {
      h: "What to do with the result",
      p: [
        "Once the visitor submits, the entry, including the calculated total, is stored in your WordPress dashboard. You can email your team with placeholders for any answer, send the visitor a confirmation, or push the data to another tool with a webhook.",
        "Note that VuloForm does not take payments. A calculator is ideal for quotes and enquiries, where you follow up and invoice separately. If you need to charge at the moment of submission, you would need a plugin with payment support.",
      ],
    },
    {
      h: "Test before you publish",
      p: ["Calculators fail quietly, so test them carefully:"],
      list: [
        "Try the smallest and largest realistic quantities",
        "Switch every option on and off and check the total",
        "Check rounding and currency display",
        "Test on a phone",
        "Compare the stored total with the one on screen",
      ],
    },
    {
      h: "Design tips for calculators",
      p: [
        "Show the total where people can see it while they choose, not only at the end. Use plain labels and say what is included. If the figure is an estimate, say so clearly and explain what could change it.",
        "Avoid overwhelming people with options. Three or four meaningful choices beat fifteen tiny ones, and each one you remove makes the formula easier to maintain. When your prices change, update the formula in one place and test it again before you publish.",
      ],
    },
  ],
  outro: [
        "Revisit the calculator every few months. Prices change, options come and go, and an out-of-date formula quietly damages trust. Keep a copy of your pricing rules next to the form so updates are quick.",
    "A good quote calculator saves time for you and your visitors. Plan the formula, build it with calculation fields, and rely on a plugin that re-checks the numbers on the server. VuloForm includes all of this in its free plugin.",
  ],
};

export default post;
