import type { Post } from "../types";

const post: Post = {
  slug: "wordpress-form-webhooks-zapier-make",
  title: "WordPress form webhooks: send submissions to Zapier, Make or your CRM",
  description:
    "What webhooks are, how to send WordPress form submissions to Zapier, Make or your own endpoint, and how to handle retries and failures reliably.",
  date: "2026-10-10",
  category: "Integrations",
  compare: ["wpforms", "gravity-forms", "formidable-forms"],
  intro: [
    "A form is rarely the end of the story. A lead should reach your CRM, a signup should land in a spreadsheet, a support request should open a ticket. Webhooks are the simplest, most universal way to make that happen: when a form is submitted, your site sends the data to a web address you choose.",
    "This guide explains what webhooks are, how to connect them to tools like Zapier and Make, and what separates a reliable setup from a fragile one.",
  ],
  sections: [
    {
      h: "What a webhook is",
      p: [
        "A webhook is an automatic message from one system to another. Instead of you checking for new submissions, the form tells another service as soon as one arrives. Technically it is an HTTP request, usually sending the entry as JSON, to a URL that the receiving service gave you.",
        "Automation platforms such as Zapier and Make let you create a “catch hook” address. You paste it into your form, submit a test entry, and then map the data to whatever comes next: add a row to a sheet, create a contact, post a message.",
      ],
    },
    {
      h: "Webhooks versus built-in integrations",
      p: [
        "Many plugins sell direct integrations for CRMs and email tools. Those can be convenient, but they usually sit on paid plans, and each one covers only the tools the vendor has built.",
        "Webhooks are more general. Any service that can receive an HTTP request can be connected. In our October 2026 check, webhooks were on the Elite plan for WPForms and Gravity Forms, an Elite-included add-on for Ninja Forms, Business via the API add-on for Formidable, and Pro for Fluent Forms. Contact Form 7 does not have them built in. Forminator and VuloForm include webhooks in the free plugin.",
      ],
    },
    {
      h: "Setting up a webhook in four steps",
      p: ["The process is the same for most tools:"],
      list: [
        "Create a catch hook (Zapier) or webhook module (Make) and copy its URL",
        "Paste the URL into your form’s webhook settings and, if offered, add a secret",
        "Submit a test entry so the platform can see the data’s shape",
        "Map the fields to your next step, then switch the automation on",
      ],
    },
    {
      h: "What makes a webhook reliable",
      p: [
        "A webhook that works on a good day is not enough. Receiving services go down, networks time out and endpoints return errors. A dependable setup handles those moments.",
        "In VuloForm, each submission is sent as JSON over HTTPS with background delivery, so a slow endpoint does not hold up the visitor. If the first attempt fails, it retries twice more, and every attempt is logged, so you can see, for instance, a 500 error followed by a successful 200. You can also add an optional secret, which lets the receiving side verify the request came from your site.",
      ],
    },
    {
      h: "Verify what you receive",
      p: [
        "If you build your own endpoint, do not trust every request that arrives. Check the secret, validate the fields you expect and ignore anything else. Respond quickly with a success status, and do any heavy processing afterwards so that the sender does not time out and retry unnecessarily.",
        "Also make the receiving side idempotent where possible. Because retries exist, the same entry could occasionally arrive twice, and your system should not create duplicate records when it does.",
      ],
    },
    {
      h: "Privacy considerations",
      p: [
        "A webhook sends personal data to another company. Make sure that service is covered in your privacy policy, and only send the fields that the destination actually needs. With VuloForm, data leaves your server only when you configure a webhook or notification; the plugin makes no external connections on its own.",
      ],
    },
    {
      h: "Troubleshooting",
      p: ["If data is not arriving, work through these in order:"],
      list: [
        "Check the delivery log for the status code returned",
        "Confirm the URL is exactly as the platform gave it, with no spaces",
        "Make sure your site can make outgoing HTTPS requests",
        "Re-send a test entry after changing settings",
        "Check the automation is switched on and not paused",
      ],
    },
    {
      h: "Example workflows",
      p: [
        "A few automations that small teams set up in an afternoon: send each new lead to a CRM and notify a sales channel; add job applicants to a spreadsheet and email a hiring manager; create a task in a project tool for every support request; or add newsletter signups to a mailing list once they have given consent.",
      ],
    },
  ],
  outro: [
        "Keep a simple record of which forms send data where. When a destination changes, a tool is cancelled or an employee leaves, you will know exactly which webhooks to update, rather than discovering a broken automation weeks later.",
    "Webhooks turn a form into the front door of your whole workflow. VuloForm includes signed, retried and logged webhooks in the free plugin, so you can connect Zapier, Make or your own system without paying for a higher plan.",
  ],
};

export default post;
