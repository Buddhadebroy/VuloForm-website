import type { Post } from "./types";
import bestFree from "./posts/best-free-wordpress-form-plugins";
import multiStep from "./posts/multi-step-form-wordpress";
import conditional from "./posts/wordpress-conditional-logic-form";
import saveSubs from "./posts/save-form-submissions-wordpress-database";
import cf7Alts from "./posts/contact-form-7-alternatives";
import spam from "./posts/stop-wordpress-form-spam-without-captcha";
import gdpr from "./posts/gdpr-friendly-wordpress-forms";
import calculator from "./posts/wordpress-calculator-quote-form";
import webhooks from "./posts/wordpress-form-webhooks-zapier-make";
import uploads from "./posts/secure-file-upload-forms-wordpress";

/* newest first */
export const posts: Post[] = [
  bestFree, multiStep, conditional, saveSubs, cf7Alts, spam, gdpr, calculator, webhooks, uploads,
].sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
