import type { Post } from "../types";

const post: Post = {
  slug: "gdpr-friendly-wordpress-forms",
  title: "GDPR-friendly WordPress forms: a practical checklist",
  description:
    "A practical checklist for building WordPress forms that respect visitor privacy: consent, data minimisation, retention, IP addresses and data requests.",
  date: "2026-10-14",
  category: "Privacy",
  compare: ["wpforms", "gravity-forms"],
  intro: [
    "Every form on your site collects personal data, usually a name and an email address, sometimes much more. If you have visitors in the EU or UK, the GDPR applies, and even elsewhere, sensible privacy habits build trust and reduce risk.",
    "This is a practical checklist, not legal advice. Rules vary by country and situation, so check your own obligations with a qualified professional. What follows are the form-related habits that nearly every privacy review looks for.",
  ],
  sections: [
    {
      h: "1. Collect only what you need",
      p: [
        "Data minimisation is the easiest win. Look at each field and ask what you will do with the answer. If you never use a phone number, remove the field. A shorter form is better for privacy and usually converts better too.",
      ],
    },
    {
      h: "2. Be clear about why you are asking",
      p: [
        "Tell people what you will do with their data, ideally next to the form. A short sentence such as “We’ll use your email to reply to your enquiry” is clearer than a link to a long policy. Link to your privacy policy for the details.",
      ],
    },
    {
      h: "3. Get consent where it is needed",
      p: [
        "If you want to send marketing emails, you generally need a clear opt-in, and the box should not be pre-ticked. Keep it separate from the enquiry itself, so someone can contact you without agreeing to a newsletter. VuloForm includes a consent field type for exactly this.",
      ],
    },
    {
      h: "4. Know where the data goes",
      p: [
        "List every place a submission travels: your database, your email provider, any connected tool. Each is a data processor you may need to disclose.",
        "Some form plugins add to that list. A CAPTCHA service receives visitor data, and some plugins back entries up to their own servers. VuloForm does not contact any external service on its own, has no telemetry and no CAPTCHA, so data leaves your server only if you set up a webhook or notification.",
      ],
    },
    {
      h: "5. Think twice about IP addresses",
      p: [
        "An IP address can count as personal data. Many form plugins record it with every submission by default. VuloForm does not store visitor IP addresses unless you switch that on, so if you do not need them for security or abuse handling, you hold less data to begin with.",
      ],
    },
    {
      h: "6. Decide how long you keep submissions",
      p: [
        "Keeping entries forever is rarely justified. Decide how long you need them, whether for following up a sales lead or handling a support request, and delete them after that. VuloForm can delete submissions automatically after a number of days you choose, so retention does not depend on someone remembering.",
      ],
    },
    {
      h: "7. Be ready for data requests",
      p: [
        "People can ask to see or delete the data you hold about them. If submissions are scattered across inboxes and several tools, that is painful. VuloForm works with the WordPress Export Personal Data and Erase Personal Data tools, so a request can be handled from one place. It also adds suggested wording to the WordPress privacy policy guide, which you can adapt to your own practices.",
      ],
    },
    {
      h: "8. Protect uploaded files",
      p: [
        "If your form accepts files, treat them as sensitive. CVs, scans and photos should not be publicly reachable. VuloForm stores uploads under long random names in a folder that blocks direct access on Apache and LiteSpeed, and administrators download them through WordPress. On nginx, ask your host to block the wp-content/uploads/vuloform/ folder.",
      ],
    },
    {
      h: "A quick pre-launch check",
      p: ["Before you publish a form, run through this list:"],
      list: [
        "Every field has a purpose",
        "A short explanation sits next to the form",
        "Marketing consent is separate, unticked and optional",
        "You know every system the data passes through",
        "A retention period is set",
        "You can find, export and erase one person’s entries",
      ],
    },
    {
      h: "Common mistakes",
      p: [
        "Pre-ticked consent boxes are the classic error, followed closely by bundling consent for marketing with the enquiry itself. Another frequent one is keeping every submission indefinitely because nobody set a deletion period.",
        "Also watch for plugins and add-ons that quietly send data elsewhere, such as analytics, error reporting or backup services. Check each plugin’s documentation, and review what leaves your server. Finally, remember that your privacy policy needs to match reality: if the form sends data to a CRM, the policy should say so.",
      ],
    },
  ],
  outro: [
        "Write down your decisions as you make them. A short note listing each form, the data it collects, why, where it goes and how long it is kept makes future audits, data requests and staff handovers far easier than trying to reconstruct it from memory.",
    "Privacy-friendly forms are mostly about restraint: collect less, store it where you control it, and delete it when you are done. VuloForm is designed around that approach, but remember that tools help rather than guarantee compliance, so review your own setup.",
  ],
};

export default post;
