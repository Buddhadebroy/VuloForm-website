import type { Post } from "../types";

const post: Post = {
  slug: "save-form-submissions-wordpress-database",
  title: "How to save form submissions in WordPress (and export them to CSV)",
  description:
    "Why emailing form entries isn’t enough, how to store submissions in your WordPress database, and how to search, manage and export them.",
  date: "2026-10-20",
  category: "How-to",
  compare: ["contact-form-7", "wpforms"],
  intro: [
    "Many WordPress sites collect leads in a way that depends entirely on email. A form sends a message, someone reads it, and that is the only record. It works until the message lands in spam, the mailbox fills up or a colleague deletes it. Then a customer’s enquiry is simply gone.",
    "Saving submissions in your WordPress database fixes that. This guide explains why it matters, what to look for, and how to manage entries once you have them.",
  ],
  sections: [
    {
      h: "Why email alone is risky",
      p: [
        "Email delivery from a WordPress site is unreliable by default. Hosts throttle outgoing mail, spam filters are aggressive, and a small configuration mistake can silently stop notifications. When a form only emails the entry, any failure means lost data and no way to know.",
        "A stored copy gives you a source of truth. Even if the notification fails, the submission is waiting in your dashboard.",
      ],
    },
    {
      h: "What happens in popular plugins",
      p: [
        "Contact Form 7 emails submissions and does not store them by default, so you would need an additional plugin for a record. WPForms Lite also emails entries; it offers an optional backup to WPForms servers through Lite Connect, and entries can be viewed in WordPress after upgrading. CSV export is a paid feature there.",
        "Ninja Forms Core, Formidable Lite, Fluent Forms and Forminator save entries and support CSV export in their free versions. Gravity Forms has no free version. VuloForm stores every submission in your own WordPress database and includes CSV export in the free plugin.",
      ],
    },
    {
      h: "What a good submissions screen should do",
      p: ["Storing data is the minimum. To actually work from it, look for:"],
      list: [
        "Search, to find a person or a phrase quickly",
        "Filters by status and date",
        "Statuses such as new, read and spam, so you can see what needs attention",
        "CSV export, for spreadsheets, CRMs and reporting",
        "A way to delete old entries automatically",
      ],
    },
    {
      h: "Managing submissions in VuloForm",
      p: [
        "VuloForm shows entries inside WordPress. You can search, filter by status and date, and mark each submission as new, read or spam. A spam label helps you clean up without losing the record of what happened.",
        "When you need the data elsewhere, export to CSV and open it in a spreadsheet or import it into another tool. If you would rather send each entry to another system as it arrives, webhooks do that automatically.",
      ],
    },
    {
      h: "Keep what you need, delete what you don’t",
      p: [
        "Storing everything forever is not always wise. Names, emails and messages are personal data, and holding them longer than necessary creates risk and, in many places, legal obligations.",
        "VuloForm lets you set automatic deletion after a number of days. A sensible default for a contact form might be a few months, long enough to follow up, then gone. For job applications or support requests, choose a period that matches your policy.",
      ],
    },
    {
      h: "Privacy and ownership",
      p: [
        "Where the data is stored matters as much as whether it is. With VuloForm, submissions live on your server and the plugin does not contact outside services by itself. Visitor IP addresses are not stored unless you switch that on, and it works with the WordPress Export Personal Data and Erase Personal Data tools, so handling a data request does not mean hunting through several systems.",
      ],
    },
    {
      h: "A simple routine",
      p: [
        "You do not need a complicated process. A routine that works for most small teams is to check new submissions daily, mark them read once handled, label spam so patterns are visible, and export a CSV monthly if you need reporting or a backup in another tool.",
      ],
    },
    {
      h: "Questions people ask",
      p: [
        "Will storing entries slow my site down? Not in normal use. Submissions are small records, and even thousands of entries are trivial for a modern database. If volume becomes very large, automatic deletion keeps things lean.",
        "What happens to my entries if I deactivate the plugin? With VuloForm, deleting the plugin removes nothing by default, so a reinstall picks up where you left off. If you want everything removed, choose “Delete everything” under VuloForm › Settings before you uninstall.",
        "Can I still get email notifications? Yes. Notifications are in addition to storage, not instead of it. You can email your team with placeholders for any answer and send the visitor a confirmation. One caution: a status of “Handed off” means your site’s mail system accepted the message, not that it reached an inbox, so if mail goes missing, check spam folders and consider an SMTP plugin.",
      ],
    },
  ],
  outro: [
    "Email is a notification, not a database. If your forms matter to your business, keep a stored copy that you control. VuloForm saves, filters and exports submissions in the free plugin, with no limits on forms or entries.",
  ],
};

export default post;
