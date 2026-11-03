import type { Post } from "../types";

const post: Post = {
  slug: "stop-wordpress-form-spam-without-captcha",
  title: "How to stop WordPress form spam without a CAPTCHA",
  description:
    "Honeypots, minimum fill time and rate limiting: how to block spam on WordPress forms without puzzles, third-party scripts or tracking.",
  date: "2026-10-16",
  category: "Security",
  compare: ["contact-form-7"],
  intro: [
    "If you run a WordPress site with a public form, you will get spam. Bots find forms quickly, and a few hours after launch your inbox starts filling with offers for things nobody asked for. The usual fix is a CAPTCHA, but puzzles frustrate real visitors, load third-party scripts and often share visitor data with another company.",
    "There are quieter ways to keep bots out. Here is how they work and how to combine them.",
  ],
  sections: [
    {
      h: "What is wrong with CAPTCHAs",
      p: [
        "A CAPTCHA asks every visitor to prove they are human so you can catch the bots. Real people pay the cost: an extra click, a puzzle they sometimes fail, and a worse experience on phones and for people using assistive technology. Some services also load external scripts and set cookies, which can complicate privacy policies and cookie banners.",
        "None of this means CAPTCHAs never help. But as the first line of defence they are a heavy tool for a problem that simpler checks solve well.",
      ],
    },
    {
      h: "Technique 1: the honeypot",
      p: [
        "A honeypot is a hidden field that people never see and never fill in. Bots, which tend to complete every field they find, fill it in. If the hidden field has a value, the submission is treated as spam. It costs real visitors nothing and needs no outside service.",
        "It is not perfect: a bot written specifically for your site could skip the trap. But it stops a large share of generic, automated spam.",
      ],
    },
    {
      h: "Technique 2: a minimum fill time",
      p: [
        "A person needs at least a few seconds to read and complete a form. A bot can submit in a fraction of a second. By recording when the form loaded and rejecting submissions that arrive impossibly fast, you filter out a lot of automated traffic.",
        "The key is to set the threshold low enough that fast, legitimate users, such as someone using browser autofill, are not caught.",
      ],
    },
    {
      h: "Technique 3: rate limiting",
      p: [
        "Rate limiting caps how many submissions a single visitor can send in a given period. If one source tries to send dozens of entries in a minute, the extras are rejected. This protects you from floods, whether malicious or accidental, and keeps your database and mailbox tidy.",
      ],
    },
    {
      h: "How VuloForm combines them",
      p: [
        "VuloForm uses all three by default: a hidden trap field, a minimum fill time and a per-visitor rate limit. There is no CAPTCHA, no puzzle for visitors, and no third party involved. Submissions flagged as spam can be reviewed in the submissions screen, where you can mark entries as spam and see what is being caught.",
        "For developers who want an extra layer, such as an external anti-spam service, a filter named vuloform_spam_check lets you plug one in. That way stronger protection is your choice, not something forced on every visitor.",
      ],
    },
    {
      h: "Other habits that reduce spam",
      p: ["A few small things help alongside the techniques above:"],
      list: [
        "Keep forms short; fewer fields means fewer places for bots to dump links",
        "Avoid showing your form on pages that do not need one",
        "Use a real email field type, so obvious junk is rejected",
        "Keep WordPress, your theme and plugins updated",
        "Check the spam queue occasionally for false positives",
      ],
    },
    {
      h: "Does it work for you?",
      p: [
        "No technique is perfect. If you run a high-profile site that attracts targeted attacks, you may want to add an external service on top. For most small and medium sites, the combination of honeypot, fill time and rate limiting is enough, and your visitors never notice it.",
      ],
    },
    {
      h: "Questions people ask",
      p: [
        "Will legitimate visitors ever be blocked? It is possible but rare. The minimum fill time is deliberately short, and the rate limit is applied per visitor. If you see genuine messages in your spam queue, review them and mark them as not spam, and consider whether a shared network, such as an office, is sending many entries at once.",
        "Do these methods stop human spammers? Not entirely. A person who manually types junk into your form will get past automatic checks. For that, keep fields to what you need, avoid free-text boxes where a dropdown will do, and review the spam queue regularly. Because VuloForm stores every submission with a status, nothing is silently thrown away and you can always see what was caught.",
        "Do I still need a CAPTCHA? For most sites, no. Add one only if you face targeted abuse that the built-in checks do not stop.",
      ],
    },
  ],
  outro: [
    "You can protect your forms without annoying the people you want to hear from. VuloForm’s spam protection is on by default, needs no setup and sends no visitor data anywhere.",
  ],
};

export default post;
