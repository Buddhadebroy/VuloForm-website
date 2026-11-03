import type { Post } from "../types";

const post: Post = {
  slug: "secure-file-upload-forms-wordpress",
  title: "How to add secure file uploads to a WordPress form",
  description:
    "File uploads are one of the riskiest form features. Learn how to accept CVs, images and documents safely in WordPress, and what to check on your server.",
  date: "2026-10-08",
  category: "Security",
  compare: ["gravity-forms", "ninja-forms"],
  intro: [
    "Job applications need CVs. Quote requests need photos. Support forms need screenshots. File uploads are genuinely useful, and they are also one of the riskiest things a public form can offer. An upload field is, in effect, an open door for strangers to put files on your server.",
    "That does not mean you should avoid them. It means you should set them up carefully. This guide covers the main risks and a safe approach for WordPress.",
  ],
  sections: [
    {
      h: "What can go wrong",
      p: [
        "The worst case is someone uploading a script, such as a PHP file disguised as an image, and then running it on your server. Other risks are quieter: uploads that are publicly guessable, private documents indexed by search engines, or large files that fill your disk.",
      ],
      list: [
        "Executable files uploaded under a harmless-looking name",
        "Files whose content does not match their extension",
        "Predictable file names that let strangers guess URLs",
        "Sensitive documents stored in publicly accessible folders",
        "Oversized files that exhaust storage",
      ],
    },
    {
      h: "Principle 1: allow only the types you need",
      p: [
        "Do not rely on blocking known-bad types; allow a short list of known-good ones. A CV form needs PDF and perhaps Word documents. A photo form needs JPG and PNG. Anything else should be rejected.",
        "VuloForm only accepts a fixed list of safe file types, so there is no option to accidentally allow something dangerous.",
      ],
    },
    {
      h: "Principle 2: check the content, not just the extension",
      p: [
        "A file’s name is easy to fake. Renaming a script to resume.pdf takes seconds. A safer plugin inspects the file’s actual contents and confirms they match the extension claimed. VuloForm does this check before accepting a file.",
      ],
    },
    {
      h: "Principle 3: use random names and a protected folder",
      p: [
        "Uploaded files should not keep the visitor’s file name or sit at predictable addresses. VuloForm stores uploads under long random names, so a file like resume.pdf becomes something like a8f3…e1.pdf, in a folder that blocks direct access on Apache and LiteSpeed.",
        "Administrators download files through WordPress after logging in, instead of through a public link. That means a stranger who somehow learned a file name still cannot fetch it directly.",
      ],
    },
    {
      h: "A note for nginx users",
      p: [
        "Folder protection based on server configuration files works on Apache and LiteSpeed, but nginx ignores them. If your host runs nginx, ask them to block direct access to wp-content/uploads/vuloform/. It is a short request that closes an important gap, and a good host will do it quickly.",
      ],
    },
    {
      h: "Principle 4: limit size and count",
      p: [
        "Set a sensible maximum file size and number of files. A CV rarely needs more than a few megabytes. Limits protect your storage and also keep your server responsive, since large uploads consume time and memory.",
      ],
    },
    {
      h: "Plugin pricing in practice",
      p: [
        "File uploads are included in the free versions of Contact Form 7, Forminator and VuloForm. In our October 2026 check, WPForms, Gravity Forms and Formidable put them on paid plans, Ninja Forms made them an add-on from its Plus plan, and Fluent Forms put them in Pro. Whichever plugin you use, check how it handles the principles above rather than assuming the paid option is automatically safer.",
      ],
    },
    {
      h: "Operational habits",
      p: ["A few routines keep uploads under control after launch:"],
      list: [
        "Delete files you no longer need, for example after a hiring round",
        "Use automatic deletion for old submissions",
        "Back up uploads along with your database",
        "Scan your server for unexpected files from time to time",
        "Mention uploads in your privacy policy",
      ],
    },
    {
      h: "Questions people ask",
      p: [
        "Is it safe to let anyone upload files? It can be, if the form restricts file types, checks content, stores files away from public access and limits size. The risk comes from open-ended upload settings, so keep yours narrow.",
        "Should uploaded files be emailed as attachments? Attachments are convenient but spread sensitive files across inboxes. Keeping files on your server and downloading them through WordPress, as VuloForm does, keeps them in one controlled place.",
        "How do I tell people what is accepted? State the allowed file types and the maximum size in the field’s help text, so visitors do not hit an error after choosing a file. A short note on how long you keep uploads builds trust too, especially for CVs and personal documents.",
        "Can I check my setup? Try uploading a file with a mismatched extension, and try to open an uploaded file’s address directly in a private browser window. Both should fail. If either works, review your configuration or speak to your host.",
      ],
    },
  ],
  outro: [
    "Accepting files does not have to be a gamble. Allow few types, check contents, hide the files and limit sizes. VuloForm builds those protections in and includes file uploads in the free plugin.",
  ],
};

export default post;
